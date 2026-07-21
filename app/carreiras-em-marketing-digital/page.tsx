import type { Metadata } from 'next'
import Link from 'next/link'
import { pageOg } from '@/lib/og'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import DotsCanvas from '@/components/dots-canvas'
import { FAQ } from '@/components/faq'

const candidateFAQ = [
  {
    q: 'Como é o processo seletivo?',
    a: 'Três etapas: triagem de currículo, conversa com a liderança da área e um teste prático relacionado à vaga. Todo o processo leva em média duas semanas.',
  },
  {
    q: 'Em quanto tempo recebo um retorno?',
    a: 'Retornamos para todos os candidatos que avançam da triagem em até 7 dias. Se você não receber contato nesse prazo, seu perfil ficou na base para vagas futuras.',
  },
  {
    q: 'O trabalho é presencial, híbrido ou remoto?',
    a: 'Nosso modelo padrão é híbrido, com sede em Mogi das Cruzes. A frequência presencial varia por função e é combinada na entrevista.',
  },
  {
    q: 'Quais ferramentas o time usa no dia a dia?',
    a: 'ClickUp para gestão de demandas, Discord para comunicação, Google Ads, Meta Business, Kommo, RD Station, ActiveCampaign, SEMrush e a suíte Adobe.',
  },
  {
    q: 'Preciso ter experiência prévia em agência?',
    a: 'Não é obrigatório para todas as vagas. Cada anúncio traz os requisitos específicos. Valorizamos mais o raciocínio e a autonomia do que o tempo de casa em outra agência.',
  },
  {
    q: 'Vocês contratam PJ ou CLT?',
    a: 'Trabalhamos com os dois modelos, definidos por função e senioridade. O formato é sempre informado antes da proposta.',
  },
]

export const metadata: Metadata = {
  title: 'Carreiras em Marketing Digital | OxBrand, Mogi das Cruzes',
  description: 'Faça parte do time OxBrand. Vagas para profissionais de marketing digital que querem crescer numa agência de performance orientada por dados.',
  ...pageOg({
    title: 'Carreiras na OxBrand · Seja um OxMaker',
    description: 'Vagas para profissionais de marketing digital que querem crescer numa agência de performance orientada por dados.',
    path: '/carreiras-em-marketing-digital',
    subtitle: 'Trabalhe conosco',
  }),
}

const benefits = [
  { title: 'Benefícios', desc: 'Plano médico, odontológico e Wellhub (Gympass) para cuidar da sua saúde dentro e fora do trabalho.' },
  { title: 'Híbrido', desc: 'Entendemos como o home office pode ser importante, por isso, nosso modelo normalmente é híbrido.' },
  { title: 'PDI', desc: 'Planos de desenvolvimento feitos individualmente para te dar uma carreira e futuro conosco.' },
  { title: 'Evolução', desc: 'Investimos em treinamentos e em sua evolução como profissional, afinal você é o nosso bem mais precioso.' },
  { title: 'Saudável', desc: 'Metas claras e feedback direto. Cobramos pelo combinado, não por horas online.' },
  { title: 'Feedbacks', desc: 'Cultura do feedback praticada em nosso dia a dia e em todas as reuniões praticadas pelo time.' },
  { title: 'Reuniões', desc: 'Reuniões e ambiente colaborativo em todo o momento, com os membros home presentes no Discord.' },
  { title: 'Autonomia', desc: 'A definição hierárquica é bem feita, evitando que exista um report excessivo e desgastante.' },
  { title: 'Recompensas', desc: 'Recompensas para os melhores desempenhos, além de dinâmicas que premiam sua evolução.' },
  { title: 'Flexibilidade', desc: 'Horários e modelo de contratação flexíveis a cada tipo de contrato e sistema de trabalho.' },
  { title: 'Organização', desc: 'Demandas e tarefas criadas sempre com organização e ajuda dos softwares mais modernos do mercado.' },
  { title: 'Segurança', desc: 'Ambiente seguro, dentro de um condomínio protegido e aconchegante para tranquilidade.' },
]

const vagas = [
  {
    title: 'Gestor de Tráfego Pago Meta',
    tag: 'Performance',
    href: '/carreiras/gestor-de-trafego',
  },
  {
    title: 'Social Media Estratégico',
    tag: 'Conteúdo',
    href: '/carreiras/social-media',
  },
]

