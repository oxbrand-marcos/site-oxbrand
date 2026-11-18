import { Resend } from 'resend'
import { type NextRequest, NextResponse } from 'next/server'

// Recebe as aprovações das páginas de projeto escondidas (/projetos/<slug>)
// e manda o resumo só para contato@oxbrand.com.br. Não cria lead no Kommo e
// não dispara evento de rastreamento: quem responde já é cliente.

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'contato@oxbrand.com.br'
const FROM = 'OxBrand <noreply@oxbrand.com.br>'

const PROJETOS: Record<string, string> = {
  'kommo-daniela-rocha': 'Kommo 3.0 · Daniela Rocha',
}

type Item = { bloco?: string; status?: string; nota?: string }

const STATUS: Record<string, { label: string; color: string }> = {
  adj: { label: 'Quer ajustar', color: '#b45309' },
  ans: { label: 'Decisão', color: '#5c36eb' },
  ok: { label: 'Aprovado', color: '#0f766e' },
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { projeto?: string; nome?: string; site?: string; respostas?: Item[] }
    // Campo isca: robô preenche, gente não vê.
    if (body.site) return NextResponse.json({ ok: true })

    const titulo = PROJETOS[String(body.projeto ?? '')]
    const nome = String(body.nome ?? '').trim().slice(0, 120)
    const lista = Array.isArray(body.respostas) ? body.respostas.slice(0, 200) : []
    if (!titulo || !nome || !lista.length) {
      return NextResponse.json({ ok: false, error: 'Envio incompleto.' }, { status: 400 })
    }

    const ordem = ['adj', 'ans', 'ok']
    const rows = lista
      .map((i) => ({
        bloco: String(i.bloco ?? '').slice(0, 200),
        status: String(i.status ?? ''),
        nota: String(i.nota ?? '').slice(0, 4000),
      }))
      .filter((i) => STATUS[i.status])
      .sort((a, b) => ordem.indexOf(a.status) - ordem.indexOf(b.status))
      .map((i) => {
        const s = STATUS[i.status]
        return `<tr>
          <td style="padding:12px 16px 12px 0;vertical-align:top;width:120px"><span style="font-size:12px;font-weight:700;color:${s.color}">${s.label}</span></td>
          <td style="padding:12px 0;vertical-align:top;font-size:15px;line-height:1.55;color:#111827"><b>${esc(i.bloco)}</b>${
            i.nota ? `<br/>${esc(i.nota).replace(/\n/g, '<br/>')}` : ''
          }</td>
        </tr>`
      })
      .join('')

    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"/></head>
<body style="margin:0;background:#f4f2ee;font-family:Arial,Helvetica,sans-serif">
  <div style="max-width:680px;margin:32px auto;background:#fff;border:1px solid #e5e7eb">
    <div style="background:#161616;padding:28px 32px">
      <div style="font-size:12px;color:#8f74ff">OxBrand · Aprovação de projeto</div>
      <div style="font-size:24px;line-height:1.2;color:#eae6e6;font-weight:700;margin-top:8px">${esc(titulo)}</div>
    </div>
    <div style="padding:8px 32px 28px">
      <p style="font-size:15px;color:#374151;line-height:1.6;margin:20px 0 0">Respostas enviadas por <b>${esc(nome)}</b>.</p>
      <table style="width:100%;border-collapse:collapse;margin-top:8px">${rows}</table>
    </div>
    <div style="padding:16px 32px;background:#faf9f7;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280">Enviado em ${esc(dataHora)} pela página /projetos/${esc(String(body.projeto))}</div>
  </div>
</body></html>`

    const r = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `[Aprovação] ${titulo} · ${nome}`,
      html,
    })
    if (r.error) {
      console.error('[blueprint] resend error:', r.error)
      return NextResponse.json({ ok: false, error: 'Não foi possível enviar agora.' }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[blueprint] unexpected:', e)
    return NextResponse.json({ ok: false, error: 'Erro interno.' }, { status: 500 })
  }
}
