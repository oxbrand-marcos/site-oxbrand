import Link from 'next/link'
import Image from 'next/image'

export interface RelatedPost {
  slug: string
  title: string
  excerpt: string
  tag: string
  coverUrl?: string | null
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso))
}

export function ArticleRelated({ posts }: { posts: RelatedPost[] }) {
  if (!posts.length) return null

  return (
    <div className="flex flex-col gap-6 pt-8 border-t border-zinc-200">
      <span className="mono-tag text-zinc-400">Leia também</span>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white hover:bg-zinc-50 transition-colors flex flex-col"
          >
            {post.coverUrl && (
              <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-zinc-200">
                <Image
                  src={post.coverUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  unoptimized
                />
              </div>
            )}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <span className="mono-tag text-primary/60">{post.tag}</span>
              <h3 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-primary transition-colors text-balance">
                {post.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
              <span className="mono-tag text-primary/50 mt-auto group-hover:text-primary transition-colors">
                Ler artigo ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
