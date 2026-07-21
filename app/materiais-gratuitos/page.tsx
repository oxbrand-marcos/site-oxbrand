'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { X, Loader2, CheckCircle2 } from 'lucide-react'

/* ─── tipos ────────────────────────────────────────────────── */
type ModalState = 'idle' | 'submitting' | 'success'

/* ─── materiais ─────────────────────────────────────────────── */
const materials = [
  {
    slug: 'e-book-comunicacao-raiz',
    tag: 'E-BOOK',
    title: 'Comunicação Raiz',
    subtitle: 'Nosso método exclusivo para empreendedores e profissionais do marketing',
    description:
      'Pare de perder tempo com modismos e métricas de vaidade. Descubra a Comunicação Raiz: o método exclusivo (5Q′s + 3PQ′s = CP) da OxBrand para construir mensagens sólidas e orientadas a resultados.',
    downloadSlug: 'comunicacao-raiz',
  },
]

/* ─── modal de captura ───────────────────────────────────────── */
function LeadModal({ onClose }: { onClose: () => void }) {
  const [state, setState] = useState<ModalState>('idle')
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', aceite: false })
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  function validate() {
    const e: Partial<typeof form> = {}
    if (!form.nome.trim()) e.nome = 'Informe seu nome.'
    if (!form.email.includes('@')) e.email = 'E-mail inválido.'
    if (form.whatsapp.replace(/\D/g, '').length < 10) e.whatsapp = 'WhatsApp inválido.'
    if (!form.aceite) e.aceite = true as unknown as string
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setState('submitting')

    try {
      await fetch('/api/leads/materiais', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          whatsapp: form.whatsapp,
          material: 'comunicacao-raiz',
        }),
      })
    } catch {
      // falha silenciosa — não bloqueia o download
    }

    setState('success')

    // dispara download após breve delay
    setTimeout(() => {
      const a = document.createElement('a')
      a.href = '/api/download/comunicacao-raiz'
      a.download = 'ebook-comunicacao-raiz.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }, 800)
  }

  return (
    /* backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-md bg-white text-zinc-900 border border-zinc-200 shadow-2xl">

        {/* fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-zinc-700 transition-colors"
          aria-label="Fechar modal"
        >
          <X size={18} />
        </button>

        {state === 'success' ? (
          /* ── estado de sucesso ── */
          <div className="flex flex-col items-center gap-5 px-8 py-12 text-center">
            <CheckCircle2 size={40} className="text-primary" />
            <h2 className="text-xl font-bold text-zinc-900">Download iniciado!</h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              O e-book <strong>Comunicação Raiz</strong> está sendo baixado. Se não iniciar automaticamente,{' '}
              <a href="/api/download/comunicacao-raiz" download className="text-primary underline">clique aqui</a>.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 bg-primary text-white text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
            >
              Fechar
            </button>
          </div>
        ) : (
          /* ── formulário ── */
          <>
            <div className="px-8 pt-8 pb-4 border-b border-zinc-100">
              <span className="mono-tag text-primary/60 text-[10px]">E-BOOK GRATUITO</span>
              <h2 id="modal-title" className="mt-1 text-xl font-bold text-zinc-900 leading-snug">
                Comunicação Raiz
              </h2>
              <p className="mt-1 text-xs text-zinc-400">Preencha para liberar o download imediato.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="px-8 py-6 flex flex-col gap-4">

              {/* Nome */}
              <div className="flex flex-col gap-1">
                <label htmlFor="lead-nome" className="text-xs font-semibold text-zinc-600 tracking-wide uppercase">
                  Nome <span className="text-primary">*</span>
                </label>
                <input
                  id="lead-nome"
                  type="text"
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="border border-zinc-200 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary/60 transition-colors"
                />
                {errors.nome && <span className="text-xs text-red-500">{errors.nome}</span>}
              </div>

              {/* E-mail */}
              <div className="flex flex-col gap-1">
                <label htmlFor="lead-email" className="text-xs font-semibold text-zinc-600 tracking-wide uppercase">
                  E-mail <span className="text-primary">*</span>
                </label>
                <input
                  id="lead-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border border-zinc-200 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary/60 transition-colors"
                />
                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1">
                <label htmlFor="lead-whatsapp" className="text-xs font-semibold text-zinc-600 tracking-wide uppercase">
                  WhatsApp <span className="text-primary">*</span>
                </label>
                <input
                  id="lead-whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="border border-zinc-200 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary/60 transition-colors"
                />
                {errors.whatsapp && <span className="text-xs text-red-500">{errors.whatsapp}</span>}
              </div>

              {/* Aceite */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={form.aceite}
                    onChange={(e) => setForm({ ...form, aceite: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 border border-zinc-300 peer-checked:bg-primary peer-checked:border-primary transition-colors flex items-center justify-center">
                    {form.aceite && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                        <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs text-zinc-500 leading-relaxed">
                  Aceito receber comunicações da OxBrand por e-mail e WhatsApp. Você pode cancelar a qualquer momento.
                  {errors.aceite && <span className="block mt-0.5 text-red-500">Aceite obrigatório para prosseguir.</span>}
                </span>
              </label>

              <button
                type="submit"
                disabled={state === 'submitting'}
                className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold tracking-widest uppercase hover:bg-primary/85 disabled:opacity-60 transition-colors"
              >
                {state === 'submitting' ? (
                  <><Loader2 size={14} className="animate-spin" /> Enviando...</>
                ) : (
                  'Baixar gratuitamente ↗'
                )}
              </button>

              <p className="text-center text-[10px] text-zinc-400">Sem spam. Seus dados são tratados conforme a LGPD.</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

/* ─── página ─────────────────────────────────────────────────── */
export default function MateriaisGratuitosPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />

      {modalOpen && <LeadModal onClose={() => setModalOpen(false)} />}

      <main className="flex-1 flex flex-col">

        {/* Hero */}
        <section className="relative flex flex-col justify-end overflow-hidden grid-bg border-b border-border">
          <DotsCanvas />
          <div className="pointer-events-none absolute -left-40 top-1/4 w-[480px] h-[480px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-40 bottom-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,transparent_40%,rgba(0,0,0,0.7)_100%)]" aria-hidden="true" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full flex flex-col items-center text-center gap-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OXBRAND</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">MATERIAIS</span>
            </nav>

            <p className="mono-tag text-primary/60 tracking-[0.2em]">gratuitos · sem custo · direto ao ponto</p>

            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
              Materiais gratuitos de{' '}
              <span className="text-glow">Marketing Digital</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
              Guias, checklists e templates que usamos na nossa própria operação. Sem cadastro longo, sem enrolação: baixe, aplique e veja o resultado.
            </p>
          </div>

          {/* faixa roxa */}
          <div className="relative z-10 border-t border-primary/20 bg-primary/5 py-3 px-6">
            <p className="max-w-7xl mx-auto mono-tag text-primary/50 text-center">
              método no lugar de achismo · marketing é estrutura · estrutura gera resultado
            </p>
          </div>
        </section>

        {/* Grid de materiais */}
        <section className="py-20 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">

            <div className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-left">
              <span className="mono-tag text-zinc-500">Materiais</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">Materiais disponíveis</h2>
            </div>

            <div className="border border-zinc-200">
              {materials.map((mat) => (
                <div
                  key={mat.slug}
                  className="group flex flex-col md:grid md:grid-cols-[1fr_auto] bg-white"
                >
                  {/* Info */}
                  <div className="p-8 sm:p-10 flex flex-col gap-5 md:border-r md:border-zinc-200 items-center text-center md:items-start md:text-left">
                    <span className="mono-tag text-primary/60 w-fit">{mat.tag}</span>
                    <h3 className="text-2xl font-bold text-zinc-900 leading-snug">
                      {mat.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed max-w-lg">{mat.description}</p>
                    <div className="mt-auto pt-4 border-t border-zinc-200 w-full flex items-center justify-between">
                      <span className="text-xs text-zinc-400 font-medium uppercase tracking-widest">E-book · PDF</span>
                      <button
                        onClick={() => setModalOpen(true)}
                        className="mono-tag text-primary/70 hover:text-primary transition-colors cursor-pointer bg-transparent border-0 p-0"
                      >
                        Baixar gratuitamente ↗
                      </button>
                    </div>
                  </div>

                  {/* Capa — clicável também */}
                  <button
                    onClick={() => setModalOpen(true)}
                    className="hidden md:flex items-center justify-center bg-zinc-50 p-8 w-64 hover:bg-zinc-100 transition-colors group/img"
                    aria-label="Baixar e-book Comunicação Raiz"
                  >
                    <Image
                      src="/images/ebook-comunicacao-raiz.webp"
                      alt="Capa do E-book Comunicação Raiz"
                      width={400}
                      height={380}
                      className="w-full h-auto object-contain drop-shadow-lg group-hover/img:scale-105 transition-transform duration-500"
                    />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA institucional */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="border border-border p-10 sm:p-14 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-8 text-center sm:text-left">
              <div className="flex flex-col gap-3 max-w-xl items-center sm:items-start">
                <span className="mono-tag text-primary/60">Diagnóstico gratuito</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  Que tal um diagnóstico da sua empresa?
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Descubra como você está performando no digital e o que podemos fazer para alavancar com estratégia os seus resultados.
                </p>
              </div>
              <a
                href="/diagnostico"
                className="shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
              >
                Falar com especialistas ↗
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
