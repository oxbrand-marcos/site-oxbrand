'use client'

import { useState, useRef, useEffect } from 'react'
import { X, MessageCircle, Send, ChevronDown } from 'lucide-react'

const WHATSAPP_NUMBER = '+5511921425351'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L.057 23.495a.75.75 0 0 0 .92.92l5.733-1.493A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 0 1-4.953-1.354l-.355-.212-3.683.96.983-3.595-.231-.371A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  )
}

/**
 * WhatsAppWidget, pode ser usado de forma independente (fixed) ou
 * embutido dentro de um container posicionado externamente (embedded=true).
 */
export function WhatsAppWidget({ embedded = false }: { embedded?: boolean }) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' })
  const [loading, setLoading] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  // Fecha ao clicar fora
  useEffect(() => {
    if (!open) return
    function handle(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [open])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.nome || !form.email || !form.telefone) return

    setLoading(true)

    const message = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}.\nE-mail: ${form.email}\nTelefone: ${form.telefone}\n\nGostaria de falar com um especialista OxBrand.`
    )

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${message}`, '_blank')
    }, 600)
  }

  function handleReset() {
    setSubmitted(false)
    setForm({ nome: '', email: '', telefone: '' })
    setOpen(false)
  }

  return (
    <div className={`${embedded ? 'contents' : 'fixed bottom-6 right-6 z-50'} flex flex-col items-end gap-3`} ref={panelRef}>

      {/* Painel */}
      {open && (
        <div className="w-80 bg-[#0d0d0d] border border-white/10 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200">

          {/* Cabeçalho */}
          <div className="bg-primary px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight">OxBrand</p>
                <p className="text-white/70 text-xs">Responde em minutos</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Corpo */}
          <div className="p-5">
            {!submitted ? (
              <>
                <p className="text-sm text-white/70 leading-relaxed mb-5">
                  Preencha seus dados e vamos te chamar no WhatsApp agora mesmo.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      Nome completo <span className="text-primary">*</span>
                    </label>
                    <input
                      name="nome"
                      type="text"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      autoComplete="name"
                      className="bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      E-mail <span className="text-primary">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      autoComplete="email"
                      className="bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      Telefone / WhatsApp <span className="text-primary">*</span>
                    </label>
                    <input
                      name="telefone"
                      type="tel"
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      required
                      autoComplete="tel"
                      className="bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors w-full"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 w-full flex items-center justify-center gap-2 py-3 bg-primary text-white text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="animate-pulse">Abrindo WhatsApp…</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Falar com especialista
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[10px] text-white/25 text-center mt-3 leading-relaxed">
                  Seus dados são usados apenas para o contato.
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <WhatsAppIcon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-white text-sm font-bold">WhatsApp aberto!</p>
                <p className="text-white/50 text-xs leading-relaxed">
                  Caso não tenha aberto, clique no botão abaixo para falar direto com nossa equipe.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-white text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Abrir WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Botão flutuante */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fechar chat WhatsApp' : 'Abrir chat WhatsApp'}
        className="relative w-14 h-14 bg-primary hover:bg-primary/85 text-white shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 rounded-full"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <WhatsAppIcon className="w-7 h-7" />
            {/* Ping de atenção */}
            <span className="absolute top-0 right-0 w-3 h-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
          </>
        )}
      </button>

    </div>
  )
}
