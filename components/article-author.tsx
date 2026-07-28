import type { ElementType } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface AuthorData {
  slug: string
  name: string
  role: string
  avatar: string
  hasProfile: boolean
  /** Frase curta de apresentação (bio de 1 linha). */
  headline: string
  /** Descrição longa, em parágrafos. */
  bio: string[]
  /** Áreas de especialidade (tags), bom para SEO temático. */
  especialidades: string[]
  /** Frase de destaque (aspas), exibida com realce no perfil. */
  quote?: string
  linkedin?: string
  instagram?: string
  email?: string
  facebook?: string
  threads?: string
  twitter?: string
  youtube?: string
  whatsapp?: string
  local?: string
}

const OX_AVATAR = '/images/ox-avatar.png'
const OX_LINKEDIN = 'https://www.linkedin.com/company/oxbrand-br/'
const OX_INSTAGRAM = 'https://www.instagram.com/oxbrand.br/'
const OX_EMAIL = 'contato@oxbrand.com.br'
const LOCAL = 'Mogi das Cruzes, SP'

// NOTA: bio/headline/especialidades são placeholders genéricos, a substituir pelos dados reais.
// LinkedIn e Instagram dos sócios (Marcos e Walquiria) já são reais.
const REDACAO_ESP = ['Marketing de Conteúdo', 'SEO', 'Copywriting', 'Redes Sociais']
const REDACAO_HEADLINE = 'Integra o time de conteúdo da OxBrand, escrevendo sobre marketing de performance com foco em resultado.'
const REDACAO_BIO = [
  'Faz parte do time de conteúdo da OxBrand, agência de marketing de performance em Mogi das Cruzes. Produz materiais práticos sobre tráfego pago, CRM, SEO e conversão, sempre a partir da operação real com mais de 450 marcas atendidas.',
  'Acredita que bom conteúdo nasce de método e de dados, não de achismo. Escreve para ajudar empreendedores e times de marketing a tomarem decisões melhores e a transformarem presença digital em crescimento previsível.',
]

function redator(slug: string, name: string): AuthorData {
  return {
    slug, name, role: 'Redação e Conteúdo', avatar: `/images/authors/${slug}.jpg`,
    hasProfile: true, headline: REDACAO_HEADLINE, bio: REDACAO_BIO, especialidades: REDACAO_ESP,
    linkedin: OX_LINKEDIN, instagram: OX_INSTAGRAM, email: OX_EMAIL, local: LOCAL,
  }
}

