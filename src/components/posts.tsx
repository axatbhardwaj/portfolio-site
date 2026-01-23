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
          <div className="bg-background-card/95 backdrop-blur-md border border-secondary/30 rounded-lg p-3 shadow-glow-sm">
            <div className="flex items-center gap-3 text-foreground-muted font-mono">
              <Search className="w-4 h-4 text-secondary" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-foreground-muted"
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
                className="p-1 hover:bg-secondary/10 rounded transition-colors"
              >
                <X className="w-4 h-4 text-foreground-muted hover:text-secondary" />
              </button>
            </div>
            {/* Results count */}
            <div className="mt-2 pt-2 border-t border-border-dim text-xs text-foreground-muted">
              {filteredPosts.length} {filteredPosts.length === 1 ? "result" : "results"}
              {searchQuery && ` for "${searchQuery}"`}
            </div>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-3">
        {filteredPosts.map((item, index) => (
          <div
            key={item.slug}
            ref={isSearching && index === selectedIndex ? selectedItemRef : null}
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
          <p className="text-foreground-muted font-mono text-sm">
            No posts found{searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>
      )}
    </>
  )
}
