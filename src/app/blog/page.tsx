import type { Metadata } from "next"
import { PostList } from "@/components/post-list"
import { getPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on Ethereum, cryptography, and backend systems.",
}

export default function BlogPage() {
  const posts = getPosts().sort(
    (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )

  return (
    <>
      <h1 className="text-2xl">Writing</h1>
      <p className="mt-3 text-fg-muted">Notes on Ethereum, cryptography, and backend systems.</p>
      <div className="mt-12">
        <PostList posts={posts} />
      </div>
    </>
  )
}
