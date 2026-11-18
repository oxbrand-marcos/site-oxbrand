import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BRIEFINGS, getBriefing } from '@/lib/briefings'
import { BriefingFlow } from '@/components/briefing/briefing-flow'

// Briefings são ferramenta de projeto para quem já é cliente: fora do Google
// e fora do sitemap.
export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(BRIEFINGS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cfg = getBriefing(slug)
  if (!cfg) return {}
  return {
    title: `${cfg.name} · OxBrand`,
    description: 'Briefing de projeto da OxBrand. Responda com calma, cada detalhe orienta decisões reais.',
    robots: { index: false, follow: false },
    openGraph: {
      title: `${cfg.name} · OxBrand`,
      description: 'Antes do primeiro traço, a gente precisa entender a sua marca de verdade.',
      images: [{ url: 'https://www.oxbrand.com.br/og-home.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function BriefingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!getBriefing(slug)) notFound()
  return <BriefingFlow slug={slug} />
}
