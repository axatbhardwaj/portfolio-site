import { Star, GitFork, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function ProjectCard({
  name,
  description,
  language,
  stars,
  url,
  color = "#03fc3d", // Default Green
}: {
  name: string
  description: string
  language: string
  stars: number
  url: string
  color?: string
}) {
  return (
    <Link 
      href={url}
      target="_blank"
      className="group relative p-6 border border-gray-800 bg-gray-900/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(3,252,61,0.1)] block"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
            <h3 className="text-xl font-bold font-mono tracking-tight group-hover:text-primary transition-colors">{name}</h3>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
        </div>

        <p className="text-gray-300 mb-6 flex-grow text-sm line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs font-mono text-gray-500 mt-auto">
          <div className="flex items-center gap-2">
            <span 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: color }}
            />
            <span>{language}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
              <Star className="w-3 h-3" />
              <span>{stars}</span>
            </div>
            {/* Fork count could be added if available, for now just stars */}
          </div>
        </div>
      </div>
    </Link>
  )
}
