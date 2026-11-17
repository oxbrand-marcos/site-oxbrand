import type { BriefingConfig } from './types'
import { idVisual } from './id-visual'

// Registro dos briefings. Para criar um novo: copiar id-visual.ts, ajustar as
// perguntas e acrescentar aqui. A rota /briefing/<slug> passa a existir sozinha.
export const BRIEFINGS: Record<string, BriefingConfig> = {
  [idVisual.slug]: idVisual,
}

export function getBriefing(slug: string): BriefingConfig | undefined {
  return BRIEFINGS[slug]
}
