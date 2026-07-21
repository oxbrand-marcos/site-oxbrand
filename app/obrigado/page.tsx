import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Parabéns pela sua escolha | OxBrand',
  description: 'O nosso time comercial já tem todos os seus dados e vão entrar em contato contigo.',
  robots: { index: false, follow: false },
}

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-background font-sans flex flex-col">

      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glow roxo superior */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] pointer-events-none z-0 opacity-20"
        aria-hidden
        style={{ background: 'radial-gradient(ellipse at top, var(--color-primary) 0%, transparent 70%)' }}
      />

      <Header />

      {/* Hero — mensagem principal */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20 text-center max-w-2xl mx-auto w-full gap-8">

        {/* Badge */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="mono-tag text-primary/80">Formulário recebido</span>
        </div>

        {/* Título */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
            Parabéns pela<br />sua escolha.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
            O nosso time comercial já tem todos os seus dados e vão entrar em contato contigo.
          </p>
        </div>

        {/* Divisor */}
        <div className="w-12 h-px bg-primary/40" />

        {/* Mensagem secundária */}
        <p className="text-sm text-muted-foreground leading-relaxed text-balance">
          Mas se preferir um contato mais rápido, ainda pode clicar aqui abaixo e falar com o nosso time.
        </p>

        {/* CTA WhatsApp */}
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-white font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-primary/85 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Falar com o time agora
        </a>

        <p className="mono-tag text-muted-foreground/40">Só clicar e falar com o nosso time</p>
      </section>

      {/* Faixa de métricas */}
      <section className="relative z-10 w-full border-t border-border/40 bg-primary/10 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '+600', label: 'empresas atendidas ao redor do mundo' },
            { value: '+7 anos', label: 'de experiência em marketing digital' },
            { value: '+R$ 50M', label: 'de faturamento gerado aos nossos clientes' },
            { value: '+120', label: 'parceiros estratégicos para nossos clientes' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-xs text-muted-foreground leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />

    </main>
  )
}
