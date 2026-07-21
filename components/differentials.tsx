const process = [
  {
    step: '01',
    title: 'Direção Estratégica',
    description:
      'Diagnóstico completo do negócio, posicionamento, público e mercado. Definimos onde e como crescer com clareza.',
  },
  {
    step: '02',
    title: 'Estrutura de Demanda',
    description:
      'Estruturamos a demanda com base no método 70/30: 70% inteligência e estratégia, 30% execução de elite. Mais direção, menos achismo.',
  },
  {
    step: '03',
    title: 'Estrutura de Decisão',
    description:
      'Criação de argumentos, provas e materiais que conduzem o cliente pela jornada de compra com segurança e intenção.',
  },
  {
    step: '04',
    title: 'Estrutura de Resultado',
    description:
      'Implementação das campanhas, funis e automações com mensuração precisa de cada etapa e canal.',
  },
  {
    step: '05',
    title: 'Otimização Contínua',
    description:
      'Ciclo semanal de análise, testes e ajustes orientados por dados para escalar o que funciona e cortar o que não funciona.',
  },
]

import { YouTubeFacade } from '@/components/youtube-facade'

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 lg:items-end mb-16 items-center text-center lg:items-end lg:text-left">
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <span className="mono-tag text-muted-foreground/60">OX Growth Engineering · Método 70/30</span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              Do zero à escala,{' '}
              <br />
              com{' '}
              <span className="text-glow">método.</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-base text-center lg:text-left">
            Tráfego pago sem processo é aposta. A OxBrand opera com uma metodologia
            validada em mais de 450 projetos, cada etapa documentada, medida e
            repetível para qualquer segmento de mercado.
          </p>
        </div>

        {/* Steps + Vídeo lado a lado */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-px bg-border items-stretch">

          {/* Coluna esquerda: grid de 5 steps + depoimento abaixo */}
          <div className="flex flex-col gap-px bg-border">

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-border">
              {process.map((item, idx) => (
                <div key={item.step} className={`bg-background p-7 flex flex-col gap-5 group card-lift items-center text-center lg:items-start lg:text-left${idx === 4 ? ' col-span-2 lg:col-span-1' : ''}`}>
                  <span
                    className="text-5xl font-bold stat-number leading-none"
                    style={{ color: 'rgb(92 54 235 / 0.2)' }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <div className="flex flex-col gap-2 items-center text-center lg:items-start lg:text-left">
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Depoimento abaixo dos steps, mesma largura */}
            <div className="bg-card p-8 sm:p-10 flex flex-col sm:grid sm:grid-cols-[1fr_auto] gap-8 items-center text-center sm:text-left">
              <blockquote className="flex flex-col gap-4 items-center sm:items-start">
                <div className="w-8 h-px bg-primary" aria-hidden="true" />
                <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
                  &ldquo;Antes da Ox, eu não tinha noção do quão importante é trabalhar o posicionamento e a imagem. Hoje meu trabalho foi supervalorizado, foi um verdadeiro &ldquo;divisor de águas.&rdquo;&rdquo;
                </p>
                <footer className="mono-tag text-muted-foreground/60">
                  Chris Richard · Chris Tattoo · REALISMO PRETO E CINZA · SP
                </footer>
              </blockquote>
            </div>

          </div>

          {/* Vídeo do fundador — coluna direita, altura total */}
          <div className="bg-background relative min-h-[400px]">
            <YouTubeFacade
              videoId="mbITWskDplc"
              title="OxBrand: Processo Validado"
              aspect="landscape"
              className="absolute inset-0 !aspect-auto h-full"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
