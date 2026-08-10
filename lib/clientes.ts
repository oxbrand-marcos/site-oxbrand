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
  {
    slug: 'bmr-advogados',
    client: 'BMR Advogados',
    metaTitle: 'Case BMR: rebranding de escritório de advocacia | OxBrand',
    metaDescription: 'Rebranding da BMR Advogados: identidade visual, posicionamento e site à altura de +20 anos de autoridade jurídica. Case OxBrand.',
    segment: 'Advocacia · Branding',
    headline: 'BMR Advogados: o rebranding que traduziu 20 anos de autoridade',
    summary: 'De uma identidade visual desatualizada a um branding moderno e luxuoso, que transmite a solidez de um escritório com mais de 20 anos de experiência.',
    bullets: [
      'Rebranding completo do zero, substituindo uma identidade visual datada por um conceito moderno, sofisticado e alinhado ao mercado jurídico de alto padrão.',
      'Identidade visual aplicada de forma integrada em todos os pontos de contato: propagandas, vídeos institucionais e até nas petições do escritório.',
      'Percepção de autoridade e tradição elevada instantaneamente: a nova identidade passou a transmitir a solidez de um escritório com mais de 20 anos de mercado.',
      'Direcionamento estratégico de marca conduzido de ponta a ponta, com aprovação e satisfação total do cliente.',
    ],
    metrics: [
      { value: '+20 anos', label: 'de história e autoridade traduzidos na marca' },
      { value: '100%', label: 'dos pontos de contato com a nova identidade' },
      { value: 'OAB', label: 'site em conformidade, autoridade sem apelo comercial' },
      { value: 'Satisfação total', label: 'direcionamento de marca de ponta a ponta' },
    ],
    areas: [
      { tag: 'Branding / Identidade Visual', img: '/nossos-clientes/bmr-advogados/branding.webp', alt: 'Rebranding da BMR Advogados: nova identidade visual premium para escritório de advocacia com +20 anos', href: '/marketing-para-advogados', text: 'Reconstrução completa da identidade visual do escritório, saindo de um conceito ultrapassado para um branding moderno, elegante e alinhado ao posicionamento premium exigido pelo mercado jurídico, condizente com os +20 anos de experiência do cliente.' },
      { tag: 'Aplicação da Marca', href: '/marketing-para-advogados', text: 'Nova identidade aplicada de forma consistente em propagandas, vídeos e documentos oficiais (incluindo petições), garantindo que a percepção de tradição e autoridade de um escritório com +20 anos de mercado se mantenha em qualquer ponto de contato com o cliente.' },
      { tag: 'Posicionamento de Marca', href: '/solucoes/assessoria-em-marketing', text: 'Estratégia de comunicação visual pensada para transmitir modernidade, luxo e a solidez de uma trajetória de mais de 20 anos, elevando a percepção de valor do escritório perante clientes e no mercado jurídico como um todo.' },
      { tag: 'Site', img: '/nossos-clientes/bmr-advogados/site.webp', alt: 'Novo site da BMR Advogados alinhado à nova identidade visual, em conformidade com a OAB', href: '/solucoes/desenvolvimento-de-sites', text: 'Plataforma digital alinhada à nova identidade visual, transmitindo a solidez e a experiência desde o primeiro contato do visitante, reforçando autoridade antes mesmo de qualquer atendimento. Respeitando as diretrizes da OAB, que exigem caráter consultivo e informativo na comunicação do advogado, o site educa o visitante e posiciona o escritório como referência já na etapa de pesquisa, sem apelo comercial, mas com autoridade.' },
    ],
    depoimentoResumo: 'No vídeo, Sabrina Blaustein, da BMR – Blaustein, Mendes & Ramalho Advogados, conta o rebranding do escritório com a OxBrand: de uma identidade datada a um branding moderno e luxuoso, que traduz os mais de 20 anos de autoridade jurídica em todos os pontos de contato, do posicionamento ao novo site em conformidade com a OAB.',
    videoId: 'h-xsI7o5ELY',
    videoName: 'Marketing para advogados: o rebranding da BMR Advogados',
    videoUploadDate: '2026-07-29T08:00:00-03:00',
    videoAspect: 'portrait',
    videoPoster: '/images/depoimentos/bmr-advogados.webp',
    services: [],
    bodyHtml: '',
    coverAlt: 'Rebranding da BMR Advogados: nova identidade visual premium para escritório de advocacia com +20 anos',
    dateISO: '2026-07-29',
    published: true,
  },
  {
    slug: 'comissao-direito-empresarial-oab-mogi',
    client: 'Comissão de Direito Empresarial da OAB Mogi das Cruzes',
    metaTitle: 'Case Comissão de Direito Empresarial OAB Mogi | OxBrand',
    metaDescription: 'Case da Comissão de Direito Empresarial da OAB Mogi das Cruzes: branding, social media, boletim informativo e site em conformidade com a OAB, à altura de mais de 3 anos de atuação. Agência OxBrand.',
    segment: 'Direito empresarial · OAB',
    headline: 'Comissão de Direito Empresarial da OAB Mogi das Cruzes: identidade e autoridade à altura de mais de 3 anos de atuação',
    summary: 'Da Comissão de Direito Empresarial sem identidade própria a uma referência de profissionalismo, com branding e conteúdo à altura de sua atuação consolidada há mais de 3 anos.',
    bullets: [
      'Identidade visual construída e aplicada em todos os pontos de contato digitais, redes sociais e materiais de divulgação, com o profissionalismo condizente com mais de 3 anos de atuação consolidada.',
      'Gestão completa das redes sociais, da criação das postagens à organização dos vídeos, elevando a percepção profissional da comissão para quem acompanha o Instagram.',
      'Boletim informativo produzido de forma recorrente, garantindo comunicação consistente com membros e público, sem sobrecarregar o time interno.',
      'Posicionamento de marca que trouxe uma nova mensagem, muito mais profissional, mudando como a comissão é vista internamente e pelo mercado.',
    ],
    metrics: [
      { value: '+3 anos', label: 'de atuação consolidada traduzidos na marca' },
      { value: '100%', label: 'dos pontos de contato com identidade própria' },
      { value: 'OAB', label: 'comunicação em conformidade, autoridade sem apelo comercial' },
      { value: 'Boletim', label: 'comunicação recorrente com membros e público' },
    ],
    areas: [
      { tag: 'Branding / Identidade Visual', href: '/marketing-para-advogados', text: 'Construção da identidade visual da comissão em todos os pontos de contato: digital, redes sociais, páginas e materiais de divulgação. Um visual estratégico que traduz o profissionalismo e o posicionamento condizentes com mais de 3 anos de atuação consolidada.' },
      { tag: 'Social Media', img: '/nossos-clientes/comissao-direito-empresarial-oab-mogi/social-media.webp', alt: 'Grade do Instagram da Comissão de Direito Empresarial da OAB Mogi das Cruzes, gerida pela OxBrand', href: '/solucoes', text: 'Gestão completa das redes sociais, da criação das postagens à organização dos vídeos, elevando a percepção profissional da comissão para quem acompanha o Instagram.' },
      { tag: 'Conteúdo / Boletim Informativo', href: '/solucoes/copywriting-e-redacao', text: 'Produção recorrente do boletim informativo, garantindo comunicação consistente e profissional com os membros e o público, reforçando a autoridade da comissão no meio jurídico empresarial, sem sobrecarregar o time interno.' },
      { tag: 'Posicionamento de Marca', href: '/solucoes/assessoria-em-marketing', text: 'Estratégia de comunicação que trouxe uma nova mensagem, muito mais profissional, mudando a forma como a comissão é vista tanto internamente quanto pelo mercado.' },
      { tag: 'Site', img: '/nossos-clientes/comissao-direito-empresarial-oab-mogi/site.webp', alt: 'Site da Comissão de Direito Empresarial da OAB Mogi das Cruzes desenvolvido pela OxBrand', href: '/solucoes/desenvolvimento-de-sites', text: 'Presença digital condizente com a relevância da comissão, reforçando o posicionamento construído nas redes sociais e no boletim. Respeitando as diretrizes da OAB, que exigem caráter consultivo e informativo na comunicação do advogado, o site consolida a autoridade ao educar e informar o visitante, sem apelo comercial, à altura de mais de 3 anos como referência no meio jurídico empresarial.' },
    ],
    depoimentoResumo: 'No vídeo, o case da Comissão de Direito Empresarial da OAB Mogi das Cruzes: de uma comissão sem identidade própria a uma referência de profissionalismo, com branding, social media, boletim informativo e um site em conformidade com a OAB, à altura de mais de 3 anos de atuação consolidada.',
    videoId: 'h0Ul21kjbt4',
    videoName: 'Marketing para OAB: o case da Comissão de Direito Empresarial de Mogi das Cruzes',
    videoUploadDate: '2026-08-10T08:00:00-03:00',
    videoAspect: 'portrait',
    videoPoster: '/images/depoimentos/comissao-oab.webp',
    services: [],
    bodyHtml: '',
    coverAlt: 'Case de sucesso da Comissão de Direito Empresarial da OAB Mogi das Cruzes com a OxBrand',
    dateISO: '2026-08-10',
    published: true,
  },
  {
    slug: 'chris-tattoo',
    client: 'Chris Tattoo',
    metaTitle: 'Case Chris Tattoo: marketing de marca pessoal | OxBrand',
    metaDescription: 'Case Chris Tattoo: tráfego qualificado e CRM que deram direção a uma marca pessoal, atraindo o cliente ideal com previsibilidade.',
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
    metaDescription: 'Case Motobras Premium: de operação sem direção à maior boutique e motocenter multimarcas do RJ em 24 meses. Branding, social e tráfego.',
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
    metaDescription: 'Case RalTruck: marketing estruturado do zero à geração constante de leads e clientes em 1 ano, no setor de implementos rodoviários.',
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
    metaDescription: 'Case Truck Center Express: direção estratégica, site, CRM e tráfego que ampliaram a carteira de clientes em +30% em transportes.',
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
