import Link from "next/link"
import { ArrowUpRight, Calendar, User } from "lucide-react"

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
      className={`group relative p-8 border rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col ${
        isSpotlight 
          ? "bg-gray-900/40 border-primary/30 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(3,252,61,0.15)]" 
          : "bg-gray-900/20 border-gray-800 hover:border-gray-700 hover:bg-gray-900/40"
      }`}
    >
      {/* Background Effect */}
      {isSpotlight && (
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h3 className={`text-2xl font-bold font-mono mb-2 flex items-center gap-2 ${isSpotlight ? "text-white group-hover:text-primary transition-colors" : "text-gray-200"}`}>
            <Link href={href} target="_blank" className="flex items-center gap-2 hover:underline decoration-primary/50 underline-offset-4">
              {title}
              <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
            {isSpotlight && <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">Spotlight</span>}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-mono">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {role}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {period}
            </span>
          </div>
        </div>

        {/* Impact Stats */}
        {impactStats && impactStats.length > 0 && (
          <div className="flex gap-4">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="text-right">
                <div className="text-xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed bg-black/20 p-4 rounded-lg border border-white/5">
        {description}
      </p>

      {/* Achievements */}
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-1 h-1 bg-primary rounded-full" /> 
          Key Contributions
        </h4>
        <ul className="grid grid-cols-1 gap-3">
          {achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 group-hover:bg-primary transition-colors flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-800">
        {techStack.map((tech) => (
          <span 
            key={tech} 
            className={`text-xs px-2.5 py-1 rounded border transition-colors ${
              isSpotlight 
                ? "bg-primary/5 text-primary border-primary/20 hover:bg-primary/10" 
                : "bg-gray-800/50 text-gray-500 border-gray-700 hover:text-gray-300 hover:border-gray-600"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
