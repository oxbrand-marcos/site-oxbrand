import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'OxBrand | Links',
  description: 'Tudo o que você precisa da OxBrand em um só lugar. Agência de Marketing de Performance.',
  openGraph: {
    title: 'OxBrand | Links',
    description: 'Tudo o que você precisa da OxBrand em um só lugar.',
    siteName: 'OxBrand',
  },
}

const links = [
  {
    tag: '01 / Atendimento',
    label: 'Fale com nossos especialistas',
    sub: 'WhatsApp direto com o time',
    href: 'https://wa.me/+5511921425351',
    external: true,
    highlight: true,
  },
  {
    tag: '02 / Diagnóstico',
    label: 'Diagnóstico gratuito do seu negócio',
    sub: 'Análise completa sem compromisso',
    href: '/diagnostico',
    external: false,
    highlight: false,
  },
  {
    tag: '03 / Contato',
    label: 'Fale com o nosso time',
    sub: 'Formulário de contato',
    href: '/contato',
    external: false,
    highlight: false,
  },
  {
    tag: '04 / Site',
    label: 'Visite o nosso site',
    sub: 'oxbrand.com.br',
    href: '/',
    external: false,
    highlight: false,
  },
  {
    tag: '05 / Carreiras',
    label: 'Seja um OxMaker',
    sub: 'Faça parte do nosso time',
    href: '/carreiras-em-marketing-digital',
    external: false,
    highlight: false,
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/oxbrand.marketing' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/oxbrand' },
  { label: 'YouTube', href: 'https://youtube.com/@oxbrand' },
]

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-background grid-bg flex flex-col items-center justify-start px-5 py-12 relative overflow-hidden">

      {/* Glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgb(92 54 235 / 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-8">

        {/* Logo + identidade */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <div className="relative">
            <Image
              src="/images/oxbrand-logo.webp"
              alt="OxBrand"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-lg font-bold tracking-tight text-foreground">
              OxBrand
            </h1>
            <p className="mono-tag text-primary/70">#oxygenmakesgrowth</p>
          </div>

          <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-[240px]">
            Agência de Marketing de Performance.<br />
            Estratégia, tráfego e resultado real.
          </p>
        </div>

        {/* Divisor */}
        <div className="w-full flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="mono-tag text-muted-foreground/40">Links</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Lista de links */}
        <nav className="w-full flex flex-col gap-2" aria-label="Links da OxBrand">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={[
                'group w-full flex items-center justify-between gap-4 px-5 py-4 border transition-all duration-200',
                link.highlight
                  ? 'bg-primary border-primary text-primary-foreground hover:bg-primary/85'
                  : 'bg-card border-border text-foreground hover:border-primary/50 hover:bg-card/80',
              ].join(' ')}
            >
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className={[
                  'mono-tag',
                  link.highlight ? 'text-primary-foreground/60' : 'text-muted-foreground/50',
                ].join(' ')}>
                  {link.tag}
                </span>
                <span className={[
                  'text-sm font-semibold leading-tight',
                  link.highlight ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary transition-colors',
                ].join(' ')}>
                  {link.label}
                </span>
                <span className={[
                  'text-xs leading-tight',
                  link.highlight ? 'text-primary-foreground/60' : 'text-muted-foreground',
                ].join(' ')}>
                  {link.sub}
                </span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className={[
                  'shrink-0 transition-transform duration-200 group-hover:translate-x-0.5',
                  link.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground/40 group-hover:text-primary',
                ].join(' ')}
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Redes sociais */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <span className="mono-tag text-muted-foreground/40">Redes</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex items-center justify-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-tag text-muted-foreground/50 hover:text-primary border border-border hover:border-primary/40 px-3 py-2 transition-all duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Rodapé */}
        <p className="mono-tag text-muted-foreground/30 text-center pb-4">
          © 2026 OxBrand · Mogi das Cruzes, SP
        </p>

      </div>
    </main>
  )
}
