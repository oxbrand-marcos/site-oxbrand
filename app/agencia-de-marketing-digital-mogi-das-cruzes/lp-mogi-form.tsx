'use client'

import { useState } from 'react'
import { PhoneField, isValidPhoneNumber } from '@/components/phone-field'
import { getRecaptchaToken } from '@/lib/recaptcha-client'

const inputCls =
  'bg-[#181818] border border-zinc-700 text-zinc-100 placeholder:text-zinc-500 text-sm px-4 py-3 outline-none focus:border-[#5c36eb] transition-colors w-full'

const WA_NUMBER = '5511921425351'
const WA_MSG = encodeURIComponent('Olá, vim pelo site e gostaria de agendar um diagnóstico gratuito da OxBrand em Mogi das Cruzes.')

export function LpMogiForm() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', whatsappOptin: false })
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
      const token = await getRecaptchaToken('lp_mogi')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'lp_mogi',
          _pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          _recaptcha: token,
          Nome: form.nome,
          'E-mail': form.email,
          WhatsApp: form.whatsapp,
          'Aceita WhatsApp': form.whatsappOptin ? 'Sim' : 'Não',
        }),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error ?? 'Erro ao enviar')
      const w = window as any
      w.dataLayer = w.dataLayer || []
      w.dataLayer.push({ event: 'form_success', lead_email: form.email, lead_phone: form.whatsapp, lead_name: form.nome })
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
        <div className="w-12 h-12 bg-[#5c36eb]/15 flex items-center justify-center mx-auto">
          <svg className="w-6 h-6 text-[#5c36eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-zinc-100">Pedido recebido!</h3>
        <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
          Nossa equipe entrará em contato em até 1 hora útil para agendar o diagnóstico.
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-[#5c36eb] hover:underline font-mono"
        >
          Ou fale agora pelo WhatsApp →
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        required
        placeholder="Seu Nome *"
        value={form.nome}
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
        className={inputCls}
      />
      <input
        type="email"
        required
        placeholder="Seu melhor E-Mail *"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={inputCls}
      />
      <PhoneField
        value={form.whatsapp}
        onChange={(v) => setForm({ ...form, whatsapp: v })}
        wrapperClassName={inputCls}
        placeholder="WhatsApp *"
      />

      <label className="flex items-start gap-3 cursor-pointer group mt-1">
        <input
          type="checkbox"
          checked={form.whatsappOptin}
          onChange={(e) => setForm({ ...form, whatsappOptin: e.target.checked })}
          className="w-4 h-4 mt-0.5 border border-zinc-600 bg-zinc-800 accent-[#5c36eb] shrink-0"
        />
        <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors leading-relaxed">
          Aceito receber o contato da OxBrand via WhatsApp.
        </span>
      </label>

      {erro && <p className="text-xs text-red-400">{erro}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#5c36eb] hover:bg-[#4a2bc7] transition-colors text-white font-bold tracking-widest uppercase text-sm py-4 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Enviando...' : 'Pedir Diagnóstico'}
      </button>

      <p className="text-[11px] text-zinc-600 leading-relaxed text-center">
        Protegido por reCAPTCHA.{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400">
          Privacidade
        </a>{' '}
        e{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400">
          Termos
        </a>{' '}
        do Google.
      </p>
    </form>
  )
}
