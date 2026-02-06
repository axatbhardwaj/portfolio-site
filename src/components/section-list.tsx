import Link from "next/link"
import { ArrowUpRight, Briefcase, ExternalLink } from "lucide-react"

export type Item = {
  title: string
  href: string
  role: string
  period?: string
  description: string
}

type SectionListProps = {
  title: string
  items: Item[]
  viewAllHref?: string
  viewAllText?: string
}

export function SectionList({
  title,
  items,
  viewAllHref,
  viewAllText,
}: SectionListProps) {
  return (
    <section className="mb-16 animate-fade-in-up">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 rounded-full bg-[#00d4ff]" style={{ boxShadow: "0 0 10px rgba(0,212,255,0.3)" }} />
          <h2 className="text-xl font-bold text-white heading-font tracking-tight">{title}</h2>
        </div>
      </div>

      {/* Items */}
      <div className="glass overflow-hidden">
        {items.map((item, index) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-5 px-6 sm:px-8 py-5 transition-all hover:bg-white/[0.015] border-t border-white/[0.03] first:border-0"
          >
            {/* Timeline */}
            <div className="flex flex-col items-center pt-1.5 flex-shrink-0">
              <div className="w-2 h-2 rounded-full border border-[#333] group-hover:border-[#00ff41] group-hover:bg-[#00ff41]/40 transition-all" />
              {index < items.length - 1 && (
                <div className="w-px h-full mt-2 bg-gradient-to-b from-white/[0.06] to-transparent min-h-[40px]" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-1">
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#00ff41] transition-colors heading-font inline-flex items-center gap-2">
                    {item.title}
                    <ExternalLink className="w-3 h-3 text-[#333] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[11px] text-[#00d4ff]/50 mt-0.5">{item.role}</p>
                </div>
                {item.period && (
                  <span className="text-[10px] text-[#333] tracking-wider flex-shrink-0">{item.period}</span>
                )}
              </div>
              <p className="text-[11px] text-[#555] leading-[1.7]">{item.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* View All Link */}
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-2 mt-8 text-[#00ff41] hover:glow-text group font-mono text-sm"
        >
          {viewAllText}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      )}
    </section>
  )
}
