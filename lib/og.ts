const BASE = 'https://oxbrand.com.br'

/**
 * Gera o bloco openGraph + twitter para páginas estáticas.
 * A imagem é gerada dinamicamente via /og?title=...&subtitle=...
 */
export function pageOg({
  title,
  description,
  path,
  subtitle = 'Agência de Marketing de Performance',
}: {
  title: string
  description: string
  path: string
  subtitle?: string
}) {
  const ogImageUrl = `${BASE}/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(subtitle)}`

  return {
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${BASE}${path}`,
      siteName: 'OxBrand',
      locale: 'pt_BR',
      type: 'website' as const,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [ogImageUrl],
      site: '@oxbrand_br',
    },
  }
}

/**
 * Gera o bloco openGraph + twitter para artigos do blog.
 * Usa a imagem de capa do artigo como og:image.
 */
export function articleOg({
  title,
  description,
  slug,
  coverUrl,
  datePublished,
  authorName = 'OxBrand',
}: {
  title: string
  description: string
  slug: string
  coverUrl?: string | null
  datePublished: string
  authorName?: string
}) {
  const path = `/blog/${slug}`
  const ogImageUrl = coverUrl
    ? coverUrl.startsWith('http') ? coverUrl : `${BASE}${coverUrl}`
    : `${BASE}/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent('OxBrand Insights')}`

  return {
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${BASE}${path}`,
      siteName: 'OxBrand',
      locale: 'pt_BR',
      type: 'article' as const,
      publishedTime: datePublished,
      authors: [authorName],
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [ogImageUrl],
      site: '@oxbrand_br',
    },
  }
}
