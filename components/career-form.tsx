'use client'

import { useState } from 'react'
import { PhoneField, isValidPhoneNumber } from '@/components/phone-field'
import { getRecaptchaToken } from '@/lib/recaptcha-client'

const inputCls =
  'border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors w-full font-mono'

const Req = () => <span className="text-primary ml-1">*</span>

const MAX_FILE_BYTES = 4 * 1024 * 1024
const ALLOWED_EXT = /\.(pdf|doc|docx)$/i

type Props = {
  vaga: string
}

export function CareerForm({ vaga }: Props) {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', instagram: '', linkedin: '', mensagem: '' })
  const [file, setFile] = useState<File | null>(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!form.telefone || !isValidPhoneNumber(form.telefone)) {
      setError('Informe um telefone valido, incluindo o DDD.')
      return
    }
    if (!file) {
      setError('Anexe o seu curriculo (PDF, DOC ou DOCX).')
      return
    }
    if (!ALLOWED_EXT.test(file.name)) {
      setError('Formato invalido. Envie o curriculo em PDF, DOC ou DOCX.')
      return
    }
    if (file.size > MAX_FILE_BYTES) {
      setError('Arquivo muito grande. O limite e 4MB.')
      return
    }

    setLoading(true)
    try {
      const token = await getRecaptchaToken('candidatura')
      const fd = new FormData()
      fd.append('vaga', vaga)
      fd.append('nome', form.nome)
      fd.append('email', form.email)
      fd.append('telefone', form.telefone)
      fd.append('instagram', form.instagram)
      fd.append('linkedin', form.linkedin)
      fd.append('mensagem', form.mensagem)
      fd.append('_pageUrl', typeof window !== 'undefined' ? window.location.href : '')
      fd.append('_recaptcha', token)
      fd.append('curriculo', file)

      const res = await fetch('/api/apply', { method: 'POST', body: fd })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error ?? 'Erro ao enviar')

      const w = window as any
      w.dataLayer = w.dataLayer || []
      w.dataLayer.push({ event: 'career_apply', vaga, lead_email: form.email, lead_name: form.nome })
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
          Recebemos o seu curriculo e os seus dados. Se o seu perfil combinar com a vaga de {vaga}, o nosso time entra em contato.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 border border-border p-8 bg-card/30 h-fit">
      <div className="flex flex-col gap-2">
        <span className="mono-tag text-primary/60">Candidatura</span>
        <h3 className="text-xl font-bold text-foreground">Envie sua candidatura</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Preencha os campos abaixo e anexe o seu curriculo. Todos os campos com <span className="text-primary">*</span> sao obrigatorios.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-nome" className="mono-tag text-muted-foreground/50">Nome completo<Req /></label>
          <input id="cf-nome" type="text" required placeholder="Seu nome" value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })} className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="mono-tag text-muted-foreground/50">E-mail<Req /></label>
          <input id="cf-email" type="email" required placeholder="seu@email.com" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-telefone" className="mono-tag text-muted-foreground/50">Telefone / WhatsApp<Req /></label>
          <PhoneField id="cf-telefone" value={form.telefone}
            onChange={(v) => setForm({ ...form, telefone: v })} wrapperClassName={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-instagram" className="mono-tag text-muted-foreground/50">Perfil no Instagram<Req /></label>
          <input id="cf-instagram" type="text" required placeholder="@seuperfil ou link do perfil" value={form.instagram}
            onChange={(e) => setForm({ ...form, instagram: e.target.value })} className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-linkedin" className="mono-tag text-muted-foreground/50">Perfil no LinkedIn<Req /></label>
          <input id="cf-linkedin" type="text" required placeholder="Link do seu LinkedIn" value={form.linkedin}
            onChange={(e) => setForm({ ...form, linkedin: e.target.value })} className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-curriculo" className="mono-tag text-muted-foreground/50">Curriculo (PDF, DOC ou DOCX)<Req /></label>
          <input id="cf-curriculo" type="file" required accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="text-sm text-muted-foreground file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg-primary/10 file:text-primary file:text-xs file:font-bold file:uppercase file:tracking-wider file:cursor-pointer hover:file:bg-primary/20 border border-border px-3 py-2.5 w-full cursor-pointer" />
          <span className="text-[11px] text-muted-foreground/50">Tamanho maximo: 4MB.</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-mensagem" className="mono-tag text-muted-foreground/50">Mensagem (opcional)</label>
          <textarea id="cf-mensagem" rows={4} placeholder="Conte um pouco sobre voce e sua experiencia..." value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })} className={`${inputCls} resize-none`} />
        </div>

        {error && <p className="text-xs text-red-500 leading-relaxed">{error}</p>}

        <button type="submit" disabled={loading}
          className="mt-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
          {loading ? 'Enviando...' : 'Enviar candidatura'}
        </button>

        <p className="text-[11px] text-muted-foreground/40 leading-relaxed">
          Ao enviar, voce autoriza a OxBrand a usar os seus dados para avaliar a sua candidatura. Protegido por reCAPTCHA.
        </p>
      </form>
    </div>
  )
}
