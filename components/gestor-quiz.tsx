'use client'

import { useState } from 'react'

type Q = { n: number; q: string; options: { key: 'a' | 'b' | 'c'; text: string }[]; correct: 'a' | 'b' | 'c' }

const QUESTIONS: Q[] = [
  {
    n: 1,
    q: 'O Índice de Qualidade (IQ) de uma palavra-chave é composto por quais pilares principais?',
    correct: 'b',
    options: [
      { key: 'a', text: 'CPC máximo, CTR esperado e Página de Destino.' },
      { key: 'b', text: 'CTR esperado, Relevância do Anúncio e Experiência na Página de Destino.' },
      { key: 'c', text: 'Orçamento da campanha, CTR real e Extensões de anúncio.' },
    ],
  },
  {
    n: 2,
    q: 'Se o seu anúncio tem um CTR de 12%, mas a Taxa de Conversão é de 0,1%, qual o diagnóstico mais provável?',
    correct: 'c',
    options: [
      { key: 'a', text: 'O anúncio está ruim e precisa de novos títulos.' },
      { key: 'b', text: 'A segmentação de público-alvo está muito restrita.' },
      { key: 'c', text: 'Desalinhamento entre a promessa do anúncio e a Landing Page (ou erro no site).' },
    ],
  },
  {
    n: 3,
    q: 'Qual a diferença prática entre a correspondência de frase ("exemplo") e a correspondência exata ([exemplo])?',
    correct: 'b',
    options: [
      { key: 'a', text: 'A exata não aceita variações aproximadas como erros de digitação.' },
      { key: 'b', text: 'A de frase permite termos antes ou depois da palavra-chave, mantendo o sentido.' },
      { key: 'c', text: 'A de frase exibe o anúncio para sinônimos distantes do termo original.' },
    ],
  },
  {
    n: 4,
    q: 'O que acontece se você utilizar a estratégia de lances "Maximizar Conversões" sem ter o rastreamento de conversões (Tag/GTM) configurado corretamente?',
    correct: 'b',
    options: [
      { key: 'a', text: 'O Google otimiza com base em cliques de alta qualidade automaticamente.' },
      { key: 'b', text: 'O algoritmo fica "cego" e gasta o orçamento de forma aleatória e ineficiente.' },
      { key: 'c', text: 'A campanha entra em aprendizado perpétuo e baixa o CPC sozinha.' },
    ],
  },
  {
    n: 5,
    q: 'Qual métrica melhor indica se você está perdendo exibição devido ao orçamento baixo?',
    correct: 'b',
    options: [
      { key: 'a', text: 'Parcela de impressão perdida (classificação).' },
      { key: 'b', text: 'Parcela de impressão perdida (orçamento).' },
      { key: 'c', text: 'Índice de perda de leilão por CTR.' },
    ],
  },
  {
    n: 6,
    q: 'Para um cliente B2B que busca leads qualificados, qual estratégia de palavra-chave costuma ser mais perigosa para o orçamento?',
    correct: 'a',
    options: [
      { key: 'a', text: 'Correspondência Ampla (Broad Match) sem lista de negativas robusta.' },
      { key: 'b', text: 'Correspondência de Frase com termos de fundo de funil.' },
      { key: 'c', text: 'Correspondência Exata em termos institucionais.' },
    ],
  },
  {
    n: 7,
    q: 'O que é o ROAS e como ele é calculado?',
    correct: 'b',
    options: [
      { key: 'a', text: 'Lucro Líquido / Investimento em anúncios.' },
      { key: 'b', text: 'Receita Total das Conversões / Custo da Campanha.' },
      { key: 'c', text: 'Cliques / Conversões x 100.' },
    ],
  },
  {
    n: 8,
    q: 'Qual a função das Palavras-Chave Negativas em nível de conta?',
    correct: 'a',
    options: [
      { key: 'a', text: 'Impedir que o anúncio apareça para termos irrelevantes em todas as campanhas.' },
      { key: 'b', text: 'Diminuir o CPC médio das palavras de fundo de funil.' },
      { key: 'c', text: 'Aumentar o alcance das campanhas de Display.' },
    ],
  },
  {
    n: 9,
    q: 'Em uma campanha de Pesquisa, o que são as "Extensões de Anúncio" (Assets) e por que usá-las?',
    correct: 'b',
    options: [
      { key: 'a', text: 'São links adicionais que aumentam o custo do clique mas geram mais leads.' },
      { key: 'b', text: 'São recursos extras (Sitelinks, Frases, etc.) que aumentam o CTR e o Índice de Qualidade.' },
      { key: 'c', text: 'São palavras-chaves ocultas que o Google usa para segmentar melhor.' },
    ],
  },
  {
    n: 10,
    q: 'Se um cliente tem um CPA desejado de R$ 50,00, mas a campanha está entregando leads a R$ 120,00, qual a primeira ação técnica?',
    correct: 'b',
    options: [
      { key: 'a', text: 'Dobrar o orçamento para forçar o algoritmo a aprender mais rápido.' },
      { key: 'b', text: 'Analisar os termos de pesquisa e negativar o que não for fundo de funil.' },
      { key: 'c', text: 'Pausar a campanha e criar uma nova apenas com correspondência ampla.' },
    ],
  },
]

