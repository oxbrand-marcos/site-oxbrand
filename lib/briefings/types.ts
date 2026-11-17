// Motor de briefings da OxBrand (/briefing/<slug>).
// Cada briefing é só um arquivo de configuração em lib/briefings/<slug>.ts.
// Este arquivo é compartilhado entre o navegador (fluxo) e o servidor (e-mail),
// então precisa continuar sendo dado puro, sem JSX.

export type Answers = Record<string, unknown>

type Base = {
  id: string
  /** Rótulo curto do capítulo, aparece acima da pergunta e no e-mail. */
  chapter: string
  /** Pergunta. Aceita {nome} (primeiro nome) e {marca} (nome da marca). */
  title: string
  help?: string
  required?: boolean
  /** Rótulo curto usado no e-mail de resumo. */
  label: string
  /** Só mostra a pergunta se a função devolver true. */
  when?: (a: Answers) => boolean
}

export type Option = { value: string; label: string; hint?: string }

export type Step =
  | (Base & { kind: 'text'; placeholder?: string; multiline?: boolean; inputType?: 'text' | 'email' })
  | (Base & { kind: 'phone'; placeholder?: string })
  | (Base & { kind: 'choice'; options: Option[]; multi?: boolean; min?: number; max?: number; other?: boolean })
  | (Base & { kind: 'words'; options: string[]; min: number; max: number })
  | (Base & { kind: 'logo-style'; options: Option[]; max: number })
  | (Base & { kind: 'sliders'; pairs: { key: string; left: string; right: string }[] })
  | (Base & { kind: 'colors'; swatches: { name: string; hex: string }[] })
  | (Base & { kind: 'references'; maxImages: number; maxLinks: number })
  | (Base & { kind: 'upload'; maxImages: number })

export type BriefingConfig = {
  slug: string
  /** Nome do serviço, aparece no e-mail e no título da página. */
  name: string
  intro: { eyebrow: string; title: string; text: string; minutes: number }
  steps: Step[]
  thanks: { title: string; text: string; next: string[] }
}

export function firstName(a: Answers): string {
  const n = String(a.nome ?? '').trim().split(/\s+/)[0] ?? ''
  return n ? n.charAt(0).toUpperCase() + n.slice(1) : ''
}

export function fill(text: string, a: Answers): string {
  const nome = firstName(a)
  const marca = String(a.marca ?? '').trim()
  return text
    .replace(/\{nome\},?\s*/g, nome ? `${nome}, ` : '')
    .replace(/\{marca\}/g, marca || 'sua marca')
    .replace(/^(\p{Ll})/u, (c) => c.toUpperCase())
}

export function visibleSteps(cfg: BriefingConfig, a: Answers): Step[] {
  return cfg.steps.filter((s) => !s.when || s.when(a))
}
