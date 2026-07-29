'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Anima um número de `from` até `target` em `duration` ms (ease-out).
 * - Começa forte: `from` evita mostrar valores fracos na primeira impressão.
 * - Disparo confiável: se já visível no load, dispara na hora; senão IO; com fallback.
 * - Respeita prefers-reduced-motion e é seguro para SSR (retorna o valor final).
 */
export function useCountUp(target: number, from = 0, duration = 900) {
  const [count, setCount] = useState(target) // SSR/no-JS: valor final
  const ref = useRef<HTMLElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCount(target)
      return
    }

    function run() {
      if (started.current) return
      started.current = true
      const startTime = performance.now()
      setCount(from)
      function tick(now: number) {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
        setCount(Math.round(from + eased * (target - from)))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const el = ref.current
    if (!el) {
      run()
      return
    }

    // Já visível no carregamento? dispara imediatamente (confiável, sem esperar callback)
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh && rect.bottom > 0) {
      run()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    const fallback = window.setTimeout(run, 1200) // garante disparo
    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [target, from, duration])

  return { count, ref }
}
