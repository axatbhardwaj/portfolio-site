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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-[#00ff41]/20 hover:bg-[#00ff41]/[0.05] text-[#555] hover:text-[#00ff41] backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 -ml-5 flex items-center justify-center"
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
              className="group/card glass shine-sweep h-full p-6 flex flex-col items-center justify-center text-center relative"
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-4 group-hover/card:border-[#00ff41]/20 transition-colors">
                  <Github className="w-7 h-7 text-[#555] group-hover/card:text-[#00ff41] transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white heading-font group-hover/card:text-[#00ff41] transition-colors">
                  View More
                </h3>
                <p className="text-[#666] text-xs mb-4 leading-relaxed">
                  Explore all repositories and open source contributions
                </p>
                <div className="flex items-center gap-2 text-[#00ff41] text-xs group-hover/card:gap-3 transition-all">
                  @axatbhardwaj
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Navigation Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-[#00ff41]/20 hover:bg-[#00ff41]/[0.05] text-[#555] hover:text-[#00ff41] backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 -mr-5 flex items-center justify-center"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-4 gap-1">
        <div className="w-6 h-1 bg-[#00ff41]/20 rounded-full" />
        <div className="w-2 h-1 bg-white/[0.05] rounded-full" />
        <div className="w-2 h-1 bg-white/[0.05] rounded-full" />
      </div>
    </div>
  )
}
