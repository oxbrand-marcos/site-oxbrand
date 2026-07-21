import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'contato@oxbrand.com.br'
const FROM = 'OxBrand Site <noreply@oxbrand.com.br>'

function buildHtml(title: string, fields: Record<string, string>): string {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;color:#6b21a8;white-space:nowrap;font-family:monospace;font-size:12px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #f3f4f6">${k}</td>
        <td style="padding:8px 12px;color:#111827;font-size:14px;border-bottom:1px solid #f3f4f6">${v}</td>
      </tr>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:sans-serif">
  <div style="max-width:600px;margin:40px auto;background:#fff;border:1px solid #e5e7eb">
    <div style="background:#0a0a0a;padding:24px 32px;display:flex;align-items:center;gap:12px">
      <span style="font-family:monospace;font-size:13px;color:#a855f7;letter-spacing:2px;text-transform:uppercase">OxBrand</span>
      <span style="color:#3f3f3f;font-size:13px;margin-left:auto;font-family:monospace">${title}</span>
    </div>
    <div style="padding:32px">
      <table style="width:100%;border-collapse:collapse">${rows}</table>
    </div>
    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:11px;color:#9ca3af;font-family:monospace">Enviado via site oxbrand.com.br · ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { source, ...fields } = body as { source: string; [k: string]: string }

    const titles: Record<string, string> = {
      contato: 'Formulário de Contato',
      diagnostico: 'Solicitação de Diagnóstico',
      lp_trafego: 'LP · Tráfego com Previsibilidade',
    }

    const title = titles[source] ?? 'Formulário do Site'
    const nome = fields['Nome'] ?? fields['nome'] ?? 'Lead'

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: fields['E-mail'] ?? fields['email'] ?? undefined,
      subject: `[${title}] ${nome}`,
      html: buildHtml(title, fields),
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
