import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CASE_SLUGS, getCase } from '@/lib/clientes'
import { pageOg } from '@/lib/og'
import { CaseTemplate } from '@/components/case-template'

export function generateStaticParams() {
  return CASE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = getCase(slug)
  if (!study) return {}
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    ...pageOg({ title: study.headline, description: study.metaDescription, path: `/clientes/${slug}`, subtitle: 'Case OxBrand' }),
    alternates: { canonical: `/clientes/${slug}` },
    ...(study.published ? {} : { robots: { index: false, follow: true } }),
  }
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCase(slug)
  if (!study) notFound()
  return <CaseTemplate study={study} />
}
