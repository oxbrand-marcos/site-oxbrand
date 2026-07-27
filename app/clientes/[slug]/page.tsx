import { permanentRedirect } from 'next/navigation'

// Cases foram movidos para /nossos-clientes/[slug].
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  permanentRedirect(`/nossos-clientes/${slug}`)
}