export const AUTHORS: Record<string, AuthorData> = {
  oxbrand: {
    slug: 'oxbrand', name: 'OxBrand', role: 'Equipe de Marketing', avatar: OX_AVATAR,
    hasProfile: true,
    headline: 'A equipe de marketing de performance da OxBrand: análises de tráfego pago, CRM, SEO e conversão direto de quem opera todos os dias.',
    bio: [
      'A OxBrand é uma agência de marketing digital de performance em Mogi das Cruzes, com atuação nacional. Os artigos assinados pela equipe reúnem o que aprendemos operando tráfego pago, CRM, sites e SEO para mais de 450 marcas.',
      'Nosso foco não é métrica de vaidade, e sim crescimento previsível: estratégia, dados e integração entre marketing e comercial. Cada conteúdo aqui nasce da prática, não da teoria.',
    ],
    especialidades: ['Tráfego Pago', 'CRM e Automação', 'SEO e Conteúdo', 'Conversão'],
    linkedin: OX_LINKEDIN, instagram: OX_INSTAGRAM, email: OX_EMAIL, facebook: 'https://www.facebook.com/oxbrand.oficial', youtube: 'https://www.youtube.com/@oxbrand_br', whatsapp: 'https://wa.me/5511921425351', local: LOCAL,
  },
  'marcos-blaustein': {
    slug: 'marcos-blaustein', name: 'Marcos Blaustein', role: 'CEO e Estrategista',
    avatar: '/images/authors/marcos-blaustein.jpg', hasProfile: true,
    headline: 'Sócio-fundador da OxBrand. Lidera estratégia, tecnologia e crescimento previsível para mais de 450 marcas.',
    bio: [
      'Sócio-fundador da OxBrand, lidera a direção estratégica, a inteligência de dados e a inovação da agência, conectando visão de negócio, performance e tecnologia. À frente de um time multidisciplinar, atua na construção de operações de marketing mais estruturadas, mensuráveis e orientadas ao crescimento.',
      'Sua atuação une estratégia, tráfego pago, dados e capacidade de execução para transformar marketing em um sistema previsível de geração de resultado. Ao longo de sua trajetória, esteve por trás de estratégias que movimentaram dezenas de milhões de reais em vendas para empresas de diferentes segmentos.',
      'Acredita que crescimento não acontece por acaso, mas pela combinação entre leitura de cenário, tomada de decisão, acompanhamento de indicadores e disciplina para executar o que precisa ser feito.',
    ],
    quote: 'Resultado não respeita discurso, intenção ou vaidade. Ele responde a dado, decisão e à coragem de fazer o que precisa ser feito.',
    especialidades: ['Estratégia de Marketing', 'Tráfego Pago', 'CRM e Automação', 'Growth'],
    linkedin: 'https://www.linkedin.com/in/marcos-blaustein-5302712a/',
    instagram: 'https://www.instagram.com/marcosblaustein/',
    email: OX_EMAIL, local: LOCAL,
  },
  'walquiria-blaustein': {
    slug: 'walquiria-blaustein', name: 'Walquiria Blaustein', role: 'CEO, Comunicação e Branding',
    avatar: '/images/authors/walquiria-blaustein.jpg', hasProfile: true,
    headline: 'Sócia-fundadora da OxBrand. Lidera comunicação, branding e operações para transformar posicionamento em marcas fortes e consistentes.',
    bio: [
      'Sócia-fundadora da OxBrand, lidera as áreas de conteúdo, comunicação e operações da agência, conectando estratégia, gestão e execução. Formada em Administração e Marketing, coordena um time multidisciplinar voltado à performance, ao fortalecimento de posicionamento e à consolidação de marcas.',
      'Sua atuação une visão de negócio, branding empresarial e capacidade operacional para transformar estratégia em presença, percepção e crescimento. Acredita que marcas fortes não são construídas apenas pela comunicação, mas pela consistência entre posicionamento, experiência, identidade e entrega.',
      'Como defende em seu e-book Comunicação Raiz, antes de comunicar para o mercado, uma marca precisa compreender com clareza quem é, o que defende e por que deseja ser lembrada.',
    ],
    quote: 'Quem constrói comunicação para caber na tendência será esquecido junto com ela. Legado exige raiz, posicionamento e coragem para não soar como todo mundo.',
    especialidades: ['Branding empresarial', 'Estratégia de comunicação', 'Gestão de conteúdo', 'Posicionamento de marca', 'Operações'],
    linkedin: 'https://www.linkedin.com/in/walquiria-costa-blaustein-a202091a5/',
    instagram: 'https://www.instagram.com/walquiriablaustein/',
    email: OX_EMAIL, local: LOCAL,
  },
  'joane-guimaraes': {
    slug: 'joane-guimaraes', name: 'Joane Guimarães', role: 'Líder de Execução Visual',
    avatar: '/images/authors/joane-guimaraes.jpg', hasProfile: true,
    headline: 'Lidera a execução visual da OxBrand, transformando estratégia e posicionamento em identidades e experiências de marca consistentes.',
    bio: [
      'Líder de Execução Visual da OxBrand, conduz a tradução de estratégias, conceitos e posicionamentos em soluções visuais consistentes. Formada em Design Gráfico, atua na construção de identidades e peças que conectam intenção, estética e funcionalidade.',
      'À frente da execução criativa da agência, trabalha em conjunto com um time multidisciplinar para transformar direcionamentos estratégicos em experiências visuais capazes de gerar reconhecimento, percepção de valor e diferenciação.',
      'Além do design, mantém uma relação constante com a expressão artística por meio da pintura e de outras práticas criativas, ampliando seu repertório e fortalecendo um olhar autoral sobre formas, cores, composições e narrativas.',
      'Acredita que criatividade não é apenas ter boas ideias, mas saber dar forma, intenção e identidade a elas.',
    ],
    quote: 'Estética sem intenção é apenas decoração. Criação de verdade transforma estratégia em algo que o público reconhece, sente e não confunde.',
    especialidades: ['Coordenação visual', 'Design gráfico', 'Identidade de marca', 'Criação publicitária', 'Composição visual'],
    linkedin: OX_LINKEDIN, instagram: OX_INSTAGRAM, email: OX_EMAIL, local: LOCAL,
  },
  'murilo-novaes': {
    ...redator('murilo-novaes', 'Murilo Novaes'),
    role: 'Arquiteto de Automação',
    headline: 'Estrutura automações e processos que tornam a operação da OxBrand mais organizada, integrada e preparada para crescer.',
    bio: [
      'Arquiteto de Automação da OxBrand, atua no desenvolvimento, estruturação e evolução dos processos automatizados da agência. Graduando em Engenharia de Software, conecta lógica, tecnologia e visão de processo para transformar operações manuais em sistemas mais organizados, eficientes e confiáveis.',
      'Sua formação amplia a capacidade de analisar problemas, estruturar soluções e construir fluxos que funcionem de forma integrada. Na prática, aplica princípios da engenharia ao cotidiano da agência, criando automações que reduzem falhas, eliminam retrabalho e dão mais consistência à execução.',
      'Com valores pautados em responsabilidade, organização e respeito ao que é correto, acredita que tecnologia só gera valor quando existe método por trás dela. Seu trabalho não se limita a automatizar tarefas, mas a compreender processos, identificar fragilidades e construir estruturas que sustentem o crescimento da operação.',
      'Sua atuação combina raciocínio lógico, disciplina e atenção aos detalhes para transformar complexidade em processos claros, seguros e funcionais.',
    ],
    especialidades: ['Automação de processos', 'Engenharia de Software', 'Integração de sistemas'],
    quote: 'Automatizar o caos não é evoluir. Primeiro se organiza, depois se estrutura e só então se escala.',
    email: undefined, linkedin: 'https://www.linkedin.com/in/murilo-novaes-de-oliveira-27a3191a2', instagram: 'https://www.instagram.com/murilo_novaesz', facebook: 'https://www.facebook.com/share/1D7ErKq5cP/',
  },
  'breno-freire': {
    ...redator('breno-freire', 'Breno Freire'),
    role: 'Arquiteto Visual',
    headline: 'Conecta comunicação, narrativa e design para transformar ideias em peças visuais claras, estratégicas e reconhecíveis.',
    bio: [
      'Arquiteto Visual da OxBrand, atua na construção de soluções visuais que transformam ideias, estratégias e mensagens em peças claras, consistentes e capazes de gerar percepção de valor.',
      'Formado em Jornalismo, desenvolveu sua trajetória no design de forma prática, unindo repertório comunicacional, sensibilidade estética e experiência adquirida ao longo de diferentes projetos.',
      'Sua formação fortalece a capacidade de compreender contextos, organizar informações e construir narrativas, competências que hoje aplica diretamente à criação visual. Mais do que executar layouts, busca entender o que precisa ser comunicado, para quem e com qual intenção.',
      'Ao longo de sua experiência, consolidou um olhar atento à composição, à hierarquia da informação e aos detalhes que tornam uma mensagem mais clara e relevante. Sua atuação conecta conteúdo e design para construir peças que conduzem a leitura, reforçam posicionamentos e tornam marcas mais reconhecíveis.',
    ],
    especialidades: ['Design gráfico', 'Comunicação visual', 'Criação publicitária', 'Composição visual'],
    quote: 'Design não é preencher espaço. É eliminar ruído até que a mensagem encontre a forma certa de ser entendida.',
    email: undefined, linkedin: 'https://www.linkedin.com/in/breno-freire-2a505a24b/', instagram: 'https://www.instagram.com/brenoofr_/',
  },
  'julia-rodrigues': {
    ...redator('julia-rodrigues', 'Julia Rodrigues'),
    role: 'Líder de Execução de Performance',
    headline: 'Lidera a execução de mídia paga, conectando dados, otimização e estratégia para transformar investimento em crescimento mensurável.',
    bio: [
      'Líder de Execução de Performance da OxBrand, conduz a operação das estratégias de mídia paga, conectando planejamento, análise e execução para transformar investimento em crescimento mensurável. Sua trajetória foi construída no contato direto com campanhas, testes, otimizações e decisões orientadas por dados.',
      'À frente da execução de performance, acompanha indicadores, identifica oportunidades e direciona ajustes que tornam as campanhas mais eficientes e alinhadas aos objetivos de cada negócio. Seu trabalho combina visão analítica, agilidade e domínio operacional para transformar números em decisões e decisões em resultado.',
      'Ao longo da sua experiência, desenvolveu um olhar apurado para diferentes mercados, comportamentos e cenários de campanha. Sua autoridade está na consistência das entregas, na leitura crítica dos dados e na capacidade de agir com precisão diante do que cada operação exige.',
      'Com perfil firme e senso de liderança, acredita que performance exige mais do que domínio de plataforma. Exige clareza de objetivo, capacidade de adaptação e disposição para revisar rotas sempre que os dados indicarem um caminho melhor.',
    ],
    especialidades: ['Tráfego Pago', 'Gestão de campanhas', 'Análise de dados', 'Otimização de performance'],
    quote: 'Na performance, opinião não sustenta resultado. O dado mostra o caminho, a estratégia define a direção e a execução prova o que funciona.',
    email: undefined, linkedin: 'https://www.linkedin.com/in/j%C3%BAlia-rodrigues-90219a173', instagram: 'https://www.instagram.com/julliarodriguez',
  },
  'maria-clara': {
    ...redator('maria-clara', 'Maria Clara'),
    role: 'Arquiteta de Conteúdo',
    headline: 'Atua como Social Media, organizando processos e transformando estratégia em conteúdos consistentes para as marcas da OxBrand.',
    bio: [
      'Arquiteta de Conteúdo da OxBrand, atua na organização, construção e execução dos processos que transformam estratégia em comunicação. Iniciou sua trajetória na agência como jovem aprendiz e, desde então, evoluiu de forma consistente, ampliando responsabilidades, dominando etapas da operação e conquistando um papel relevante dentro do time.',
      'Mesmo sendo a integrante mais jovem da equipe, desenvolveu uma postura profissional marcada por organização, comprometimento e capacidade analítica. Seu crescimento foi sustentado pela dedicação ao aprendizado, pela atenção aos detalhes e pela maturidade com que conduz cada entrega.',
      'Atualmente, concilia o último ano do ensino médio com o início de sua formação em Marketing, conectando o conhecimento acadêmico à experiência prática construída dentro da agência. Ao longo desse percurso, recebeu treinamento, acompanhamento e confiança para compreender o processo de conteúdo de forma completa.',
      'Hoje, não ocupa mais uma posição de aprendizagem inicial. É uma profissional que conhece a operação, compreende a responsabilidade por trás de cada etapa e se tornou uma peça importante para a consistência do time e dos projetos da OxBrand.',
    ],
    especialidades: ['Social Media', 'Planejamento de conteúdo', 'Gestão de pautas', 'Comunicação'],
    quote: 'Conteúdo não ganha força sozinho. É preciso empenho para construir, atitude para sustentar e vontade para transformar cada ideia em presença de marca.',
    email: undefined, linkedin: undefined, instagram: 'https://www.instagram.com/mariaclara_lecy', threads: 'https://www.threads.com/@mariaclara_lecy', twitter: 'https://x.com/clara_lecy',
  },
  'beatriz-soares': {
    ...redator('beatriz-soares', 'Beatriz Soares'),
    role: 'Arquiteta de Conteúdo',
    headline: 'Social Media com olhar estratégico e repertório fotográfico, conecta conteúdo, imagem e posicionamento para fortalecer marcas.',
    bio: [
      'Arquiteta de Conteúdo da OxBrand, atua como Social Media na construção de estratégias, narrativas e direcionamentos que transformam posicionamento em comunicação relevante.',
      'Em formação em Marketing e Comunicação, conecta conhecimento acadêmico, visão estratégica e experiência prática para desenvolver conteúdos alinhados aos objetivos de cada marca. Mais do que alimentar redes sociais, busca compreender o negócio, o público e o posicionamento de cada cliente para construir uma comunicação coerente, intencional e capaz de fortalecer marcas.',
      'Sua experiência como fotógrafa ampliou sua percepção sobre imagem, enquadramento, estética e narrativa. Esse repertório contribui diretamente para o trabalho como Social Media, permitindo que compreenda não apenas o que uma marca precisa comunicar, mas também como essa mensagem deve ser apresentada e percebida visualmente.',
      'Com olhar estratégico, sensibilidade criativa e atenção aos detalhes, conecta conteúdo e imagem para transformar ideias em comunicações que geram identificação, presença e valor.',
    ],
    especialidades: ['Social Media', 'Planejamento de conteúdo', 'Gestão de pautas', 'Comunicação'],
    quote: 'Publicar é fácil. Difícil é construir uma presença que tenha intenção, identidade e força suficiente para ser lembrada.',
    email: undefined, linkedin: 'https://www.linkedin.com/in/beatriz-soares-001823252', instagram: 'https://www.instagram.com/__beatrizsrm',
  },
  'gabriel-figueiredo': {
    ...redator('gabriel-figueiredo', 'Gabriel Figueiredo'), avatar: OX_AVATAR,
    role: 'Arquiteto de Negócios',
    headline: 'Conecta desafios empresariais a soluções de marketing, conduzindo relações comerciais com visão consultiva e estratégica.',
    bio: [
      'Arquiteto de Negócios da OxBrand, atua diretamente na área comercial da agência, conectando desafios empresariais a soluções de marketing alinhadas à realidade, aos objetivos e ao momento de cada empresa.',
      'Com experiência em consultoria financeira para negócios, desenvolveu uma visão analítica sobre gestão, estrutura, investimentos e crescimento. Esse repertório permite que conduza conversas comerciais com profundidade, compreendendo o cenário de cada empresa antes de recomendar estratégias, serviços ou caminhos possíveis.',
      'Sua atuação vai além da apresentação de propostas. Gabriel investiga necessidades, identifica fragilidades e analisa oportunidades para construir relações comerciais baseadas em clareza, confiança e geração de valor. Mais do que fechar contratos, busca garantir que cada parceria tenha sentido estratégico e potencial real de resultado.',
      'No relacionamento com empresários e gestores, combina escuta ativa, visão de negócio e capacidade de negociação para transformar demandas dispersas em soluções objetivas e aplicáveis. Seu papel é aproximar a estratégia da necessidade real, fazendo do processo comercial o início de uma construção, e não apenas o momento da venda.',
      'Acredita que uma boa negociação não nasce da pressão para vender, mas da capacidade de compreender o problema e apresentar uma solução que faça sentido para os dois lados.',
    ],
    especialidades: ['Vendas consultivas', 'Diagnóstico empresarial', 'Negociação', 'Estratégia comercial'],
    quote: 'Contrato é consequência. Primeiro vem a clareza para entender o problema, a competência para construir a solução e a confiança para fazer o negócio avançar.',
    email: undefined, linkedin: 'https://www.linkedin.com/in/ogabrielvitor', instagram: 'https://www.instagram.com/ogabrielvitor/',
  },
}

