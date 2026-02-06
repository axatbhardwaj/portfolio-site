import Link from "next/link"
import { ArrowUpRight, Zap } from "lucide-react"

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
  index?: number
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
  index,
}: DetailedProjectProps) {
  return (
    <div className="glass shine-sweep h-full flex flex-col relative group">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00ff41]/25 via-[#00d4ff]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            {index !== undefined && (
              <div className="text-[9px] text-[#00ff41]/50 tracking-[0.2em] font-bold mb-2">
                {String(index + 1).padStart(2, "0")}
              </div>
            )}

            <h3 className="text-xl sm:text-2xl font-bold mb-3 flex flex-wrap items-center gap-3">
              <Link
                href={href}
                target="_blank"
                className="flex items-center gap-2 transition-all text-white hover:text-[#00ff41] heading-font"
              >
                {title}
                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>
              {isSpotlight && (
                <span className="inline-flex items-center gap-1.5 text-xs bg-[#00ff41]/10 text-[#00ff41] px-2.5 py-1 rounded border border-[#00ff41]/30 font-normal">
                  <Zap className="w-3 h-3" />
                  Spotlight
                </span>
              )}
            </h3>

            <div className="flex items-center gap-2 text-[10px] text-[#555]">
              <span>{role}</span>
              <span className="w-0.5 h-0.5 rounded-full bg-[#333]" />
              <span>{period}</span>
            </div>
          </div>

          {impactStats && impactStats.length > 0 && (
            <div className="flex gap-4 sm:gap-6">
              {impactStats.map((stat, idx) => (
                <div key={idx} className="text-right">
                  <div className="text-lg font-bold text-[#00ff41] heading-font" style={{ textShadow: "0 0 15px rgba(0,255,65,0.15)" }}>
                    {stat.value}
                  </div>
                  <div className="text-[8px] text-[#444] uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6">
          <p className="text-[12px] text-[#666] leading-[1.7]">
            {description}
          </p>
        </div>

        <div className="mb-6 flex-grow">
          <h4 className="text-[9px] font-bold text-[#444] uppercase tracking-[0.2em] mb-4">
            Key Contributions
          </h4>
          <ul className="space-y-2.5">
            {achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[12px] text-[#666] group-hover:text-[#777] transition-colors"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00ff41]/50 group-hover:bg-[#00ff41] transition-colors flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-white/[0.04]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[9px] font-bold text-[#444] uppercase tracking-[0.2em]">
              Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[9px] px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.04] text-[#666] transition-all hover:text-[#888] hover:border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
