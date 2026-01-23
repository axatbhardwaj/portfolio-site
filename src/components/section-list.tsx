import Link from "next/link"
import { ArrowUpRight, Briefcase } from "lucide-react"

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
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-primary text-lg">*</span>
          <h2 className="text-2xl font-bold text-white font-mono">{title}</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-border-dim to-transparent" />
      </div>

      {/* Items */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            target="_blank"
            className="group block relative"
          >
            <div className="relative p-5 bg-background-card/30 border border-border-dim rounded-lg transition-all duration-300 hover:border-primary/30 hover:bg-background-card/60">
              {/* Timeline Connector */}
              {index < items.length - 1 && (
                <div className="absolute left-8 top-full w-px h-6 bg-gradient-to-b from-border-dim to-transparent" />
              )}

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-background-card border border-border-dim flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <Briefcase className="w-4 h-4 text-foreground-muted group-hover:text-primary transition-colors" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors font-mono flex items-center gap-2">
                      {item.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    {item.period && (
                      <span className="text-xs text-foreground-muted font-mono bg-background-card px-2 py-1 rounded border border-border-dim flex-shrink-0">
                        {item.period}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-primary/80 font-mono mb-2">
                    {item.role}
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
            </div>
          </Link>
        ))}
      </div>

      {/* View All Link */}
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-2 mt-8 text-primary hover:glow-text group font-mono text-sm"
        >
          {viewAllText}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      )}
    </section>
  )
}
