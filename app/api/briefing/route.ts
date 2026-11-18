import { Resend } from 'resend'
import { type NextRequest, NextResponse } from 'next/server'
import { getBriefing } from '@/lib/briefings'
import type { Answers, Step } from '@/lib/briefings/types'
import { visibleSteps } from '@/lib/briefings/types'

// Recebe um briefing de cliente (/briefing/<slug>) e manda o resumo completo
// só para contato@oxbrand.com.br. Não cria lead no Kommo e não dispara
// evento de rastreamento: quem responde briefing já é cliente.

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'contato@oxbrand.com.br'
const FROM = 'OxBrand <noreply@oxbrand.com.br>'

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function safeUrl(u: string): string | null {
  try {
    const x = new URL(u.trim().startsWith('http') ? u.trim() : `https://${u.trim()}`)
    return x.protocol === 'https:' || x.protocol === 'http:' ? x.toString() : null
  } catch {
    return null
  }
}

function imgs(list: unknown): string {
  const arr = Array.isArray(list) ? (list as string[]).filter((u) => /^https:\/\/[^/]+\.blob\.vercel-storage\.com\//.test(u)) : []
  if (!arr.length) return ''
  return `<div style="margin-top:6px">${arr
    .map(
      (u) =>
        `<a href="${esc(u)}" style="display:inline-block;margin:0 8px 8px 0"><img src="${esc(u)}" width="150" style="width:150px;height:150px;object-fit:cover;border:1px solid #e5e7eb;display:block" alt=""/></a>`,
    )
    .join('')}</div>`
}

/** Valor da resposta em HTML, no formato de cada tipo de pergunta. */
function render(s: Step, a: Answers): string {
  const v = a[s.id]
  const outro = String(a[`${s.id}__outro`] ?? '').trim()
  switch (s.kind) {
    case 'text':
    case 'phone':
      return esc(String(v ?? '').trim()).replace(/\n/g, '<br/>') || '<span style="color:#9ca3af">Sem resposta</span>'
    case 'choice': {
      const arr = s.multi ? ((v as string[]) ?? []) : v ? [String(v)] : []
      return esc(
        arr
          .map((x) => (x === 'outro' ? `Outro: ${outro}` : (s.options.find((o) => o.value === x)?.label ?? x)))
          .join(', '),
      )
    }
    case 'words':
      return esc(((v as string[]) ?? []).join(', '))
    case 'logo-style':
      return esc(((v as string[]) ?? []).map((x) => s.options.find((o) => o.value === x)?.label ?? x).join(', '))
    case 'sliders': {
      const vals = (v as Record<string, number>) ?? {}
      return s.pairs
        .map((p) => {
          const n = vals[p.key] ?? 50
          const pct = Math.max(0, Math.min(100, n))
          const lean = pct < 40 ? p.left : pct > 60 ? p.right : 'equilíbrio'
          return `<div style="margin:0 0 10px">
            <div style="font-size:13px;color:#374151;display:flex;justify-content:space-between"><span>${esc(p.left)}</span> <b style="color:#5c36eb">${esc(lean)}</b> <span>${esc(p.right)}</span></div>
            <div style="height:6px;background:#ede9fe;position:relative;margin-top:4px"><div style="position:absolute;left:${pct}%;top:-3px;width:12px;height:12px;margin-left:-6px;background:#5c36eb;border-radius:50%"></div></div>
          </div>`
        })
        .join('')
    }
    case 'colors': {
      const c = (v as { amo?: string[]; evitar?: string[]; obs?: string }) ?? {}
      const sw = (n: string) => s.swatches.find((x) => x.name === n)?.hex ?? '#ccc'
      const chip = (n: string) =>
        `<span style="display:inline-block;margin:0 10px 6px 0;font-size:14px"><span style="display:inline-block;width:12px;height:12px;background:${sw(n)};border:1px solid #d1d5db;vertical-align:-1px;margin-right:5px"></span>${esc(n)}</span>`
      const parts = []
      parts.push(`<div><b>Ama:</b> ${(c.amo ?? []).map(chip).join('') || 'sem preferência'}</div>`)
      parts.push(`<div><b>Evitar:</b> ${(c.evitar ?? []).map(chip).join('') || 'nenhuma'}</div>`)
      if (c.obs?.trim()) parts.push(`<div><b>Obrigatória:</b> ${esc(c.obs.trim())}</div>`)
      return parts.join('')
    }
    case 'references': {
      const r = (v as { images?: string[]; links?: string[]; semReferencia?: boolean }) ?? {}
      if (r.semReferencia) return 'Não tem referências, quer ver caminhos propostos pela OxBrand.'
      const links = (r.links ?? [])
        .map(safeUrl)
        .filter(Boolean)
        .map((u) => `<div><a href="${esc(u!)}" style="color:#5c36eb">${esc(u!)}</a></div>`)
        .join('')
      return `${links}${imgs(r.images)}`
    }
    case 'upload': {
      const list = (v as { images?: string[] })?.images
      return imgs(list) || '<span style="color:#9ca3af">Não enviou</span>'
    }
  }
}

function buildHtml(opts: {
  heading: string
  intro: string
  rows: { chapter: string; label: string; html: string }[]
  footer: string
}): string {
  let lastChapter = ''
  const body = opts.rows
    .map((r) => {
      const head =
        r.chapter !== lastChapter
          ? `<tr><td colspan="2" style="padding:26px 0 6px;font-family:monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#5c36eb;border-bottom:1px solid #ede9fe">${esc(r.chapter)}</td></tr>`
          : ''
      lastChapter = r.chapter
      return `${head}<tr>
        <td style="padding:12px 16px 12px 0;vertical-align:top;width:150px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">${esc(r.label)}</td>
        <td style="padding:12px 0;vertical-align:top;color:#111827;font-size:15px;line-height:1.55">${r.html}</td>
      </tr>`
    })
    .join('')
  return `<!DOCTYPE html><html><head><meta charset="utf-8"/></head>
<body style="margin:0;background:#f4f2ee;font-family:Arial,Helvetica,sans-serif">
  <div style="max-width:680px;margin:32px auto;background:#fff;border:1px solid #e5e7eb">
    <div style="background:#161616;padding:28px 32px">
      <div style="font-family:monospace;font-size:11px;letter-spacing:2px;color:#8f74ff;text-transform:uppercase">OxBrand · Briefing</div>
      <div style="font-size:24px;line-height:1.2;color:#eae6e6;font-weight:700;margin-top:8px">${esc(opts.heading)}</div>
    </div>
    <div style="padding:8px 32px 28px">
      <p style="font-size:15px;color:#374151;line-height:1.6;margin:20px 0 0">${opts.intro}</p>
      <table style="width:100%;border-collapse:collapse">${body}</table>
    </div>
    <div style="padding:16px 32px;background:#faf9f7;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;line-height:1.6">${opts.footer}</div>
  </div>
</body></html>`
}

async function verifyRecaptcha(token: string | undefined, req: NextRequest): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) return true
  if (!token) return false
  try {
    const params = new URLSearchParams({ secret, response: token })
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    if (ip) params.set('remoteip', ip)
    const r = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', body: params })
    const j = (await r.json()) as { success: boolean; score?: number }
    return j.success && (typeof j.score !== 'number' || j.score >= 0.5)
  } catch {
    return false
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { slug?: string; answers?: Answers; meta?: Record<string, string>; _recaptcha?: string }
    const cfg = getBriefing(String(body.slug ?? ''))
    if (!cfg || !body.answers) return NextResponse.json({ ok: false, error: 'Briefing inválido.' }, { status: 400 })
    if (!(await verifyRecaptcha(body._recaptcha, req))) {
      return NextResponse.json({ ok: false, error: 'Falha na verificação anti-spam. Recarregue a página e tente de novo.' }, { status: 400 })
    }

    const a = body.answers
    const email = String(a.email ?? '').trim()
    const marca = String(a.marca ?? '').trim() || 'Marca sem nome'
    const nome = String(a.nome ?? '').trim()
    if (!nome || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Nome e e-mail são obrigatórios.' }, { status: 400 })
    }

    const rows = visibleSteps(cfg, a).map((s) => ({ chapter: s.chapter, label: s.label, html: render(s, a) }))
    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    const meta = body.meta ?? {}
    const metaLine = ['cliente', 'projeto', 'utm_source']
      .filter((k) => meta[k])
      .map((k) => `${k}: ${esc(meta[k])}`)
      .join(' · ')

    const team = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[Briefing ${cfg.name.replace(/^Briefing de /, '')}] ${marca} · ${nome}`,
      html: buildHtml({
        heading: `${marca}`,
        intro: `${esc(cfg.name)} respondido por <b>${esc(nome)}</b> (${esc(email)}). Responder este e-mail fala direto com o cliente.`,
        rows,
        footer: `Enviado em ${esc(dataHora)} pela página ${esc(meta.pageUrl ?? `/briefing/${cfg.slug}`)}${metaLine ? `<br/>${metaLine}` : ''}`,
      }),
    })
    if (team.error) {
      console.error('[briefing] resend team error:', team.error)
      return NextResponse.json({ ok: false, error: 'Não foi possível enviar agora. Tente de novo em instantes.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[briefing] unexpected:', e)
    return NextResponse.json({ ok: false, error: 'Erro interno.' }, { status: 500 })
  }
}
