import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NewsletterSignup } from '@/components/newsletter-signup'
import DotsCanvas from '@/components/dots-canvas'
import { ArticleAuthor, AUTHORS } from '@/components/article-author'
import { ArticleShare } from '@/components/article-share'
import { ArticleRelated, type RelatedPost } from '@/components/article-related'
import { blogPostingSchema, breadcrumbSchema, faqPageSchema, jsonLd } from '@/lib/jsonld'
import { articleOg } from '@/lib/og'
import { readingTime } from '@/lib/utils'

import { ARTICLE_CONTENT } from './content'

export const metadata: Metadata = {
  title: 'Marketing de conteúdo que gera resultados reais | OxBrand',
  description: 'Ter foco em marketing de conteúdo deixou de ser uma opção. Conheça o método Conteúdo Pro: 5 Q\'s + 3 Pq\'s, e como ele transforma estratégia em vendas.',
  ...articleOg({
    title: 'Foco em marketing de conteúdo: como gerar resultados reais',
    description: 'Ter foco em marketing de conteúdo deixou de ser uma opção. Conheça o método Conteúdo Pro: 5 Q\'s + 3 Pq\'s, e como ele transforma estratégia em vendas.',
    slug: 'foco-em-marketing-de-conteudo-como-gerar-resultados-reais',
    coverUrl: '/blog/marketing-conteudo-cover.png',
    datePublished: '2026-01-15',
  }),
}

const relatedPosts: RelatedPost[] = [
  {
    slug: 'leads-do-trafego-pago-como-transformar-em-vendas',
    title: 'Leads do tráfego pago: como transformar cliques em vendas no WhatsApp',
    excerpt: 'Você investe em tráfego pago, o anúncio performa, os leads chegam. As vendas não acontecem.',
    tag: 'Tráfego & Aquisição',
    coverUrl: '/blog/leads-trafego-pago-cover.png',
  },
]

