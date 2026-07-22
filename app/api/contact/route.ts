import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'contato@oxbrand.com.br'
const FROM = 'OxBrand Site <noreply@oxbrand.com.br>'

const PHONE_KEYS = /^(telefone|whatsapp|phone|celular|tel)$/i

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

function buildHtml(title: string, fields: Record<string, string>, pageUrl: string, dataHora: string): string {
  const optin = fields['Aceita WhatsApp']

  const rows = Object.entries(fields)
    .filter(([k, v]) => v && k !== 'Aceita WhatsApp' && !k.startsWith('_'))
    .map(([k, v]) => {
      let val = PHONE_KEYS.test(k) ? formatPhone(v) : v
      val = esc(val).replace(/\n/g, '<br/>')
      return `
      <tr>
        <td style="padding:10px 0;vertical-align:top;width:130px;font-family:monospace;font-size:12px;font-weight:600;color:#6b21a8;text-transform:uppercase;letter-spacing:1px">${esc(k)}</td>
        <td style="padding:10px 0;vertical-align:top;color:#111827;font-size:15px;line-height:1.5">${val}</td>
      </tr>`
    })
    .join('')

  const optinRow = optin
    ? `<div style="margin-top:20px;padding:14px 16px;background:#faf5ff;border:1px solid #e9d5ff;border-radius:6px">
         <span style="font-family:monospace;font-size:12px;font-weight:600;color:#6b21a8;text-transform:uppercase;letter-spacing:1px">Aceita WhatsApp</span>
         <span style="font-size:15px;color:#111827;margin-left:10px;font-weight:600">${esc(optin)}</span>
       </div>`
    : ''

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
      <span style="color:#8a8a8a;font-size:13px;margin-left:12px;font-family:monospace">${esc(title)}</span>
    </div>
    <div style="padding:28px 32px">
      <table style="width:100%;border-collapse:collapse">${rows}</table>
      ${optinRow}
    </div>
    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.6">Enviado pelo Site da OxBrand no link ${linkHtml} em ${esc(dataHora)}</p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { source, _pageUrl, ...fields } = body as { source: string; _pageUrl?: string; [k: string]: string }

    const titles: Record<string, string> = {
      contato: 'Formulário de Contato',
      diagnostico: 'Solicitação de Diagnóstico',
      lp_trafego: 'LP · Tráfego com Previsibilidade',
    }

    const title = titles[source] ?? 'Formulário do Site'
    const nome = fields['Nome'] ?? fields['nome'] ?? 'Lead'
    const pageUrl = _pageUrl || req.headers.get('referer') || ''
    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: fields['E-mail'] ?? fields['email'] ?? undefined,
      subject: `[${title}] ${nome}`,
      html: buildHtml(title, fields, pageUrl, dataHora),
    })

    if (error) {
      console.error('[contact api] resend error:', error)
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact api] unexpected error:', err)
    return NextResponse.json({ ok: false, error: 'Erro interno' }, { status: 500 })
  }
}
