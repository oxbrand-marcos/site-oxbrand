'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, Fragment } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { CheckCircle2 } from 'lucide-react'
import { PhoneField, isValidPhoneNumber } from '@/components/phone-field'
import { getRecaptchaToken } from '@/lib/recaptcha-client'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

const beneficios = [
  'Análise do seu funil de vendas digital',
  'Mapeamento de canais com maior potencial para o seu negócio',
  'Identificação de desperdícios e oportunidades imediatas',
  'Recomendações práticas sem compromisso',
  'Retorno em até 2 horas em dias úteis',
]

const campos = [
  { id: 'nome', label: 'Seu nome', type: 'text', placeholder: 'Nome completo', required: true },
  { id: 'email', label: 'Seu melhor e-mail', type: 'email', placeholder: 'voce@empresa.com', required: true },
  { id: 'instagram', label: 'O "@" do seu Instagram', type: 'text', placeholder: '@suaempresa', required: true },
  { id: 'empresa', label: 'Nome da empresa', type: 'text', placeholder: 'Razão social ou nome fantasia', required: true },
]

const selects = [
  {
    id: 'marketing-atual',
    label: 'Sua empresa possui um departamento ou alguém dedicado ao marketing atualmente?',
    options: ['Sim', 'Não'],
  },
  {
    id: 'anos-mercado',
    label: 'A sua empresa já possui quantos anos de mercado?',
    options: ['Menos de 1 ano', '1 a 3 anos', '4 a 6 anos', '7 anos ou mais'],
  },
  {
    id: 'funcionarios',
    label: 'Hoje a sua empresa possui quantos funcionários?',
    options: ['1 a 6', '7 a 15', '16 a 30', '31 a 100', 'Mais de 100'],
  },
  {
    id: 'ja-fez-mkt',
    label: 'Você já fez alguma ação de marketing digital antes?',
    options: ['Sim', 'Não'],
  },
  {
    id: 'faturamento',
    label: 'Qual a sua média de faturamento mensal?',
    options: ['Até 10k', 'De 10 a 50k', 'De 50 a 100k', 'De 100 a 500k', 'Mais de 500k'],
  },
]