export default function CarreirasPage() {
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
              <span className="mono-tag text-primary/70">CARREIRAS</span>
            </nav>

            <p className="mono-tag text-primary/60 tracking-[0.2em]">be a oxmaker</p>

            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.92] tracking-tight text-foreground text-balance">
              Faça parte do time.<br />
              <span className="text-glow">Seja um OxMaker.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl text-balance">
              No coração da OxBrand, cada OxMaker é mais do que um membro do time: é um catalisador de inovação e crescimento. Cada decisão passa por dados, método e responsabilidade com o resultado.
            </p>
          </div>

          <div className="relative z-10 w-full bg-primary/90 px-6 py-3 flex items-center justify-between">
            <span className="mono-tag text-primary-foreground/80">Carreiras em Marketing</span>
            <span className="mono-tag text-primary-foreground/50">OxBrand / Carreiras em Marketing</span>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="py-20 border-b border-border bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:items-start">
              <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
                <span className="mono-tag text-zinc-500">Sobre a OxBrand</span>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-zinc-900">
                  Uma agência que forma<br />
                  <span className="text-glow">lideranças.</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  A OxBrand é uma agência de marketing de performance focada em resultados reais. Atuamos com estratégia, performance, branding e automação para empresas que desejam crescer com consistência e inteligência de dados. Nascemos para transformar o marketing em motor de negócios, e não apenas de likes.
                </p>
                <div className="flex flex-col gap-4 border border-zinc-200 p-6 w-full text-left">
                  <div className="flex flex-col gap-1">
                    <span className="mono-tag text-primary/70">Missão</span>
                    <p className="text-sm text-zinc-600 leading-relaxed">Gerar transformação real por meio do marketing, impulsionando pessoas, negócios e resultados.</p>
                  </div>
                  <div className="h-px bg-zinc-200" />
                  <div className="flex flex-col gap-1">
                    <span className="mono-tag text-primary/70">Visão</span>
                    <p className="text-sm text-zinc-600 leading-relaxed">Ser reconhecida como a melhor parceira de marketing e gestão para empresas que querem crescer de forma estratégica, escalável e sustentável.</p>
                  </div>
                </div>
              </div>

              {/* Cultura */}
              <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
                <span className="mono-tag text-zinc-500">Nossa Cultura Organizacional</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Empresa colaborativa, horizontal, com clima informal no dia a dia, mas extremamente profissional na entrega. Valorizamos relações leves, produtivas e com autonomia.
                </p>
                <div className="flex flex-col gap-3 w-full">
                  <span className="mono-tag text-muted-foreground/50">Comportamentos Valorizados</span>
                  {['Comunicação clara e transparente', 'Comprometimento com entregas e prazos', 'Proatividade, autonomia e senso de dono', 'Evolução contínua, curiosidade e aprendizado', 'Respeito e ética nas relações', 'Foco no cliente e nos resultados'].map((item) => (
                    <div key={item} className="flex items-start gap-3 border-b border-border/50 pb-3">
                      <span className="text-primary mt-0.5 shrink-0">✔</span>
                      <span className="text-sm text-muted-foreground text-left">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vagas abertas */}
        <section className="py-20 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col gap-3">
              <span className="mono-tag text-muted-foreground/60">Vagas Disponíveis</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Aplique para uma das<br />
                <span className="text-glow">vagas abertas.</span>
              </h2>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-px bg-border w-full">
              {vagas.map((vaga) => (
                <Link
                  key={vaga.href}
                  href={vaga.href}
                  className="group bg-background hover:bg-card transition-colors p-8 flex flex-col gap-4 items-center text-center lg:items-start lg:text-left border-b border-border"
                >
                  <span className="mono-tag text-primary/60">{vaga.tag}</span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{vaga.title}</h3>
                  <span className="mono-tag text-muted-foreground/40 group-hover:text-primary/60 transition-colors mt-auto">Ver vaga ↗</span>
                </Link>
              ))}
            </div>

            {/* Candidatura espontânea */}
            <div className="border border-border p-8 flex flex-col gap-4 bg-card/30 w-full items-center text-center lg:items-start lg:text-left">
              <span className="mono-tag text-muted-foreground/60">Candidatura Espontânea</span>
              <h3 className="text-lg font-bold text-foreground">Não encontrou a vaga que esperava?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Envie seu currículo e deixe-o em nossa base de talentos. Assim que surgir uma vaga adequada ao seu perfil, entraremos em contato.
              </p>
              <a
                href="mailto:gestao@oxbrand.com.br?subject=Candidatura%20espont%C3%A2nea%20-%20OxBrand"
                className="w-full sm:w-fit flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
              >
                Enviar candidatura ↗
              </a>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 border-b border-border bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
            <div className="flex flex-col gap-3 items-center text-center lg:items-start lg:text-left">
              <span className="mono-tag text-black/40">Por que ser um OxMaker</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                O que você encontra sendo<br />
                <span className="text-glow">um OxMaker.</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white p-6 flex flex-col gap-2 items-center text-center lg:items-start lg:text-left">
                  <span className="text-sm font-bold text-black">{b.title}</span>
                  <p className="text-xs text-black/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — perguntas de candidatos */}
        <FAQ variant="light" questions={candidateFAQ} />

        {/* Fechamento contextual */}
        <section className="py-20 border-t border-border bg-background">
          <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-6">
            <span className="mono-tag text-muted-foreground/60">Base de talentos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Não achou a sua vaga hoje?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl text-balance">
              Deixe seu currículo na nossa base. Quando abrir algo com o seu perfil, você é o primeiro a saber.
            </p>
            <a
              href="mailto:gestao@oxbrand.com.br?subject=Candidatura%20espont%C3%A2nea%20-%20OxBrand"
              className="flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
            >
              Enviar currículo ↗
            </a>
          </div>
        </section>
      </main>
      <Footer hideCta />
    </>
  )
}
