import Image from 'next/image'

export interface AuthorData {
  name: string
  role: string
  linkedin: string
  avatar: string
}

const OX_AVATAR = '/images/ox-avatar.png'
const OX_LINKEDIN = 'https://www.linkedin.com/company/oxbrand-br/'

export const AUTHORS: Record<string, AuthorData> = {
  oxbrand:               { name: 'OxBrand',             role: 'Equipe de Marketing', linkedin: OX_LINKEDIN, avatar: OX_AVATAR },
  'marcos-blaustein':    { name: 'Marcos Blaustein',    role: 'Sócio-fundador',      linkedin: OX_LINKEDIN, avatar: '/images/authors/marcos-blaustein.jpg' },
  'walquiria-blaustein': { name: 'Walquiria Blaustein', role: 'Sócia-fundadora',     linkedin: OX_LINKEDIN, avatar: '/images/authors/walquiria-blaustein.jpg' },
  'joane-guimaraes':     { name: 'Joane Guimarães',     role: 'Redação OxBrand',     linkedin: OX_LINKEDIN, avatar: '/images/authors/joane-guimaraes.jpg' },
  'murilo-novaes':       { name: 'Murilo Novaes',       role: 'Redação OxBrand',     linkedin: OX_LINKEDIN, avatar: '/images/authors/murilo-novaes.jpg' },
  'breno-freire':        { name: 'Breno Freire',        role: 'Redação OxBrand',     linkedin: OX_LINKEDIN, avatar: '/images/authors/breno-freire.jpg' },
  'julia-rodrigues':     { name: 'Julia Rodrigues',     role: 'Redação OxBrand',     linkedin: OX_LINKEDIN, avatar: '/images/authors/julia-rodrigues.jpg' },
  'maria-clara':         { name: 'Maria Clara',         role: 'Redação OxBrand',     linkedin: OX_LINKEDIN, avatar: '/images/authors/maria-clara.jpg' },
  'beatriz-soares':      { name: 'Beatriz Soares',      role: 'Redação OxBrand',     linkedin: OX_LINKEDIN, avatar: '/images/authors/beatriz-soares.jpg' },
  'gabriel-figueiredo':  { name: 'Gabriel Figueiredo',  role: 'Redação OxBrand',     linkedin: OX_LINKEDIN, avatar: OX_AVATAR },
}

/** Lista de nomes para popular o seletor de autor no editor. */
export const AUTHOR_NAMES = Object.values(AUTHORS).map(a => a.name)

/** Resolve um autor pelo nome (case-insensitive). Fallback: mesmo avatar/LinkedIn da OxBrand. */
export function getAuthor(name?: string | null): AuthorData {
  if (!name) return AUTHORS.oxbrand
  const found = Object.values(AUTHORS).find(a => a.name.toLowerCase() === name.toLowerCase())
  return found ?? { name, role: 'Redação OxBrand', linkedin: OX_LINKEDIN, avatar: OX_AVATAR }
}

export function ArticleAuthor({ author }: { author: AuthorData }) {
  return (
    <div className="flex items-center gap-4 py-6 border-y border-zinc-200">
      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-zinc-100 border border-zinc-200">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <a
          href={author.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-zinc-900 hover:text-primary transition-colors"
        >
          {author.name} ↗
        </a>
        <span className="text-xs text-zinc-500">{author.role}</span>
      </div>
    </div>
  )
}
