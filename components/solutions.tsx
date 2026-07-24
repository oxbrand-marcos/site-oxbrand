import { Target, Palette, FileText, BarChart2, Globe, Cpu, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const partners = [
  { src: '/images/partners/google.webp',         alt: 'Google Partner',                          span: 1 },
  { src: '/images/partners/meta.webp',            alt: 'Meta Business Partner',                   span: 1 },
  { src: '/images/partners/linkedin.webp',        alt: 'LinkedIn Marketing Partner',              span: 1 },
  { src: '/images/partners/tiktok.webp',          alt: 'TikTok Marketing Partners',               span: 1 },
  { src: '/images/partners/pinterest.webp',       alt: 'Pinterest Marketing Partners',            span: 1 },
  { src: '/images/partners/rd.webp',              alt: 'RD Station',                              span: 1 },
  { src: '/images/partners/kommo.webp',           alt: 'Kommo Partner',                           span: 3 },
  { src: '/images/partners/semrush.webp',         alt: 'SEMrush Certified Agency Partner',        span: 1 },
  { src: '/images/partners/activecampaign.webp',  alt: 'ActiveCampaign Platinum Agency Partner',  span: 1 },
  { src: '/images/partners/nuvemshop.webp',       alt: 'Nuvemshop Partners',                      span: 1 },
  { src: '/images/partners/clickup.webp',         alt: 'ClickUp Partner',                         span: 1 },
  { src: '/images/partners/adobe.webp',           alt: 'Adobe Solution Partner',                  span: 1 },
  { src: '/images/partners/umbler.webp',          alt: 'Umbler Prime Agência Parceira',           span: 1 },
]

const solutions = [
  {
    icon: Target,
    title: 'Gestão de Tráfego Pago',
    description:
      'Campanhas por intenção no Meta e Google Ads. Testes constantes, criativos fortes e otimização semanal. Você aparece para quem já quer comprar.',
    size: 'large',
    tag: '01',
    href: '/solucoes/gestao-de-trafego-pago',
  },
  {
    icon: Cpu,
    title: 'CRM Kommo',
    description:
      'Funil estruturado, canais unificados e automações que respondem em segundos. Menos lead perdido, mais previsibilidade. Somos Top 5% dos parceiros Kommo no Brasil.',
    size: 'normal',
    tag: '02',
    href: '/solucoes/crm-kommo',
  },
  {
    icon: BarChart2,
    title: 'Assessoria em Marketing',
    description:
      'Planejamento, execução e rotina de otimização com metas claras. Para quem quer direção, não mais uma lista de tarefas.',
    size: 'normal',
    tag: '03',
    href: '/solucoes/assessoria-em-marketing',
  },
  {
    icon: Palette,
    title: 'Desenvolvimento de Sites',
    description:
      'Sites e landing pages rápidas, com rastreio desde o primeiro acesso. Site que não converte é despesa, não ativo.',
    size: 'normal',
    tag: '04',
    href: '/solucoes/desenvolvimento-de-sites',
  },
  {
    icon: Globe,
    title: 'Inbound Marketing',
    description:
      'SEO, conteúdo e automação que atraem quem já tem o problema que você resolve. Tráfego que não depende de verba diária.',
    size: 'normal',
    tag: '05',
    href: '/solucoes/inbound-marketing',
  },
  {
    icon: FileText,
    title: 'Copywriting e Redação',
    description:
      'Textos que movem o leitor para a próxima etapa. Do anúncio ao e-mail, da landing page ao roteiro.',
    size: 'large',
    tag: '06',
    href: '/solucoes/copywriting-e-redacao',
  },
]

export function Solutions({ hideViewAll = false }: { hideViewAll?: boolean }) {
  return (
    <section id="solucoes" className="py-24 border-b border-border section-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left gap-6 mb-12">
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <span className="mono-tag text-muted-foreground/60">Soluções</span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              Seis frentes,{' '}
              <span className="text-glow">um só sistema.</span>
            </h2>
          </div>
          {!hideViewAll && (
            <Link
              href="/solucoes"
              className="shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 border border-border text-xs font-bold tracking-widest uppercase text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
            >
              Ver todos ↗
            </Link>
          )}
        </div>

        {/* Nossos Diferenciais */}
        <div className="grid lg:grid-cols-2 gap-px bg-border mb-px">

          {/* Coluna esquerda, título */}
          <div className="bg-background p-8 flex flex-col justify-center gap-3 items-center text-center lg:items-start lg:text-left">
            <span className="mono-tag text-muted-foreground/60">Por que a OxBrand</span>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Nossos<br />
              <span className="text-glow">diferenciais</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mt-2">
              Não somos uma agência de pacotes. Somos uma operação de marketing
              orientada por dados, comprometida com o seu resultado.
            </p>
          </div>

          {/* Coluna direita, lista */}
          <div className="bg-background">
            {[
              'Reuniões objetivas com indicadores e metas claras',
              'Integração real entre marketing e comercial para vender mais',
              'Rede de parceiros e certificações premium: Google, Meta, ActiveCampaign Platinum e Top 5% dos parceiros Kommo no Brasil',
              'Suporte ágil via WhatsApp com direcionamento prático',
              'Diagnóstico gratuito como porta de entrada',
            ].map((item, i, arr) => (
              <div
                key={i}
                className="flex items-start gap-4 px-8 py-4"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgb(92 54 235 / 0.12)' : 'none' }}
              >
                <CheckCircle2
                  size={17}
                  className="text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {solutions.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`bg-background p-7 flex flex-col gap-5 card-lift group ${
                  item.size === 'large' ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Header do card */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors"
                    aria-hidden="true"
                  >
                    <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="mono-tag text-muted-foreground/30">{item.tag}</span>
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-bold text-foreground text-base">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                {/* Linha de ação */}
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border">
                  <span className="mono-tag text-muted-foreground/40 group-hover:text-primary transition-colors">
                    Saiba mais
                  </span>
                  <span className="text-xs text-muted-foreground/30 group-hover:text-primary transition-colors" aria-hidden>→</span>
                </div>
              </Link>
            )
          })}
        </div>
        {/* Parceiros Certificados */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-3">
            <span className="mono-tag text-muted-foreground/60">Parceiros Certificados</span>
            <div className="hidden sm:block flex-1 h-px bg-border" />
          </div>
          <p className="text-sm text-muted-foreground/70 mb-10 max-w-2xl">
            As principais entre mais de 50 parcerias e certificações do nosso ecossistema, selecionamos as que realmente sustentam a operação.
          </p>

          <div
            className="grid grid-cols-3 lg:grid-cols-5 border-t border-l border-border"
            aria-label="Lista de parceiros certificados"
          >
            {partners.map((p) => {
              const isKommo = p.alt === 'Kommo Partner'
              const Wrapper = isKommo ? 'a' : 'div'
              const wrapperProps = isKommo
                ? { href: 'https://www.kommo.com.br', target: '_blank', rel: 'noopener noreferrer' }
                : {}
              return (
                <Wrapper
                  key={p.alt}
                  {...wrapperProps}
                  style={{ gridColumn: p.span > 1 ? `span ${p.span}` : undefined }}
                  className="group relative border-b border-r border-border flex flex-col items-center justify-center gap-2 px-8 py-8 bg-card/30 hover:bg-card transition-colors duration-200 overflow-hidden"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.span > 1 ? 320 : 180}
                    height={p.span > 1 ? 96 : 64}
                    className={`w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${p.span > 1 ? 'h-20' : 'h-16'}`}
                  />
                  {isKommo && (
                    <span className="absolute bottom-3 left-0 right-0 text-center text-[11px] font-mono tracking-widest uppercase text-primary/70 group-hover:text-primary transition-colors duration-300">
                      Top 5% parceiros no Brasil
                    </span>
                  )}
                </Wrapper>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
