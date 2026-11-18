'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Answers, BriefingConfig, Step } from '@/lib/briefings/types'
import { fill, firstName, visibleSteps } from '@/lib/briefings/types'
import { getBriefing } from '@/lib/briefings'
import { PhoneField, isValidPhoneNumber } from '@/components/phone-field'
import { getRecaptchaToken } from '@/lib/recaptcha-client'
import { toE164 } from '@/lib/tracking'
import { LogoStyleArt } from './logo-style-art'

type Refs = { images: string[]; links: string[]; semReferencia?: boolean }
type Phase = 'intro' | 'flow' | 'sending' | 'done'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/* ───────────────────────── validação ───────────────────────── */

function stepError(s: Step, a: Answers): string | null {
  const v = a[s.id]
  switch (s.kind) {
    case 'text': {
      const t = String(v ?? '').trim()
      if (!s.required) return null
      if (t.length < 2) return 'Preencha este campo para seguir.'
      if (s.inputType === 'email' && !EMAIL_RE.test(t)) return 'Esse e-mail parece incompleto.'
      return null
    }
    case 'phone':
      return isValidPhoneNumber(String(v ?? '')) ? null : 'Confira o número, com DDD.'
    case 'choice': {
      const outro = String(a[`${s.id}__outro`] ?? '').trim()
      if (s.multi) {
        const arr = (v as string[] | undefined) ?? []
        if (arr.length < (s.min ?? 1)) return 'Escolha pelo menos uma opção.'
        if (arr.includes('outro') && outro.length < 2) return 'Conte qual é a outra opção.'
        return null
      }
      if (!v) return 'Escolha uma opção.'
      if (v === 'outro' && outro.length < 2) return 'Conte qual é a outra opção.'
      return null
    }
    case 'words': {
      const n = ((v as string[] | undefined) ?? []).length
      if (n < s.min) return `Escolha pelo menos ${s.min} palavras.`
      return null
    }
    case 'logo-style':
      return ((v as string[] | undefined) ?? []).length ? null : 'Escolha pelo menos um formato.'
    case 'references': {
      const r = (v as Refs | undefined) ?? { images: [], links: [] }
      if (r.semReferencia) return null
      const n = r.images.length + r.links.filter((l) => l.trim()).length
      return n ? null : 'Envie uma imagem, cole um link ou marque que prefere ver caminhos nossos.'
    }
    default:
      return null
  }
}

/* ───────────────────────── upload com compressão ───────────────────────── */

async function compress(file: File): Promise<Blob> {
  if (!file.type.startsWith('image/') || file.type === 'image/gif') return file
  const bmp = await createImageBitmap(file)
  const max = 1800
  const scale = Math.min(1, max / Math.max(bmp.width, bmp.height))
  const c = document.createElement('canvas')
  c.width = Math.round(bmp.width * scale)
  c.height = Math.round(bmp.height * scale)
  c.getContext('2d')!.drawImage(bmp, 0, 0, c.width, c.height)
  return await new Promise<Blob>((res) => c.toBlob((b) => res(b ?? file), 'image/webp', 0.85))
}

async function uploadImage(file: File, slug: string): Promise<string> {
  let blob: Blob = file
  try {
    blob = await compress(file)
  } catch {}
  if (blob.size > 4 * 1024 * 1024) throw new Error('Imagem muito grande. Tente uma de até 4 MB.')
  const fd = new FormData()
  fd.append('file', blob, file.name.replace(/\.[^.]+$/, '') + (blob.type === 'image/webp' ? '.webp' : ''))
  fd.append('briefing', slug)
  const r = await fetch('/api/briefing/upload', { method: 'POST', body: fd })
  const j = (await r.json().catch(() => ({}))) as { url?: string; error?: string }
  if (!r.ok || !j.url) throw new Error(j.error ?? 'Não foi possível enviar a imagem.')
  return j.url
}

/* ───────────────────────── componente principal ───────────────────────── */

