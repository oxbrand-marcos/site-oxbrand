import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { YouTubeFacade } from '@/components/youtube-facade'
import { ClientMarquee } from '@/components/client-marquee'
import { jsonLd, breadcrumbSchema, caseReviewSchema } from '@/lib/jsonld'
import type { CaseStudy } from '@/lib/clientes'
import { CASES } from '@/lib/clientes'

export function CaseTemplate({ study }: { study: CaseStudy }) {
  const outrosCases = CASES.filter((c) => c.published && c.slug !== study.slug).slice(0, 3)
  const hasVideo = !!study.videoId
  const bullets = study.bullets ?? []
  const areas = study.areas ?? []
  const vAspect = study.videoAspect ?? 'portrait'
  const vCol = vAspect === 'landscape' ? 'lg:grid-cols-[minmax(0,520px)_1fr]' : 'lg:grid-cols-[minmax(0,340px)_1fr]'
  const vMax = vAspect === 'landscape' ? 'max-w-[520px]' : 'max-w-[340px]'

  return (
    <main>
      {hasVideo ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: study.videoName ?? study.headline,
              description: study.metaDescription,
              thumbnailUrl: `https://i.ytimg.com/vi/${study.videoId}/hqdefault.jpg`,
              uploadDate: study.videoUploadDate,
              ...(study.videoDuration ? { duration: study.videoDuration } : {}),
              embedUrl: `https://www.youtube.com/embed/${study.videoId}`,
              contentUrl: `https://www.youtube.com/shorts/${study.videoId}`,
            }),
          }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: 'OxBrand', url: '/' },
              { name: 'Clientes', url: '/nossos-clientes' },
              { name: study.client, url: `/nossos-clientes/${study.slug}` },
            ])
          ),
        }}
      />
      {study.depoimentoResumo ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(
              caseReviewSchema({
                client: study.client,
                reviewBody: study.depoimentoResumo,
                slug: study.slug,
                datePublished: study.dateISO,
              })
            ),
          }}
        />
      ) : null}
      <Header />

      {/* Hero */}
      <section className="relative pt-14 overflow-hidden grid-bg border-b border-border">
        <DotsCanvas className="z-[1]" color="rgba(255,255,255,0.15)" dotRadius={1.2} spacing={30} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-3xl">
            <nav className="mono-tag text-muted-foreground/60">
              <Link href="/nossos-clientes" className="hover:text-foreground transition-colors">Clientes</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{study.client}</span>
            </nav>
            <span className="mono-tag text-primary/70">Case de sucesso{study.segment ? ` · ${study.segment}` : ''}</span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">{study.headline}</h1>
            {study.summary ? <p className="text-lg text-muted-foreground leading-relaxed">{study.summary}</p> : null}
            {study.clientLinks && study.clientLinks.length > 0 ? (
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
                <span className="mono-tag text-muted-foreground/50">O cliente:</span>
                {study.clientLinks.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="mono-tag text-muted-foreground/70 hover:text-primary transition-colors">{l.label} &#8599;</a>
                ))}
              </div>
            ) : null}
          </div>

          {hasVideo ? (
            <div className={`grid ${vCol} gap-8 items-start`}>
              <div className={`w-full ${vMax} mx-auto lg:mx-0`}>
                <YouTubeFacade
                  videoId={study.videoId as string}
                  title={study.videoName ?? study.headline}
                  poster={study.videoPoster}
                  aspect={vAspect}
                  priority
                  className="rounded-xl border border-border"
                />
              </div>
              {bullets.length > 0 ? (
                <ul className="flex flex-col gap-4">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 border border-border bg-card/30 p-4">
                      <span className="text-primary mt-0.5 shrink-0">&#10004;</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : bullets.length > 0 ? (
            <ul className="grid sm:grid-cols-2 gap-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 border border-border bg-card/30 p-4">
                  <span className="text-primary mt-0.5 shrink-0">&#10004;</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {/* Faixa inferior roxa */}
        <div className="relative z-10 w-full bg-primary/90 px-6 py-3 flex items-center justify-center sm:justify-between gap-4">
          <span className="mono-tag text-primary-foreground/80">Case de sucesso · {study.client}</span>
          <span className="hidden sm:block mono-tag text-primary-foreground/50">OxBrand | Case de sucesso</span>
        </div>
      </section>

      <ClientMarquee />

      {/* Numeros */}
      {study.metrics.length > 0 ? (
        <section className="py-16 border-b border-border section-light">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10">
              {study.metrics.map((m) => (
                <div key={m.label} className="bg-white p-8 flex flex-col gap-2 items-center text-center">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">{m.value}</span>
                  <span className="mono-tag text-black/50 leading-relaxed">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Areas */}
      {areas.length > 0 ? (
        <section className="py-20 border-b border-border bg-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center text-center lg:items-start lg:text-left">
              <span className="mono-tag text-black/40">O que fizemos</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">{`Áreas que transformamos na ${study.client}`}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {areas.map((a) => (
                <div key={a.tag} className="flex flex-col border border-zinc-200 overflow-hidden">
                  {a.img ? (
                    <div className="relative w-full aspect-square bg-zinc-100">
                      <Image src={a.img} alt={a.alt ?? a.tag} fill loading="lazy" sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                    </div>
                  ) : null}
                  <div className="flex flex-col gap-3 p-6">
                    <span className="mono-tag text-primary/70">{a.tag}</span>
                    <p className="text-sm text-black/70 leading-relaxed">{a.text}</p>
                    <Link href={a.href} className="mono-tag text-black/50 hover:text-primary transition-colors w-fit">Ver a solução &rarr;</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Resumo do video */}
      {hasVideo && study.depoimentoResumo ? (
        <section className="py-16 border-b border-border section-light">
          <div className="max-w-3xl mx-auto px-6 flex flex-col gap-4">
            <span className="mono-tag text-black/40">Resumo do vídeo</span>
            <p className="text-black/70 leading-relaxed">{study.depoimentoResumo}</p>
          </div>
        </section>
      ) : null}

      {/* Outros cases */}
      {outrosCases.length > 0 ? (
        <section className="py-16 border-b border-border section-light">
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
            <span className="mono-tag text-black/40">Outros cases</span>
            <div className="grid sm:grid-cols-3 gap-4">
              {outrosCases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/nossos-clientes/${c.slug}`}
                  className="group border border-black/10 bg-white p-6 flex flex-col gap-2 hover:border-primary transition-colors"
                >
                  <span className="mono-tag text-black/40">{c.segment}</span>
                  <span className="text-lg font-bold text-black group-hover:text-primary transition-colors">{c.client}</span>
                  <span className="mono-tag text-primary mt-2">Ver case &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="py-20 border-b border-border section-light">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6 items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">Quer um resultado como este?</h2>
          <p className="text-black/60 leading-relaxed">A OxBrand estrutura aquisição com previsibilidade para marcas de todo o Brasil. Comece por um diagnóstico gratuito.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/diagnostico" className="px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors">Diagnóstico gratuito</Link>
            <Link href="/nossos-clientes" className="px-6 py-3 border border-black/20 text-black text-xs font-bold tracking-widest uppercase hover:bg-black/5 transition-colors">Ver todos os cases</Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link href="/nossos-clientes" className="mono-tag text-muted-foreground/60 hover:text-primary transition-colors">&larr; Ver todos os cases</Link>
      </div>

      <Footer />
    </main>
  )
}
