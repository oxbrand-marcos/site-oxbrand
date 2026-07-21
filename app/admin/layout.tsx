import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OxBrand Admin · Área dos Redatores',
  description: 'Painel interno para publicação de matérias do blog OxBrand.',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