export function GestorQuiz() {
  const [answers, setAnswers] = useState<Record<number, 'a' | 'b' | 'c'>>({})
  const [submitted, setSubmitted] = useState(false)

  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === QUESTIONS.length
  const score = QUESTIONS.reduce((acc, q) => acc + (answers[q.n] === q.correct ? 1 : 0), 0)

  function pick(n: number, key: 'a' | 'b' | 'c') {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [n]: key }))
  }

  function reset() {
    setAnswers({})
    setSubmitted(false)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">
      {/* Cabeçalho */}
      <header className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight text-foreground">Ox<span className="text-primary">Brand</span></span>
          <span className="mono-tag text-primary/70">Teste técnico</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
          Teste Técnico · Gestor de Tráfego <span className="text-glow">(Google Ads)</span>
        </h1>
        <div className="border border-border bg-card/30 px-5 py-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Instruções:</span> você tem 15 minutos para responder. Seja direto. Marque uma alternativa por questão.
          </p>
        </div>
      </header>

      {/* Resultado */}
      {submitted && (
        <div className={`border px-6 py-5 flex items-center justify-between ${score >= 7 ? 'border-primary bg-primary/10' : 'border-border bg-card/30'}`}>
          <div className="flex flex-col">
            <span className="mono-tag text-muted-foreground/60">Resultado</span>
            <span className="text-2xl font-bold text-foreground">{score} de {QUESTIONS.length} corretas</span>
          </div>
          <button onClick={reset} className="px-5 py-3 border border-border text-foreground text-xs font-bold tracking-widest uppercase hover:border-primary/60 transition-colors">
            Refazer
          </button>
        </div>
      )}

      {/* Questões */}
      <ol className="flex flex-col gap-8">
        {QUESTIONS.map((q) => {
          const chosen = answers[q.n]
          return (
            <li key={q.n} className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="mono-tag text-primary shrink-0 mt-1">{String(q.n).padStart(2, '0')}</span>
                <p className="text-base font-medium text-foreground leading-relaxed">{q.q}</p>
              </div>
              <div className="flex flex-col gap-2 pl-1">
                {q.options.map((o) => {
                  const isChosen = chosen === o.key
                  const isCorrect = o.key === q.correct
                  let cls = 'border-border text-foreground/80 hover:border-primary/50 hover:text-foreground'
                  if (submitted) {
                    if (isCorrect) cls = 'border-green-600 bg-green-600/10 text-foreground'
                    else if (isChosen) cls = 'border-red-600 bg-red-600/10 text-foreground'
                    else cls = 'border-border text-muted-foreground/60'
                  } else if (isChosen) {
                    cls = 'border-primary bg-primary/15 text-foreground'
                  }
                  return (
                    <button
                      key={o.key}
                      type="button"
                      onClick={() => pick(q.n, o.key)}
                      disabled={submitted}
                      className={`text-left px-4 py-3 border text-sm leading-relaxed transition-colors flex gap-3 ${cls} ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <span className="font-mono font-bold uppercase shrink-0">{o.key})</span>
                      <span>{o.text}</span>
                      {submitted && isCorrect && <span className="ml-auto text-green-500 font-bold shrink-0">✓</span>}
                    </button>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ol>

      {/* Rodapé de ação */}
      {!submitted ? (
        <div className="flex flex-col gap-3 sticky bottom-0 bg-background/95 backdrop-blur py-4 border-t border-border">
          <div className="flex items-center justify-between gap-4">
            <span className="mono-tag text-muted-foreground/60">{answeredCount} de {QUESTIONS.length} respondidas</span>
            <button
              onClick={() => { setSubmitted(true); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              disabled={!allAnswered}
              className="px-7 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Ver resultado
            </button>
          </div>
          {!allAnswered && <span className="text-[11px] text-muted-foreground/50 text-right">Responda todas as questões para ver o resultado.</span>}
        </div>
      ) : (
        <div className="flex justify-center">
          <button onClick={reset} className="px-7 py-3 border border-border text-foreground text-xs font-bold tracking-widest uppercase hover:border-primary/60 transition-colors">
            Refazer teste
          </button>
        </div>
      )}
    </div>
  )
}
