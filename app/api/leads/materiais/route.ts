import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, email, whatsapp, material } = body

    if (!nome || !email || !whatsapp || !material) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
    }

    // TODO: persistir lead (Neon, planilha, CRM) quando integração for conectada
    // Por ora, registra no console do servidor para não bloquear o fluxo
    console.log('[lead/materiais]', { nome, email, whatsapp, material, ts: new Date().toISOString() })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
