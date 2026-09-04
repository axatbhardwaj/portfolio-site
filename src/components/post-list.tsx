import Link from "next/link"
import type { MDXFileData } from "@/lib/blog"

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function PostList({ posts }: { posts: MDXFileData[] }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.slug} className="flex items-baseline justify-between gap-4">
          <Link href={`/blog/${post.slug}`} className="text-fg-strong hover:text-accent">
            {post.metadata.title}
          </Link>
          <span className="shrink-0 font-mono text-[13px] text-fg-dim">
            {formatDate(post.metadata.date)}
          </span>
        </li>
      ))}
    </ul>
  )
}
