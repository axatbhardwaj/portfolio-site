import { getPostBySlug, getPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { MDX } from "./mdx"
import type { Metadata } from "next"
import Link from "next/link"
import { formatDate } from "@/components/post-list"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return notFound()
  }

  const { title, description, date } = post.metadata
  const url = `https://axatbhardwaj.eth.limo/blog/${post.slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url,
    },
    twitter: {
      card: "summary",
      title,
      description,
      creator: "@axatbhardwaj",
    },
  }
}

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return notFound()
  }

  return (
    <>
      <Link href="/blog" className="font-mono text-[13px] text-fg-dim hover:text-fg-strong">
        ← writing
      </Link>
      <h1 className="mt-6 text-2xl">{post.metadata.title}</h1>
      <p className="mt-2 font-mono text-[13px] text-fg-dim">{formatDate(post.metadata.date)}</p>
      <article className="prose prose-invert mt-10 max-w-none">
        <MDX source={post.content} />
      </article>
    </>
  )
}