/** Lista de nomes para popular o seletor de autor no editor. */
export const AUTHOR_NAMES = Object.values(AUTHORS).map((a) => a.name)

/** Autores com página de perfil (todos menos a marca OxBrand). */
export const PROFILE_AUTHORS = Object.values(AUTHORS).filter((a) => a.hasProfile)

/** Resolve um autor pelo nome (case-insensitive). */
export function getAuthor(name?: string | null): AuthorData {
  if (!name) return AUTHORS.oxbrand
  const found = Object.values(AUTHORS).find((a) => a.name.toLowerCase() === name.toLowerCase())
  return found ?? {
    slug: 'oxbrand', name, role: 'Redação OxBrand', avatar: OX_AVATAR,
    hasProfile: false, headline: '', bio: [], especialidades: [], linkedin: OX_LINKEDIN,
  }
}

/** Resolve um autor pelo slug. */
export function getAuthorBySlug(slug: string): AuthorData | undefined {
  return AUTHORS[slug]
}

export function ArticleAuthor({ author }: { author: AuthorData }) {
  const NameTag: ElementType = author.hasProfile ? Link : 'a'
  const nameProps = author.hasProfile
    ? { href: `/blog/autor/${author.slug}` }
    : { href: author.linkedin ?? OX_LINKEDIN, target: '_blank', rel: 'noopener noreferrer' }

  return (
    <div className="flex items-center gap-4 py-6 border-y border-zinc-200">
      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-zinc-100 border border-zinc-200">
        <Image src={author.avatar} alt={author.name} fill className="object-cover" unoptimized />
      </div>
      <div className="flex flex-col gap-0.5">
        <NameTag {...nameProps} className="text-sm font-bold text-zinc-900 hover:text-primary transition-colors">
          {author.name} {author.hasProfile ? '→' : '↗'}
        </NameTag>
        <span className="text-xs text-zinc-500">{author.role}</span>
      </div>
    </div>
  )
}
