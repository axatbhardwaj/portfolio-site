"use client"
import { useRef } from "react"
import { ProjectCard } from "@/components/project-card"
import { Github, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export type Project = {
  name: string
  description: string
  language: string
  stars: number
  url: string
  color: string
}

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 320
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
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
        <div className="flex gap-4 w-max items-stretch">
          {projects.map((project) => (
            <div
              key={project.name}
              className="w-[280px] sm:w-[300px] flex-none snap-start"
            >
              <ProjectCard {...project} />
            </div>
          ))}

          {/* GitHub Profile Card */}
          <div className="w-[280px] sm:w-[300px] flex-none snap-start">
            <Link
              href="https://github.com/axatbhardwaj"
              target="_blank"
              className="group/card relative h-full p-6 bg-background-card border border-border-dim rounded-lg flex flex-col items-center justify-center text-center hover:border-primary/40 hover:shadow-glow-sm transition-all duration-300 overflow-hidden"
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
                <div className="w-14 h-14 rounded-xl bg-background-elevated border border-border-dim flex items-center justify-center mb-4 group-hover/card:border-primary/30 transition-colors">
                  <Github className="w-7 h-7 text-foreground-muted group-hover/card:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white font-mono">
                  View More
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Explore all repositories and open source contributions
                </p>
                <div className="flex items-center gap-2 text-primary font-mono text-sm group-hover/card:gap-3 transition-all">
                  @axatbhardwaj
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
            </Link>
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
