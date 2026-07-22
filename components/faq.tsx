'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FAQ_QUESTIONS } from '@/lib/faq-questions'
export { FAQ_QUESTIONS } from '@/lib/faq-questions'


const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

type FAQItem = { q: string; a: string }

export function FAQ({
  variant = 'dark',
  questions: customQuestions,
}: {
  variant?: 'dark' | 'light'
  questions?: FAQItem[]
}) {
  const [open, setOpen] = useState<number | null>(null)

  const isLight = variant === 'light'
  const activeQuestions = customQuestions ?? FAQ_QUESTIONS

  return (
    <section
      id="faq"
      className={`py-24 border-b ${isLight ? 'bg-white border-black/10' : 'border-border'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-16">

          {/* Lateral */}
          <div className="flex flex-col gap-3 items-center lg:items-start text-center lg:text-left">
            <span className={`mono-tag ${isLight ? 'text-black/40' : 'text-muted-foreground/60'}`}>FAQ</span>
            <h2 className={`text-3xl sm:text-4xl font-bold leading-tight ${isLight ? 'text-black' : 'text-foreground'}`}>
              Dúvidas<br />
              <span className="text-glow">comuns.</span>
            </h2>

            {/* CTA WhatsApp */}
            <div className={`mt-6 w-full flex flex-col items-center lg:items-start gap-4 rounded-sm border p-6 ${isLight ? 'border-black/10 bg-gray-50' : 'border-border bg-card'}`}>
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366]/10 text-[#25D366]">
                <WhatsAppIcon />
              </div>
              <div className="flex flex-col gap-2 text-center lg:text-left">
                <h3 className={`text-base font-bold leading-snug ${isLight ? 'text-black' : 'text-foreground'}`}>
                  Quer falar com o comercial e tirar dúvidas?
                </h3>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-black/60' : 'text-muted-foreground'}`}>
                  A gente responde, orienta e mostra o melhor caminho para sua operação crescer no digital com clareza e previsibilidade.
                </p>
              </div>
              <a
                href="https://wa.me/5511921425351"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center lg:justify-start gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <WhatsAppIcon />
                Falar com especialistas
              </a>
              <p className="text-xs text-[#25D366] text-center lg:text-left w-full">
                Chame no WhatsApp e resolva em poucos minutos
              </p>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex flex-col">
            {activeQuestions.map((item, i) => {
              const triggerId = `faq-trigger-${i}`
              const panelId = `faq-panel-${i}`
              const isOpen = open === i
              return (
                <div key={i} className={`border-b ${isLight ? 'border-black/10' : 'border-border'}`}>
                  <h3>
                    <button
                      id={triggerId}
                      className="w-full flex items-start justify-between gap-6 py-5 text-left group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:rounded-sm"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <div className="flex items-start gap-4">
                        <span className={`mono-tag shrink-0 mt-0.5 ${isLight ? 'text-black/20' : 'text-muted-foreground/30'}`} aria-hidden="true">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-sm font-semibold group-hover:text-primary transition-colors leading-relaxed ${isLight ? 'text-black' : 'text-foreground'}`}>
                          {item.q}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 mt-0.5 group-hover:text-primary transition-colors ${isLight ? 'text-black/40' : 'text-muted-foreground'}`}
                        aria-hidden="true"
                      >
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!isOpen}
                  >
                    <p className={`pb-5 pl-10 text-sm leading-relaxed ${isLight ? 'text-black/60' : 'text-muted-foreground'}`}>
                      {item.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
