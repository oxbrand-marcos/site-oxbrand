import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NewsletterSignup } from '@/components/newsletter-signup'
import DotsCanvas from '@/components/dots-canvas'
import { ArticleAuthor, getAuthor } from '@/components/article-author'
import { ArticleShare } from '@/components/article-share'
import { ArticleRelated } from '@/components/article-related'
import { blogPostingSchema, breadcrumbSchema, faqPageSchema, jsonLd } from '@/lib/jsonld'
import { readingTime } from '@/lib/utils'
import { type Article, ARTICLES, articleText, coverFor } from '@/lib/blog-articles'

function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

export function ArticleRenderer({ article }: { article: Article }) {
  const cover = coverFor(article.slug)
  const mins = readingTime(articleText(article))
  const headings = Array.from(article.bodyHtml.matchAll(/<h2[^>]*>(.*?)<\/h2>/g)).map((m) => m[1].replace(/<[^>]+>/g, '').trim())
  let hIdx = 0
  const bodyWithIds = article.bodyHtml.replace(/<h2>/g, () => `<h2 id="sec-${hIdx++}" class="scroll-mt-28">`)
  const relatedPosts = ARTICLES
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => {
      const sameA = a.tag === article.tag ? 0 : 1
      const sameB = b.tag === article.tag ? 0 : 1
      if (sameA !== sameB) return sameA - sameB
      return b.dateISO.localeCompare(a.dateISO)
    })
    .slice(0, 3)
    .map((a) => ({ slug: a.slug, title: a.title, excerpt: a.subtitle, tag: a.tag, coverUrl: coverFor(a.slug) }))
  const sortedByDate = [...ARTICLES].sort((a, b) => b.dateISO.localeCompare(a.dateISO))
  const curIdx = sortedByDate.findIndex((a) => a.slug === article.slug)
  const nextArticle = sortedByDate[(curIdx + 1) % sortedByDate.length]
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogPostingSchema({
        headline: article.title,
        description: article.metaDescription,
        slug: article.slug,
        coverUrl: cover,
        datePublished: article.dateISO,
        dateModified: article.dateISO,
        authorName: 'OxBrand',
        tags: [article.tag],
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
        { name: 'OxBrand', url: '/' },
        { name: 'Insights', url: '/blog' },
        { name: article.title, url: `/blog/${article.slug}` },
      ])) }} />
      {article.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(article.faq)) }} />
      )}
      <Header />
      <main>
        <section className="relative flex flex-col justify-end overflow-hidden grid-bg border-b border-zinc-200">
          <DotsCanvas />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,transparent_40%,rgba(0,0,0,0.7)_100%)]" aria-hidden="true" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full flex flex-col items-center text-center gap-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OXBRAND</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <Link href="/blog" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">Insights</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">{article.breadcrumb}</span>
            </nav>
            <span className="mono-tag text-primary/60 tracking-[0.2em]">{article.tag} · {formatDate(article.dateISO)}</span>
            <span className="mono-tag text-muted-foreground/50">OxBrand · {mins} min de leitura</span>
            <h1 className="text-[clamp(1.8rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-foreground text-balance max-w-4xl">{article.title}</h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">{article.subtitle}</p>
          </div>
        </section>

        <div className="w-full bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 pt-10">
            <div className="relative w-full aspect-[16/7] overflow-hidden border border-zinc-200">
              <Image src={cover} alt={article.coverAlt} fill className="object-cover" sizes="(max-width: 1280px) 100vw, 1232px" priority />
            </div>
          </div>
        </div>

        <article className="py-20 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[260px_1fr] gap-16 items-start">

              {/* Sumario lateral + CTA */}
              <aside className="hidden lg:flex flex-col gap-4 sticky top-24 self-start">
                <span className="mono-tag text-zinc-400">Neste artigo</span>
                <nav className="flex flex-col gap-2">
                  {headings.map((h, i) => (
                    <a key={i} href={`#sec-${i}`} className="text-xs text-zinc-500 border-l border-zinc-200 pl-3 py-1 hover:border-primary hover:text-zinc-900 transition-colors">
                      {h}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 border border-zinc-200 p-5 flex flex-col gap-3">
                  <span className="mono-tag text-zinc-400">Diagnóstico gratuito</span>
                  <p className="text-xs text-zinc-500 leading-relaxed">Quer aplicar esses insights no seu negócio?</p>
                  <a href="/diagnostico" className="mono-tag text-primary/70 hover:text-primary transition-colors">Falar com especialistas &#8599;</a>
                </div>
              </aside>

              {/* Corpo do artigo */}
              <div className="max-w-3xl flex flex-col gap-8">
                <ArticleAuthor author={getAuthor('OxBrand')} />

                <div className="article-body" dangerouslySetInnerHTML={{ __html: bodyWithIds }} />

                {/* CTA */}
                <div className="border border-primary/20 bg-primary/5 p-6 flex flex-col gap-4">
                  <span className="mono-tag text-primary/60">Diagnóstico gratuito</span>
                  <p className="text-zinc-900 font-bold">Quer saber o que faz sentido para o seu caso?</p>
                  <p className="text-sm text-zinc-600">Fazemos um diagnóstico gratuito da sua operação, sem compromisso e sem promessa vazia.</p>
                  <a href="https://wa.me/5511921425351" target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors">Falar com a OxBrand &#8599;</a>
                </div>

                {/* FAQ */}
                {article.faq.length > 0 && (
                  <div className="flex flex-col gap-5 pt-4">
                    <h2 className="text-xl font-bold text-zinc-900 border-l-2 border-primary pl-4">Perguntas frequentes</h2>
                    {article.faq.map((f, i) => (
                      <div key={i} className="border-b border-zinc-200 pb-4 flex flex-col gap-1.5">
                        <h3 className="font-bold text-zinc-900 text-sm">{f.q}</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed">{f.a}</p>
                      </div>
                    ))}
                  </div>
                )}

                <NewsletterSignup variant="article" />
                <ArticleShare title={article.title} slug={article.slug} />

                <ArticleRelated posts={relatedPosts} />

                <div className="flex items-center justify-between pt-4 border-t border-zinc-200">
                  <Link href="/blog" className="mono-tag text-zinc-400 hover:text-zinc-900 transition-colors">&#8592; Voltar para Insights</Link>
                  {nextArticle && (
                    <Link href={`/blog/${nextArticle.slug}`} className="mono-tag text-primary/60 hover:text-primary transition-colors">Próximo artigo &#8594;</Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
