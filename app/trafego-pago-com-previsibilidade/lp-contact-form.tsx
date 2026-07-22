'use client'

import { useState } from 'react'
import { PhoneField, isValidPhoneNumber } from '@/components/phone-field'
import { getRecaptchaToken } from '@/lib/recaptcha-client'

const inputCls =
  'bg-background border border-border text-foreground placeholder:text-muted-foreground/40 text-sm px-4 py-3 outline-none focus:border-primary transition-colors w-full'

export function LpContactForm() {
  const [form, setForm] = useState({
    nome: '', instagram: '', whatsapp: '', email: '', demanda: '', whatsappOptin: false,
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro('')
    if (!form.whatsapp || !isValidPhoneNumber(form.whatsapp)) {
      setErro('Informe um WhatsApp válido, incluindo o DDD.')
      return
    }
    setLoading(true)
    try {
      const token = await getRecaptchaToken('lp_trafego')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'lp_trafego',
          _pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          _recaptcha: token,
          'Nome': form.nome,
          '@ da Empresa (Instagram)': form.instagram,
          'WhatsApp': form.whatsapp,
          'E-mail': form.email,
          'Demanda': form.demanda,
          'Aceita WhatsApp': form.whatsappOptin ? 'Sim' : 'Não',
        }),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error ?? 'Erro ao enviar')
      setSent(true)
    } catch {
      setErro('Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col gap-5 py-8 items-center text-center">
        <div className="w-10 h-px bg-primary mx-auto" />
        <h3 className="text-lg font-bold text-foreground">Mensagem recebida!</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
          Entraremos em contato em até 1 hora útil.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors font-mono"
        >
          Enviar outra mensagem →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          required
          placeholder="Seu Nome *"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className={inputCls}
        />
        <input
          type="text"
          required
          placeholder="@ da Empresa (Instagram) *"
          value={form.instagram}
          onChange={(e) => setForm({ ...form, instagram: e.target.value })}
          className={inputCls}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <PhoneField
          value={form.whatsapp}
          onChange={(v) => setForm({ ...form, whatsapp: v })}
          wrapperClassName={inputCls}
          placeholder="WhatsApp *"
        />
        <input
          type="email"
          required
          placeholder="Seu melhor E-Mail *"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputCls}
        />
      </div>
      <textarea
        rows={4}
        required
        placeholder="Descreva brevemente sua demanda *"
        value={form.demanda}
        onChange={(e) => setForm({ ...form, demanda: e.target.value })}
        className={`${inputCls} resize-none`}
      />
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={form.whatsappOptin}
          onChange={(e) => setForm({ ...form, whatsappOptin: e.target.checked })}
          className="w-4 h-4 border border-border bg-background accent-primary shrink-0"
        />
        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
          Você aceita receber o nosso contato via WhatsApp?
        </span>
      </label>
      {erro && <p className="text-xs text-red-500">{erro}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-primary/85 transition-colors text-white font-bold tracking-widest uppercase text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
      <p className="text-[11px] text-muted-foreground/40 leading-relaxed">
        Protegido por reCAPTCHA. Aplicam-se a{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Política de Privacidade</a>{' '}
        e os{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Termos</a>{' '}
        do Google.
      </p>
    </form>
  )
}
