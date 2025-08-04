import { getPostBySlug, getPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { MDX } from "./mdx"
import type { Metadata } from "next"

type Props = {
  params: { slug: string }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return notFound()
  }

  const { title, description, date } = post.metadata
  const publishedTime = formatDate(date)
  const url = `https://axatbhardwaj.eth.limo/blog/${post.slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@axatbhardwaj",
    },
  }
}

export function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return notFound()
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-4 text-white">
        {post.metadata.title}
      </h1>
      <p className="text-gray-400 mb-8">{formatDate(post.metadata.date)}</p>
      <article className="prose prose-invert prose-lg max-w-none">
        <MDX source={post.content} />
      </article>
    </main>
  )
}
