// Criação de lead no Kommo a partir dos formulários do site (server-side).
// Requer env: KOMMO_SUBDOMAIN, KOMMO_ACCESS_TOKEN.
// Opcional: KOMMO_PIPELINE_ID, KOMMO_STATUS_ID.
// Sem essas variáveis, a função apenas ignora (não quebra o formulário).

type Attr = Record<string, string>

function baseUrl(): string | null {
  let sub = (process.env.KOMMO_SUBDOMAIN || '').trim()
  if (!sub) return null
  sub = sub.replace(/^https?:\/\//i, '') // remove protocolo se colaram a URL
  sub = sub.split('/')[0].split('?')[0].trim() // remove path/query
  if (!sub) return null
  const host = sub.includes('.') ? sub : `${sub}.kommo.com`
  return `https://${host}`
}

interface KommoField {
  id: number
  code?: string | null
  name?: string | null
}

// Cache do mapa de campos (code em MAIÚSCULAS -> id) por 10 min entre invocações quentes.
let fieldMapCache: { at: number; map: Record<string, number> } | null = null

async function getLeadFieldMap(base: string, token: string): Promise<Record<string, number>> {
  if (fieldMapCache && Date.now() - fieldMapCache.at < 10 * 60 * 1000) return fieldMapCache.map
  const map: Record<string, number> = {}
  for (let page = 1; page <= 5; page++) {
    const r = await fetch(`${base}/api/v4/leads/custom_fields?page=${page}&limit=250`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!r.ok) break
    const j = (await r.json()) as { _embedded?: { custom_fields?: KommoField[] }; _links?: { next?: unknown } }
    const items = j?._embedded?.custom_fields ?? []
    for (const f of items) {
      if (f.code) map[String(f.code).toUpperCase()] = f.id
      if (f.name) map[`NAME:${String(f.name).toUpperCase()}`] = f.id
    }
    if (!j?._links?.next) break
  }
  fieldMapCache = { at: Date.now(), map }
  return map
}

export interface KommoLeadInput {
  title: string
  nome: string
  email?: string
  telefone?: string
  page?: string
  source?: string
  attr: Attr
}

// Códigos padrão dos campos de rastreamento do Kommo -> chave no nosso cookie.
const TRACKING: [string, string][] = [
  ['UTM_SOURCE', 'utm_source'],
  ['UTM_MEDIUM', 'utm_medium'],
  ['UTM_CAMPAIGN', 'utm_campaign'],
  ['UTM_TERM', 'utm_term'],
  ['UTM_CONTENT', 'utm_content'],
  ['UTM_REFERRER', 'utm_referrer'],
  ['REFERRER', 'referrer'],
  ['GCLIENTID', 'gclientid'],
  ['GCLID', 'gclid'],
]

export async function createKommoLead(
  input: KommoLeadInput
): Promise<{ ok: boolean; skipped?: boolean; error?: string; id?: number }> {
  const base = baseUrl()
  const token = process.env.KOMMO_ACCESS_TOKEN
  if (!base || !token) return { ok: false, skipped: true }

  try {
    const fieldMap = await getLeadFieldMap(base, token)

    const leadCF: Array<{ field_id: number; values: Array<{ value: string }> }> = []
    for (const [code, key] of TRACKING) {
      const val = input.attr[key]
      if (val && fieldMap[code]) leadCF.push({ field_id: fieldMap[code], values: [{ value: String(val) }] })
    }

    const contactCF: Array<{ field_code: string; values: Array<{ value: string; enum_code: string }> }> = []
    if (input.telefone) contactCF.push({ field_code: 'PHONE', values: [{ value: input.telefone, enum_code: 'WORK' }] })
    if (input.email) contactCF.push({ field_code: 'EMAIL', values: [{ value: input.email, enum_code: 'WORK' }] })

    const tags: Array<{ name: string }> = [{ name: 'Site' }]
    if (input.source) tags.push({ name: input.source })

    const contact: Record<string, unknown> = { name: input.nome || 'Lead' }
    if (contactCF.length) contact.custom_fields_values = contactCF

    const lead: Record<string, unknown> = {
      name: `Site: ${input.title}${input.nome ? ' - ' + input.nome : ''}`,
      _embedded: { contacts: [contact], tags },
    }
    if (leadCF.length) lead.custom_fields_values = leadCF
    const pid = process.env.KOMMO_PIPELINE_ID
    const sid = process.env.KOMMO_STATUS_ID
    if (pid) lead.pipeline_id = Number(pid)
    if (sid) lead.status_id = Number(sid)

    const res = await fetch(`${base}/api/v4/leads/complex`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify([lead]),
    })
    if (!res.ok) {
      const t = await res.text()
      return { ok: false, error: `Kommo ${res.status}: ${t.slice(0, 300)}` }
    }

    const created = (await res.json()) as Array<{ id?: number }>
    const leadId = created?.[0]?.id

    // Nota com a origem completa (página + resumo de UTM), para o time ver na hora.
    if (leadId) {
      const originParts: string[] = []
      if (input.page) originParts.push(`página: ${input.page}`)
      if (input.source) originParts.push(`formulário: ${input.source}`)
      for (const [, key] of TRACKING) {
        if (input.attr[key]) originParts.push(`${key}=${input.attr[key]}`)
      }
      if (originParts.length) {
        await fetch(`${base}/api/v4/leads/${leadId}/notes`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify([
            { note_type: 'common', params: { text: `Origem do site\n${originParts.join('\n')}` } },
          ]),
        }).catch(() => {})
      }
    }

    return { ok: true, id: leadId }
  } catch (e) {
    const err = e as Error & { cause?: unknown }
    const cause = err.cause ? ` | cause: ${String((err.cause as { code?: string })?.code ?? err.cause)}` : ''
    return { ok: false, error: `${err.name}: ${err.message}${cause} @ base=${base}` }
  }
}