export default function MarketingConteudoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogPostingSchema({
        headline: 'Foco em marketing de conteúdo: como gerar resultados reais',
        description: 'Ter foco em marketing de conteúdo deixou de ser uma opção. Conheça o método Conteúdo Pro: 5 Q\'s + 3 Pq\'s, e como ele transforma estratégia em vendas.',
        slug: 'foco-em-marketing-de-conteudo-como-gerar-resultados-reais',
        coverUrl: '/blog/marketing-conteudo-cover.png',
        datePublished: '2026-01-15',
        dateModified: '2026-01-15',
        authorName: 'OxBrand',
        tags: ['Marketing de Conteúdo', 'Conversão', 'Estratégia Digital'],
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
        { name: 'OxBrand', url: '/' },
        { name: 'Insights', url: '/blog' },
        { name: 'Foco em marketing de conteúdo', url: '/blog/foco-em-marketing-de-conteudo-como-gerar-resultados-reais' },
      ])) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex flex-col justify-end overflow-hidden grid-bg border-b border-zinc-200">
          <DotsCanvas />
          <div className="pointer-events-none absolute -left-40 top-1/4 w-[480px] h-[480px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-40 bottom-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,transparent_40%,rgba(0,0,0,0.7)_100%)]" aria-hidden="true" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full flex flex-col items-center text-center gap-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OXBRAND</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <Link href="/blog" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">Insights</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">CONTEÚDO</span>
            </nav>

            <span className="mono-tag text-primary/60 tracking-[0.2em]">Conversão · 15 de janeiro de 2026</span>
            <span className="mono-tag text-muted-foreground/50">OxBrand · {readingTime(ARTICLE_CONTENT)} min de leitura</span>

            <h1 className="text-[clamp(1.8rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-foreground text-balance max-w-4xl">
              Foco em marketing de conteúdo: como gerar resultados reais
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
              Conteúdo sem estratégia gera métricas de vaidade. Conheça o método Conteúdo Pro: 5 Q&apos;s + 3 Pq&apos;s, que conecta cada publicação à conversão.
            </p>
          </div>

        </section>

        {/* Imagem de capa */}
        <div className="w-full bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 pt-10">
            <div className="relative w-full aspect-[16/7] overflow-hidden border border-zinc-200">
              <Image
                src="/blog/marketing-conteudo-cover.png"
                alt="Foco em marketing de conteúdo: estratégia e resultados"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <article className="py-20 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[260px_1fr] gap-16 items-start">

              {/* Sumário lateral */}
              <aside className="hidden lg:flex flex-col gap-4 sticky top-20">
                <span className="mono-tag text-zinc-400">Neste artigo</span>
                <nav className="flex flex-col gap-2">
                  {[
                    'O que é o Conteúdo Pro',
                    'Os 5 Q\'s',
                    'Os 3 Pq\'s',
                    'Implementando conteúdo estratégico',
                    'E-book Comunicação Raiz',
                  ].map((item) => (
                    <span key={item} className="text-xs text-zinc-500 border-l border-zinc-200 pl-3 py-1 hover:border-primary hover:text-zinc-900 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </nav>
                <div className="mt-6 border border-zinc-200 p-5 flex flex-col gap-3">
                  <span className="mono-tag text-zinc-400">Diagnóstico gratuito</span>
                  <p className="text-xs text-zinc-500 leading-relaxed">Quer aplicar esses insights no seu negócio?</p>
                  <a
                    href="/diagnostico"
                    className="mono-tag text-primary/70 hover:text-primary transition-colors"
                  >
                    Falar com especialistas ↗
                  </a>
                </div>
              </aside>

              {/* Corpo do artigo */}
              <div className="flex flex-col gap-8 text-zinc-600 leading-relaxed">

                <ArticleAuthor author={AUTHORS.oxbrand} />

                <p className="text-zinc-900 text-lg leading-relaxed">
                  No competitivo ambiente digital, ter foco em marketing de conteúdo deixou de ser uma opção e passou a ser um pilar estratégico para empresas que buscam crescimento sustentável, autoridade e conversão.
                </p>

                <p>É exatamente nesse cenário que nasce o <strong className="text-zinc-900">Conteúdo Pro</strong>, uma metodologia que coloca o marketing de conteúdo alinhado à performance, à clareza da mensagem e às dores reais do público.</p>

                <div className="bg-zinc-50 border border-primary/20 p-6 text-center">
                  <p className="text-zinc-900 font-bold text-xl mb-2">5 Q&apos;s + 3 Pq&apos;s = Conteúdo Pro</p>
                  <p className="text-sm text-zinc-500">A fórmula que garante utilidade, autoridade, conexão e potencial de conversão em cada publicação.</p>
                </div>

                <div className="border-l-2 border-primary pl-6 py-2">
                  <h2 className="text-xl font-bold text-zinc-900 mb-3">O que é o Conteúdo Pro e por que ele é essencial?</h2>
                </div>

                <p>Ter um bom plano de marketing de conteúdo significa entender que comunicar não é apenas informar, mas conduzir decisões. O Conteúdo Pro vai além de textos bem escritos ou posts bonitos.</p>

                <div className="bg-zinc-50 border border-zinc-200 p-6 flex flex-col gap-2">
                  <span className="mono-tag text-primary/60">Dado relevante</span>
                  <p className="text-sm text-zinc-900">Segundo a{' '}
                    <a href="https://www.hubspot.com/marketing-statistics" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">HubSpot</a>
                    , empresas que aplicam uma estratégia de conteúdo bem definida geram até <strong>67% mais leads</strong> do que aquelas que produzem conteúdo sem método.</p>
                </div>

                <div className="border-l-2 border-primary pl-6 py-2">
                  <h2 className="text-xl font-bold text-zinc-900 mb-4">Os 5 Q&apos;s do Conteúdo Pro</h2>
                </div>

                {[
                  { q: 'Qual é o diferencial do nosso produto ou serviço?', a: 'Cases, dados, provas reais e resultados concretos devem sustentar o discurso. Diferenciar-se é obrigatório.' },
                  { q: 'Qual é a proposta, promessa ou transformação que entregamos?', a: 'Todo conteúdo precisa deixar claro qual transformação o cliente terá. Estratégia sem promessa clara gera ruído, não resultado.' },
                  { q: 'Qual é o nosso ponto forte real?', a: 'Qualidade é obrigação. O ponto forte é aquilo que você faz melhor que o mercado e que precisa ser explorado estrategicamente.' },
                  { q: 'Quem é o público-alvo e qual é o seu perfil?', a: 'Sem clareza de público, não existe estratégia eficaz. Conteúdo bom para todos não converte ninguém.' },
                  { q: 'Quais são as principais objeções do cliente?', a: 'Antecipar e eliminar objeções no conteúdo reduz o ciclo de vendas e qualifica o lead antes do primeiro contato.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 border-b border-zinc-200 pb-5">
                    <span className="mono-tag text-primary/40 shrink-0 pt-1">Q{i + 1}</span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-zinc-900 text-sm">{item.q}</h3>
                      <p className="text-sm">{item.a}</p>
                    </div>
                  </div>
                ))}

                <div className="border-l-2 border-primary pl-6 py-2">
                  <h2 className="text-xl font-bold text-zinc-900 mb-4">Os 3 Pq&apos;s: o que transforma conteúdo em conversão</h2>
                </div>

                {[
                  { pq: 'Por que somos referência no nosso setor?', a: 'Autoridade se constrói com histórico, método e resultados comprovados.' },
                  { pq: 'Por que escolher a nossa marca e não a concorrência?', a: 'O conteúdo precisa deixar essa resposta explícita, sem rodeios.' },
                  { pq: 'Por que nossos clientes ganham mais ao nos escolher?', a: 'Benefícios reais, impacto financeiro, ganho de tempo, escala e previsibilidade.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 border-b border-zinc-200 pb-5">
                    <span className="mono-tag text-primary/40 shrink-0 pt-1">Pq{i + 1}</span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-zinc-900 text-sm">{item.pq}</h3>
                      <p className="text-sm">{item.a}</p>
                    </div>
                  </div>
                ))}

                <div className="border-l-2 border-primary pl-6 py-2">
                  <h2 className="text-xl font-bold text-zinc-900 mb-3">Implementando conteúdo estratégico para resultados consistentes</h2>
                </div>

                <div className="bg-zinc-50 border border-zinc-200 p-6 flex flex-col gap-2">
                  <span className="mono-tag text-primary/60">Dado relevante</span>
                  <p className="text-sm text-zinc-900">Um estudo da{' '}
                    <a href="https://www.demandmetric.com/content/content-marketing-infographic" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">Demand Metric</a>
                    {' '}mostra que <strong>70% das pessoas preferem aprender sobre empresas por meio de conteúdo</strong>, não anúncios.</p>
                </div>

                <p>Para resultados consistentes, o marketing de conteúdo precisa estar integrado a:</p>

                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'Planejamento estratégico',
                    'Calendário sazonal',
                    'Tendências de mercado',
                    'Funil de consciência',
                    'Copywriting orientado a conversão',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <span className="text-primary shrink-0 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p>Sem isso, o conteúdo vira apenas mais um post perdido no feed.</p>

                <div className="border border-primary/20 bg-primary/5 p-6 flex flex-col gap-4">
                  <span className="mono-tag text-primary/60">E-book gratuito</span>
                  <h3 className="text-zinc-900 font-bold">Comunicação Raiz</h3>
                  <p className="text-sm text-zinc-600">Descubra como aplicar os 5 Q&apos;s + 3 Pq&apos;s, transformar conversas em vendas e estruturar um marketing de conteúdo com foco total em performance e resultados reais.</p>
                  <a
                    href="https://wa.me/+5511921425351"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
                  >
                    Solicitar e-book ↗
                  </a>
                </div>

                <p className="text-sm border-t border-zinc-200 pt-6">
                  Porque marketing só é marketing quando vende. E conteúdo só funciona quando tem direção.
                </p>

                {/* Newsletter */}
                <NewsletterSignup variant="article" />

                {/* Compartilhamento */}
                <ArticleShare
                  title="Foco em marketing de conteúdo: como gerar resultados reais"
                  slug="foco-em-marketing-de-conteudo-como-gerar-resultados-reais"
                />

                {/* Artigos relacionados */}
                <ArticleRelated posts={relatedPosts} />

                {/* Nav entre artigos */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-200">
                  <Link href="/blog/leads-do-trafego-pago-como-transformar-em-vendas" className="mono-tag text-zinc-400 hover:text-zinc-900 transition-colors">← Artigo anterior</Link>
                  <Link href="/blog" className="mono-tag text-primary/60 hover:text-primary transition-colors">Ver todos os Insights →</Link>
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
