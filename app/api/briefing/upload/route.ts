import { put } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'
import { getBriefing } from '@/lib/briefings'

// Upload público das imagens do briefing (logo atual e referências).
// O navegador já reduz e converte para WebP antes de enviar.
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic', 'image/heif']
const MAX = 4 * 1024 * 1024

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData()
    const file = fd.get('file')
    const slug = String(fd.get('briefing') ?? '')
    if (!getBriefing(slug)) return NextResponse.json({ error: 'Briefing inválido.' }, { status: 400 })
    if (!(file instanceof File)) return NextResponse.json({ error: 'Nenhuma imagem recebida.' }, { status: 400 })
    if (!ALLOWED.includes(file.type)) return NextResponse.json({ error: 'Envie JPG, PNG ou WebP.' }, { status: 415 })
    if (file.size > MAX) return NextResponse.json({ error: 'Imagem muito grande. Tente uma de até 4 MB.' }, { status: 413 })

    const ext = (file.type.split('/')[1] ?? 'jpg').replace('jpeg', 'jpg')
    const blob = await put(`briefings/${slug}/${Date.now()}.${ext}`, file, {
      access: 'public',
      addRandomSuffix: true,
      contentType: file.type,
    })
    return NextResponse.json({ url: blob.url })
  } catch (e) {
    console.error('[briefing upload]', e)
    return NextResponse.json({ error: 'Não foi possível enviar a imagem agora.' }, { status: 500 })
  }
}