export function BriefingFlow({ slug }: { slug: string }) {
  const cfg = getBriefing(slug) as BriefingConfig
  const storageKey = `oxb_briefing_${cfg.slug}`
  const formId = `form-briefing-${cfg.slug}`

  const [answers, setAnswers] = useState<Answers>({})
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('intro')
  const [dir, setDir] = useState<1 | -1>(1)
  const [error, setError] = useState<string | null>(null)
  const [hasDraft, setHasDraft] = useState(false)
  const [meta, setMeta] = useState<Record<string, string>>({})

  const steps = useMemo(() => visibleSteps(cfg, answers), [cfg, answers])
  const step = steps[Math.min(index, steps.length - 1)]
  const isLast = index >= steps.length - 1
  const chapters = useMemo(() => [...new Set(cfg.steps.map((s) => s.chapter))], [cfg])
  const chapterIdx = chapters.indexOf(step?.chapter ?? '')

  /* rascunho + parâmetros da URL (link personalizado por cliente) */
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const pre: Answers = {}
    for (const k of ['nome', 'marca', 'email', 'whatsapp']) {
      const v = p.get(k)
      if (v) pre[k] = k === 'whatsapp' ? toE164(v) : v
    }
    const m: Record<string, string> = {}
    for (const k of ['cliente', 'projeto', 'utm_source']) {
      const v = p.get(k)
      if (v) m[k] = v
    }
    setMeta(m)
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) {
        const d = JSON.parse(raw) as { answers: Answers; index: number }
        if (d && Object.keys(d.answers ?? {}).length > Object.keys(pre).length) {
          setAnswers({ ...d.answers, ...pre })
          setIndex(d.index ?? 0)
          setHasDraft(true)
          return
        }
      }
    } catch {}
    setAnswers(pre)
  }, [storageKey])

  useEffect(() => {
    if (phase !== 'flow') return
    try {
      localStorage.setItem(storageKey, JSON.stringify({ answers, index }))
    } catch {}
  }, [answers, index, phase, storageKey])

  const set = useCallback((id: string, v: unknown) => {
    setError(null)
    setAnswers((a) => ({ ...a, [id]: v }))
  }, [])

  const go = useCallback(
    (delta: 1 | -1) => {
      if (delta === 1) {
        const err = step ? stepError(step, answers) : null
        if (err) {
          setError(err)
          return
        }
      }
      setError(null)
      setDir(delta)
      setIndex((i) => Math.max(0, Math.min(steps.length - 1, i + delta)))
    },
    [step, answers, steps.length],
  )

  const submit = useCallback(async () => {
    const firstBad = steps.findIndex((s) => stepError(s, answers))
    if (firstBad !== -1) {
      setIndex(firstBad)
      setError(stepError(steps[firstBad], answers))
      return
    }
    setPhase('sending')
    try {
      const _recaptcha = await getRecaptchaToken('briefing')
      const visibleIds = new Set(steps.map((s) => s.id))
      const clean: Answers = {}
      for (const [k, v] of Object.entries(answers)) {
        const base = k.replace(/__outro$/, '')
        if (visibleIds.has(base)) clean[k] = v
      }
      const r = await fetch('/api/briefing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: cfg.slug, answers: clean, meta: { ...meta, pageUrl: window.location.href }, _recaptcha }),
      })
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!r.ok || !j.ok) throw new Error(j.error ?? 'Não foi possível enviar agora.')

      // Página discreta: sem evento de rastreamento no envio.
      try {
        localStorage.removeItem(storageKey)
      } catch {}
      setPhase('done')
    } catch (e) {
      setPhase('flow')
      setError(e instanceof Error ? e.message : 'Não foi possível enviar agora. Tente de novo em instantes.')
    }
  }, [steps, answers, cfg.slug, meta, storageKey])

  /* teclado: Enter avança, letras escolhem opção */
  useEffect(() => {
    if (phase !== 'flow' || !step) return
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)
      if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
        // botões de navegação mantêm o Enter nativo; nas opções, Enter avança
        if (t?.closest?.('[data-native-enter]') || t?.tagName === 'A') return
        e.preventDefault()
        if (isLast) void submit()
        else go(1)
        return
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return
      if (step.kind === 'choice') {
        const i = LETTERS.indexOf(e.key.toUpperCase())
        const opts = [...step.options.map((o) => o.value), ...(step.other ? ['outro'] : [])]
        if (i >= 0 && i < opts.length) {
          e.preventDefault()
          toggleChoice(step, opts[i])
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, step, isLast, go, submit, answers])

  const toggleChoice = (s: Extract<Step, { kind: 'choice' }>, value: string) => {
    if (s.multi) {
      const arr = ((answers[s.id] as string[] | undefined) ?? []).slice()
      const i = arr.indexOf(value)
      if (i >= 0) arr.splice(i, 1)
      else if (!s.max || arr.length < s.max) arr.push(value)
      set(s.id, arr)
      return
    }
    set(s.id, value)
    // escolha única avança sozinha, como no Typeform (exceto "Outro", que pede texto)
    if (value !== 'outro') {
      setTimeout(() => {
        setDir(1)
        setIndex((i) => Math.min(i + 1, steps.length - 1))
      }, 380)
    }
  }

  const start = (fresh: boolean) => {
    if (fresh) {
      try {
        localStorage.removeItem(storageKey)
      } catch {}
      setAnswers((a) => ({ nome: a.nome, marca: a.marca, email: a.email, whatsapp: a.whatsapp }))
      setIndex(0)
    }
    setDir(1)
    setPhase('flow')
  }

  const progress = phase === 'done' ? 100 : phase === 'intro' ? 0 : Math.round((index / steps.length) * 100)

  return (
    <form
      id={formId}
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className="ox-brief relative min-h-[100svh] w-full overflow-hidden bg-[#161616] text-[#eae6e6]"
    >
      {/* grade de fundo e numeral do capítulo sangrando pelo corte */}
      <div aria-hidden className="ox-brief-grid pointer-events-none absolute inset-0" />
      {phase === 'flow' && (
        <div
          aria-hidden
          key={chapterIdx}
          className="ox-brief-numeral pointer-events-none absolute -right-[4vw] bottom-[-12vh] select-none font-sans font-bold leading-none"
        >
          {String(chapterIdx + 1).padStart(2, '0')}
        </div>
      )}

      {/* barra de progresso */}
      <div className="fixed inset-x-0 top-0 z-30 h-[3px] bg-white/5">
        <div className="h-full bg-[#5c36eb] transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* topo */}
      <header className="fixed inset-x-0 top-0 z-20 flex h-16 items-center justify-between px-5 md:px-10">
        <Image src="/images/oxbrand-logo.webp" alt="OxBrand" width={120} height={34} className="h-6 w-auto" priority />
        {phase === 'flow' && (
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
            <span className="hidden md:inline">
              Cap. {String(chapterIdx + 1).padStart(2, '0')} de {String(chapters.length).padStart(2, '0')}
            </span>
            <span className="text-white/80">
              {String(index + 1).padStart(2, '0')}
              <span className="text-white/30"> / {String(steps.length).padStart(2, '0')}</span>
            </span>
          </div>
        )}
      </header>

      <main className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[860px] flex-col justify-center px-5 pb-28 pt-24 md:px-10">
        {phase === 'intro' && (
          <Intro cfg={cfg} hasDraft={hasDraft} name={firstName(answers)} onStart={start} />
        )}

        {(phase === 'flow' || phase === 'sending') && step && (
          <div key={step.id} className={dir === 1 ? 'ox-in-up' : 'ox-in-down'}>
            <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8f74ff]">
              <span className="inline-block h-px w-8 bg-[#5c36eb]" />
              {step.chapter}
            </p>
            <h1 className="text-balance text-[clamp(26px,4.2vw,44px)] font-semibold leading-[1.08] tracking-[-0.02em]">
              {fill(step.title, answers)}
              {step.required && <span className="text-[#8f74ff]"> *</span>}
            </h1>
            {step.help && <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-white/55">{fill(step.help, answers)}</p>}

            <div className="mt-9">
              <StepInput step={step} answers={answers} set={set} toggleChoice={toggleChoice} slug={cfg.slug} />
            </div>

            <div className="mt-8 flex min-h-[52px] flex-wrap items-center gap-x-5 gap-y-3">
              <button
                type="button"
                data-native-enter
                onClick={() => (isLast ? void submit() : go(1))}
                disabled={phase === 'sending'}
                className="group inline-flex h-12 items-center gap-3 bg-[#5c36eb] px-6 text-[15px] font-semibold text-white transition hover:bg-[#6d4af5] disabled:opacity-60"
              >
                {phase === 'sending' ? 'Enviando…' : isLast ? 'Enviar briefing' : 'OK'}
                <span aria-hidden className="transition group-hover:translate-x-0.5">
                  {isLast ? '↗' : '→'}
                </span>
              </button>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 md:inline">
                pressione <b className="text-white/60">Enter ↵</b>
                {step.kind === 'text' && step.multiline && <> · Shift + Enter quebra linha</>}
              </span>
              {error && (
                <span role="alert" className="ox-shake inline-flex items-center gap-2 text-[14px] text-[#ff8a7a]">
                  <span aria-hidden>●</span> {error}
                </span>
              )}
            </div>
          </div>
        )}

        {phase === 'done' && <Thanks cfg={cfg} answers={answers} />}
      </main>

      {/* navegação */}
      {phase === 'flow' && (
        <nav data-native-enter className="fixed bottom-5 right-5 z-20 flex md:bottom-8 md:right-10">
          <button
            type="button"
            aria-label="Pergunta anterior"
            onClick={() => (index === 0 ? setPhase('intro') : go(-1))}
            className="grid h-11 w-11 place-items-center border border-white/15 bg-[#161616]/80 text-white/70 backdrop-blur transition hover:border-[#5c36eb] hover:text-white"
          >
            ↑
          </button>
          <button
            type="button"
            aria-label="Próxima pergunta"
            onClick={() => (isLast ? void submit() : go(1))}
            className="grid h-11 w-11 place-items-center border border-l-0 border-white/15 bg-[#161616]/80 text-white/70 backdrop-blur transition hover:border-[#5c36eb] hover:text-white"
          >
            ↓
          </button>
        </nav>
      )}

      <style>{CSS}</style>
    </form>
  )
}

