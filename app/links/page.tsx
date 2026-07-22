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
  { label: 'Instagram', href: 'https://www.instagram.com/oxbrand.br/', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
  { label: 'Facebook', href: 'https://www.facebook.com/oxbrand.oficial', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/oxbrand-br/', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: 'YouTube', href: 'https://www.youtube.com/@oxbrand_br', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
  { label: 'WhatsApp', href: 'https://wa.me/+5511921425351', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> },
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
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-primary/20 bg-primary/10 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Endereço */}
        <div className="w-full flex flex-col items-center gap-1 text-center">
          <span className="mono-tag text-muted-foreground/40">Onde estamos</span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Av.+Narciso+Yague+Guimar%C3%A3es+1145+Mogi+das+Cruzes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors leading-relaxed"
          >
            Av. Narciso Yague Guimarães, Nº 1.145 · Sala 1303<br />
            Edifício Helbor Concept · Mogi das Cruzes / SP
          </a>
        </div>

        {/* Rodapé */}
        <p className="mono-tag text-muted-foreground/30 text-center pb-4">
          © 2026 OxBrand · Mogi das Cruzes, SP
        </p>

      </div>
    </main>
  )
}
