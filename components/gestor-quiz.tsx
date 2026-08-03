'use client'

import { useState } from 'react'
import { getRecaptchaToken } from '@/lib/recaptcha-client'

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

const TOTAL = QUESTIONS.length

export function GestorQuiz() {
  const [step, setStep] = useState(0) // 0..TOTAL-1 = questões; TOTAL = resultado
  const [answers, setAnswers] = useState<Record<number, 'a' | 'b' | 'c'>>({})
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const isResult = step >= TOTAL
  const score = QUESTIONS.reduce((acc, q) => acc + (answers[q.n] === q.correct ? 1 : 0), 0)
  const percent = Math.round((score / TOTAL) * 100)
  const verdict =
    score >= 8
      ? 'Excelente domínio técnico. Forte candidato para seguir na etapa presencial.'
      : score >= 6
      ? 'Bom conhecimento, com alguns pontos a reforçar. Vale aprofundar na conversa.'
      : score >= 4
      ? 'Conhecimento mediano. Avalie os erros com atenção antes de avançar.'
      : 'Abaixo do esperado para o nível da vaga.'

  function pick(n: number, key: 'a' | 'b' | 'c') {
    if (isResult) return
    setAnswers((prev) => ({ ...prev, [n]: key }))
  }
  function goTop() { if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }) }
  function next() { setStep((s) => s + 1); goTop() }
  function back() { setStep((s) => Math.max(s - 1, 0)); goTop() }

  async function submitResult() {
    if (emailStatus !== 'idle') return
    setEmailStatus('sending')
    setStep(TOTAL)
    goTop()
    try {
      let token = ''
      try { token = await getRecaptchaToken('teste_gestor') } catch { /* segue sem token */ }
      const payload = {
        score,
        total: TOTAL,
        percent,
        verdict,
        answers: QUESTIONS.map((q) => {
          const chosen = answers[q.n]
          return {
            n: q.n,
            q: q.q,
            chosen: chosen ?? '',
            chosenText: q.options.find((o) => o.key === chosen)?.text ?? '',
            correct: q.correct,
            correctText: q.options.find((o) => o.key === q.correct)?.text ?? '',
            ok: chosen === q.correct,
          }
        }),
        _recaptcha: token,
      }
      const res = await fetch('/api/teste-gestor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({ ok: false }))
      setEmailStatus(data.ok ? 'sent' : 'error')
    } catch {
      setEmailStatus('error')
    }
  }

  const Logo = () => (
    <img src="/images/oxbrand-logo.webp" alt="OxBrand" className="h-8 w-auto mx-auto" />
  )
  const Title = () => (
    <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-center">
      Teste Técnico ·<br />
      Gestor de Tráfego <span className="text-glow">(Google Ads)</span>
    </h1>
  )

  if (isResult) {
    return (
      <div className="w-full max-w-2xl mx-auto px-6 py-16 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-6">
          <Logo />
          <Title />
        </div>

        <div className={`border px-6 py-7 flex flex-col items-center gap-2 text-center ${score >= 7 ? 'border-primary bg-primary/10' : 'border-border bg-card/30'}`}>
          <span className="mono-tag text-muted-foreground/60">Resultado</span>
          <span className="text-5xl font-bold text-foreground">{score} <span className="text-muted-foreground/60 text-2xl">/ {TOTAL}</span></span>
          <p className="text-base font-medium text-foreground mt-1">Você acertou {score} de {TOTAL} questões ({percent}%).</p>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">{verdict}</p>
        </div>

        <ol className="flex flex-col gap-5">
          {QUESTIONS.map((q) => {
            const chosen = answers[q.n]
            const ok = chosen === q.correct
            const correctText = q.options.find((o) => o.key === q.correct)?.text
            const chosenText = q.options.find((o) => o.key === chosen)?.text
            return (
              <li key={q.n} className={`border px-5 py-4 flex flex-col gap-2 ${ok ? 'border-green-700/50 bg-green-600/5' : 'border-red-700/50 bg-red-600/5'}`}>
                <div className="flex items-start gap-2">
                  <span className={`mono-tag shrink-0 mt-0.5 ${ok ? 'text-green-500' : 'text-red-500'}`}>{String(q.n).padStart(2, '0')} {ok ? '✓' : '✕'}</span>
                  <p className="text-sm font-medium text-foreground leading-relaxed">{q.q}</p>
                </div>
                {!ok && <p className="text-xs text-red-400/90 pl-1"><span className="uppercase font-mono">Resposta: </span>{chosen ? `${chosen}) ${chosenText}` : 'em branco'}</p>}
                <p className="text-xs text-green-400/90 pl-1"><span className="uppercase font-mono">Correta: </span>{q.correct}) {correctText}</p>
              </li>
            )
          })}
        </ol>

        <div className="flex justify-center">
          <span className="mono-tag text-center text-muted-foreground/70">
            {emailStatus === 'sending'
              ? 'Enviando resultado à OxBrand...'
              : emailStatus === 'sent'
              ? 'Resultado registrado e enviado à OxBrand.'
              : emailStatus === 'error'
              ? 'Resultado registrado. (O envio automático por e-mail falhou.)'
              : 'Resultado registrado.'}
          </span>
        </div>
      </div>
    )
  }

  const q = QUESTIONS[step]
  const chosen = answers[q.n]
  const answered = !!chosen
  const isLastQuestion = step === TOTAL - 1

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-16 flex flex-col gap-10 min-h-screen">
      <header className="flex flex-col items-center gap-6">
        <Logo />
        <Title />
        <div className="border border-border bg-card/30 px-5 py-3 w-full">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            <span className="text-foreground font-medium">Instruções:</span> você tem 15 minutos. Seja direto. Uma alternativa por questão.
          </p>
        </div>
      </header>

      {/* Progresso */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="mono-tag text-primary/70">Questão {step + 1} de {TOTAL}</span>
          <span className="mono-tag text-muted-foreground/50">{Object.keys(answers).length} respondidas</span>
        </div>
        <div className="flex items-center gap-1">
          {QUESTIONS.map((_, i) => (
            <span key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-primary' : 'bg-border'}`} />
          ))}
        </div>
      </div>

      {/* Seção da questão */}
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <span className="mono-tag text-primary shrink-0 mt-1">{String(q.n).padStart(2, '0')}</span>
          <p className="text-lg font-medium text-foreground leading-relaxed">{q.q}</p>
        </div>
        <div className="flex flex-col gap-2.5">
          {q.options.map((o) => {
            const isChosen = chosen === o.key
            const cls = isChosen ? 'border-primary bg-primary/15 text-foreground' : 'border-border text-foreground/80 hover:border-primary/50 hover:text-foreground'
            return (
              <button
                key={o.key}
                type="button"
                onClick={() => pick(q.n, o.key)}
                className={`text-left px-4 py-3.5 border text-sm leading-relaxed transition-colors flex gap-3 cursor-pointer ${cls}`}
              >
                <span className="font-mono font-bold uppercase shrink-0">{o.key})</span>
                <span>{o.text}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Navegação */}
      <div className="flex items-center gap-3 mt-2">
        {step > 0 && (
          <button onClick={back} className="px-5 py-3 border border-border text-muted-foreground text-xs font-bold tracking-widest uppercase hover:border-primary/50 hover:text-foreground transition-colors">
            Voltar
          </button>
        )}
        <button
          onClick={isLastQuestion ? submitResult : next}
          disabled={!answered}
          className="flex-1 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isLastQuestion ? 'Ver resultado' : 'Continuar'}
        </button>
      </div>
    </div>
  )
}
