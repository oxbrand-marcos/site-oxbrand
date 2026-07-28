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
      'Sócia-fundadora da OxBrand, lidera as áreas de conteúdo, comunicação e operações da agência, conectando estratégia, gestão e execução. Formada em Administração e Marketing, coordena um time multidisciplinar voltado à performance, ao fortalecimento de posicionamento e à consolidação de marcas.',
      'Sua atuação une visão de negócio, branding empresarial e capacidade operacional para transformar estratégia em presença, percepção e crescimento. Acredita que marcas fortes não são construídas apenas pela comunicação, mas pela consistência entre posicionamento, experiência, identidade e entrega.',
      'Como defende em seu e-book Comunicação Raiz: antes de comunicar para o mercado, uma marca precisa compreender com clareza quem é, o que defende e por que deseja ser lembrada.',
    ],
    quote: 'Quem constrói comunicação para caber na tendência será esquecido junto com ela. Legado exige raiz, posicionamento e coragem para não soar como todo mundo.',
    especialidades: ['Conteúdo e Branding', 'Marketing Imobiliário', 'Operações', 'Comunicação'],
    linkedin: 'https://www.linkedin.com/in/walquiria-costa-blaustein-a202091a5/',
    instagram: 'https://www.instagram.com/walquiriablaustein/',
    email: OX_EMAIL, local: LOCAL,
  },
  'joane-guimaraes': {
    slug: 'joane-guimaraes', name: 'Joane Guimarães', role: 'Líder de Execução Visual',
    avatar: '/images/authors/joane-guimaraes.jpg', hasProfile: true,
    headline: 'Líder de Execução Visual da OxBrand. Traduz estratégia, conceito e posicionamento em identidade visual, com coerência e intenção.',
    bio: [
      'Líder de Execução Visual da OxBrand, conduz a tradução de estratégias, conceitos e posicionamentos em soluções visuais consistentes. Formada em Design Gráfico, atua na construção de identidades e peças que conectam intenção, estética e funcionalidade, garantindo coerência entre o que cada marca representa e a forma como ela se apresenta ao mercado.',
      'À frente da execução criativa da agência, trabalha em conjunto com um time multidisciplinar para transformar direcionamentos estratégicos em experiências visuais capazes de gerar reconhecimento, percepção de valor e diferenciação. Sua atuação combina repertório técnico, atenção aos detalhes e sensibilidade para compreender a identidade própria de cada projeto.',
      'Além do design, mantém uma relação constante com a expressão artística por meio da pintura e de outras práticas criativas, ampliando seu repertório e fortalecendo um olhar autoral sobre formas, cores, composições e narrativas.',
      'Acredita que criatividade não é apenas ter boas ideias, mas saber dar forma, intenção e identidade a elas.',
    ],
    quote: 'Estética sem intenção é apenas decoração. Criação de verdade transforma estratégia em algo que o público reconhece, sente e não confunde.',
    especialidades: ['Design Gráfico', 'Identidade Visual', 'Branding', 'Direção de Arte'],
    linkedin: OX_LINKEDIN, instagram: OX_INSTAGRAM, email: OX_EMAIL, local: LOCAL,
  },
  'murilo-novaes': redator('murilo-novaes', 'Murilo Novaes'),
  'breno-freire': redator('breno-freire', 'Breno Freire'),
  'julia-rodrigues': redator('julia-rodrigues', 'Julia Rodrigues'),
  'maria-clara': redator('maria-clara', 'Maria Clara'),
  'beatriz-soares': redator('beatriz-soares', 'Beatriz Soares'),
  'gabriel-figueiredo': { ...redator('gabriel-figueiredo', 'Gabriel Figueiredo'), avatar: OX_AVATAR },
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
