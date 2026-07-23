import type { Metadata } from 'next'
import { getArticle, coverFor } from '@/lib/blog-articles'
import { articleOg } from '@/lib/og'
import { ArticleRenderer } from '@/components/article-renderer'

const SLUG = 'o-que-e-inbound-marketing'
const article = getArticle(SLUG)!

export const metadata: Metadata = {
  title: article.metaTitle,
  description: article.metaDescription,
  ...articleOg({ title: article.title, description: article.metaDescription, slug: SLUG, coverUrl: coverFor(SLUG), datePublished: article.dateISO }),
}

export default function Page() {
  return <ArticleRenderer article={article} />
}
