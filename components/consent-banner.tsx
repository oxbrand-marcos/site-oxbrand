'use client'

import { useEffect, useState } from 'react'

function getConsentCookie(): 'granted' | 'denied' | null {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(/(?:^|; )oxb_consent=(granted|denied)/)
  return m ? (m[1] as 'granted' | 'denied') : null
}

function applyConsent(value: 'granted' | 'denied') {
  document.cookie = `oxb_consent=${value}; path=/; max-age=${60 * 60 * 24 * 180}; SameSite=Lax`
  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', {
      ad_storage: value,
      analytics_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    })
  }
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!getConsentCookie()) setVisible(true)
  }, [])

  if (!visible) return null

  const choose = (v: 'granted' | 'denied') => {
    applyConsent(v)
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-5" role="dialog" aria-label="Aviso de cookies">
      <div className="mx-auto max-w-3xl bg-zinc-900/95 backdrop-blur border border-zinc-700 p-5 flex flex-col sm:flex-row sm:items-center gap-4 shadow-xl">
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed flex-1">
          Usamos cookies para melhorar sua experiência e medir resultados. Você pode recusar os cookies de medição. Saiba mais na{' '}
          <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-300 border border-zinc-600 hover:bg-zinc-800 transition-colors"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="px-4 py-2 text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/85 transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
