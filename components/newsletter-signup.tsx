'use client'

import { useState } from 'react'

type Variant = 'inline' | 'article' | 'footer'

export function NewsletterSignup({ variant = 'inline' }: { variant?: Variant }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) {
      setError('Preencha nome e e-mail.')
      return
    }
    setError('')
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })
      if (!res.ok) throw new Error()
      // GTM: evento de conversão de formulário
      const w = window as any
      w.dataLayer = w.dataLayer || []
      w.dataLayer.push({ event: 'form_success', lead_email: email.trim(), lead_name: name.trim() })
      setStatus('success')
    } catch {
      setStatus('error')
      setError('Algo deu errado. Tente novamente.')
    }
  }

  /* ── Variante footer — compacta, fundo escuro ── */
  if (variant === 'footer') {
    return (
      <div className="flex flex-col gap-4 items-start">
        <p className="text-sm font-bold text-foreground tracking-wide">Newsletter</p>
        <p className="text-xs text-foreground/60 leading-relaxed max-w-[220px]">
          Análises de tráfego, CRM e conversão direto da nossa operação. Sem spam, sem modinha.
        </p>
        {status === 'success' ? (
          <p className="text-xs text-primary font-semibold">Cadastrado. Fique de olho na caixa de entrada.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full" noValidate>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Nome"
              className="w-full bg-transparent border border-border px-3 py-2 text-xs text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="E-mail"
              className="w-full bg-transparent border border-border px-3 py-2 text-xs text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
            />
            {error && <p className="text-xs text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-4 py-2 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Enviando...' : 'Quero receber'}
            </button>
          </form>
        )}
      </div>
    )
  }

  /* ── Variante article — fundo branco, borda, inline no artigo ── */
  if (variant === 'article') {
    return (
      <div className="my-10 border border-zinc-200 bg-zinc-50 p-8 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <span className="mono-tag text-primary/60">Newsletter OxBrand</span>
          <p className="text-lg font-bold text-zinc-900">
            Receba análises direto da nossa operação.
          </p>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Análises de tráfego, CRM e conversão direto da nossa operação. Sem spam, sem modinha.
          </p>
        </div>
        {status === 'success' ? (
          <p className="text-sm font-semibold text-primary">Cadastrado. Fique de olho na caixa de entrada.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Nome"
              className="flex-1 border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="E-mail"
              className="flex-1 border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="shrink-0 px-6 py-2.5 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Enviando...' : 'Quero receber'}
            </button>
          </form>
        )}
        {error && <p className="text-xs text-red-500 -mt-2">{error}</p>}
      </div>
    )
  }

  /* ── Variante inline — para grid do /blog, fundo roxo ── */
  return (
    <div className="col-span-full bg-primary p-10 sm:p-12 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="mono-tag text-white/60 font-semibold">Newsletter OxBrand</span>
        <p className="text-2xl sm:text-3xl font-bold text-white leading-snug text-balance">
          Receba análises direto<br className="hidden sm:block" /> de quem opera.
        </p>
        <p className="text-sm text-white/70 leading-relaxed max-w-md">
          Análises de tráfego, CRM e conversão direto da nossa operação. Sem spam, sem modinha.
        </p>
      </div>
      {status === 'success' ? (
        <p className="text-sm font-semibold text-white">Cadastrado. Fique de olho na caixa de entrada.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl" noValidate>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Nome"
            className="flex-1 bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="E-mail"
            className="flex-1 bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="shrink-0 px-6 py-2.5 bg-white text-primary text-xs font-bold tracking-widest uppercase hover:bg-white/90 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Enviando...' : 'Quero receber'}
          </button>
        </form>
      )}
      {error && <p className="text-xs text-white/70 -mt-2">{error}</p>}
    </div>
  )
}
