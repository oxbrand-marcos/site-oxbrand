'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { PhoneField, isValidPhoneNumber } from '@/components/phone-field'
import { getRecaptchaToken } from '@/lib/recaptcha-client'

const STORAGE_KEY = 'oxb_popup_institucional'
const COOLDOWN_DAYS = 30

const inputCls =
  'bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 text-sm px-4 py-3 outline-none focus:border-[#5c36eb] transition-colors w-full'

function hasSeenRecently(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const ts = parseInt(raw, 10)
    const diff = Date.now() - ts
    return diff < COOLDOWN_DAYS * 24 * 60 * 60 * 1000
  } catch {
    return false
  }
}

function markSeen() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()))
  } catch {}
}

export function PopupDiagnostico() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', whatsappOptin: false })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')
  const triggered = useRef(false)

  const openPopup = useCallback(() => {
    if (triggered.current) return
    if (hasSeenRecently()) return
    triggered.current = true
    setOpen(true)
    markSeen()
  }, [])

  useEffect(() => {
    // Exit-intent: mouse sai pelo topo da janela (desktop)
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) openPopup()
    }

    // Mobile/tablet: após 20 s de permanência sem scroll
    let timer: ReturnType<typeof setTimeout>
    let lastScroll = 0

    function handleScroll() {
      lastScroll = Date.now()
    }

    function startTimer() {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const sinceScroll = Date.now() - lastScroll
        if (sinceScroll > 8000) openPopup()
      }, 20000)
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })
    startTimer()

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [openPopup])

  function close() {
    setOpen(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro('')
    if (!form.whatsapp || !isValidPhoneNumber(form.whatsapp)) {
      setErro('Informe um WhatsApp válido, incluindo o DDD.')
      return
    }
    setLoading(true)
    try {
      const token = await getRecaptchaToken('popup_institucional')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'popup_institucional',
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
      w.dataLayer.push({ event: 'popup_diagnostico_submit', lead_email: form.email, lead_phone: form.whatsapp })
      setSent(true)
    } catch {
      setErro('Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Diagnóstico gratuito"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal, fundo branco */}
      <div className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Barra decorativa no topo */}
        <div className="h-1 w-full bg-[#5c36eb]" />

        {/* Botão fechar */}
        <button
          onClick={close}
          aria-label="Fechar"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-700 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12.854 3.146a.5.5 0 0 1 0 .708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 8 3.146 3.854a.5.5 0 0 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>

        <div className="px-8 pt-8 pb-8">
          {/* Logo OxBrand */}
          <div className="mb-6">
            <Image
              src="/images/oxbrand-logo-dark.png"
              alt="OxBrand, Marketing de Performance"
              width={160}
              height={45}
              className="h-8 w-auto object-contain"
            />
          </div>

          {sent ? (
            <div className="flex flex-col items-center text-center gap-5 py-6">
              <div className="w-12 h-12 bg-[#5c36eb]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#5c36eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-zinc-900">Recebemos o seu pedido!</h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                  Nossa equipe entrará em contato em até 1 hora útil para agendar o seu diagnóstico 360.
                </p>
              </div>
              <button
                onClick={close}
                className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors font-mono"
              >
                Fechar →
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2 mb-6">
                <p className="text-xs font-mono uppercase tracking-widest text-[#5c36eb]">Ei! Espere!</p>
                <h2 className="text-xl font-bold text-zinc-900 leading-snug text-balance">
                  Não vá embora antes de pedir o seu diagnóstico gratuito.
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed mt-1">
                  Preencha os dados abaixo e nossos especialistas farão um diagnóstico 360 de como aumentar a sua visibilidade no digital.
                </p>
              </div>

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
                    className="w-4 h-4 mt-0.5 border border-zinc-300 bg-white accent-[#5c36eb] shrink-0"
                  />
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-700 transition-colors leading-relaxed">
                    Aceito receber o contato da OxBrand via WhatsApp.
                  </span>
                </label>

                {erro && <p className="text-xs text-red-500">{erro}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#5c36eb] hover:bg-[#4a2bc7] transition-colors text-white font-bold tracking-widest uppercase text-sm py-4 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Pedir Diagnóstico'}
                </button>

                <p className="text-[11px] text-zinc-400 leading-relaxed text-center">
                  Protegido por reCAPTCHA.{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-600">
                    Privacidade
                  </a>{' '}
                  e{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-600">
                    Termos
                  </a>{' '}
                  do Google.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
