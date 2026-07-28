import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { jsonLd, breadcrumbSchema } from '@/lib/jsonld'
import { coverForCase, type CaseStudy } from '@/lib/clientes'

export function CaseTemplate({ study }: { study: CaseStudy }) {
  const hasCover = false // trocar para true quando houver /nossos-clientes/{slug}-cover.png

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: 'OxBrand', url: '/' },
              { name: 'Nossos Clientes', url: '/nossos-clientes' },
              { name: study.client, url: `/nossos-clientes/${study.slug}` },
            ])
          ),
        }}
      />
      {study.videoId ? (
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
              contentUrl: `https://www.youtube.com/shorts/${study.videoId}`,
              embedUrl: `https://www.youtube.com/embed/${study.videoId}`,
            }),
          }}
        />
      ) : null}
      <Header />

      {/* Hero */}
      <section className="relative flex flex-col pt-14 overflow-hidden grid-bg border-b border-border">
        <DotsCanvas className="z-[1]" color="rgba(255,255,255,0.15)" dotRadius={1.2} spacing={30} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 flex flex-col gap-6 items-center text-center">
          <nav className="mono-tag text-muted-foreground/60">
            <Link href="/nossos-clientes" className="hover:text-foreground transition-colors">Cases</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{study.client}</span>
          </nav>
          {study.segment ? <span className="mono-tag text-primary/70">{study.segment}</span> : null}
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-foreground">{study.headline}</h1>
          {study.summary ? (
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{study.summary}</p>
          ) : (
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              Case em preparacao. Em breve os detalhes da parceria entre {study.client} e a OxBrand.
            </p>
          )}
        </div>
      </section>

      {study.videoId ? (
        <section className="py-14 border-b border-border section-light">
          <div className="max-w-sm mx-auto px-6 flex flex-col gap-4 items-center text-center">
            <span className="mono-tag text-black/50">O case em vídeo</span>
            <div className="relative w-full aspect-[9/16] overflow-hidden border border-black/10 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${study.videoId}`}
                title={study.videoName ?? study.headline}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ) : null}

      {hasCover ? (
        <section className="border-b border-border bg-white">
          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="relative w-full aspect-[16/7] overflow-hidden border border-zinc-200">
              <Image src={coverForCase(study.slug)} alt={study.coverAlt} fill className="object-cover" sizes="(max-width: 1080px) 100vw, 1024px" priority />
            </div>
          </div>
        </section>
      ) : null}

      {/* Metricas */}
      {study.metrics.length > 0 ? (
        <section className="py-16 border-b border-border section-light">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10">
              {study.metrics.map((m) => (
                <div key={m.label} className="bg-white p-8 flex flex-col gap-2 items-center text-center">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">{m.value}</span>
                  <span className="mono-tag text-black/50">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Servicos aplicados */}
      {study.services.length > 0 ? (
        <section className="py-14 border-b border-border">
          <div className="max-w-5xl mx-auto px-6 flex flex-col gap-4">
            <span className="mono-tag text-muted-foreground/60">Solucoes aplicadas</span>
            <div className="flex flex-wrap gap-3">
              {study.services.map((s) => (
                <span key={s} className="px-4 py-2 border border-border text-sm text-foreground">{s}</span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Corpo */}
      {study.bodyHtml ? (
        <section className="py-16 border-b border-border">
          <div
            className="max-w-3xl mx-auto px-6 article-body"
            dangerouslySetInnerHTML={{ __html: study.bodyHtml }}
          />
        </section>
      ) : null}

      {/* CTA */}
      <section className="py-20 border-b border-border section-light">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6 items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">Quer um resultado como este?</h2>
          <p className="text-black/60 leading-relaxed">
            A OxBrand estrutura aquisicao com previsibilidade para marcas de todo o Brasil. Vamos conversar sobre o seu momento.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contato" className="px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors">
              Falar com a OxBrand
            </Link>
            <Link href="/nossos-clientes#cases" className="px-6 py-3 border border-black/20 text-black text-xs font-bold tracking-widest uppercase hover:bg-black/5 transition-colors">
              Ver outros cases
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
