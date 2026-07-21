import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import { db } from '@/lib/db'
import { blogPosts } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { PostEditor } from '../../post-editor'

export default async function EditarMateriaPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/admin/login')

  const { id } = await params
  const result = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.id, parseInt(id)))
    .limit(1)

  const post = result[0]
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-zinc-950">
      <PostEditor mode="edit" post={post} />
    </div>
  )
}
