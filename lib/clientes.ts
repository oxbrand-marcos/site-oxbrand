// Cases de sucesso da OxBrand.
// Estrutura pronta para preenchimento: quando o texto de cada case chegar,
// basta preencher summary/services/metrics/bodyHtml e marcar published: true.
// Enquanto published for false, a pagina existe (rota 200) mas fica noindex
// e mostra um estado "em preparacao", para nao gerar conteudo raso indexado.

export interface CaseStudy {
  slug: string
  client: string // nome de exibicao exato do cliente
  metaTitle: string
  metaDescription: string
  segment: string // segmento do cliente
  headline: string // H1
  summary: string // paragrafo de abertura
  services: string[] // servicos aplicados
  metrics: { label: string; value: string }[] // resultados (vazio ate haver dados reais)
  bodyHtml: string // corpo do case (vazio ate haver conteudo)
  coverAlt: string
  dateISO: string
  published: boolean
  customPage?: boolean
}

const draft = (client: string, slug: string, segment: string): CaseStudy => ({
  slug,
  client,
  metaTitle: `Case ${client} | Marketing de Performance | OxBrand`,
  metaDescription: `Case de ${client} com a OxBrand: estrategia, execucao e resultados em marketing de performance. Agencia em Mogi das Cruzes e Sao Paulo.`,
  segment,
  headline: client,
  summary: '',
  services: [],
  metrics: [],
  bodyHtml: '',
  coverAlt: `Case de sucesso ${client} com a OxBrand`,
  dateISO: '2026-07-27',
  published: false,
})

export const CASES: CaseStudy[] = [
  {
    slug: 'lbel-telhas',
    client: 'LBEL Telhas',
    metaTitle: 'Case LBEL Telhas: de R$ 0 a R$ 23 mi em 48 meses | OxBrand',
    metaDescription: 'Como a OxBrand levou a LBEL Telhas de R$ 0 a R$ 23 milhoes em 48 meses: site, CRM, social e trafego para WhatsApp (ROAS 54,12). Case real de marketing de performance.',
    segment: 'Construção civil',
    headline: 'LBEL Telhas: de R$ 0 a R$ 23 milhões em 48 meses',
    summary: '',
    services: [],
    metrics: [],
    bodyHtml: '',
    coverAlt: 'Bruno Remonti, da LBEL Telhas, em depoimento sobre o case com a OxBrand',
    dateISO: '2026-02-25',
    published: true,
    customPage: true,
  },
  draft('Mara Rocha', 'mara-rocha', ''),
  draft('Chris Tattoo', 'chris-tattoo', ''),
  draft('Motobras', 'motobras', ''),
  draft('Ral Truck', 'ral-truck', ''),
  draft('Truck Center Express', 'truck-center-express', ''),
]

export const CASE_SLUGS = CASES.map((c) => c.slug)

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug)
}

export function coverForCase(slug: string): string {
  return `/nossos-clientes/${slug}-cover.png`
}
