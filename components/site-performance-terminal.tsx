'use client'

import { useEffect, useRef, useState } from 'react'

type Line =
  | { kind: 'comment'; text: string; flip?: boolean }
  | { kind: 'metric'; text: string; value: string; note: string; ok: boolean }

const LINES: Line[] = [
  { kind: 'comment', text: '// rodando auditoria no site comum...' },
  { kind: 'metric', text: 'tempo de carregamento', value: '8.4s', note: 'seu cliente ja foi no concorrente', ok: false },
  { kind: 'metric', text: 'nota no lighthouse', value: '41/100', note: 'isso nao e nota, e pedido de socorro', ok: false },
  { kind: 'metric', text: 'peso da pagina', value: '6.4 MB', note: 'cada imagem pesa mais que o argumento', ok: false },
  { kind: 'metric', text: 'layout shift', value: 'alto', note: 'o botao foge do dedo do usuario', ok: false },
  { kind: 'comment', text: '> aplicando o padrao OxBrand...', flip: true },
  { kind: 'metric', text: 'tempo de carregamento', value: '0.9s', note: 'carregou antes de voce piscar', ok: true },
  { kind: 'metric', text: 'nota no lighthouse', value: '98/100', note: 'quase nota cheia, de proposito', ok: true },
  { kind: 'metric', text: 'peso da pagina', value: '380 KB', note: 'leve que nem promessa cumprida', ok: true },
  { kind: 'metric', text: 'layout shift', value: '~0', note: 'nada se mexe, nada te trai', ok: true },
  { kind: 'metric', text: 'conversao', value: 'subindo ▲', note: 'vende ate voce dormindo', ok: true },
  { kind: 'metric', text: 'status', value: 'pronto pra producao', note: 'pode chamar o cliente', ok: true },
]

export function SitePerformanceTerminal() {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [started, setStarted] = useState(false)

  function run() {
    setShown(0)
    setFlipped(false)
    let i = 0
    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(LINES.length)
      setFlipped(true)
      return
    }
    const t = setInterval(() => {
      i += 1
      setShown(i)
      if (LINES[i - 1] && LINES[i - 1].kind === 'comment' && (LINES[i - 1] as { flip?: boolean }).flip) setFlipped(true)
      if (i >= LINES.length) clearInterval(t)
    }, 520)
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true)
          run()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started])

  const pct = Math.round((shown / LINES.length) * 100)
  const barColor = flipped ? '#a3e635' : '#f0665a'

  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6">
        <div className="flex flex-col gap-3 items-center text-center lg:items-start lg:text-left">
          <span className="mono-tag text-primary/70">Performance de verdade</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Seu site carrega rápido ou some da memória do cliente.
          </h2>
          <p className="text-black/60 leading-relaxed">
            Rodamos a mesma auditoria que aplicamos em cada projeto. Veja o antes e o depois, sem enrolação (e com uma pontinha de humor).
          </p>
        </div>

        <div ref={ref} className="border rounded-xl overflow-hidden font-mono" style={{ background: '#0a0f1c', color: '#c8d3e6', borderColor: '#1e2a44' }}>
          <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid #1e2a44' }}>
            <span className="text-xs tracking-[2px]" style={{ color: '#7f8ea8' }}>terminal · auditoria de performance</span>
            <span className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f0665a' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f2c14e' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#57c96a' }} />
            </span>
          </div>

          <div style={{ height: '4px', background: '#141d33' }}>
            <div style={{ height: '100%', width: `${pct}%`, background: barColor, transition: 'width .35s ease, background .35s ease' }} />
          </div>

          <div className="px-4 py-5 text-[13px] leading-[1.9] min-h-[340px]">
            {LINES.map((l, idx) => (
              <div
                key={idx}
                style={{
                  opacity: idx < shown ? 1 : 0,
                  transform: idx < shown ? 'translateY(0)' : 'translateY(4px)',
                  transition: 'opacity .25s ease, transform .25s ease',
                }}
              >
                {l.kind === 'comment' ? (
                  <span style={{ color: l.flip ? '#a3e635' : '#7f8ea8' }}>{l.text}</span>
                ) : (
                  <span>
                    <span style={{ color: l.ok ? '#a3e635' : '#f0665a' }}>{'>'}</span>{' '}
                    {l.text}: <span style={{ color: '#e6edf7' }}>{l.value}</span>{' '}
                    <span style={{ color: l.ok ? '#a3e635' : '#f0665a' }}>{l.ok ? '✓' : '✗'}</span>{' '}
                    <span style={{ color: '#5f6b82' }} className="hidden sm:inline">[{l.note}]</span>
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="px-4 pb-4 flex justify-end">
            <button
              type="button"
              onClick={run}
              className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded transition-colors"
              style={{ color: '#c8d3e6', border: '1px solid #1e2a44' }}
            >
              Rodar de novo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
