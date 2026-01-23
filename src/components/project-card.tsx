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
      {/* Card Container */}
      <div className="relative h-full p-5 bg-background-card border border-border-dim rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-glow-sm flex flex-col">
        {/* Corner Decorations */}
        <div className="block-corner block-corner-tl" />
        <div className="block-corner block-corner-tr" />
        <div className="block-corner block-corner-bl" />
        <div className="block-corner block-corner-br" />

        {/* Hex Pattern Background */}
        <div className="absolute inset-0 hex-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-foreground-muted group-hover:text-primary transition-colors" />
              <h3 className="text-base font-bold font-mono tracking-tight text-white group-hover:text-primary transition-colors truncate max-w-[180px]">
                {name}
              </h3>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-foreground-muted group-hover:text-primary transition-colors flex-shrink-0" />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-border-dim">
            {/* Language */}
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full ring-2 ring-offset-1 ring-offset-background-card"
                style={{
                  backgroundColor: color,
                  ringColor: `${color}40`,
                }}
              />
              <span className="text-foreground-muted">{language}</span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-3">
              {stars > 0 && (
                <div className="flex items-center gap-1 text-foreground-muted group-hover:text-warning transition-colors">
                  <Star className="w-3 h-3" />
                  <span>{stars}</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-foreground-muted">
                <GitBranch className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  )
}
