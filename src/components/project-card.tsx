import { Star, ExternalLink, Github, GitBranch } from "lucide-react"
import Link from "next/link"

export function ProjectCard({
  name,
  description,
  language,
  stars,
  url,
  color = "#00ff41",
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
      className="group relative block h-full"
    >
      <div className="glass shine-sweep h-full flex flex-col p-5 relative">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00ff41]/25 via-[#00d4ff]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-[#555] group-hover:text-[#00ff41] transition-colors" />
              <h3 className="text-sm font-bold heading-font tracking-tight text-white group-hover:text-[#00ff41] transition-colors truncate max-w-[180px]">
                {name}
              </h3>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#555] group-hover:text-[#00ff41] transition-colors flex-shrink-0" />
          </div>

          {/* Description */}
          <p className="text-[#666] text-xs mb-4 flex-grow line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs pt-3 border-t border-white/[0.03]">
            {/* Language */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: color,
                  boxShadow: `0 0 8px ${color}40`,
                }}
              />
              <span className="text-[#555] text-[10px]">{language}</span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-3">
              {stars > 0 && (
                <div className="flex items-center gap-1 text-[#555] group-hover:text-[#00d4ff] transition-colors">
                  <Star className="w-3 h-3" />
                  <span className="text-[10px]">{stars}</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-[#555]">
                <GitBranch className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
