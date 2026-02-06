import { type MDXFileData } from "@/lib/blog"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type PostItemProps = {
  post: MDXFileData
  isSelected?: boolean
}

export function PostItem({ post, isSelected }: PostItemProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      prefetch={true}
      className={`group flex items-center justify-between px-5 py-4 hover:bg-white/[0.015] transition-all ${
        isSelected ? "bg-[#00d4ff]/[0.05]" : ""
      }`}
    >
      <span
        className={`text-[13px] transition-colors ${
          isSelected
            ? "text-[#00d4ff]"
            : "text-[#bbb] group-hover:text-[#00d4ff]"
        }`}
      >
        {post.metadata.title}
      </span>

      <div className="flex items-center gap-3 flex-shrink-0 ml-4">
        <span className="hidden sm:block text-[10px] text-[#333]">
          {new Date(post.metadata.date)
            .toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
        </span>
        <ArrowUpRight
          className={`w-3 h-3 transition-all ${
            isSelected
              ? "text-[#00d4ff] opacity-100"
              : "text-[#222] group-hover:text-[#00d4ff]"
          }`}
        />
      </div>
    </Link>
  )
}
