const BASE_URL = 'https://oxbrand.com.br'

/* ─── Dados canônicos da organização ─────────────────────── */

export const ORG_ID = `${BASE_URL}/#organization`

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': ORG_ID,
  name: 'OxBrand',
  legalName: 'OxBrand – Tecnologia e Marketing',
  alternateName: 'OxBrand Agência de Marketing',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/oxbrand-logo.png`,
    width: 400,
    height: 120,
  },
  image: `${BASE_URL}/images/oxbrand-logo.png`,
  description:
    'Agência de marketing de performance em Mogi das Cruzes/SP. Tráfego pago, SEO, desenvolvimento de sites, copywriting, inbound marketing e assessoria estratégica.',
  telephone: '+55-11-92142-5351',
  email: 'contato@oxbrand.com.br',
  taxID: '46.696.465/0001-20', // CNPJ
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Narciso Yague Guimarães, 1145, Sala 1303, Edifício Office',
    addressLocality: 'Mogi das Cruzes',
    addressRegion: 'SP',
    postalCode: '08780-500',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.523,
    longitude: -46.187,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/oxbrand.br/',
    'https://www.facebook.com/oxbrand.oficial',
    'https://www.linkedin.com/company/oxbrand-br/',
    'https://www.youtube.com/@oxbrand_br',
    'https://wa.me/5511921425351',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  priceRange: '$$',
}

/* ─── Service (páginas de solução) ───────────────────────── */

export function serviceSchema(opts: {
  name: string
  description: string
  url: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${BASE_URL}${opts.url}`,
    serviceType: opts.serviceType,
    provider: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'OxBrand',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${BASE_URL}${opts.url}`,
      availableLanguage: 'Portuguese',
    },
  }
}

/* ─── FAQPage ─────────────────────────────────────────────── */

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

/* ─── BreadcrumbList ──────────────────────────────────────── */

export function breadcrumbSchema(
  crumbs: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.url}`,
    })),
  }
}

/* ─── BlogPosting ─────────────────────────────────────────── */

export function blogPostingSchema(opts: {
  headline: string
  description: string
  slug: string
  coverUrl?: string
  datePublished: string
  dateModified: string
  authorName: string
  tags: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.headline,
    description: opts.description,
    url: `${BASE_URL}/blog/${opts.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${opts.slug}`,
    },
    image: opts.coverUrl
      ? opts.coverUrl.startsWith('http')
        ? opts.coverUrl
        : `${BASE_URL}${opts.coverUrl}`
      : `${BASE_URL}/images/oxbrand-og.png`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      '@type': 'Person',
      name: opts.authorName,
      worksFor: {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'OxBrand',
      },
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'OxBrand',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/oxbrand-logo.png`,
      },
    },
    keywords: opts.tags.join(', '),
  }
}

/* ─── Serializador seguro para <script> ───────────────────── */

export function jsonLd(schema: object) {
  return JSON.stringify(schema)
}
