import Link from "next/link"
import { ArrowUpRight, FileText, Clock } from "lucide-react"
import { getPosts } from "@/lib/blog"

const posts = getPosts()
  .sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )
  .slice(0, 4)

export function BlogSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-secondary text-lg">*</span>
          <h2 className="text-2xl font-bold text-white font-mono">blog</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-border-dim to-transparent" />
      </div>

      {/* Posts List */}
      <div className="space-y-3">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="group flex items-center justify-between p-4 bg-background-card/20 border border-border-dim rounded-lg transition-all duration-300 hover:border-secondary/30 hover:bg-background-card/50"
          >
            <div className="flex items-center gap-4 min-w-0">
              {/* Icon */}
              <div className="flex-shrink-0 w-8 h-8 rounded bg-background-card border border-border-dim flex items-center justify-center group-hover:border-secondary/30 transition-colors">
                <FileText className="w-3.5 h-3.5 text-foreground-muted group-hover:text-secondary transition-colors" />
              </div>

              {/* Title */}
              <span className="text-foreground group-hover:text-secondary transition-colors truncate font-mono text-sm">
                {post.metadata.title.toLowerCase()}
              </span>
            </div>

            {/* Date & Arrow */}
            <div className="flex items-center gap-3 flex-shrink-0 ml-4">
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                <Clock className="w-3 h-3" />
                {formatDate(post.metadata.date)}
              </span>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          </Link>
        ))}
      </div>

      {/* View All Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 mt-6 text-secondary hover:glow-text group font-mono text-sm"
      >
        all posts
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </section>
  )
}

function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toLowerCase()
}
