import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'

export const metadata: Metadata = {
  title: 'Vaga Gestor de Tráfego | Trabalhe na OxBrand, Mogi das Cruzes',
  description: 'Vaga aberta para Gestor de Tráfego Pago na OxBrand. Meta, Google, performance orientada por dados em Mogi das Cruzes.',
}

const benefits = [
  { title: 'Evolução', desc: 'Investimos em treinamentos e em sua evolução como profissional.' },
  { title: 'Flexibilidade', desc: 'Horários e modelo de contratação flexíveis.' },
  { title: 'Híbrido', desc: 'Modelo normalmente híbrido, respeitando o home office.' },
  { title: 'Saudável', desc: 'Ambiente livre de pressões e toxicidade.' },
  { title: 'Feedbacks', desc: 'Cultura do feedback praticada no dia a dia.' },
  { title: 'Reuniões', desc: 'Ambiente colaborativo com membros home no Discord.' },
  { title: 'Organização', desc: 'Softwares modernos para gestão de tarefas e demandas.' },
  { title: 'Hierarquia', desc: 'Hierarquia bem definida, sem report excessivo.' },
  { title: 'Recompensas', desc: 'Premiações por desempenho e evolução.' },
  { title: 'Benefícios', desc: 'Plano odontológico, plano médico e Wellhub (Gympass).' },
  { title: 'PDI', desc: 'Plano de desenvolvimento individual para sua carreira.' },
  { title: 'Segurança', desc: 'Ambiente seguro em condomínio protegido.' },
]

export default function VagaGestorTrafego() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[56vh] flex flex-col justify-end overflow-hidden bg-background">
          <DotsCanvas />
          <div className="pointer-events-none absolute -left-40 top-1/4 w-[480px] h-[480px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-40 bottom-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,transparent_40%,rgba(0,0,0,0.7)_100%)]" aria-hidden="true" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full flex flex-col items-center text-center gap-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <span className="mono-tag text-muted-foreground/40">OXBRAND</span>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <Link href="/carreiras-em-marketing-digital" className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors">CARREIRAS</Link>
              <span className="mono-tag text-muted-foreground/20">/</span>
              <span className="mono-tag text-primary/70">GESTOR DE TRÁFEGO</span>
            </nav>

            <p className="mono-tag text-primary/60 tracking-[0.2em]">be a oxmaker</p>

            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
              Vagas para<br />
              <span className="text-glow">Gestor de Tráfego</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl text-balance">
              Buscamos um Gestor de Tráfego Pago para trabalhar com campanhas de alta performance em Meta Ads e Google Ads. Alguém que vive de dados, otimiza sem parar e sabe que cada real investido precisa gerar retorno.
            </p>

            <Link
              href="/carreiras-em-marketing-digital"
              className="mono-tag text-muted-foreground/40 hover:text-muted-foreground transition-colors"
            >
              ← Ver todas as vagas
            </Link>
          </div>

          <div className="relative z-10 w-full bg-primary/90 px-6 py-3 flex items-center justify-between">
            <span className="mono-tag text-primary-foreground/80">Vagas para Gestor de Tráfego</span>
            <span className="mono-tag text-primary-foreground/50">OxBrand / Vagas - Gestor de Tráfego</span>
          </div>
        </section>

        {/* Detalhes da vaga */}
        <section className="py-20 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="mono-tag text-muted-foreground/60">O que buscamos</span>
                  <h2 className="text-2xl font-bold text-foreground">Perfil do candidato</h2>
                  {[
                    'Experiência comprovada em gestão de campanhas Meta Ads e Google Ads',
                    'Domínio em leitura e interpretação de métricas de performance',
                    'Capacidade de estruturar funis de conversão e otimizar CPA',
                    'Conhecimento em pixels, rastreamento e análise de dados (GA4, GTM)',
                    'Habilidade em testes A/B de criativos, segmentações e ofertas',
                    'Proatividade, autonomia e compromisso com resultados reais',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 border-b border-border/50 pb-3">
                      <span className="text-primary mt-0.5 shrink-0">→</span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  <span className="mono-tag text-muted-foreground/60">Responsabilidades</span>
                  {[
                    'Planejamento e execução de campanhas pagas em Meta e Google',
                    'Otimização contínua de campanhas com foco em ROAS e CPA',
                    'Elaboração de relatórios semanais e mensais com insights acionáveis',
                    'Alinhamento com o time de conteúdo para criativos de alta performance',
                    'Acompanhamento de novidades e atualizações das plataformas de mídia',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 border-b border-border/50 pb-3">
                      <span className="text-primary mt-0.5 shrink-0">✔</span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formulário candidatura */}
              <div className="flex flex-col gap-6 border border-border p-8 bg-card/30 h-fit">
                <div className="flex flex-col gap-2">
                  <span className="mono-tag text-primary/60">Candidatura</span>
                  <h3 className="text-xl font-bold text-foreground">Envie sua candidatura</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Entre em contato diretamente via WhatsApp com o RH da OxBrand para se candidatar a esta vaga.
                  </p>
                </div>
                <a
                  href="https://wa.me/+5511921425351?text=Ol%C3%A1%2C+tenho+interesse+na+vaga+de+Gestor+de+Tr%C3%A1fego+da+OxBrand!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors rounded-full"
                >
                  Candidatar via WhatsApp ↗
                </a>
                <div className="flex flex-col gap-3 border-t border-border pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="mono-tag text-muted-foreground/50">Modelo</span>
                    <span className="text-foreground font-medium">Híbrido</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="mono-tag text-muted-foreground/50">Local</span>
                    <span className="text-foreground font-medium text-right">Mogi das Cruzes / SP<br /><span className="text-xs text-muted-foreground font-normal">Edifício Helbor Concept - Torre Office – CEP 08780-500</span></span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="mono-tag text-muted-foreground/50">Área</span>
                    <span className="text-foreground font-medium">Performance & Tráfego</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 border-b border-border bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <span className="mono-tag text-black/40">Por que ser um OxMaker</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">O que oferecemos</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white p-6 flex flex-col gap-2">
                  <span className="text-sm font-bold text-black">{b.title}</span>
                  <p className="text-xs text-black/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
