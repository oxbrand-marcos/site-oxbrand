import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'contato@oxbrand.com.br'
const FROM = 'OxBrand Site <noreply@oxbrand.com.br>'

// Limite defensivo do anexo (Vercel serverless ~4.5MB de body). 4MB de arquivo.
const MAX_FILE_BYTES = 4 * 1024 * 1024
const ALLOWED_EXT = /\.(pdf|doc|docx)$/i

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function formatPhone(v: string): string {
  const d = v.replace(/\D/g, '')
  if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
  if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  if (d.length === 13 && d.startsWith('55')) return `+55 (${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9)}`
  if (d.length === 12 && d.startsWith('55')) return `+55 (${d.slice(2, 4)}) ${d.slice(4, 8)}-${d.slice(8)}`
  return v
}

async function verifyRecaptcha(secret: string, token: string | undefined, req: NextRequest): Promise<boolean> {
  if (!token) return false
  try {
    const params = new URLSearchParams({ secret, response: token })
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    if (ip) params.set('remoteip', ip)
    const r = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    })
    const j = (await r.json()) as { success: boolean; score?: number }
    if (!j.success) return false
    if (typeof j.score === 'number' && j.score < 0.5) return false
    return true
  } catch {
    return false
  }
}

function buildHtml(vaga: string, fields: Record<string, string>, curriculo: string, pageUrl: string, dataHora: string): string {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => {
      let val = /telefone/i.test(k) ? formatPhone(v) : v
      const isUrl = /^https?:\/\//i.test(val)
      val = isUrl
        ? `<a href="${esc(val)}" style="color:#7c3aed;text-decoration:underline">${esc(val)}</a>`
        : esc(val).replace(/\n/g, '<br/>')
      return `
      <tr>
        <td style="padding:10px 0;vertical-align:top;width:130px;font-family:monospace;font-size:12px;font-weight:600;color:#6b21a8;text-transform:uppercase;letter-spacing:1px">${esc(k)}</td>
        <td style="padding:10px 0;vertical-align:top;color:#111827;font-size:15px;line-height:1.5">${val}</td>
      </tr>`
    })
    .join('')

  const linkHtml = pageUrl
    ? `<a href="${esc(pageUrl)}" style="color:#7c3aed;text-decoration:underline">${esc(pageUrl)}</a>`
    : 'oxbrand.com.br'

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:sans-serif">
  <div style="max-width:600px;margin:40px auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <div style="background:#0a0a0a;padding:24px 32px">
      <span style="font-family:monospace;font-size:13px;color:#a855f7;letter-spacing:2px;text-transform:uppercase">OxBrand</span>
      <span style="color:#8a8a8a;font-size:13px;margin-left:12px;font-family:monospace">Candidatura &middot; ${esc(vaga)}</span>
    </div>
    <div style="padding:28px 32px">
      <table style="width:100%;border-collapse:collapse">${rows}</table>
      <div style="margin-top:20px;padding:14px 16px;background:#faf5ff;border:1px solid #e9d5ff;border-radius:6px">
        <span style="font-family:monospace;font-size:12px;font-weight:600;color:#6b21a8;text-transform:uppercase;letter-spacing:1px">Curriculo</span>
        <span style="font-size:14px;color:#111827;margin-left:10px">${esc(curriculo)} (anexo neste e-mail)</span>
      </div>
    </div>
    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.6">Candidatura enviada pelo Site da OxBrand no link ${linkHtml} em ${esc(dataHora)}</p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const vaga = String(formData.get('vaga') || 'Vaga OxBrand')
    const nome = String(formData.get('nome') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const telefone = String(formData.get('telefone') || '').trim()
    const instagram = String(formData.get('instagram') || '').trim()
    const linkedin = String(formData.get('linkedin') || '').trim()
    const mensagem = String(formData.get('mensagem') || '').trim()
    const pageUrl = String(formData.get('_pageUrl') || '') || req.headers.get('referer') || ''
    const recaptcha = String(formData.get('_recaptcha') || '')
    const file = formData.get('curriculo') as File | null

    if (!nome || !email || !telefone || !instagram || !linkedin) {
      return NextResponse.json({ ok: false, error: 'Preencha todos os campos obrigatorios.' }, { status: 400 })
    }
    if (!file || typeof file === 'string' || file.size === 0) {
      return NextResponse.json({ ok: false, error: 'Anexe o seu curriculo (PDF, DOC ou DOCX).' }, { status: 400 })
    }
    if (!ALLOWED_EXT.test(file.name)) {
      return NextResponse.json({ ok: false, error: 'Formato invalido. Envie PDF, DOC ou DOCX.' }, { status: 400 })
    }
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json({ ok: false, error: 'Arquivo muito grande. O limite e 4MB.' }, { status: 400 })
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    if (recaptchaSecret) {
      const okCaptcha = await verifyRecaptcha(recaptchaSecret, recaptcha, req)
      if (!okCaptcha) {
        return NextResponse.json({ ok: false, error: 'Falha na verificacao anti-spam. Recarregue a pagina e tente novamente.' }, { status: 400 })
      }
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

    const fields: Record<string, string> = {
      Nome: nome,
      'E-mail': email,
      Telefone: telefone,
      Instagram: instagram,
      LinkedIn: linkedin,
    }
    if (mensagem) fields['Mensagem'] = mensagem

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[Candidatura - ${vaga}] ${nome}`,
      html: buildHtml(vaga, fields, file.name, pageUrl, dataHora),
      attachments: [{ filename: file.name, content: buffer }],
    })

    if (error) {
      console.error('[apply api] resend error:', error)
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[apply api] unexpected error:', err)
    return NextResponse.json({ ok: false, error: 'Erro interno ao enviar a candidatura.' }, { status: 500 })
  }
}
