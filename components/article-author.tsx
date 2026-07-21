import Image from 'next/image'

export interface AuthorData {
  name: string
  role: string
  linkedin: string
  avatar: string
}

export const AUTHORS: Record<string, AuthorData> = {
  oxbrand: {
    name: 'OxBrand',
    role: 'Equipe de Marketing',
    linkedin: 'https://www.linkedin.com/company/oxbrand-br/',
    avatar: '/images/ox-avatar.png',
  },
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
