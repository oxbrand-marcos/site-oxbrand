import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'contato@oxbrand.com.br'
const FROM = 'OxBrand Site <noreply@oxbrand.com.br>'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, email, whatsapp, material } = body

    if (!nome || !email || !whatsapp || !material) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
    }

    const ts = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:sans-serif">
  <div style="max-width:600px;margin:40px auto;background:#fff;border:1px solid #e5e7eb">
    <div style="background:#0a0a0a;padding:24px 32px">
      <span style="font-family:monospace;font-size:13px;color:#a855f7;letter-spacing:2px;text-transform:uppercase">OxBrand</span>
      <span style="color:#3f3f3f;font-size:13px;margin-left:12px;font-family:monospace">Lead · Material gratuito</span>
    </div>
    <div style="padding:32px">
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 12px;font-weight:600;color:#6b21a8;font-family:monospace;font-size:12px;text-transform:uppercase;border-bottom:1px solid #f3f4f6">Material</td><td style="padding:8px 12px;color:#111827;font-size:14px;border-bottom:1px solid #f3f4f6">${material}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:600;color:#6b21a8;font-family:monospace;font-size:12px;text-transform:uppercase;border-bottom:1px solid #f3f4f6">Nome</td><td style="padding:8px 12px;color:#111827;font-size:14px;border-bottom:1px solid #f3f4f6">${nome}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:600;color:#6b21a8;font-family:monospace;font-size:12px;text-transform:uppercase;border-bottom:1px solid #f3f4f6">E-mail</td><td style="padding:8px 12px;color:#111827;font-size:14px;border-bottom:1px solid #f3f4f6">${email}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:600;color:#6b21a8;font-family:monospace;font-size:12px;text-transform:uppercase;border-bottom:1px solid #f3f4f6">WhatsApp</td><td style="padding:8px 12px;color:#111827;font-size:14px;border-bottom:1px solid #f3f4f6">${whatsapp}</td></tr>
      </table>
    </div>
    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:11px;color:#9ca3af;font-family:monospace">Enviado via site oxbrand.com.br · ${ts}</p>
    </div>
  </div>
</body></html>`

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[Material: ${material}] ${nome}`,
      html,
    })

    if (error) {
      console.error('[lead/materiais] resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
