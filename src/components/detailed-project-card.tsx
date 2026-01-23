import Link from "next/link"
import { ArrowUpRight, Calendar, User, Zap, Code2, Blocks } from "lucide-react"

export type ImpactStat = {
  label: string
  value: string
}

export type DetailedProjectProps = {
  title: string
  role: string
  period: string
  description: string
  achievements: string[]
  techStack: string[]
  impactStats?: ImpactStat[]
  href: string
  isSpotlight?: boolean
}

export function DetailedProjectCard({
  title,
  role,
  period,
  description,
  achievements,
  techStack,
  impactStats,
  href,
  isSpotlight = false,
}: DetailedProjectProps) {
  return (
    <div
      className={`group relative overflow-hidden transition-all duration-500 h-full flex flex-col ${
        isSpotlight
          ? "bg-background-card border border-primary/20 rounded-xl hover:border-primary/50 hover:shadow-glow-md"
          : "bg-background-card/50 border border-border-dim rounded-xl hover:border-border-highlight hover:bg-background-card"
      }`}
    >
      {/* Corner Decorations for Spotlight */}
      {isSpotlight && (
        <>
          <div className="block-corner block-corner-tl" />
          <div className="block-corner block-corner-tr" />
          <div className="block-corner block-corner-bl" />
          <div className="block-corner block-corner-br" />
        </>
      )}

      {/* Hex Pattern Background */}
      <div className="absolute inset-0 hex-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Data Stream Effect for Spotlight */}
      {isSpotlight && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Content Container */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold font-mono mb-3 flex flex-wrap items-center gap-3">
              <Link
                href={href}
                target="_blank"
                className={`flex items-center gap-2 transition-all ${
                  isSpotlight
                    ? "text-white hover:text-primary hover:glow-text"
                    : "text-foreground hover:text-white"
                }`}
              >
                {title}
                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>
              {isSpotlight && (
                <span className="inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-2.5 py-1 rounded border border-primary/30 font-normal">
                  <Zap className="w-3 h-3" />
                  Spotlight
                </span>
              )}
            </h3>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted font-mono">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary/50" />
                {role}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-primary/50" />
                {period}
              </span>
            </div>
          </div>

          {/* Impact Stats */}
          {impactStats && impactStats.length > 0 && (
            <div className="flex gap-4 sm:gap-6">
              {impactStats.map((stat, idx) => (
                <div key={idx} className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-primary font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-6 p-4 bg-black/40 rounded-lg border border-border-default">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-6 flex-grow">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-primary/70" />
            Key Contributions
          </h4>
          <ul className="space-y-2.5">
            {achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="pt-6 border-t border-border-dim">
          <div className="flex items-center gap-2 mb-3">
            <Blocks className="w-3.5 h-3.5 text-primary/60" />
            <span className="text-xs font-bold text-foreground-muted uppercase tracking-widest">
              Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className={`text-xs px-2.5 py-1 rounded font-mono transition-all ${
                  isSpotlight
                    ? "bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 hover:border-primary/40"
                    : "bg-background-elevated text-foreground-muted border border-border-dim hover:text-foreground hover:border-border-highlight"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient for Spotlight */}
      {isSpotlight && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      )}
    </div>
  )
}
