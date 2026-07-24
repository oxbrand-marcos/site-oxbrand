import { DeferredBlogPopup } from '@/components/deferred-blog-popup'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <DeferredBlogPopup />
    </>
  )
}