/* ───────────────────────── telas ───────────────────────── */

function Intro({
  cfg,
  hasDraft,
  name,
  onStart,
}: {
  cfg: BriefingConfig
  hasDraft: boolean
  name: string
  onStart: (fresh: boolean) => void
}) {
  return (
    <div className="ox-in-up">
      <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8f74ff]">
        <span className="inline-block h-px w-8 bg-[#5c36eb]" />
        {cfg.intro.eyebrow}
      </p>
      <h1 className="max-w-[18ch] text-balance text-[clamp(36px,6.4vw,76px)] font-semibold leading-[0.98] tracking-[-0.035em]">
        {name ? `${name}, ` : ''}
        {name ? cfg.intro.title.charAt(0).toLowerCase() + cfg.intro.title.slice(1) : cfg.intro.title}
      </h1>
      <p className="mt-7 max-w-[54ch] text-[18px] leading-relaxed text-white/60">{cfg.intro.text}</p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        {hasDraft ? (
          <>
            <button
              type="button"
              autoFocus
              onClick={() => onStart(false)}
              className="inline-flex h-14 items-center gap-3 bg-[#5c36eb] px-8 text-[16px] font-semibold text-white transition hover:bg-[#6d4af5]"
            >
              Continuar de onde parei <span aria-hidden>→</span>
            </button>
            <button type="button" onClick={() => onStart(true)} className="h-14 px-2 text-[15px] text-white/55 underline-offset-4 hover:text-white hover:underline">
              Recomeçar do zero
            </button>
          </>
        ) : (
          <button
            type="button"
            autoFocus
            onClick={() => onStart(false)}
            className="inline-flex h-14 items-center gap-3 bg-[#5c36eb] px-8 text-[16px] font-semibold text-white transition hover:bg-[#6d4af5]"
          >
            Começar <span aria-hidden>→</span>
          </button>
        )}
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          ◷ cerca de {cfg.intro.minutes} minutos
        </span>
      </div>
    </div>
  )
}

