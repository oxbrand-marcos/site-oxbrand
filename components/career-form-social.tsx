'use client'

import { useState } from 'react'
import { PhoneField, isValidPhoneNumber } from '@/components/phone-field'
import { getRecaptchaToken } from '@/lib/recaptcha-client'

const inputCls =
  'border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors w-full font-mono'

const Req = () => <span className="text-primary ml-1">*</span>

type FieldType = 'text' | 'email' | 'tel' | 'textarea' | 'radio' | 'select'
type Field = {
  key: string
  label: string
  type: FieldType
  options?: string[]
  placeholder?: string
}

const STEPS: { tag: string; title: string; fields: Field[] }[] = [
  {
    tag: 'Bloco 1',
    title: 'Basico',
    fields: [
      { key: 'nome', label: 'Nome completo', type: 'text', placeholder: 'Seu nome' },
      { key: 'telefone', label: 'WhatsApp', type: 'tel' },
      { key: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
      { key: 'Reside em Mogi das Cruzes', label: 'Reside em Mogi das Cruzes?', type: 'radio', options: ['Sim', 'Nao'] },
      { key: 'Notebook proprio para home office', label: 'Possui notebook proprio disponivel para os dias de home office?', type: 'radio', options: ['Sim', 'Nao'] },
    ],
  },
  {
    tag: 'Bloco 2',
    title: 'Experiencia',
    fields: [
      { key: 'Portfolio ou melhores trabalhos', label: 'Link do seu portfolio ou de 2-3 trabalhos que voce considera seus melhores (Instagram, Behance, Drive, o que for)', type: 'text', placeholder: 'Cole o link aqui' },
      { key: 'Tempo com conteudo/redes sociais', label: 'Ha quanto tempo trabalha com conteudo/redes sociais?', type: 'text', placeholder: 'Ex.: 2 anos' },
      { key: 'Resultado gerado com conteudo', label: 'Conte um resultado (nao likes/seguidores) que voce ja gerou com conteudo: qual era o problema e o que voce fez', type: 'textarea' },
    ],
  },
  {
    tag: 'Bloco 3',
    title: 'Senso de urgencia e proatividade',
    fields: [
      { key: 'Percebeu um problema antes de avisarem', label: 'Descreva uma situacao em que voce percebeu um problema antes de alguem te avisar, e o que voce fez', type: 'textarea' },
      { key: 'Aprendeu algo sozinho', label: 'Conte sobre uma vez em que voce precisou aprender algo sozinho (sem ninguem te ensinando) para resolver um problema no trabalho', type: 'textarea' },
      { key: 'O que mais te atrai na vaga', label: 'O que mais te atrai nessa vaga?', type: 'select', options: ['Aprender estrategia', 'Estabilidade CLT', 'Crescer para Coordenacao', 'Mentoria em Performance'] },
    ],
  },
  {
    tag: 'Bloco 4',
    title: 'Logistica',
    fields: [
      { key: 'Remuneracao de entrada esta de acordo', label: 'A remuneracao de entrada (R$ 2.000,00 + beneficios) esta de acordo com sua expectativa?', type: 'radio', options: ['Sim', 'Nao', 'Quero conversar sobre isso'] },
      { key: 'Disponibilidade para inicio', label: 'Disponibilidade para inicio', type: 'radio', options: ['Imediato', 'Aviso previo', 'Outro'] },
    ],
  },
  {
    tag: 'Bloco 5',
    title: 'Verificacao final',
    fields: [
      { key: 'Sistema de gestao operacional', label: 'Qual sistema a OxBrand usa para gestao operacional?', type: 'text', placeholder: 'Sua resposta' },
    ],
  },
]

type Props = { vaga: string }

export function CareerFormSocial({ vaga }: Props) {
  const [step, setStep] = useState(0)
  const [values, setValues] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const total = STEPS.length
  const current = STEPS[step]

  function set(key: string, v: string) {
    setValues((prev) => ({ ...prev, [key]: v }))
  }

  function validateStep(): string {
    for (const f of current.fields) {
      const v = (values[f.key] ?? '').trim()
      if (!v) return 'Responda todos os campos deste bloco para continuar.'
      if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Informe um e-mail valido.'
      if (f.type === 'tel' && !isValidPhoneNumber(v)) return 'Informe um WhatsApp valido, incluindo o DDD.'
    }
    return ''
  }

  function next() {
    const err = validateStep()
    if (err) { setError(err); return }
    setError('')
    setStep((s) => Math.min(s + 1, total - 1))
  }

  function back() {
    setError('')
    setStep((s) => Math.max(s - 1, 0))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const err = validateStep()
    if (err) { setError(err); return }
    setError('')
    setLoading(true)
    try {
      const token = await getRecaptchaToken('candidatura')
      const fd = new FormData()
      fd.append('vaga', vaga)
      for (const s of STEPS) {
        for (const f of s.fields) {
          fd.append(f.key, values[f.key] ?? '')
        }
      }
      fd.append('_pageUrl', typeof window !== 'undefined' ? window.location.href : '')
      fd.append('_recaptcha', token)

      const res = await fetch('/api/apply', { method: 'POST', body: fd })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error ?? 'Erro ao enviar')

      const w = window as any
      w.dataLayer = w.dataLayer || []
      w.dataLayer.push({ event: 'career_apply', vaga, lead_email: values['email'], lead_name: values['nome'] })
      setSent(true)
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : 'Nao foi possivel enviar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col gap-5 border border-border p-8 bg-card/30 h-fit">
        <div className="w-10 h-px bg-primary" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-foreground">Candidatura enviada.</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Recebemos a sua candidatura para {vaga}. Se o seu perfil combinar com a vaga, o nosso time entra em contato pelo WhatsApp ou e-mail que voce informou.
        </p>
      </div>
    )
  }

  const isLast = step === total - 1

  return (
    <div className="flex flex-col gap-6 border border-border p-8 bg-card/30 h-fit">
      <div className="flex flex-col gap-2">
        <span className="mono-tag text-primary/60">Candidatura &middot; {current.tag} de {total}</span>
        <h3 className="text-xl font-bold text-foreground">{current.title}</h3>
        <div className="flex items-center gap-1.5 mt-1" aria-hidden="true">
          {STEPS.map((_, i) => (
            <span key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-primary' : 'bg-border'}`} />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {current.fields.map((f) => {
          const id = `csf-${f.key.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`
          return (
            <div key={f.key} className="flex flex-col gap-1.5">
              <label htmlFor={id} className="mono-tag text-muted-foreground/50 leading-relaxed">{f.label}<Req /></label>

              {f.type === 'textarea' ? (
                <textarea id={id} rows={4} value={values[f.key] ?? ''} placeholder={f.placeholder}
                  onChange={(e) => set(f.key, e.target.value)} className={`${inputCls} resize-none`} />
              ) : f.type === 'tel' ? (
                <PhoneField id={id} value={values[f.key] ?? ''} onChange={(v) => set(f.key, v)} wrapperClassName={inputCls} />
              ) : f.type === 'select' ? (
                <select id={id} value={values[f.key] ?? ''} onChange={(e) => set(f.key, e.target.value)} className={inputCls}>
                  <option value="">Selecione...</option>
                  {f.options!.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : f.type === 'radio' ? (
                <div className="flex flex-wrap gap-2">
                  {f.options!.map((o) => {
                    const active = (values[f.key] ?? '') === o
                    return (
                      <button type="button" key={o} onClick={() => set(f.key, o)}
                        className={`px-4 py-2.5 text-sm font-mono border transition-colors ${active ? 'border-primary bg-primary/15 text-foreground' : 'border-border text-muted-foreground hover:border-primary/50'}`}>
                        {o}
                      </button>
                    )
                  })}
                </div>
              ) : (
                <input id={id} type={f.type} value={values[f.key] ?? ''} placeholder={f.placeholder}
                  onChange={(e) => set(f.key, e.target.value)} className={inputCls} />
              )}
            </div>
          )
        })}

        {error && <p className="text-xs text-red-500 leading-relaxed">{error}</p>}

        <div className="flex items-center gap-3 mt-1">
          {step > 0 && (
            <button type="button" onClick={back} disabled={loading}
              className="px-5 py-3 border border-border text-muted-foreground text-xs font-bold tracking-widest uppercase hover:border-primary/50 transition-colors disabled:opacity-60">
              Voltar
            </button>
          )}
          {!isLast ? (
            <button type="button" onClick={next}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors">
              Continuar
            </button>
          ) : (
            <button type="submit" disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Enviando...' : 'Enviar candidatura'}
            </button>
          )}
        </div>

        <p className="text-[11px] text-muted-foreground/40 leading-relaxed">
          Ao enviar, voce autoriza a OxBrand a usar os seus dados para avaliar a sua candidatura. Protegido por reCAPTCHA.
        </p>
      </form>
    </div>
  )
}
