import { ArrowLeft, Layers, Code2 } from "lucide-react"
import Link from "next/link"
import { DetailedProjectCard } from "@/components/detailed-project-card"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-primary hover:glow-text mb-12 group font-mono text-sm"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        back to home
      </Link>

      {/* Page Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">*</span>
            <h1 className="text-4xl font-bold text-white font-mono">
              selected work
            </h1>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-border-dim to-transparent" />
        </div>

        <p className="text-foreground-muted max-w-2xl leading-relaxed">
          A deep dive into some of the most complex and impactful systems I've
          engineered. From Layer 3 rollups to autonomous AI agents.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border-dim">
          <div className="flex items-center gap-2 text-xs font-mono text-foreground-muted">
            <Layers className="w-3.5 h-3.5 text-primary/60" />
            <span>
              <span className="text-primary">{projects.length}</span> projects
            </span>
          </div>
          <div className="w-px h-4 bg-border-dim" />
          <div className="flex items-center gap-2 text-xs font-mono text-foreground-muted">
            <Code2 className="w-3.5 h-3.5 text-primary/60" />
            <span>
              <span className="text-primary">
                {projects.filter((p) => p.isSpotlight).length}
              </span>{" "}
              spotlight
            </span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <DetailedProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border-dim text-center">
        <p className="text-xs text-foreground-muted font-mono">
          <span className="text-primary">&gt;</span> More projects on{" "}
          <a
            href="https://github.com/axatbhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:glow-text transition-all"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  )
}
