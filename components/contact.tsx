'use client'

import { useState } from 'react'
import { PhoneField, isValidPhoneNumber } from '@/components/phone-field'
import { getRecaptchaToken } from '@/lib/recaptcha-client'

const inputCls =
  'border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors w-full font-mono'

const Req = () => <span className="text-primary ml-1">*</span>

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', segment: '', message: '', whatsappOptin: false })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!form.phone || !isValidPhoneNumber(form.phone)) {
      setError('Informe um telefone válido, incluindo o DDD.')
      return
    }
    setLoading(true)
    try {
      const token = await getRecaptchaToken('contato')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'contato',
          _pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          _recaptcha: token,
          'Nome': form.name,
          'E-mail': form.email,
          'Telefone': form.phone,
          'Segmento': form.segment,
          'Mensagem': form.message,
          'Aceita WhatsApp': form.whatsappOptin ? 'Sim' : 'Não',
        }),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error ?? 'Erro ao enviar')
      setSent(true)
    } catch {
      setError('Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="py-24 border-b border-border section-light">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-card p-10 lg:p-14 flex flex-col gap-8 border border-border">
            {/* Título */}
            <div className="flex flex-col gap-3 items-center text-center lg:items-start lg:text-left">
              <span className="mono-tag text-muted-foreground/60">Fale com nosso time</span>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
                Vamos construir<br />
                algo{' '}
                <span className="text-glow">grande.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mt-1">
                Preencha o formulário ou fale diretamente com o nosso time.
                Retorno em até 2 horas em dias úteis.
              </p>
            </div>

            {sent ? (
              <div className="flex flex-col gap-5 h-full justify-center">
                <div className="w-10 h-px bg-primary" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-foreground">Mensagem enviada.</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Retorno em até 2 horas em dias úteis.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="w-fit mono-tag text-muted-foreground/50 hover:text-foreground transition-colors"
                >
                  Enviar outra mensagem →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="mono-tag text-muted-foreground/50 text-center sm:text-left">Nome<Req /></label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="mono-tag text-muted-foreground/50 text-center sm:text-left">E-mail<Req /></label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="mono-tag text-muted-foreground/50 text-center sm:text-left">Telefone<Req /></label>
                    <PhoneField
                      id="phone"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                      wrapperClassName={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="segment" className="mono-tag text-muted-foreground/50 text-center sm:text-left">Segmento<Req /></label>
                    <input
                      id="segment"
                      type="text"
                      required
                      placeholder="Ex: E-commerce, Saúde..."
                      value={form.segment}
                      onChange={(e) => setForm({ ...form, segment: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="mono-tag text-muted-foreground/50 text-center sm:text-left">Mensagem<Req /></label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Conte sobre seu negócio e o que espera alcançar..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                  />
                </div>
                {/* Opt-in WhatsApp (consentimento — opcional) */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      id="whatsappOptin"
                      checked={form.whatsappOptin}
                      onChange={(e) => setForm({ ...form, whatsappOptin: e.target.checked })}
                      className="sr-only"
                    />
                    <div
                      className="w-5 h-5 rounded-[3px] border flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: form.whatsappOptin ? '#5c36eb' : '#ffffff',
                        borderColor: form.whatsappOptin ? '#5c36eb' : '#b8b4b4',
                      }}
                    >
                      {form.whatsappOptin && (
                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" aria-hidden="true">
                          <path d="M2 6l3 3 5-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Você aceita receber o nosso contato via WhatsApp?
                  </span>
                </label>

                {error && (
                  <p className="text-xs text-red-500 leading-relaxed">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Enviar mensagem ↗'}
                </button>

                <p className="text-xs text-muted-foreground/50 leading-relaxed">
                  Ao enviar, você autoriza nosso contato para agendar o diagnóstico e tirar dúvidas sobre as soluções.
                </p>
                <p className="text-[11px] text-muted-foreground/40 leading-relaxed">
                  Protegido por reCAPTCHA. Aplicam-se a{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Política de Privacidade</a>{' '}
                  e os{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Termos de Serviço</a>{' '}
                  do Google.
                </p>
              </form>
            )}
        </div>
      </div>
    </section>
  )
}
