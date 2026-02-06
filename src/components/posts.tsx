"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import type { MDXFileData } from "@/lib/blog"
import { PostItem } from "./post-item"
import { Search, X } from "lucide-react"

type PostsProps = {
  posts: MDXFileData[]
}

export function Posts({ posts }: PostsProps) {
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()
  const selectedItemRef = useRef<HTMLDivElement>(null)

  const filteredPosts = posts.filter((item) =>
    item.metadata.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [searchQuery])

  const scrollSelectedIntoView = () => {
    if (selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isSearching) {
        e.preventDefault()
        setIsSearching(true)
      } else if (e.key === "Escape" && isSearching) {
        setIsSearching(false)
        setSearchQuery("")
        document.activeElement instanceof HTMLElement &&
          document.activeElement.blur()
      } else if (
        isSearching &&
        (((e.ctrlKey || e.metaKey) && (e.key === "j" || e.key === "k")) ||
          e.key === "ArrowDown" ||
          e.key === "ArrowUp")
      ) {
        e.preventDefault()
        setSelectedIndex((prev) => {
          const isDownward =
            e.key === "ArrowDown" || ((e.ctrlKey || e.metaKey) && e.key === "j")

          const newIndex = isDownward
            ? prev < filteredPosts.length - 1
              ? prev + 1
              : prev
            : prev > 0
              ? prev - 1
              : prev

          scrollSelectedIntoView()
          return newIndex
        })
      } else if (isSearching && e.key === "Enter" && filteredPosts.length > 0) {
        router.push(`/blog/${filteredPosts[selectedIndex].slug}`)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearching, filteredPosts, selectedIndex, router])

  return (
    <>
      {/* Search Bar */}
      {isSearching && (
        <div className="fixed bottom-4 left-4 right-4 max-w-2xl mx-auto z-50">
          <div className="bg-[#050508]/95 backdrop-blur-xl border border-[#00d4ff]/20 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-3 font-mono">
              <Search className="w-4 h-4 text-[#00d4ff]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white placeholder:text-[#555] text-sm"
                autoFocus
                placeholder="search posts..."
                aria-label="Search posts"
                role="searchbox"
                aria-expanded={filteredPosts.length > 0}
                aria-controls="search-results"
                aria-activedescendant={
                  isSearching && filteredPosts.length > 0
                    ? `post-${filteredPosts[selectedIndex].slug}`
                    : undefined
                }
              />
              <button
                onClick={() => {
                  setIsSearching(false)
                  setSearchQuery("")
                }}
                className="p-1 hover:bg-[#00d4ff]/10 rounded transition-colors"
              >
                <X className="w-4 h-4 text-[#555] hover:text-[#00d4ff]" />
              </button>
            </div>
            {/* Results count */}
            <div className="mt-2 pt-2 border-t border-white/[0.06] text-[10px] text-[#555]">
              {filteredPosts.length} {filteredPosts.length === 1 ? "result" : "results"}
              {searchQuery && ` for "${searchQuery}"`}
            </div>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="glass overflow-hidden">
        {filteredPosts.map((item, index) => (
          <div
            key={item.slug}
            ref={isSearching && index === selectedIndex ? selectedItemRef : null}
            className="border-t border-white/[0.03] first:border-0"
          >
            <PostItem
              post={item}
              isSelected={isSearching && index === selectedIndex}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#555] font-mono text-sm">
            No posts found{searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>
      )}
    </>
  )
}
