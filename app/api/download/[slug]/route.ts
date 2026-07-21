import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

const ALLOWED = new Set(['comunicacao-raiz'])

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  if (!ALLOWED.has(slug)) {
    return NextResponse.json({ error: 'Material não encontrado.' }, { status: 404 })
  }

  const filePath = path.join(process.cwd(), 'public', 'downloads', `${slug}.pdf`)

  try {
    const buffer = await readFile(filePath)
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="ebook-${slug}.pdf"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    // PDF ainda não foi adicionado ao projeto — retorna 404 informativo
    return NextResponse.json(
      { error: 'O arquivo está sendo preparado. Tente novamente em breve.' },
      { status: 404 }
    )
  }
}
