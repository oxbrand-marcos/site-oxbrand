// Cases de sucesso da OxBrand.
// Layout data-driven no padrao da pagina custom da LBEL Telhas (CaseTemplate).

export interface CaseStudy {
  slug: string
  client: string
  metaTitle: string
  metaDescription: string
  segment: string
  headline: string
  summary: string
  bullets?: string[]
  clientLinks?: { label: string; href: string }[]
  metrics: { label: string; value: string }[]
  areas?: { tag: string; img?: string; alt?: string; href: string; text: string }[]
  depoimentoResumo?: string
  videoId?: string
  videoName?: string
  videoUploadDate?: string
  videoAspect?: 'portrait' | 'landscape'
  videoPoster?: string
  videoDuration?: string
  services: string[]
  bodyHtml: string
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
  metrics: [],
  services: [],
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
    metrics: [],
    services: [],
    bodyHtml: '',
    coverAlt: 'Bruno Remonti, da LBEL Telhas, em depoimento sobre o case com a OxBrand',
    dateISO: '2026-02-25',
    published: true,
    customPage: true,
  },
  draft('Mara Rocha', 'mara-rocha', ''),
  draft('BMR Advogados', 'bmr-advogados', 'Advocacia · Branding'),
  draft('LM Assets', 'lm-assets', ''),
  draft('Comissão de Direito Empresarial - OAB Mogi das Cruzes', 'comissao-direito-empresarial-oab-mogi', 'Direito empresarial · OAB'),
  {
    slug: 'chris-tattoo',
    client: 'Chris Tattoo',
    metaTitle: 'Case Chris Tattoo: marketing de marca pessoal | OxBrand',
    metaDescription: 'Case Chris Tattoo com a OxBrand: tráfego qualificado e CRM que deram direção a uma marca pessoal, atraindo o cliente ideal com previsibilidade. Marketing com norte, não com achismo.',
    segment: 'Tatuador e marca pessoal',
    headline: 'Chris Tattoo: um divisor de águas na carreira, com marketing que deu direção',
    summary: 'Marketing estratégico que deu direção onde antes não existia, transformando uma marca pessoal em uma operação com norte, previsibilidade e o cliente ideal chegando.',
    bullets: [
      'Marketing estratégico que deu direção a uma marca pessoal, onde antes não existia processo.',
      'Tráfego qualificado estruturado a partir do posicionamento, atraindo exatamente o perfil de cliente ideal.',
      'CRM implementado para organizar o relacionamento e dar previsibilidade ao processo comercial.',
    ],
    metrics: [],
    areas: [
      { tag: 'Campanhas Ads', img: '/nossos-clientes/chris-tattoo/campanha-ads.webp', alt: 'Campanhas de tráfego pago do Chris Tattoo pela OxBrand', href: '/solucoes/gestao-de-trafego-pago', text: 'Tráfego qualificado estruturado a partir do posicionamento da marca pessoal, atraindo exatamente o perfil de cliente ideal, com segmentação precisa e mensuração constante. Marketing com norte, não com achismo.' },
      { tag: 'CRM', img: '/nossos-clientes/chris-tattoo/crm.webp', alt: 'CRM implementado para o Chris Tattoo pela OxBrand', href: '/solucoes/crm-kommo', text: 'Sistema implementado para organizar o relacionamento e dar previsibilidade ao processo comercial. A plataforma colocou ordem na operação: clientes passaram a chegar e resolver seus problemas com mais fluidez, agilidade e acompanhamento.' },
    ],
    services: [],
    bodyHtml: '',
    depoimentoResumo: 'No vídeo, o case do Chris Tattoo: marketing estratégico que deu direção a uma marca pessoal, com tráfego qualificado e CRM que trouxeram previsibilidade e o cliente ideal chegando.',
    videoId: 'EbfFj4KttlY',
    videoPoster: '/images/depoimentos/chris-tattoo.webp',
    videoName: 'Marketing para tatuador: o case do Chris Tattoo',
    videoUploadDate: '2026-02-25T08:38:17-08:00',
    coverAlt: 'Case de sucesso Chris Tattoo com a OxBrand',
    dateISO: '2026-02-25',
    published: true,
  },
  {
    slug: 'motobras',
    client: 'Motobras Premium',
    metaTitle: 'Case Motobras Premium: boutique e motocenter RJ | OxBrand',
    metaDescription: 'Case Motobras Premium com a OxBrand: de uma operação sem direção à maior boutique e motocenter multimarcas do Rio de Janeiro em 24 meses. Branding, social, tráfego e posicionamento.',
    segment: 'Motocenter e boutique premium',
    headline: 'Motobras Premium: a maior boutique e motocenter multimarcas do Rio de Janeiro',
    summary: 'De uma operação sem direcionamento à liderança do segmento premium de motos no Rio de Janeiro, em 24 meses de parceria, com marketing tratado como engenharia, não como arte.',
    bullets: [
      'Marketing administrado do zero até se tornar a maior boutique e o maior motocenter multimarcas do Rio de Janeiro, em 24 meses de parceria.',
      'Branding robusto, como se a empresa tivesse muito mais tempo de vida. Comunicação e conteúdo profissionalizados, alinhados ao posicionamento premium da marca.',
      'Tráfego pago estruturado do zero, com campanhas segmentadas e otimização contínua.',
      'Direcionamento estratégico que substituiu uma operação sem processo por gestão profissional de marketing e conteúdo.',
    ],
    metrics: [
      { value: '24 meses', label: 'de parceria contínua' },
      { value: '1º lugar', label: 'boutique e motocenter multimarcas no RJ' },
      { value: 'Premium', label: 'posicionamento de marca consolidado' },
    ],
    areas: [
      { tag: 'Site', img: '/nossos-clientes/motobras/site.webp', alt: 'Site da Motobras Premium desenvolvido pela OxBrand', href: '/solucoes/desenvolvimento-de-sites', text: 'Presença digital construída com consistência de branding e conteúdo de autoridade, alinhada ao posicionamento premium da marca, gerando reconhecimento e confiança como se a empresa tivesse muito mais tempo de estrada.' },
      { tag: 'Social Media', img: '/nossos-clientes/motobras/social-media.webp', alt: 'Social media da Motobras Premium pela OxBrand', href: '/solucoes', text: 'Conteúdo profissionalizado e consistência visual alinhados ao posicionamento premium, construindo autoridade e conexão com o público certo.' },
      { tag: 'Campanhas Ads', img: '/nossos-clientes/motobras/campanha-ads.webp', alt: 'Campanhas de tráfego pago da Motobras Premium pela OxBrand', href: '/solucoes/gestao-de-trafego-pago', text: 'Tráfego pago estruturado do zero, com segmentação precisa e otimização contínua baseada em dados reais, não em achismo.' },
      { tag: 'Posicionamento de Marca', href: '/solucoes/assessoria-em-marketing', text: 'Estratégia de comunicação e oferta alinhadas ao objetivo da marca, sustentando o crescimento até a liderança do segmento de motos premium no Rio de Janeiro.' },
    ],
    depoimentoResumo: 'No vídeo, o case da Motobras Premium: uma operação sem direcionamento de marketing que, em 24 meses de parceria com a OxBrand, virou a maior boutique e o maior motocenter multimarcas do Rio de Janeiro, com branding, conteúdo e tráfego tratados como engenharia.',
    videoId: 'tODEyWH6HvM',
    videoPoster: '/images/depoimentos/motobras.webp',
    videoName: 'Marketing para motocenter: o case da Motobras Premium',
    videoUploadDate: '2026-02-25T09:38:21-08:00',
    services: [],
    bodyHtml: '',
    coverAlt: 'Case de sucesso Motobras Premium com a OxBrand',
    dateISO: '2026-02-25',
    published: true,
  },
  {
    slug: 'ral-truck',
    client: 'RalTruck',
    metaTitle: 'Case RalTruck: geração constante de leads em 1 ano | OxBrand',
    metaDescription: 'Case RalTruck com a OxBrand: marketing estruturado do zero à geração constante de leads e novos clientes em 1 ano, no setor de reforma de implementos rodoviários.',
    segment: 'Reforma de implementos rodoviários',
    headline: 'RalTruck: do zero à geração constante de leads em 1 ano de parceria',
    summary: 'De uma operação sem direcionamento de marketing à geração constante de leads e clientes novos, em 1 ano de parceria, no setor de reforma de implementos rodoviários, com marketing tratado como processo, não como aposta.',
    bullets: [
      'Marketing estruturado do zero até se tornar uma fonte constante de leads e novos clientes, em 1 ano de parceria.',
      'Tráfego pago estruturado do zero, com campanhas e otimização contínua voltadas à geração de leads qualificados para reforma de implementos rodoviários.',
      'Direcionamento estratégico que substituiu a insegurança inicial sobre como chegar até os clientes por uma gestão profissional e consistente de marketing.',
    ],
    metrics: [
      { value: '1 ano', label: 'de parceria' },
      { value: 'Leads', label: 'geração constante e qualificada' },
      { value: 'Do zero', label: 'marketing estruturado com processo' },
    ],
    areas: [
      { tag: 'Campanhas Ads', img: '/nossos-clientes/ral-truck/campanha-ads.webp', alt: 'Campanhas de tráfego pago da RalTruck pela OxBrand', href: '/solucoes/gestao-de-trafego-pago', text: 'Tráfego pago estruturado desde o início da parceria, com segmentação voltada à geração de leads reais e novos clientes, sem depender apenas de indicação ou boca a boca.' },
      { tag: 'Posicionamento de Marca', href: '/solucoes/assessoria-em-marketing', text: 'Estratégia de comunicação e visibilidade alinhada ao crescimento acelerado da RalTruck, sustentando a confiança do cliente e o reconhecimento da marca no setor rodoviário.' },
    ],
    services: [],
    bodyHtml: '',
    depoimentoResumo: 'No vídeo, o case da RalTruck: marketing estruturado do zero à geração constante de leads e novos clientes em 1 ano, no setor de reforma de implementos rodoviários.',
    videoId: 'sAnFkmpsakY',
    videoName: 'Marketing para o setor de caminhões: case da Ral Truck',
    videoUploadDate: '2026-02-25T07:32:05-08:00',
    videoAspect: 'portrait',
    videoPoster: '/images/depoimentos/ral-truck.webp',
    coverAlt: 'Case de sucesso RalTruck com a OxBrand',
    dateISO: '2026-02-25',
    published: true,
  },
  {
    slug: 'truck-center-express',
    client: 'Truck Center Express',
    metaTitle: 'Case Truck Center Express: +30% na carteira de clientes | OxBrand',
    metaDescription: 'Case Truck Center Express com a OxBrand: direção estratégica, site, CRM e tráfego qualificado que ampliaram a carteira de clientes em mais de 30% no segmento de transportes.',
    segment: 'Transportes e caminhões',
    headline: 'Truck Center Express: +30% na carteira de clientes com marketing estratégico',
    summary: 'De não saber o que fazer a um crescimento real e mensurável: mapeamento completo, branding alinhado ao segmento de transportes e tráfego qualificado que ampliaram a carteira de clientes em mais de 30%.',
    bullets: [
      'Marketing administrado com direção estratégica, saindo do não saber o que fazer para um crescimento real e mensurável.',
      'Branding e comunicação alinhados ao posicionamento no segmento de transportes, gerando autoridade e conexão com o público certo.',
      'Mais de 30% de aumento na carteira de clientes, com campanhas de tráfego qualificado e segmentação precisa.',
      'Treinamento e direcionamento do time comercial com técnicas e automações, aliado ao uso correto do CRM.',
    ],
    metrics: [
      { value: '+30%', label: 'na carteira de clientes' },
      { value: 'CRM', label: 'processo comercial estruturado' },
      { value: 'Tráfego', label: 'qualificado e segmentado' },
    ],
    areas: [
      { tag: 'Site', img: '/nossos-clientes/truck-center-express/site.webp', alt: 'Site da Truck Center Express desenvolvido pela OxBrand', href: '/solucoes/desenvolvimento-de-sites', text: 'Plataforma estruturada para conectar a empresa ao cliente certo, traduzindo o posicionamento e transformando visitantes em oportunidades reais de negócio.' },
      { tag: 'CRM', img: '/nossos-clientes/truck-center-express/crm.webp', alt: 'CRM implementado para a Truck Center Express pela OxBrand', href: '/solucoes/crm-kommo', text: 'Sistema implementado para organizar o relacionamento e dar previsibilidade ao comercial, com treinamento do time e automações que reduziram o tempo de resposta e aumentaram a conversão.' },
      { tag: 'Campanhas Ads', img: '/nossos-clientes/truck-center-express/campanha-ads.webp', alt: 'Campanhas de tráfego pago da Truck Center Express pela OxBrand', href: '/solucoes/gestao-de-trafego-pago', text: 'Tráfego qualificado a partir do direcionamento estratégico da marca, com segmentação precisa para atrair o perfil de cliente ideal.' },
    ],
    depoimentoResumo: 'No vídeo, o case da Truck Center Express: de não saber o que fazer a um crescimento real e mensurável, com mapeamento estratégico, branding alinhado ao setor de transportes e tráfego qualificado que ampliou a carteira de clientes em mais de 30%.',
    videoId: 'gNHf86huuYs',
    videoPoster: '/images/depoimentos/truck-center-express.webp',
    videoName: 'Marketing para caminhões: +30% de clientes na Truck Center Express',
    videoUploadDate: '2026-02-25T09:45:26-08:00',
    services: [],
    bodyHtml: '',
    coverAlt: 'Case de sucesso Truck Center Express com a OxBrand',
    dateISO: '2026-02-25',
    published: true,
  },
]

export const CASE_SLUGS = CASES.map((c) => c.slug)

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug)
}

export function coverForCase(slug: string): string {
  return `/nossos-clientes/${slug}-cover.png`
}
