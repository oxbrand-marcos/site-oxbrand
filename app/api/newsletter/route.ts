import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    if (!name || !email || !email.includes('@')) {
      return NextResponse.json({ error: 'Dados inválidos.' }, { status: 400 })
    }

    // TODO: integrar com banco de dados, CRM ou provedor de e-mail (ex: RD Station, ActiveCampaign)
    // Por enquanto registra no console do servidor para não bloquear o fluxo.
    console.log('[newsletter] novo cadastro:', { name, email, createdAt: new Date().toISOString() })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
