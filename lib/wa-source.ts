// Utilitários de atribuição de origem para os botões de WhatsApp.
// A ideia: como o número já está conectado ao Kommo, toda mensagem vira lead.
// Aqui injetamos a origem (página + UTM de 1ª interação) no ?text= do link wa.me,
// para o lead chegar ao Kommo já sabendo de onde veio.

const KOMMO_NUMBER = '5511921425351'
const ATTR_COOKIE = 'oxb_attr'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
const CLICK_IDS = ['gclid', 'fbclid', 'ttclid', 'msclkid']

type Attr = Record<string, string>

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return m ? m[1] : null
}

function writeCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return
  const exp = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${value}; expires=${exp}; path=/; SameSite=Lax`
}

/** Captura UTM/click-ids na entrada e guarda em cookie de 1ª interação (90 dias). */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return
  try {
    const params = new URLSearchParams(window.location.search)
    const found: Attr = {}
    ;[...UTM_KEYS, ...CLICK_IDS].forEach((k) => {
      const v = params.get(k)
      if (v) found[k] = v
    })
    if (readCookie(ATTR_COOKIE)) return // 1ª interação já registrada
    if (Object.keys(found).length === 0) return // nada para guardar
    found.landing = window.location.pathname
    if (document.referrer) {
      try { found.referrer = new URL(document.referrer).hostname } catch {}
    }
    writeCookie(ATTR_COOKIE, encodeURIComponent(JSON.stringify(found)), 90)
  } catch {}
}

/** Lê a atribuição de 1ª interação salva em cookie. */
export function getAttribution(): Attr {
  try {
    const raw = readCookie(ATTR_COOKIE)
    return raw ? (JSON.parse(decodeURIComponent(raw)) as Attr) : {}
  } catch {
    return {}
  }
}

/** Monta o texto legível de origem: página atual + UTM/click-ids de 1ª interação. */
export function buildSourceSuffix(): string {
  if (typeof window === 'undefined') return ''
  const attr = getAttribution()
  const page = window.location.pathname
  const parts = [`origem: ${window.location.host}${page}`]
  ;[...UTM_KEYS, ...CLICK_IDS].forEach((k) => {
    if (attr[k]) parts.push(`${k}=${attr[k]}`)
  })
  if (attr.landing && attr.landing !== page) parts.push(`entrada=${attr.landing}`)
  if (attr.referrer) parts.push(`ref=${attr.referrer}`)
  return parts.join(' | ')
}

/**
 * Recebe uma URL wa.me e retorna a mesma URL com a origem anexada ao ?text=.
 * Só age no número da OxBrand e é idempotente (não duplica a tag).
 */
export function appendWaSource(url: string): string {
  try {
    if (!url.includes(KOMMO_NUMBER)) return url
    const qIndex = url.indexOf('?')
    const base = qIndex === -1 ? url : url.slice(0, qIndex)
    const query = qIndex === -1 ? '' : url.slice(qIndex + 1)
    const params = new URLSearchParams(query)
    const existing = params.get('text') || ''
    if (existing.includes('origem:')) return url // já anexado
    const suffix = buildSourceSuffix()
    if (!suffix) return url
    const finalText = existing
      ? `${existing}\n\n— ${suffix}`
      : `Olá! Vim pelo site da OxBrand.\n\n— ${suffix}`
    return `${base}?text=${encodeURIComponent(finalText)}`
  } catch {
    return url
  }
}
