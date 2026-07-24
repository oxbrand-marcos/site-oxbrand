'use client'

import { useEffect, useRef } from 'react'

interface DotsCanvasProps {
  className?: string
  color?: string
  dotRadius?: number
  spacing?: number
  repelRadius?: number
  repelStrength?: number
}

export default function DotsCanvas({
  className = '',
  color = 'rgba(255,255,255,0.18)',
  dotRadius = 1.2,
  spacing = 28,
  repelRadius = 100,
  repelStrength = 6,
}: DotsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Não inicia em dispositivos sem ponteiro (mobile/touch), economiza CPU e bateria
    if (window.matchMedia('(pointer: coarse)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return

    let started = false
    let destroyed = false

    // Inicia o loop apenas quando o canvas está visível (evita trabalho desnecessário fora da dobra)
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true
          io.disconnect()
          initAnimation()
        }
      },
      { threshold: 0.1 }
    )
    io.observe(canvas)

    function initAnimation() {
      const canvas = canvasRef.current
      if (!canvas || destroyed) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      type Dot = { ox: number; oy: number; x: number; y: number; vx: number; vy: number }

      let dots: Dot[] = []
      let raf = 0
      const pointer = { x: -9999, y: -9999, active: false }

      function build() {
        if (destroyed || !canvas) return
        canvas.width  = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        dots = []
        const cols = Math.ceil(canvas.width  / spacing)
        const rows = Math.ceil(canvas.height / spacing)
        const padX = (canvas.width  - (cols - 1) * spacing) / 2
        const padY = (canvas.height - (rows - 1) * spacing) / 2
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const ox = padX + c * spacing
            const oy = padY + r * spacing
            dots.push({ ox, oy, x: ox, y: oy, vx: 0, vy: 0 })
          }
        }
      }

      function draw() {
        if (destroyed || !canvas || !ctx) return
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (const d of dots) {
          const dx = pointer.x - d.x
          const dy = pointer.y - d.y
          const dist2 = dx * dx + dy * dy

          if (pointer.active && dist2 < repelRadius * repelRadius && dist2 > 0.0001) {
            const dist = Math.sqrt(dist2)
            const force = (1 - dist / repelRadius) * repelRadius * repelStrength
            d.vx += (dx / dist) * force * 0.08
            d.vy += (dy / dist) * force * 0.08
          }

          d.vx += (d.ox - d.x) * 0.045
          d.vy += (d.oy - d.y) * 0.045
          d.vx *= 0.82
          d.vy *= 0.82
          d.x += d.vx
          d.y += d.vy

          ctx.beginPath()
          ctx.fillStyle = color
          ctx.arc(d.x, d.y, dotRadius, 0, Math.PI * 2)
          ctx.fill()
        }

        raf = requestAnimationFrame(draw)
      }

      function onPointerMove(e: PointerEvent) {
        if (!canvas) return
        const rect = canvas.getBoundingClientRect()
        pointer.x = e.clientX - rect.left
        pointer.y = e.clientY - rect.top
        pointer.active = true
      }

      function onPointerLeave() {
        pointer.active = false
        pointer.x = -9999
        pointer.y = -9999
      }

      build()
      draw()

      const ro = new ResizeObserver(() => {
        try { build() } catch { /* ignore layout errors during unmount */ }
      })
      ro.observe(canvas)

      window.addEventListener('pointermove', onPointerMove, { passive: true })
      window.addEventListener('pointerleave', onPointerLeave)

      // Guarda cleanup no closure para o return do useEffect
      ;(canvas as HTMLCanvasElement & { _cleanup?: () => void })._cleanup = () => {
        destroyed = true
        cancelAnimationFrame(raf)
        ro.disconnect()
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('pointerleave', onPointerLeave)
      }
    }

    return () => {
      destroyed = true
      io.disconnect()
      const canvas = canvasRef.current
      ;(canvas as HTMLCanvasElement & { _cleanup?: () => void })?._cleanup?.()
    }
  }, [color, dotRadius, spacing, repelRadius, repelStrength])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
