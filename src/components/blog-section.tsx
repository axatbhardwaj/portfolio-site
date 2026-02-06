import Link from "next/link"
import { ArrowUpRight, FileText, Clock, ChevronRight } from "lucide-react"
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
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 rounded-full bg-[#00d4ff]" style={{ boxShadow: "0 0 10px rgba(0,212,255,0.3)" }} />
          <h2 className="text-xl font-bold text-white heading-font tracking-tight">blog</h2>
        </div>
        <Link href="/blog" className="flex items-center gap-1.5 text-[11px] text-[#555] hover:text-[#00d4ff] transition-colors">
          All posts <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Posts List */}
      <div className="glass overflow-hidden">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="group flex items-center justify-between px-5 py-4 hover:bg-white/[0.015] transition-all border-t border-white/[0.03] first:border-0"
          >
            <div className="flex items-center gap-3">
              <span className="text-[9px] text-[#00d4ff]/40 font-bold w-4">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-[13px] text-[#bbb] group-hover:text-[#00d4ff] transition-colors">
                {post.metadata.title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#333]">
                {new Date(post.metadata.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
              </span>
              <ArrowUpRight className="w-3 h-3 text-[#222] group-hover:text-[#00d4ff] transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
