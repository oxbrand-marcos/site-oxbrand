import { PopupDiagnosticoBlog } from '@/components/popup-diagnostico-blog'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PopupDiagnosticoBlog />
    </>
  )
}
