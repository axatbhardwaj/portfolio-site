import { PostsList } from "@/components/posts-list"
import { getPosts } from "@/lib/blog"
import { Metadata } from "next"
import { FileText, Search, ArrowUp, ArrowDown } from "lucide-react"

const posts = getPosts().sort(
  (a, b) =>
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
)

export default async function BlogPage() {
  return (
    <main className="animate-fade-in-up relative">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-6 rounded-full bg-[#00d4ff]" style={{ boxShadow: "0 0 10px rgba(0,212,255,0.3)" }} />
          <h1 className="text-3xl sm:text-4xl font-bold text-white heading-font tracking-tight">blog</h1>
        </div>

        <p className="text-[#666] text-sm mb-6">
          Writings on blockchain, cryptography, and decentralized systems.
        </p>

        {/* Keyboard Shortcuts */}
        <div className="hidden sm:flex items-center gap-6 text-xs font-mono p-4 glass">
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-[#00d4ff]/40" />
            <span>
              press{" "}
              <kbd className="px-1.5 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded text-white text-[10px]">
                /
              </kbd>{" "}
              to search
            </span>
          </div>
          <div className="w-px h-4 bg-white/[0.06]" />
          <div className="flex items-center gap-2">
            <ArrowUp className="w-3.5 h-3.5 text-[#00d4ff]/40" />
            <ArrowDown className="w-3.5 h-3.5 text-[#00d4ff]/40" />
            <span>
              <kbd className="px-1.5 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded text-white text-[10px]">
                j
              </kbd>
              {" / "}
              <kbd className="px-1.5 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded text-white text-[10px]">
                k
              </kbd>{" "}
              to navigate
            </span>
          </div>
        </div>
      </div>

      {/* Posts Count */}
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-4 h-4 text-[#00d4ff]/40" />
        <span className="text-[10px] font-mono text-[#555]">
          {posts.length} posts
        </span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>

      {/* Posts List */}
      <PostsList posts={posts} />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Writings on blockchain, cryptography, and decentralized systems.",
  openGraph: {
    images: [
      {
        url: "https://axatbhardwaj.eth.limo/og/home?title=blog",
      },
    ],
  },
}
