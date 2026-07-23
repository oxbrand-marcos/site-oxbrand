import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticle, coverFor, ARTICLES } from '@/lib/blog-articles'
import { articleOg } from '@/lib/og'
import { ArticleRenderer } from '@/components/article-renderer'

// Slugs com pasta estatica propria (ja publicados); a rota dinamica cobre o resto.
const STATIC_SLUGS = new Set(['quanto-custa-gestao-de-trafego-pago', 'o-que-e-inbound-marketing'])

export function generateStaticParams() {
  return ARTICLES.filter((a) => !STATIC_SLUGS.has(a.slug)).map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    ...articleOg({ title: article.title, description: article.metaDescription, slug, coverUrl: coverFor(slug), datePublished: article.dateISO }),
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()
  return <ArticleRenderer article={article} />
}
