'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Globais nao-criticos: carregados fora do caminho critico para reduzir o
// Total Blocking Time. O consent default do GTM ja e aplicado inline no <head>,
// entao a UI do banner pode aparecer alguns instantes depois sem prejuizo.
const ConsentBanner = dynamic(() => import('./consent-banner').then((m) => m.ConsentBanner), { ssr: false })
const PopupDiagnostico = dynamic(() => import('./popup-diagnostico').then((m) => m.PopupDiagnostico), { ssr: false })
const FloatingActions = dynamic(() => import('./floating-actions').then((m) => m.FloatingActions), { ssr: false })
const Analytics = dynamic(() => import('@vercel/analytics/next').then((m) => m.Analytics), { ssr: false })
const SpeedInsights = dynamic(() => import('@vercel/speed-insights/next').then((m) => m.SpeedInsights), { ssr: false })

/**
 * Monta os componentes globais nao-essenciais somente quando a thread principal
 * fica ociosa (requestIdleCallback) ou apos um curto timeout. Isso remove a
 * hidratacao deles da janela critica de carregamento, baixando o TBT sem
 * mudar a experiencia (o WhatsApp e o banner aparecem ~1s depois).
 */
export function DeferredGlobals() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }
    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 2500 })
      return () => w.cancelIdleCallback?.(id)
    }
    const t = setTimeout(() => setReady(true), 1500)
    return () => clearTimeout(t)
  }, [])

  if (!ready) return null

  return (
    <>
      <ConsentBanner />
      <PopupDiagnostico />
      <FloatingActions />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
