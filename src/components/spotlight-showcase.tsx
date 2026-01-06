"use client"
import { useRef } from "react"
import { DetailedProjectCard, DetailedProjectProps } from "@/components/detailed-project-card"
import { ArrowRight } from "lucide-react"

export function SpotlightShowcase({ projects }: { projects: DetailedProjectProps[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLink = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500 // Larger scroll amount for wider cards
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
        className="w-full overflow-x-auto pb-8 -mx-4 px-4 sm:px-0 sm:mx-0 snap-x snap-mandatory hide-scrollbar"
      >
          <div className="flex gap-6 w-max items-stretch">
          {projects.map((project, index) => (
            <div key={index} className="w-[85vw] sm:w-[500px] flex-none snap-start">
              <DetailedProjectCard {...project} />
            </div>
          ))}

          {/* View All Projects Card */}
          <div className="w-[85vw] sm:w-[350px] flex-none snap-start">
            <a 
              href="/projects"
              className="group h-full p-8 border border-gray-800 bg-gray-900/30 rounded-xl flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-gray-900/50 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
                <ArrowRight className="w-10 h-10 text-white group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">View All Projects</h3>
              <p className="text-gray-400 mb-6">
                Check out the complete portfolio of my work, experiments, and open source contributions.
              </p>
              <div className="flex items-center gap-2 text-primary font-mono text-sm group-hover:gap-3 transition-all">
                Explore Archive <ArrowRight className="w-4 h-4" />
              </div>
            </a>
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
