'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const PopupDiagnosticoBlog = dynamic(
  () => import('./popup-diagnostico-blog').then((m) => m.PopupDiagnosticoBlog),
  { ssr: false }
)

// Monta o popup do blog somente quando a thread principal fica ociosa,
// tirando a hidratacao do caminho critico (reduz TBT). O popup ja tem
// gatilhos proprios (15s / exit-intent), entao o atraso e transparente.
export function DeferredBlogPopup() {
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
  return <PopupDiagnosticoBlog />
}
