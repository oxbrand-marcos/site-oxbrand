import Link from 'next/link'

export function CTABanner() {
  return (
    <section className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
          Pronto para escalar?{' '}
          <span className="text-primary">Fale com a OxBrand.</span>
        </p>
        <a
          href="https://wa.me/+5511921425351"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
        >
          Iniciar agora ↗
        </a>
      </div>
    </section>
  )
}
