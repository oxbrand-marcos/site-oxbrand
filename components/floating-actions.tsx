'use client'

import { useState, useEffect } from 'react'
import { WhatsAppWidget } from '@/components/whatsapp-widget'

/**
 * FloatingActions — agrupa o widget de acessibilidade e o botão do WhatsApp
 * no canto inferior direito, evitando conflito de posicionamento.
 *
 * O botão "A" abre um painel com atalhos de acessibilidade:
 *   - Aumentar / reduzir tamanho de fonte
 *   - Ativar/desativar alto contraste
 */

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <circle cx="12" cy="4" r="1.5" />
      <path d="M19 8.5H5a.5.5 0 0 0 0 1h5.5v3.3l-3.7 6.5a.5.5 0 0 0 .87.5l3.33-5.8 3.33 5.8a.5.5 0 0 0 .87-.5L11.5 12.8V9.5H19a.5.5 0 0 0 0-1Z" />
    </svg>
  )
}

const FONT_LEVELS = [100, 112, 125] as const
type FontLevel = (typeof FONT_LEVELS)[number]

export function FloatingActions() {
  const [a11yOpen, setA11yOpen] = useState(false)
  const [fontLevel, setFontLevel] = useState<FontLevel>(100)
  const [highContrast, setHighContrast] = useState(false)

  // Aplica tamanho de fonte no <html>
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontLevel}%`
  }, [fontLevel])

  // Aplica classe de alto contraste
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [highContrast])

  function cycleFontSize() {
    const idx = FONT_LEVELS.indexOf(fontLevel)
    setFontLevel(FONT_LEVELS[(idx + 1) % FONT_LEVELS.length])
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Painel de acessibilidade */}
      {a11yOpen && (
        <div
          className="bg-background border border-border shadow-2xl p-4 flex flex-col gap-3 w-56 animate-in slide-in-from-bottom-2 fade-in duration-150"
          role="dialog"
          aria-label="Opções de acessibilidade"
        >
          <p className="mono-tag text-muted-foreground border-b border-border pb-2">Acessibilidade</p>

          {/* Tamanho de fonte */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-foreground/60">Tamanho do texto</span>
            <div className="flex gap-2">
              {FONT_LEVELS.map((level) => (
                <button
                  key={level}
                  onClick={() => setFontLevel(level)}
                  aria-pressed={fontLevel === level}
                  aria-label={`Fonte ${level === 100 ? 'normal' : level === 112 ? 'média' : 'grande'}`}
                  className={`flex-1 py-1.5 text-xs font-bold border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    fontLevel === level
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
                  }`}
                >
                  {level === 100 ? 'A' : level === 112 ? 'A+' : 'A++'}
                </button>
              ))}
            </div>
          </div>

          {/* Alto contraste */}
          <button
            onClick={() => setHighContrast((v) => !v)}
            aria-pressed={highContrast}
            className={`flex items-center justify-between px-3 py-2 text-xs font-bold border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
              highContrast
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
            }`}
          >
            Alto contraste
            <span className="mono-tag text-[10px]">{highContrast ? 'ON' : 'OFF'}</span>
          </button>

          {/* Fechar */}
          <button
            onClick={() => setA11yOpen(false)}
            className="mono-tag text-muted-foreground/50 hover:text-foreground transition-colors text-center"
            aria-label="Fechar opções de acessibilidade"
          >
            Fechar
          </button>
        </div>
      )}

      {/* Botão de acessibilidade */}
      <button
        onClick={() => setA11yOpen((v) => !v)}
        aria-label={a11yOpen ? 'Fechar opções de acessibilidade' : 'Abrir opções de acessibilidade'}
        aria-expanded={a11yOpen}
        className="w-10 h-10 bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 shadow-lg flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <AccessibilityIcon />
      </button>

      {/* WhatsApp widget embutido — posicionamento gerenciado por FloatingActions */}
      <WhatsAppWidget embedded />
    </div>
  )
}
