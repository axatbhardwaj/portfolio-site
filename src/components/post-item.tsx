import { type MDXFileData } from "@/lib/blog"
import Link from "next/link"
import { FileText, Clock, ArrowUpRight } from "lucide-react"

type PostItemProps = {
  post: MDXFileData
  isSelected?: boolean
}

export function PostItem({ post, isSelected }: PostItemProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      prefetch={true}
      className={`group flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
        isSelected
          ? "bg-secondary/10 border border-secondary/30"
          : "bg-background-card/20 border border-border-dim hover:border-secondary/30 hover:bg-background-card/50"
      }`}
    >
      <div className="flex items-center gap-4 min-w-0">
        {/* Icon */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded flex items-center justify-center transition-colors ${
            isSelected
              ? "bg-secondary/20 border border-secondary/30"
              : "bg-background-card border border-border-dim group-hover:border-secondary/30"
          }`}
        >
          <FileText
            className={`w-3.5 h-3.5 transition-colors ${
              isSelected
                ? "text-secondary"
                : "text-foreground-muted group-hover:text-secondary"
            }`}
          />
        </div>

        {/* Title */}
        <span
          className={`truncate font-mono text-sm transition-colors ${
            isSelected
              ? "text-secondary"
              : "text-foreground group-hover:text-secondary"
          }`}
        >
          {post.metadata.title.toLowerCase()}
        </span>
      </div>

      {/* Date & Arrow */}
      <div className="flex items-center gap-3 flex-shrink-0 ml-4">
        <span className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 font-mono">
          <Clock className="w-3 h-3" />
          {new Date(post.metadata.date)
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
            .toLowerCase()}
        </span>
        <ArrowUpRight
          className={`w-4 h-4 transition-all ${
            isSelected
              ? "text-secondary opacity-100"
              : "text-foreground-muted opacity-0 group-hover:opacity-100 group-hover:text-secondary"
          }`}
        />
      </div>
    </Link>
  )
}
