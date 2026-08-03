import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'contato@oxbrand.com.br'
const FROM = 'OxBrand Site <noreply@oxbrand.com.br>'

function esc(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
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

type Ans = { n: number; q: string; chosen: string; chosenText: string; correct: string; correctText: string; ok: boolean }

function buildHtml(score: number, total: number, percent: number, verdict: string, answers: Ans[], dataHora: string): string {
  const rows = answers.map((a) => `
      <tr>
        <td style="padding:10px 8px;vertical-align:top;border-bottom:1px solid #eee;font-family:monospace;font-size:13px;font-weight:700;color:${a.ok ? '#15803d' : '#b91c1c'};white-space:nowrap">${String(a.n).padStart(2, '0')} ${a.ok ? '✓' : '✕'}</td>
        <td style="padding:10px 8px;vertical-align:top;border-bottom:1px solid #eee;color:#111827;font-size:13px;line-height:1.5">
          <div style="color:#374151;margin-bottom:4px">${esc(a.q)}</div>
          <div style="font-size:12px;color:${a.ok ? '#15803d' : '#b91c1c'}"><b>Resposta:</b> ${a.chosen ? `${esc(a.chosen)}) ${esc(a.chosenText)}` : 'em branco'}</div>
          ${a.ok ? '' : `<div style="font-size:12px;color:#15803d"><b>Correta:</b> ${esc(a.correct)}) ${esc(a.correctText)}</div>`}
        </td>
      </tr>`).join('')

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:sans-serif">
  <div style="max-width:640px;margin:40px auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <div style="background:#0a0a0a;padding:24px 32px">
      <span style="font-family:monospace;font-size:13px;color:#a855f7;letter-spacing:2px;text-transform:uppercase">OxBrand</span>
      <span style="color:#8a8a8a;font-size:13px;margin-left:12px;font-family:monospace">Teste Técnico · Gestor de Tráfego</span>
    </div>
    <div style="padding:28px 32px">
      <div style="text-align:center;padding:16px 0 24px">
        <div style="font-size:40px;font-weight:800;color:#111827">${score} <span style="color:#9ca3af;font-size:22px">/ ${total}</span></div>
        <div style="font-size:15px;color:#111827;margin-top:6px">Acertou ${score} de ${total} (${percent}%)</div>
        <div style="font-size:13px;color:#6b7280;margin-top:4px">${esc(verdict)}</div>
      </div>
      <table style="width:100%;border-collapse:collapse">${rows}</table>
    </div>
    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.6">Teste respondido em ${esc(dataHora)} na página /teste-gestor-de-trafego.</p>
    </div>
  </div>
</body></html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null) as
      | { score: number; total: number; percent: number; verdict: string; answers: Ans[]; _recaptcha?: string }
      | null
    if (!body || !Array.isArray(body.answers)) {
      return NextResponse.json({ ok: false, error: 'Payload inválido.' }, { status: 400 })
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    if (recaptchaSecret) {
      const okCaptcha = await verifyRecaptcha(recaptchaSecret, body._recaptcha, req)
      if (!okCaptcha) {
        return NextResponse.json({ ok: false, error: 'Falha na verificação anti-spam.' }, { status: 400 })
      }
    }

    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `Teste Técnico Gestor de Tráfego · ${body.score}/${body.total}`,
      html: buildHtml(body.score, body.total, body.percent, body.verdict, body.answers, dataHora),
    })
    if (error) {
      console.error('[teste-gestor api] resend error:', error)
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[teste-gestor api] unexpected error:', err)
    return NextResponse.json({ ok: false, error: 'Erro interno.' }, { status: 500 })
  }
}
