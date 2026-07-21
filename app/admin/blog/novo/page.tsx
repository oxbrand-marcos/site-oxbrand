import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { PostEditor } from '../post-editor'

export default async function NovaMateriaPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/admin/login')

  return (
    <div className="min-h-screen bg-zinc-950">
      <PostEditor mode="create" />
    </div>
  )
}
