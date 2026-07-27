import Link from 'next/link'

type BeholdSize = { width: number; height: number; mediaUrl: string }
type BeholdPost = {
  id: string
  permalink: string
  caption?: string
  prunedCaption?: string
  altText?: string
  mediaType: string
  isReel?: boolean
  sizes?: { small?: BeholdSize; medium?: BeholdSize; large?: BeholdSize; full?: BeholdSize }
}
type BeholdFeed = { username?: string; posts?: BeholdPost[] }

const FEED_URL = 'https://feeds.behold.so/WJuokG5kmW1tFLqBVJFN'

async function getFeed(): Promise<BeholdFeed | null> {
  try {
    const r = await fetch(FEED_URL, { next: { revalidate: 3600 } })
    if (!r.ok) return null
    return (await r.json()) as BeholdFeed
  } catch {
    return null
  }
}

function altFor(p: BeholdPost): string {
  const base = p.altText || p.prunedCaption || p.caption || 'Publicação da OxBrand no Instagram'
  return base.replace(/\s+/g, ' ').trim().slice(0, 150)
}

export async function InstagramFeed({ limit = 6 }: { limit?: number }) {
  const feed = await getFeed()
  const posts = (feed?.posts ?? []).slice(0, limit)
  if (posts.length === 0) return null
  const username = feed?.username || 'oxbrand'

  return (
    <section className="py-16 border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-1">
            <span className="mono-tag text-primary/70">No Instagram</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Acompanhe a OxBrand no dia a dia</h2>
          </div>
          <a
            href={`https://www.instagram.com/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/15 text-xs font-bold tracking-widest uppercase text-black hover:bg-black/5 transition-colors"
          >
            Seguir @{username}
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {posts.map((p) => {
            const img = p.sizes?.medium?.mediaUrl || p.sizes?.small?.mediaUrl || p.sizes?.large?.mediaUrl
            if (!img) return null
            const isVideo = p.mediaType === 'VIDEO' || p.isReel
            const isAlbum = p.mediaType === 'CAROUSEL_ALBUM'
            return (
              <a
                key={p.id}
                href={p.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden bg-zinc-100"
                aria-label={`Ver publicação no Instagram: ${altFor(p)}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={altFor(p)}
                  loading="lazy"
                  decoding="async"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/25 transition-colors" aria-hidden="true" />
                {(isVideo || isAlbum) && (
                  <span className="absolute top-2 right-2 text-white/90 drop-shadow" aria-hidden="true">
                    {isVideo ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M8 5v14l11-7z" /></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M8 3h9a4 4 0 0 1 4 4v9h-2V7a2 2 0 0 0-2-2H8V3zM4 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" /></svg>
                    )}
                  </span>
                )}
              </a>
            )
          })}
        </div>

        <p className="mono-tag text-black/30">Feed em tempo real do nosso Instagram</p>
      </div>
    </section>
  )
}
