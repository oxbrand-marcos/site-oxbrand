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
  videoId?: string
  videoName?: string
  videoUploadDate?: string
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
  {
    slug: 'chris-tattoo',
    client: 'Chris Tattoo',
    metaTitle: 'Case Chris Tattoo: marketing que deu direção à marca pessoal | OxBrand',
    metaDescription: 'Case Chris Tattoo com a OxBrand: tráfego qualificado e CRM que deram direção a uma marca pessoal, atraindo o cliente ideal com previsibilidade. Marketing com norte, não com achismo.',
    segment: 'Tatuador e marca pessoal',
    headline: 'Chris Tattoo: um divisor de águas na carreira, com marketing que deu direção',
    summary: 'Marketing estratégico que deu direção onde antes não existia, transformando uma marca pessoal em uma operação com norte, previsibilidade e o cliente ideal chegando.',
    services: ['Gestão de Tráfego Pago', 'CRM e Processo Comercial'],
    metrics: [],
    bodyHtml: `
<p class="lead">Para uma marca pessoal, o maior salto não é técnico, é de direção. O trabalho com o Chris foi exatamente isso: um divisor de águas na carreira, com marketing estratégico que deu norte onde antes era só improviso. Duas frentes sustentaram a virada: tráfego qualificado e um CRM que organizou o comercial.</p>
<h2>Áreas que transformamos</h2>
<h3>Campanhas de ADS</h3>
<img src="/nossos-clientes/chris-tattoo/campanha-ads.webp" alt="Campanhas de tráfego pago do Chris Tattoo pela OxBrand" loading="lazy" width="900" height="900" />
<p>Tráfego qualificado estruturado a partir do posicionamento da marca pessoal. Campanhas pensadas para atrair exatamente o perfil de cliente ideal, com segmentação precisa e mensuração constante, marketing com norte, não com achismo. Veja a nossa <a href="/solucoes/gestao-de-trafego-pago">gestão de tráfego pago</a>.</p>
<h3>CRM</h3>
<img src="/nossos-clientes/chris-tattoo/crm.webp" alt="CRM implementado para o Chris Tattoo pela OxBrand" loading="lazy" width="900" height="900" />
<p>Sistema implementado para organizar o relacionamento com clientes e dar previsibilidade ao processo comercial. A plataforma colocou ordem na operação: os clientes passaram a chegar e resolver seus problemas com mais fluidez, agilidade e acompanhamento adequado. É o que fazemos no <a href="/solucoes/crm-kommo">CRM Kommo</a>.</p>
<div class="callout"><p>A OxBrand deu direção estratégica à marca pessoal do Chris, com tráfego qualificado e CRM que trouxeram previsibilidade. Somos uma <a href="/agencia-de-marketing-digital-mogi-das-cruzes">agência de marketing digital em Mogi das Cruzes</a> com atuação nacional.</p></div>
`,
    coverAlt: 'Case de sucesso Chris Tattoo com a OxBrand',
    dateISO: '2026-02-25',
    published: true,
  },
  {
    slug: 'motobras',
    client: 'Motobras Premium',
    metaTitle: 'Case Motobras Premium: a maior boutique e motocenter do RJ | OxBrand',
    metaDescription: 'Case Motobras Premium com a OxBrand: de uma operação sem direção à maior boutique e motocenter multimarcas do Rio de Janeiro em 24 meses. Branding, social, tráfego e posicionamento.',
    segment: 'Motocenter e boutique premium',
    headline: 'Motobras Premium: a maior boutique e motocenter multimarcas do Rio de Janeiro',
    summary: 'De uma operação sem direcionamento à liderança do segmento premium de motos no Rio de Janeiro, em 24 meses de parceria, com marketing tratado como engenharia, não como arte.',
    services: ['Branding e Posicionamento', 'Social Media e Conteúdo', 'Gestão de Tráfego Pago', 'Direcionamento Estratégico'],
    metrics: [
      { value: '24 meses', label: 'de parceria' },
      { value: '1º lugar', label: 'boutique e motocenter multimarcas no RJ' },
      { value: 'Premium', label: 'posicionamento de marca consolidado' },
    ],
    videoId: 'tODEyWH6HvM',
    videoName: 'Marketing para motocenter: o case da Motobras Premium',
    videoUploadDate: '2026-02-25T09:38:21-08:00',
    bodyHtml: `
<p class="lead">Quando a parceria começou, a Motobras Premium era uma operação sem direcionamento de marketing. Em 24 meses, virou a maior boutique e o maior motocenter multimarcas do Rio de Janeiro. O que mudou não foi sorte, foi método: branding, conteúdo, tráfego e posicionamento tratados como engenharia, com processo e otimização contínua.</p>
<h2>Áreas que transformamos</h2>
<h3>Site</h3>
<img src="/nossos-clientes/motobras/site.webp" alt="Site da Motobras Premium desenvolvido pela OxBrand" loading="lazy" width="900" height="900" />
<p>Presença digital construída com consistência de branding e conteúdo de autoridade. A comunicação visual e textual foi alinhada ao posicionamento premium da marca, gerando reconhecimento e confiança como se a empresa tivesse muito mais tempo de estrada. Veja como estruturamos <a href="/solucoes/desenvolvimento-de-sites">desenvolvimento de sites</a>.</p>
<h3>Social media</h3>
<img src="/nossos-clientes/motobras/social-media.webp" alt="Social media da Motobras Premium pela OxBrand" loading="lazy" width="900" height="900" />
<p>Conteúdo profissionalizado e alinhado ao posicionamento premium, construindo autoridade e conexão com o público certo. É a lógica que aplicamos em <a href="/solucoes/copywriting-e-redacao">copywriting e conteúdo</a>.</p>
<h3>Campanhas de ADS</h3>
<img src="/nossos-clientes/motobras/campanha-ads.webp" alt="Campanhas de tráfego pago da Motobras Premium pela OxBrand" loading="lazy" width="900" height="900" />
<p>Tráfego pago estruturado do zero, com segmentação precisa e otimização contínua baseada em dados reais, não em achismo. Conheça a nossa <a href="/solucoes/gestao-de-trafego-pago">gestão de tráfego pago</a>.</p>
<h3>Posicionamento de marca</h3>
<p>Estratégia de comunicação e oferta alinhadas ao objetivo da marca, sustentando o crescimento até a liderança do segmento de motocicletas premium no Rio de Janeiro. Esse direcionamento é o coração da nossa <a href="/solucoes/assessoria-em-marketing">assessoria de marketing</a>.</p>
<div class="callout"><p>A OxBrand tratou o marketing da Motobras Premium como engenharia: estratégia, execução e otimização contínua até a liderança do segmento. Somos uma <a href="/agencia-de-marketing-digital-mogi-das-cruzes">agência de marketing digital em Mogi das Cruzes</a> com atuação nacional.</p></div>
`,
    coverAlt: 'Case de sucesso Motobras Premium com a OxBrand',
    dateISO: '2026-02-25',
    published: true,
  },
  draft('Ral Truck', 'ral-truck', ''),
  {
    slug: 'truck-center-express',
    client: 'Truck Center Express',
    metaTitle: 'Case Truck Center Express: +30% na carteira de clientes | OxBrand',
    metaDescription: 'Case Truck Center Express com a OxBrand: direção estratégica, site, CRM e tráfego qualificado que ampliaram a carteira de clientes em mais de 30% no segmento de transportes.',
    segment: 'Transportes e caminhões',
    headline: 'Truck Center Express: +30% na carteira de clientes com marketing estratégico',
    summary: 'De não saber o que fazer a um crescimento real e mensurável: mapeamento completo, branding alinhado ao segmento de transportes e tráfego qualificado que ampliaram a carteira de clientes em mais de 30%.',
    services: ['Desenvolvimento de Site', 'CRM e Processo Comercial', 'Gestão de Tráfego Pago', 'Direcionamento Estratégico'],
    metrics: [
      { value: '+30%', label: 'na carteira de clientes' },
      { value: 'CRM', label: 'processo comercial estruturado' },
      { value: 'Tráfego', label: 'qualificado e segmentado' },
    ],
    videoId: 'gNHf86huuYs',
    videoName: 'Marketing para caminhões: +30% de clientes na Truck Center Express',
    videoUploadDate: '2026-02-25T09:45:26-08:00',
    bodyHtml: `
<p class="lead">A Truck Center Express saiu do não saber o que fazer para um crescimento real e mensurável. Um mapeamento completo direcionou a empresa exatamente para onde ela precisava chegar, e o resultado apareceu na conta que importa: mais de 30% de aumento na carteira de clientes.</p>
<h2>Áreas que transformamos</h2>
<h3>Site</h3>
<img src="/nossos-clientes/truck-center-express/site.webp" alt="Site da Truck Center Express desenvolvido pela OxBrand" loading="lazy" width="900" height="900" />
<p>Plataforma estruturada para conectar a Truck Center Express ao cliente certo. Mapeamento completo do posicionamento e direcionamento estratégico para que a presença digital traduzisse exatamente onde a empresa queria chegar, transformando visitantes em oportunidades reais de negócio. Veja o nosso <a href="/solucoes/desenvolvimento-de-sites">desenvolvimento de sites</a>.</p>
<h3>CRM</h3>
<img src="/nossos-clientes/truck-center-express/crm.webp" alt="CRM implementado para a Truck Center Express pela OxBrand" loading="lazy" width="900" height="900" />
<p>Sistema implementado para organizar o relacionamento com clientes e dar previsibilidade ao processo comercial, com treinamento do time e automações que reduziram o tempo de resposta e aumentaram a conversão. É o que entregamos no <a href="/solucoes/crm-kommo">CRM Kommo</a>.</p>
<h3>Campanhas de ADS</h3>
<img src="/nossos-clientes/truck-center-express/campanha-ads.webp" alt="Campanhas de tráfego pago da Truck Center Express pela OxBrand" loading="lazy" width="900" height="900" />
<p>Tráfego qualificado estruturado a partir do direcionamento estratégico da marca, com segmentação precisa para atrair exatamente o perfil de cliente ideal. Conheça a nossa <a href="/solucoes/gestao-de-trafego-pago">gestão de tráfego pago</a>.</p>
<div class="callout"><p>A OxBrand deu direção à Truck Center Express e ampliou a carteira de clientes em mais de 30%, com site, CRM e tráfego qualificado. Somos uma <a href="/agencia-de-marketing-digital-mogi-das-cruzes">agência de marketing digital em Mogi das Cruzes</a> com atuação nacional.</p></div>
`,
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
