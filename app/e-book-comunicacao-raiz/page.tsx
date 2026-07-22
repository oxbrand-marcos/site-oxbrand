'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { Check } from 'lucide-react'
import Image from 'next/image'

const challenges = [
  'Atrair Clientes',
  'Converter Leads',
  'Escalar Negócio',
  'Criar autoridade',
  'Aprender estratégia',
]

const benefits = [
  { num: '01', title: "5 Q's + 3 PQ's", desc: "A fórmula completa (5Q′s + 3PQ′s = CP) para construir mensagens sólidas e orientadas a resultados." },
  { num: '02', title: 'Quebrar objeções', desc: 'Técnicas para transformar conversas superficiais em vendas e crescimento sustentável para a sua marca.' },
  { num: '03', title: 'Comunicação com raízes', desc: 'Aprenda a criar comunicação que cria raízes profundas no mercado, resistindo a modismos e tendências passageiras.' },
  { num: '04', title: 'Métricas que importam', desc: 'Pare de perseguir métricas de vaidade. Descubra quais indicadores realmente mostram crescimento do negócio.' },
]

export default function EbookComunicacaoRaizPage() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    instagram: '',
    desafio: '',
    aceito: false,
  })
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.aceito) return

    try {
      await fetch('/api/leads/materiais', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          whatsapp: form.telefone,
          material: 'comunicacao-raiz',
        }),
      })
    } catch {
      // falha silenciosa — não bloqueia o download
    }

    setSubmitted(true)

    // dispara download do e-book
    setTimeout(() => {
      const a = document.createElement('a')
      a.href = '/api/download/comunicacao-raiz'
      a.download = 'ebook-comunicacao-raiz.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }, 800)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />

      <main className="flex-1 flex flex-col">

        {/* Hero */}
        <section className="relative flex flex-col justify-end overflow-hidden grid-bg border-b border-border">
          <DotsCanvas />
          <div className="pointer-events-none absolute -left-40 top-1/4 w-[480px] h-[480px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-40 bottom-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,transparent_40%,rgba(0,0,0,0.7)_100%)]" aria-hidden="true" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full flex flex-col items-center text-center gap-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">OXBRAND</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <Link href="/materiais-gratuitos" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">MATERIAIS</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">E-BOOK</span>
            </nav>

            <span className="mono-tag text-primary/60 tracking-[0.2em]">método exclusivo · 5Q′s + 3PQ′s = CP</span>

            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance max-w-4xl">
              Comunicação{' '}
              <span className="text-glow">Raiz</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
              Nosso método exclusivo para empreendedores e profissionais do marketing. Pare de perder tempo com modismos e descubra a fórmula que cria raízes profundas no mercado.
            </p>

            <a href="#formulario" className="flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors">
              Quero o e-book grátis ↗
            </a>
          </div>

          <div className="relative z-10 border-t border-primary/20 bg-primary/5 py-3 px-6">
            <p className="max-w-7xl mx-auto mono-tag text-primary/50 text-center">
              Comunicação Raiz: A Fórmula Revelada
            </p>
          </div>
        </section>

        {/* Conteúdo principal: esquerda = imagem + benefícios, direita = formulário */}
        <section id="formulario" className="py-20 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-20 md:items-start">

            {/* Coluna esquerda */}
            <div className="flex flex-col gap-8 items-center text-center md:items-start md:text-left">

              {/* Imagem do e-book */}
              <div className="relative w-full max-w-xs mx-auto md:mx-0">
                <Image
                  src="/images/ebook-comunicacao-raiz.webp"
                  alt="E-book Comunicação Raiz: A Fórmula Revelada, 5Q's + 3PQ's = CP"
                  width={768}
                  height={728}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Descrição */}
              <div className="flex flex-col gap-3">
                <span className="mono-tag text-zinc-500">O que está dentro</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 leading-tight">
                  O antídoto contra o{' '}
                  <span className="text-glow">marketing raso.</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  O e-book Comunicação Raiz sintetiza anos de experiência em marketing de performance em um método simples e aplicável. Não é teoria; é o que fazemos todos os dias para nossos clientes.
                </p>
              </div>

              {/* Benefícios */}
              <div className="flex flex-col gap-px border border-zinc-200">
                {benefits.map((b) => (
                  <div key={b.num} className="flex gap-5 p-5 border-b border-zinc-200 last:border-b-0">
                    <span className="mono-tag text-primary/60 shrink-0 mt-0.5">{b.num}</span>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-zinc-900 text-sm">{b.title}</p>
                      <p className="text-xs text-zinc-500 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna direita — Formulário */}
            <div className="sticky top-20">
              <div className="border border-zinc-200 p-8 sm:p-10 bg-white">
                <div className="flex flex-col gap-2 mb-8">
                  <span className="mono-tag text-zinc-500">Acesso gratuito</span>
                  <h2 className="text-2xl font-bold text-zinc-900 leading-tight">
                    Utilize o nosso<br />
                    <span className="text-glow">método exclusivo.</span>
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed mt-1">
                    Preencha o formulário e o download começa na hora. Sem spam, sem compromisso.
                  </p>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-10 text-center">
                    <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check size={20} className="text-primary" />
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900">Download iniciado!</h3>
                    <p className="text-sm text-zinc-500">Seu e-book <strong>Comunicação Raiz</strong> está sendo baixado. Se não iniciar, <a href="/api/download/comunicacao-raiz" download className="text-primary underline">clique aqui</a>. Em breve nossa equipe pode entrar em contato para ajudar ainda mais.</p>
                    <Link href="/materiais-gratuitos" className="mono-tag text-primary/60 hover:text-primary transition-colors">← Ver mais materiais</Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="mono-tag text-zinc-500 text-center md:text-left" htmlFor="nome">Seu nome</label>
                      <input
                        id="nome"
                        type="text"
                        required
                        placeholder="Nome completo"
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        className="bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="mono-tag text-zinc-500" htmlFor="telefone">Telefone com WhatsApp</label>
                      <input
                        id="telefone"
                        type="tel"
                        required
                        placeholder="(11) 9 0000-0000"
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        className="bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="mono-tag text-zinc-500" htmlFor="email">Seu melhor e-mail</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="voce@empresa.com.br"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="mono-tag text-zinc-500" htmlFor="instagram">O {"@"} do seu Instagram</label>
                      <input
                        id="instagram"
                        type="text"
                        placeholder="@seuinstagram"
                        value={form.instagram}
                        onChange={(e) => setForm({ ...form, instagram: e.target.value })}
                        className="bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="mono-tag text-zinc-500" htmlFor="desafio">Qual seu principal desafio digital atual?</label>
                      <select
                        id="desafio"
                        value={form.desafio}
                        onChange={(e) => setForm({ ...form, desafio: e.target.value })}
                        className="bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-primary/60 transition-colors appearance-none"
                      >
                        <option value="">Selecione...</option>
                        {challenges.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={form.aceito}
                        onChange={(e) => setForm({ ...form, aceito: e.target.checked })}
                        className="mt-0.5 accent-primary shrink-0"
                      />
                      <span className="text-xs text-zinc-500 leading-relaxed">
                        Aceito receber o contato da equipe da OxBrand.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
                    >
                      Enviar e receber o e-book
                    </button>

                    <ul className="flex flex-col gap-2 pt-2">
                      {['100% gratuito', 'Download imediato', 'Método aplicado por +450 marcas'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                          <Check size={12} className="text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
