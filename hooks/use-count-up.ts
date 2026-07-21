'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Anima um número de 0 até `target` em `duration` ms com easing ease-out.
 * - Dispara via IntersectionObserver quando entra no viewport (uma vez só)
 * - Respeita prefers-reduced-motion: exibe o valor final direto
 * - SSR: retorna `target` para crawlers e leitores de tela
 */
export function useCountUp(target: number, duration = 1500) {
  // Inicia com o valor final para SSR (crawlers leem o número real)
  const [count, setCount] = useState(target)
  const ref = useRef<HTMLElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    // Respeitar prefers-reduced-motion
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setCount(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const startTime = performance.now()

        function tick(now: number) {
          const elapsed = now - startTime
          const progress = Math.min(elapsed / duration, 1)
          // ease-out cubic: rápido no início, desacelera no fim
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }

        // Começa em 0 antes do primeiro frame
        setCount(0)
        requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
