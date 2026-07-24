import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getAuthorBySlug, PROFILE_AUTHORS } from '@/components/article-author'
import { STATIC_POSTS } from '@/lib/blog-static'
import { personSchema, breadcrumbSchema, jsonLd } from '@/lib/jsonld'

const BASE = 'https://www.oxbrand.com.br'

export function generateStaticParams() {
  return PROFILE_AUTHORS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author || !author.hasProfile) return {}
  const title = `${author.name}, ${author.role} na OxBrand`
  const description = author.headline
  const og = `${BASE}/og-home.jpg`
  return {
    title,
    description,
    alternates: { canonical: `/blog/autor/${slug}` },
    openGraph: {
      title, description, url: `${BASE}/blog/autor/${slug}`, siteName: 'OxBrand', locale: 'pt_BR',
      type: 'profile', images: [{ url: og, width: 1200, height: 630, alt: author.name }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [og], site: '@oxbrand_br' },
  }
}

const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)
const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
)

export default async function AutorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author || !author.hasProfile) notFound()

  const posts = STATIC_POSTS
    .filter((p) => p.author.toLowerCase() === author.name.toLowerCase())
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const socials: { label: string; href: string; icon: ReactNode }[] = []
  if (author.linkedin) socials.push({ label: 'LinkedIn', href: author.linkedin, icon: <IconLinkedIn /> })
  if (author.instagram) socials.push({ label: 'Instagram', href: author.instagram, icon: <IconInstagram /> })
  if (author.email) socials.push({ label: 'E-mail', href: `mailto:${author.email}`, icon: <IconMail /> })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(personSchema({
        name: author.name, slug: author.slug, jobTitle: author.role, description: author.headline,
        image: author.avatar, knowsAbout: author.especialidades,
        sameAs: [author.linkedin, author.instagram].filter(Boolean) as string[],
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
        { name: 'OxBrand', url: '/' }, { name: 'Insights', url: '/blog' },
        { name: author.name, url: `/blog/autor/${author.slug}` },
      ])) }} />

      <Header />
      <main>
        {/* Hero do autor */}
        <section className="relative grid-bg border-b border-border pt-32 pb-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(92,54,235,0.14),transparent_60%)]" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OXBRAND</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <Link href="/blog" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">INSIGHTS</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">AUTOR</span>
            </nav>

            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary/30 bg-zinc-900 shadow-lg">
              <Image src={author.avatar} alt={author.name} fill className="object-cover" unoptimized priority sizes="128px" />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{author.name}</h1>
              <span className="mono-tag text-primary">{author.role}</span>
              {author.local && <span className="text-xs text-muted-foreground/70">{author.local}</span>}
            </div>

            {author.headline && (
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl text-balance">{author.headline}</p>
            )}

            {socials.length > 0 && (
              <div className="flex items-center gap-3 pt-1">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target={s.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center rounded-sm border border-primary/25 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Sobre + Especialidades */}
        <section className="section-light py-16 border-b border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 grid lg:grid-cols-[1fr_260px] gap-12">
            <div className="flex flex-col gap-4">
              <span className="mono-tag text-zinc-500">Sobre</span>
              <h2 className="text-2xl font-bold text-zinc-900">Quem é {author.name.split(' ')[0]}</h2>
              {author.bio.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-zinc-600 leading-relaxed">{p}</p>
              ))}
            </div>
            {author.especialidades.length > 0 && (
              <aside className="flex flex-col gap-4">
                <span className="mono-tag text-zinc-500">Áreas de atuação</span>
                <div className="flex flex-wrap gap-2">
                  {author.especialidades.map((e) => (
                    <span key={e} className="text-xs font-medium text-primary bg-primary/8 border border-primary/20 px-3 py-1.5 rounded-full">{e}</span>
                  ))}
                </div>
              </aside>
            )}
          </div>
        </section>

        {/* Artigos do autor */}
        {posts.length > 0 && (
          <section className="section-light py-16 border-b border-zinc-200">
            <div className="max-w-5xl mx-auto px-6 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="mono-tag text-zinc-500">Publicações</span>
                <h2 className="text-2xl font-bold text-zinc-900">Artigos de {author.name.split(' ')[0]}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col border border-zinc-200 bg-white hover:border-primary/40 transition-colors overflow-hidden">
                    <div className="relative aspect-[16/9] bg-zinc-100 overflow-hidden">
                      <Image src={p.coverUrl} alt={p.coverAlt ?? p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:1024px) 100vw, 360px" />
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                      <span className="mono-tag text-primary/70">{p.tag}</span>
                      <h3 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
            <span className="mono-tag text-muted-foreground/60">Diagnóstico gratuito</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">Quer resultado como os nossos clientes?</h2>
            <p className="text-muted-foreground text-sm max-w-lg">Nossa equipe analisa sua operação digital e retorna com um diagnóstico completo e gratuito.</p>
            <a href="/diagnostico" className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors">Falar com especialistas ↗</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