function Thanks({ cfg, answers }: { cfg: BriefingConfig; answers: Answers }) {
  const nome = firstName(answers)
  return (
    <div className="ox-in-up">
      <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8f74ff]">
        <span className="inline-block h-px w-8 bg-[#5c36eb]" />
        Briefing enviado
      </p>
      <h1 className="max-w-[16ch] text-balance text-[clamp(38px,6.6vw,80px)] font-semibold leading-[0.98] tracking-[-0.035em]">
        {cfg.thanks.title.replace('{nome}', nome || 'tudo certo').replace(', tudo certo', '')}
      </h1>
      <p className="mt-7 max-w-[52ch] text-[18px] leading-relaxed text-white/60">{cfg.thanks.text}</p>
      <ol className="mt-12 grid max-w-[720px] gap-0 border-t border-white/10">
        {cfg.thanks.next.map((t, i) => (
          <li key={i} className="grid grid-cols-[56px_1fr] items-baseline border-b border-white/10 py-5">
            <span className="font-mono text-[12px] text-[#8f74ff]">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-[17px] leading-relaxed text-white/80">{t}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ───────────────────────── entradas por tipo ───────────────────────── */

type InputProps = {
  step: Step
  answers: Answers
  set: (id: string, v: unknown) => void
  toggleChoice: (s: Extract<Step, { kind: 'choice' }>, v: string) => void
  slug: string
}

const lineInput =
  'w-full border-0 border-b-2 border-white/15 bg-transparent pb-3 text-[clamp(20px,2.6vw,30px)] font-medium text-white outline-none transition placeholder:text-white/25 focus:border-[#5c36eb]'

function StepInput({ step, answers, set, toggleChoice, slug }: InputProps) {
  const v = answers[step.id]
  const ref = useRef<HTMLTextAreaElement | HTMLInputElement | null>(null)

  useEffect(() => {
    if (step.kind !== 'text') return
    const t = setTimeout(() => ref.current?.focus({ preventScroll: true }), 420)
    return () => clearTimeout(t)
  }, [step])

  switch (step.kind) {
    case 'text':
      if (step.multiline) {
        return (
          <AutoGrow
            refEl={ref as React.MutableRefObject<HTMLTextAreaElement | null>}
            value={String(v ?? '')}
            onChange={(x) => set(step.id, x)}
            placeholder={step.placeholder ?? 'Escreva aqui…'}
            name={step.id}
            required={step.required}
          />
        )
      }
      return (
        <input
          ref={ref as React.MutableRefObject<HTMLInputElement | null>}
          name={step.id}
          type={step.inputType ?? 'text'}
          inputMode={step.inputType === 'email' ? 'email' : undefined}
          autoComplete={step.id === 'nome' ? 'name' : step.inputType === 'email' ? 'email' : step.id === 'marca' ? 'organization' : 'off'}
          required={step.required}
          value={String(v ?? '')}
          onChange={(e) => set(step.id, e.target.value)}
          placeholder={step.placeholder}
          className={lineInput}
        />
      )

    case 'phone':
      return (
        <PhoneField
          id={`${slug}-whatsapp`}
          value={String(v ?? '')}
          onChange={(x) => set(step.id, x ?? '')}
          placeholder="(11) 98888-7777"
          wrapperClassName={`${lineInput} ox-phone-big`}
        />
      )

    case 'choice': {
      const selected = step.multi ? ((v as string[] | undefined) ?? []) : v ? [String(v)] : []
      const opts = [...step.options, ...(step.other ? [{ value: 'outro', label: 'Outro' }] : [])]
      return (
        <div className="grid max-w-[620px] gap-2.5">
          {step.multi && (
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              Marque quantas quiser · {selected.length} selecionada{selected.length === 1 ? '' : 's'}
            </p>
          )}
          {opts.map((o, i) => {
            const on = selected.includes(o.value)
            return (
              <button
                key={o.value}
                type="button"
                role={step.multi ? 'checkbox' : 'radio'}
                aria-checked={on}
                onClick={() => toggleChoice(step, o.value)}
                className={`ox-opt group flex items-center gap-4 border px-4 py-3.5 text-left transition ${
                  on ? 'border-[#5c36eb] bg-[#5c36eb]/15' : 'border-white/12 bg-white/[0.02] hover:border-white/35 hover:bg-white/[0.05]'
                }`}
              >
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center border font-mono text-[12px] transition ${
                    on ? 'border-[#5c36eb] bg-[#5c36eb] text-white' : 'border-white/25 text-white/60'
                  }`}
                >
                  {on ? '✓' : LETTERS[i]}
                </span>
                <span className="flex flex-col">
                  <span className="text-[17px] font-medium text-white">{o.label}</span>
                  {'hint' in o && o.hint && <span className="mt-0.5 text-[14px] text-white/45">{o.hint}</span>}
                </span>
              </button>
            )
          })}
          {selected.includes('outro') && (
            <input
              autoFocus
              value={String(answers[`${step.id}__outro`] ?? '')}
              onChange={(e) => set(`${step.id}__outro`, e.target.value)}
              placeholder="Conte qual…"
              className={`${lineInput} mt-3 !text-[20px]`}
            />
          )}
        </div>
      )
    }

    case 'words': {
      const arr = (v as string[] | undefined) ?? []
      return (
        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            <span className={arr.length >= step.min ? 'text-[#8f74ff]' : ''}>{arr.length}</span> de {step.max} escolhidas
          </p>
          <div className="flex flex-wrap gap-2">
            {step.options.map((w) => {
              const on = arr.includes(w)
              const full = !on && arr.length >= step.max
              return (
                <button
                  key={w}
                  type="button"
                  aria-pressed={on}
                  disabled={full}
                  onClick={() => set(step.id, on ? arr.filter((x) => x !== w) : [...arr, w])}
                  className={`border px-4 py-2.5 text-[16px] transition ${
                    on
                      ? 'border-[#5c36eb] bg-[#5c36eb] text-white'
                      : full
                        ? 'cursor-not-allowed border-white/8 text-white/20'
                        : 'border-white/15 text-white/80 hover:border-white/50 hover:text-white'
                  }`}
                >
                  {w}
                </button>
              )
            })}
          </div>
        </div>
      )
    }

    case 'logo-style': {
      const arr = (v as string[] | undefined) ?? []
      return (
        <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3 md:grid-cols-4">
          {step.options.map((o) => {
            const on = arr.includes(o.value)
            const onClick = () => {
              if (o.value === 'confio') return set(step.id, on ? [] : ['confio'])
              const base = arr.filter((x) => x !== 'confio')
              if (on) return set(step.id, base.filter((x) => x !== o.value))
              if (base.length >= step.max) return set(step.id, [...base.slice(1), o.value])
              set(step.id, [...base, o.value])
            }
            return (
              <button
                key={o.value}
                type="button"
                aria-pressed={on}
                onClick={onClick}
                className={`group relative flex p-4 text-left transition ${
                  o.value === 'confio'
                    ? 'col-span-2 min-h-[120px] flex-row items-center gap-5 sm:col-span-3 md:col-span-2'
                    : 'aspect-square flex-col justify-between md:aspect-[4/5]'
                } ${on ? 'bg-[#22194a]' : 'bg-[#1a1a1a] hover:bg-[#202020]'}`}
              >
                <span
                  className={`absolute right-3 top-3 grid h-5 w-5 place-items-center border text-[11px] ${
                    on ? 'border-[#5c36eb] bg-[#5c36eb] text-white' : 'border-white/20 text-transparent'
                  }`}
                >
                  ✓
                </span>
                <span className={`flex ${o.value === 'confio' ? 'w-[96px] shrink-0' : 'flex-1'} items-center justify-center transition ${on ? 'text-white' : 'text-white/55 group-hover:text-white/85'}`}>
                  <LogoStyleArt kind={o.value} />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-white">{o.label}</span>
                  {o.hint && <span className="mt-1 block text-[12.5px] leading-snug text-white/45">{o.hint}</span>}
                </span>
              </button>
            )
          })}
        </div>
      )
    }

    case 'sliders': {
      const vals = (v as Record<string, number> | undefined) ?? {}
      return (
        <div className="grid max-w-[680px] gap-7">
          {step.pairs.map((p) => {
            const val = vals[p.key] ?? 50
            return (
              <div key={p.key}>
                <div className="mb-2 flex justify-between text-[15px]">
                  <span className={val < 40 ? 'font-semibold text-white' : 'text-white/45'}>{p.left}</span>
                  <span className={val > 60 ? 'font-semibold text-white' : 'text-white/45'}>{p.right}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={val}
                  aria-label={`${p.left} ou ${p.right}`}
                  onChange={(e) => set(step.id, { ...vals, [p.key]: Number(e.target.value) })}
                  className="ox-range w-full"
                  style={{ ['--v' as string]: `${val}%` }}
                />
              </div>
            )
          })}
        </div>
      )
    }

    case 'colors': {
      const vals = (v as { amo?: string[]; evitar?: string[]; obs?: string } | undefined) ?? {}
      const amo = vals.amo ?? []
      const evitar = vals.evitar ?? []
      const cycle = (n: string) => {
        if (amo.includes(n)) set(step.id, { ...vals, amo: amo.filter((x) => x !== n), evitar: [...evitar, n] })
        else if (evitar.includes(n)) set(step.id, { ...vals, evitar: evitar.filter((x) => x !== n) })
        else set(step.id, { ...vals, amo: [...amo, n] })
      }
      return (
        <div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
            {step.swatches.map((c) => {
              const state = amo.includes(c.name) ? 'amo' : evitar.includes(c.name) ? 'evitar' : ''
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => cycle(c.name)}
                  aria-label={`${c.name}${state === 'amo' ? ', favorita' : state === 'evitar' ? ', evitar' : ''}`}
                  className="group text-left"
                >
                  <span
                    className={`relative block aspect-square w-full transition ${
                      state === 'amo' ? 'outline outline-2 outline-offset-2 outline-[#8f74ff]' : ''
                    } ${state === 'evitar' ? 'opacity-35' : ''}`}
                    style={{ background: c.hex, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.08)' }}
                  >
                    {state === 'amo' && <span className="absolute left-1.5 top-1.5 bg-[#161616] px-1.5 py-0.5 font-mono text-[10px] text-white">♥ AMO</span>}
                    {state === 'evitar' && (
                      <span className="absolute inset-0 grid place-items-center">
                        <span className="ox-strike absolute inset-0" />
                        <span className="relative bg-[#161616] px-1.5 py-0.5 font-mono text-[10px] text-white">EVITAR</span>
                      </span>
                    )}
                  </span>
                  <span className="mt-1.5 block text-[12.5px] text-white/60 group-hover:text-white">{c.name}</span>
                </button>
              )
            })}
          </div>
          <input
            value={vals.obs ?? ''}
            onChange={(e) => set(step.id, { ...vals, obs: e.target.value })}
            placeholder="Alguma cor obrigatória? Ex: o verde da fachada, #1E7A4C"
            className={`${lineInput} mt-8 !text-[18px]`}
          />
        </div>
      )
    }

    case 'references':
      return <ReferencesInput step={step} value={v as Refs | undefined} onChange={(x) => set(step.id, x)} slug={slug} />

    case 'upload':
      return (
        <ImageDrop
          max={step.maxImages}
          images={((v as { images?: string[] } | undefined)?.images ?? []) as string[]}
          onChange={(images) => set(step.id, { images })}
          slug={slug}
        />
      )
  }
}

function AutoGrow({
  value,
  onChange,
  placeholder,
  refEl,
  name,
  required,
}: {
  value: string
  onChange: (v: string) => void
  placeholder: string
  refEl: React.MutableRefObject<HTMLTextAreaElement | null>
  name: string
  required?: boolean
}) {
  useEffect(() => {
    const el = refEl.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 320)}px`
  }, [value, refEl])
  return (
    <textarea
      ref={refEl}
      name={name}
      required={required}
      rows={1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${lineInput} resize-none !text-[clamp(18px,2.1vw,24px)] leading-snug`}
    />
  )
}

function ImageDrop({
  max,
  images,
  onChange,
  slug,
}: {
  max: number
  images: string[]
  onChange: (imgs: string[]) => void
  slug: string
}) {
  const [busy, setBusy] = useState(0)
  const [err, setErr] = useState<string | null>(null)
  const [over, setOver] = useState(false)
  const input = useRef<HTMLInputElement>(null)
  const latest = useRef(images)
  latest.current = images

  const add = async (files: FileList | File[]) => {
    setErr(null)
    const list = Array.from(files)
      .filter((f) => f.type.startsWith('image/'))
      .slice(0, Math.max(0, max - images.length))
    if (!list.length) {
      if (images.length >= max) setErr(`Limite de ${max} imagens.`)
      return
    }
    setBusy((b) => b + list.length)
    for (const f of list) {
      try {
        const url = await uploadImage(f, slug)
        latest.current = [...latest.current, url]
        onChange(latest.current)
      } catch (e) {
        setErr(e instanceof Error ? e.message : 'Falha no envio.')
      } finally {
        setBusy((b) => b - 1)
      }
    }
  }

  const full = images.length + busy >= max

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((src) => (
          <div key={src} className="group relative aspect-square overflow-hidden bg-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-full w-full object-cover" />
            <button
              type="button"
              aria-label="Remover imagem"
              onClick={() => onChange(images.filter((x) => x !== src))}
              className="absolute right-1.5 top-1.5 grid h-7 w-7 place-items-center bg-[#161616]/85 text-white/80 hover:text-white"
            >
              ×
            </button>
          </div>
        ))}
        {Array.from({ length: busy }).map((_, i) => (
          <div key={`b${i}`} className="ox-pulse aspect-square bg-white/[0.06]" />
        ))}
        {!full && (
          <button
            type="button"
            onClick={() => input.current?.click()}
            onDragOver={(e) => {
              e.preventDefault()
              setOver(true)
            }}
            onDragLeave={() => setOver(false)}
            onDrop={(e) => {
              e.preventDefault()
              setOver(false)
              void add(e.dataTransfer.files)
            }}
            className={`flex flex-col items-center justify-center gap-2 border border-dashed text-center transition ${
              over ? 'border-[#5c36eb] bg-[#5c36eb]/10' : 'border-white/20 hover:border-white/50'
            } ${images.length + busy === 0 ? 'col-span-3 min-h-[150px] md:min-h-[190px]' : 'aspect-square'}`}
          >
            <span className="text-[26px] leading-none text-white/70">＋</span>
            <span className="px-3 text-[14px] text-white/60">
              Arraste ou <u className="underline-offset-4">escolha imagens</u>
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-white/30">até {max - images.length - busy}</span>
          </button>
        )}
      </div>
      <input
        ref={input}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => {
          if (e.target.files) void add(e.target.files)
          e.target.value = ''
        }}
      />
      {err && <p className="mt-3 text-[14px] text-[#ff8a7a]">{err}</p>}
    </div>
  )
}

function ReferencesInput({
  step,
  value,
  onChange,
  slug,
}: {
  step: Extract<Step, { kind: 'references' }>
  value: Refs | undefined
  onChange: (v: Refs) => void
  slug: string
}) {
  const r: Refs = value ?? { images: [], links: [''] }
  const links = r.links.length ? r.links : ['']
  return (
    <div className={r.semReferencia ? 'opacity-100' : ''}>
      <div className={`transition ${r.semReferencia ? 'pointer-events-none opacity-25' : ''}`}>
        <ImageDrop max={step.maxImages} images={r.images} onChange={(images) => onChange({ ...r, images })} slug={slug} />
        <div className="mt-6 grid gap-3">
          {links.map((l, i) => (
            <input
              key={i}
              type="url"
              inputMode="url"
              value={l}
              onChange={(e) => {
                const next = links.slice()
                next[i] = e.target.value
                if (i === links.length - 1 && e.target.value && links.length < step.maxLinks) next.push('')
                onChange({ ...r, links: next })
              }}
              placeholder={i === 0 ? 'Cole um link: pinterest.com/pin/…' : 'Outro link (opcional)'}
              className={`${lineInput} !text-[18px]`}
            />
          ))}
        </div>
      </div>
      <label className="mt-7 inline-flex cursor-pointer items-center gap-3 text-[15px] text-white/70 hover:text-white">
        <input
          type="checkbox"
          checked={!!r.semReferencia}
          onChange={(e) => onChange({ ...r, semReferencia: e.target.checked })}
          className="ox-check"
        />
        Não tenho referências, prefiro ver os caminhos que vocês propuserem
      </label>
    </div>
  )
}

/* ───────────────────────── estilos locais ───────────────────────── */

const CSS = `
.ox-brief-grid{
  background-image:
    linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(120% 90% at 12% 40%, #000 30%, transparent 85%);
}
.ox-brief-numeral{
  font-size: clamp(260px, 46vw, 680px);
  letter-spacing: -0.06em;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(92,54,235,.32);
  animation: oxNum 1.1s cubic-bezier(.2,.7,.2,1) both;
}
@keyframes oxNum{from{opacity:0;transform:translateY(6vh)}to{opacity:1;transform:none}}
.ox-in-up{animation: oxUp .55s cubic-bezier(.2,.75,.25,1) both}
.ox-in-down{animation: oxDown .55s cubic-bezier(.2,.75,.25,1) both}
@keyframes oxUp{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@keyframes oxDown{from{opacity:0;transform:translateY(-36px)}to{opacity:1;transform:none}}
.ox-shake{animation: oxShake .35s}
@keyframes oxShake{20%,60%{transform:translateX(-4px)}40%,80%{transform:translateX(4px)}}
.ox-pulse{animation: oxPulse 1.2s ease-in-out infinite}
@keyframes oxPulse{50%{opacity:.4}}
.ox-strike{background:linear-gradient(to top right,transparent calc(50% - 1px),rgba(255,255,255,.9) calc(50% - 1px),rgba(255,255,255,.9) calc(50% + 1px),transparent calc(50% + 1px))}
.ox-range{-webkit-appearance:none;appearance:none;height:28px;background:transparent;cursor:pointer}
.ox-range::-webkit-slider-runnable-track{height:2px;background:linear-gradient(90deg,#5c36eb var(--v),rgba(255,255,255,.15) var(--v))}
.ox-range::-moz-range-track{height:2px;background:rgba(255,255,255,.15)}
.ox-range::-moz-range-progress{height:2px;background:#5c36eb}
.ox-range::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;margin-top:-10px;background:#eae6e6;border:4px solid #5c36eb;border-radius:50%;transition:transform .15s}
.ox-range::-moz-range-thumb{width:16px;height:16px;background:#eae6e6;border:4px solid #5c36eb;border-radius:50%}
.ox-range:active::-webkit-slider-thumb{transform:scale(1.2)}
.ox-check{appearance:none;width:20px;height:20px;border:1.5px solid rgba(255,255,255,.35);display:grid;place-items:center;flex-shrink:0}
.ox-check:checked{background:#5c36eb;border-color:#5c36eb}
.ox-check:checked::after{content:'✓';color:#fff;font-size:13px;line-height:1}
.ox-phone-big .PhoneInputInput{font-size:inherit}
@media (prefers-reduced-motion: reduce){.ox-in-up,.ox-in-down,.ox-brief-numeral{animation:none}}
`
