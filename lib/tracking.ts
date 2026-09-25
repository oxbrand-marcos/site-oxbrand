// Padrão Ox de rastreamento: todo formulário de lead dispara form_success
// no dataLayer, só no sucesso, com telefone em E.164 e sem hash.

/** Converte um telefone para E.164 (+55DDDnumero). Números sem DDI são tratados como Brasil. */
export function toE164(raw: string | undefined | null): string {
  if (!raw) return ''
  const trimmed = String(raw).trim()
  const digits = trimmed.replace(/\D/g, '')
  if (!digits) return ''
  if (trimmed.startsWith('+')) return `+${digits}`
  const local = digits.replace(/^0+/, '')
  if (local.startsWith('55') && (local.length === 12 || local.length === 13)) return `+${local}`
  return `+55${local}`
}

type Lead = { name?: string; email?: string; phone?: string }

/** Empurra o form_success no dataLayer. Chamar apenas depois do envio confirmado. */
export function pushFormSuccess(formId: string, lead: Lead) {
  if (typeof window === 'undefined') return
  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({
    event: 'form_success',
    form_id: formId,
    lead_name: (lead.name ?? '').trim(),
    lead_email: (lead.email ?? '').trim(),
    lead_phone: toE164(lead.phone),
  })
}
