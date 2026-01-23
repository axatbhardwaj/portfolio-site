"use client"
import { useRef } from "react"
import {
  DetailedProjectCard,
  DetailedProjectProps,
} from "@/components/detailed-project-card"
import { ArrowRight, ChevronLeft, ChevronRight, Layers } from "lucide-react"

export function SpotlightShowcase({
  projects,
}: {
  projects: DetailedProjectProps[]
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 520
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative group">
      {/* Left Navigation Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background-card/90 hover:bg-background-card border border-border-dim hover:border-primary/50 text-foreground-muted hover:text-primary rounded-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 -ml-5 flex items-center justify-center shadow-glow-sm"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto pb-4 -mx-4 px-4 sm:px-0 sm:mx-0 snap-x snap-mandatory hide-scrollbar"
      >
        <div className="flex gap-6 w-max items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[85vw] sm:w-[500px] flex-none snap-start"
            >
              <DetailedProjectCard {...project} />
            </div>
          ))}

          {/* View All Projects Card */}
          <div className="w-[85vw] sm:w-[350px] flex-none snap-start">
            <a
              href="/projects"
              className="group/card relative h-full p-8 bg-background-card border border-border-dim rounded-xl flex flex-col items-center justify-center text-center hover:border-primary/40 hover:shadow-glow-sm transition-all duration-300 overflow-hidden"
            >
              {/* Corner Decorations */}
              <div className="block-corner block-corner-tl" />
              <div className="block-corner block-corner-tr" />
              <div className="block-corner block-corner-bl" />
              <div className="block-corner block-corner-br" />

              {/* Hex Pattern */}
              <div className="absolute inset-0 hex-pattern opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-background-elevated border border-border-dim flex items-center justify-center mb-6 group-hover/card:border-primary/30 transition-colors">
                  <Layers className="w-8 h-8 text-foreground-muted group-hover/card:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white font-mono">
                  View All Projects
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Explore the complete portfolio of work, experiments, and open
                  source contributions.
                </p>
                <div className="flex items-center gap-2 text-primary font-mono text-sm group-hover/card:gap-3 transition-all">
                  Explore Archive
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Navigation Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background-card/90 hover:bg-background-card border border-border-dim hover:border-primary/50 text-foreground-muted hover:text-primary rounded-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 -mr-5 flex items-center justify-center shadow-glow-sm"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-4 gap-1">
        <div className="w-8 h-1 bg-primary/30 rounded-full" />
        <div className="w-2 h-1 bg-border-dim rounded-full" />
        <div className="w-2 h-1 bg-border-dim rounded-full" />
      </div>
    </div>
  )
}
