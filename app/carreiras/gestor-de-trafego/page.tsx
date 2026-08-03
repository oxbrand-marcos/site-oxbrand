import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { CareerFormGestor } from '@/components/career-form-gestor'

export const metadata: Metadata = {
  title: 'Vaga Analista de Performance Jr. (Google Ads) | OxBrand Mogi',
  description: 'Vaga de Analista de Performance Júnior (Google Ads) na OxBrand, Mogi das Cruzes. CLT híbrido, R$ 2.000 + benefícios. Experiência comprovada em Meta e Google Ads.',
}

const benefits = [
  { title: 'Remuneração', desc: 'R$ 2.000,00 mensais em regime CLT exclusivo. Valor de entrada da vaga.' },
  { title: 'Ajuda de custo', desc: 'R$ 200,00 de ajuda de custo.' },
  { title: 'Wellhub', desc: 'Acesso ao Wellhub (Gympass) para cuidar do corpo e da mente.' },
  { title: 'Vale-transporte', desc: 'Vale-transporte para os dias presenciais.' },
  { title: 'Plano Odontológico', desc: 'Plano odontológico incluso.' },
  { title: 'Estrutura', desc: 'Espaço próprio para refeições (copa) no escritório.' },
  { title: 'Crescimento', desc: 'Ambiente de aprendizado contínuo, com autonomia e crescimento acelerado.' },
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
              Analista de Performance<br />
              <span className="text-glow">Júnior · Google Ads</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl text-balance">
              Vaga para nível Júnior COM experiência comprovada em tráfego pago (Meta e Google Ads). Não é para iniciantes. Você vai executar com excelência: gerir até 20 contas e um orçamento de R$ 40 mil/mês com meta de ROAS 3x. A estratégia é do nosso time Sênior; o domínio pleno da ferramenta e a execução são seus.
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
                    'Experiência comprovada em Meta Ads (Facebook/Instagram) e Google Ads. Não é vaga para iniciantes.',
                    'Morar em Mogi das Cruzes ou região próxima (regime híbrido, com dias presenciais).',
                    'Notebook próprio de alto desempenho para o modelo híbrido.',
                    'Domínio pleno de ferramenta de gestão de projetos. A nossa é o ClickUp.',
                    'Leitura afiada de métricas de aquisição, CPA, ROAS e conversão.',
                    'Excelente comunicação e postura proativa.',
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
                    'Execução operacional hands-on das campanhas, do início ao resultado.',
                    'Atuação simultânea em um portfólio de até 20 contas de clientes.',
                    'Gestão de um orçamento mensal de R$ 40 mil, com meta de ROAS 3x para clientes B2B e e-commerce.',
                    'Segmentação e otimização contínua das contas.',
                    'Comunicação precisa e atualização constante do ClickUp. A estratégia principal é do time Sênior; a excelência na execução é sua.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 border-b border-border/50 pb-3">
                      <span className="text-primary mt-0.5 shrink-0">✔</span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formulário candidatura */}
              <div className="flex flex-col gap-6 h-fit">
                <CareerFormGestor vaga="Analista de Performance Júnior (Google Ads)" />
                <div className="flex flex-col gap-3 border border-border p-6 bg-card/30">
                  <div className="flex items-center justify-between text-sm">
                    <span className="mono-tag text-muted-foreground/50">Modelo</span>
                    <span className="text-foreground font-medium">Híbrido · CLT</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="mono-tag text-muted-foreground/50">Local</span>
                    <span className="text-foreground font-medium text-right">Mogi das Cruzes - SP<br /><span className="text-xs text-muted-foreground font-normal">Torre Office (Helbor Concept) - Socorro - CEP 08780-500</span></span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="mono-tag text-muted-foreground/50">Área</span>
                    <span className="text-foreground font-medium text-right">Performance<br /><span className="text-xs text-muted-foreground font-normal">R$ 2.000 + benefícios</span></span>
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

        {/* Outras vagas abertas, cross-link */}
        <section className="py-20 border-b border-border bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="mono-tag text-black/40">Essa não é pra você?</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">Outras vagas abertas</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-black/10 border border-black/10">
              <Link href="/carreiras/social-media" className="group bg-white p-8 flex flex-col gap-3 hover:bg-black/[0.02] transition-colors">
                <span className="mono-tag text-black/40 group-hover:text-primary/60 transition-colors">Vaga</span>
                <span className="text-xl font-bold text-black">Arquiteto(a) de Conteúdo (Social Media Jr.)</span>
                <span className="mono-tag text-muted-foreground/50 mt-2 group-hover:text-primary/60 transition-colors">Ver vaga ↗</span>
              </Link>
              <Link href="/carreiras-em-marketing-digital" className="group bg-white p-8 flex flex-col gap-3 hover:bg-black/[0.02] transition-colors">
                <span className="mono-tag text-black/40 group-hover:text-primary/60 transition-colors">Todas as vagas</span>
                <span className="text-xl font-bold text-black">Trabalhe na OxBrand</span>
                <span className="mono-tag text-muted-foreground/50 mt-2 group-hover:text-primary/60 transition-colors">Ver todas ↗</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
