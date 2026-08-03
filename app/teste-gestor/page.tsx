import type { Metadata } from 'next'
import { GestorQuiz } from '@/components/gestor-quiz'

export const metadata: Metadata = {
  title: 'Teste Técnico · Gestor de Tráfego',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

export default function TesteGestorPage() {
  return (
    <main className="min-h-screen bg-background">
      <GestorQuiz />
    </main>
  )
}