export default function DiagnosticoPage() {
  const [sent, setSent] = useState(false)
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setErro('')
    if (!phone || !isValidPhoneNumber(phone)) {
      setErro('Informe um telefone válido, incluindo o DDD.')
      setLoading(false)
      return
    }
    const fd = new FormData(e.currentTarget)
    const body: Record<string, string> = { source: 'diagnostico' }
    fd.forEach((v, k) => { body[k] = v.toString() })
    body['Telefone com WhatsApp'] = phone
    body._recaptcha = await getRecaptchaToken('diagnostico')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error ?? 'Erro ao enviar')
      setSent(true)
    } catch {
      setErro('Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative flex flex-col pt-14 overflow-hidden grid-bg border-b border-border">
        <DotsCanvas
          className="z-[1]"
          color="rgba(255,255,255,0.15)"
          dotRadius={1.2}
          spacing={30}
          repelRadius={110}
          repelStrength={7}
        />

        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
          <Image src="/images/hero-clouds.png" alt="" fill className="object-cover opacity-20" priority />
          <div className="absolute -left-32 -top-10 w-[450px] h-[400px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 50%, transparent 75%)' }} />
          <div className="absolute -right-32 top-24 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 50%, transparent 75%)' }} />
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(13,13,13,0.72) 68%)' }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center justify-center py-28 px-6">
          <div className="max-w-4xl flex flex-col items-center text-center gap-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OxBrand</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">Diagnóstico</span>
            </nav>

            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
              Faça o seu{' '}
              <span className="text-glow">Diagnóstico Digital</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl text-balance">
              Inicie agora sua jornada de crescimento com os passos certos. Nossa equipe analisa sua operação digital e
              te devolve um diagnóstico completo: sem custo, sem compromisso.
            </p>

            <div className="flex flex-col items-center gap-3">
              <a
                href="#formulario"
                className="flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/85 transition-colors"
              >
                Pedir meu diagnóstico grátis
              </a>
              <span className="text-xs text-muted-foreground/40">
                100% gratuito · sem compromisso · retorno em até 2 horas em dias úteis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios + Formulário */}
      <section id="formulario" className="py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_600px] gap-16 lg:items-start">

            {/* Benefícios */}
            <div className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col gap-3">
                <span className="mono-tag text-zinc-500">O que você recebe</span>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-zinc-900">
                  Peça seu{' '}
                  <span className="text-glow">Diagnóstico</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  Sabemos que o seu tempo é valioso. Preencha o formulário e nossa equipe de Marketing de Performance
                  retornará o contato o mais rápido possível para iniciar o seu projeto com soluções que funcionam.
                </p>
              </div>

              <ul className="flex flex-col gap-4 w-full">
                {beneficios.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-left">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Card WhatsApp alternativo */}
              <div className="border border-zinc-200 bg-zinc-50 p-6 flex flex-col gap-4 items-center lg:items-start text-center lg:text-left w-full">
                <p className="text-sm font-semibold text-zinc-900">Prefere pelo WhatsApp?</p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Chame diretamente no nosso WhatsApp e resolva em poucos minutos com o time de especialistas.
                </p>
                <a
                  href="https://wa.me/5511921425351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-fit flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <WhatsAppIcon />
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>

            {/* Formulário */}
            <div className="border border-zinc-200 bg-zinc-50 p-8">
              {sent ? (
                <div className="flex flex-col gap-5 py-8 items-center text-center">
                  <div className="w-10 h-px bg-primary mx-auto" />
                  <h3 className="text-xl font-bold text-zinc-900">Recebemos seu diagnóstico!</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                    Nossa equipe retornará em até 2 horas em dias úteis. Fique de olho no WhatsApp e e-mail.
                  </p>
                  <button onClick={() => setSent(false)} className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors font-mono">
                    Enviar outra solicitação →
                  </button>
                </div>
              ) : (
              <form ref={formRef} className="flex flex-col gap-5" onSubmit={handleSubmit}>

                {campos.map((campo) => (
                  <Fragment key={campo.id}>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor={campo.id} className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                        {campo.label}
                        {campo.required && <span className="text-primary ml-1">*</span>}
                      </label>
                      <input
                        id={campo.id}
                        name={campo.label}
                        type={campo.type}
                        placeholder={campo.placeholder}
                        required={campo.required}
                        className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    {campo.id === 'nome' && (
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="telefone" className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                          Telefone com WhatsApp<span className="text-primary ml-1">*</span>
                        </label>
                        <PhoneField
                          id="telefone"
                          value={phone}
                          onChange={setPhone}
                          wrapperClassName="w-full bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    )}
                  </Fragment>
                ))}

                {selects.map((sel) => (
                  <div key={sel.id} className="flex flex-col gap-1.5">
                    <label htmlFor={sel.id} className="text-xs font-semibold text-zinc-500 uppercase tracking-widest leading-relaxed">
                      {sel.label}
                      <span className="text-primary ml-1">*</span>
                    </label>
                    <select
                      id={sel.id}
                      name={sel.label}
                      defaultValue=""
                      required
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" disabled>Selecione...</option>
                      {sel.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                ))}

                {/* Aceite */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="Aceite de contato" required className="mt-0.5 accent-primary shrink-0" />
                  <span className="text-xs text-zinc-500 leading-relaxed">
                    Aceito receber o contato da equipe da Ox para realizar meu diagnóstico
                  </span>
                </label>

                {erro && <p className="text-xs text-red-500">{erro}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Enviar'}
                </button>

                <p className="text-xs text-center text-zinc-400 leading-relaxed">
                  Ao clicar em enviar, você garante que nossa equipe de Marketing Digital em Mogi das Cruzes receberá
                  sua solicitação.
                </p>
                <p className="text-[11px] text-center text-zinc-400 leading-relaxed">
                  Protegido por reCAPTCHA. Aplicam-se a{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Política de Privacidade</a>{' '}
                  e os{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Termos</a>{' '}
                  do Google.
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
