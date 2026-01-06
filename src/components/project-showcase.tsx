"use client"
"use client"
import { useRef, useEffect } from "react"
import { ProjectCard } from "@/components/project-card"
import { Github, ArrowRight } from "lucide-react"
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

  const scrollLink = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative group">
      <button 
        onClick={() => scrollLink('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-primary p-2 rounded-full backdrop-blur-sm border border-primary/20 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 -ml-4"
        aria-label="Scroll left"
      >
        <ArrowRight className="w-6 h-6 rotate-180" />
      </button>

      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto pb-6 -mx-4 px-4 sm:px-0 sm:mx-0 snap-x snap-mandatory hide-scrollbar"
      >
        <div className="flex gap-6 w-max">
          {projects.map((project, index) => (
            <div key={project.name} className="w-[85vw] sm:w-[350px] md:w-[280px] lg:w-[300px] flex-none snap-start">
              <ProjectCard {...project} />
            </div>
          ))}
          
          {/* GitHub Profile Card */}
          <div className="w-[85vw] sm:w-[350px] md:w-[280px] lg:w-[300px] flex-none snap-start">
             <Link 
              href="https://github.com/axatbhardwaj"
              target="_blank"
              className="group h-full p-6 border border-gray-800 bg-gray-900/30 rounded-lg flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-gray-900/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">View More</h3>
              <p className="text-gray-400 text-sm mb-4">
                Explore all my open source contributions and repositories on GitHub.
              </p>
              <div className="flex items-center gap-2 text-primary font-mono text-sm group-hover:gap-3 transition-all">
                @axatbhardwaj <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollLink('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-primary p-2 rounded-full backdrop-blur-sm border border-primary/20 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 -mr-4"
        aria-label="Scroll right"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  )
}
