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
  type?: string | null
  enums?: Array<{ id: number; value?: string | null }> | null
}

interface FieldDef {
  entity: 'lead' | 'contact'
  type: string
  enums: Record<string, number> // value (minúsculo) -> enum_id
}

interface Defs {
  defs: Record<number, FieldDef>
  utm: Record<string, number> // CODE (maiúsculo) -> id (apenas lead)
}

// Cache das definições de campos por 10 min entre invocações quentes.
let defsCache: { at: number; data: Defs } | null = null

async function fetchFields(base: string, token: string, entity: 'lead' | 'contact'): Promise<KommoField[]> {
  const path = entity === 'lead' ? 'leads' : 'contacts'
  const all: KommoField[] = []
  for (let page = 1; page <= 6; page++) {
    const r = await fetch(`${base}/api/v4/${path}/custom_fields?page=${page}&limit=250`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!r.ok) break
    const j = (await r.json()) as { _embedded?: { custom_fields?: KommoField[] }; _links?: { next?: unknown } }
    all.push(...(j?._embedded?.custom_fields ?? []))
    if (!j?._links?.next) break
  }
  return all
}

async function getDefs(base: string, token: string): Promise<Defs> {
  if (defsCache && Date.now() - defsCache.at < 10 * 60 * 1000) return defsCache.data
  const defs: Record<number, FieldDef> = {}
  const utm: Record<string, number> = {}
  for (const entity of ['lead', 'contact'] as const) {
    const fields = await fetchFields(base, token, entity)
    for (const f of fields) {
      const enums: Record<string, number> = {}
      if (Array.isArray(f.enums)) {
        for (const e of f.enums) {
          if (e?.value != null && e?.id != null) enums[String(e.value).toLowerCase().trim()] = e.id
        }
      }
      defs[f.id] = { entity, type: String(f.type || ''), enums }
      if (entity === 'lead' && f.code) utm[String(f.code).toUpperCase()] = f.id
    }
  }
  const data = { defs, utm }
  defsCache = { at: Date.now(), data }
  return data
}

export interface KommoLeadInput {
  title: string
  nome: string
  email?: string
  telefone?: string
  page?: string
  source?: string
  attr: Attr
  extraFields?: Array<{ id: number; value: string }>
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

type CFValue = { value: string } | { enum_id: number }
type CF = { field_id: number; values: CFValue[] }

// Monta o valor do custom field respeitando campos de seleção (enum).
// Retorna null quando não dá para enviar com segurança (seleção sem match),
// para nunca invalidar a criação do lead inteiro por causa de um campo.
function buildCF(id: number, value: string, def: FieldDef | undefined): CF | null {
  if (!def) return null // id desconhecido: não arrisca
  if (Object.keys(def.enums).length) {
    const enumId = def.enums[value.toLowerCase().trim()]
    return enumId ? { field_id: id, values: [{ enum_id: enumId }] } : null
  }
  return { field_id: id, values: [{ value }] }
}

export async function createKommoLead(
  input: KommoLeadInput
): Promise<{ ok: boolean; skipped?: boolean; error?: string; id?: number }> {
  const base = baseUrl()
  const token = process.env.KOMMO_ACCESS_TOKEN
  if (!base || !token) return { ok: false, skipped: true }

  try {
    const { defs, utm } = await getDefs(base, token)

    const leadCF: CF[] = []
    for (const [code, key] of TRACKING) {
      const val = input.attr[key]
      if (val && utm[code]) leadCF.push({ field_id: utm[code], values: [{ value: String(val) }] })
    }

    const contactCF: Array<CF | { field_code: string; values: Array<{ value: string; enum_code: string }> }> = []
    if (input.telefone) contactCF.push({ field_code: 'PHONE', values: [{ value: input.telefone, enum_code: 'WORK' }] })
    if (input.email) contactCF.push({ field_code: 'EMAIL', values: [{ value: input.email, enum_code: 'WORK' }] })

    // Campos extras dos formulários: roteia para lead ou contato conforme a definição.
    for (const ef of input.extraFields ?? []) {
      if (!ef.value) continue
      const def = defs[ef.id]
      const cf = buildCF(ef.id, String(ef.value), def)
      if (!cf) continue // seleção sem match ou id inválido: pula (não derruba o lead)
      if (def?.entity === 'contact') contactCF.push(cf)
      else leadCF.push(cf)
    }

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
      return { ok: false, error: `Kommo ${res.status}: ${t.slice(0, 400)}` }
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
