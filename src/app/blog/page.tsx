import { ScrambleText } from "@/components/scramble-text"
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
          <div className="flex items-center gap-2">
            <span className="text-secondary text-lg">*</span>
            <h1 className="text-4xl font-bold text-white font-mono">
              <ScrambleText text="blog" />
            </h1>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-border-dim to-transparent" />
        </div>

        <p className="text-foreground-muted font-mono text-sm mb-6">
          Writings on blockchain, cryptography, and decentralized systems.
        </p>

        {/* Keyboard Shortcuts */}
        <div className="hidden sm:flex items-center gap-6 text-xs text-foreground-muted font-mono p-4 bg-background-card/30 border border-border-dim rounded-lg">
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-secondary/60" />
            <span>
              press{" "}
              <kbd className="px-1.5 py-0.5 bg-background-card border border-border-dim rounded text-foreground">
                /
              </kbd>{" "}
              to search
            </span>
          </div>
          <div className="w-px h-4 bg-border-dim" />
          <div className="flex items-center gap-2">
            <ArrowUp className="w-3.5 h-3.5 text-secondary/60" />
            <ArrowDown className="w-3.5 h-3.5 text-secondary/60" />
            <span>
              <kbd className="px-1.5 py-0.5 bg-background-card border border-border-dim rounded text-foreground">
                j
              </kbd>
              {" / "}
              <kbd className="px-1.5 py-0.5 bg-background-card border border-border-dim rounded text-foreground">
                k
              </kbd>{" "}
              to navigate
            </span>
          </div>
        </div>
      </div>

      {/* Posts Count */}
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-4 h-4 text-secondary/60" />
        <span className="text-xs font-mono text-foreground-muted">
          {posts.length} posts
        </span>
        <div className="flex-1 h-px bg-border-dim" />
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
