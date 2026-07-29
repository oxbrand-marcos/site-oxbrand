'use client'

import { useEffect } from 'react'
import { captureAttribution, appendWaSource, getAttribution } from '@/lib/wa-source'

/**
 * Injeta a origem (página + UTM de 1ª interação) nos cliques dos botões de
 * WhatsApp da OxBrand, para o lead chegar ao Kommo já com a fonte.
 * Não renderiza nada e é leve; fica fora do bundle diferido para garantir que
 * o listener já esteja ativo antes de qualquer clique.
 */
export function WhatsAppSourceTagger() {
  useEffect(() => {
    captureAttribution()

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest?.(
        'a[href*="wa.me/5511921425351"]'
      ) as HTMLAnchorElement | null
      if (!anchor) return
      const updated = appendWaSource(anchor.href)
      if (updated !== anchor.href) anchor.href = updated
      try {
        const w = window as typeof window & { dataLayer?: unknown[] }
        w.dataLayer = w.dataLayer || []
        w.dataLayer.push({
          event: 'whatsapp_click',
          wa_page: window.location.pathname,
          ...getAttribution(),
        })
      } catch {}
    }

    // Fase de captura: reescreve o href antes da navegação padrão do link.
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
