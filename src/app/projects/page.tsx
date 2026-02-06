import { ArrowLeft, Layers, Code2 } from "lucide-react"
import Link from "next/link"
import { DetailedProjectCard } from "@/components/detailed-project-card"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="py-12 animate-fade-in-up">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#00ff41] text-xs heading-font tracking-wide hover:brightness-125 mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        back to home
      </Link>

      {/* Page Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-6 rounded-full bg-[#00ff41]" style={{ boxShadow: "0 0 10px rgba(0,255,65,0.3)" }} />
          <h1 className="text-3xl sm:text-4xl font-bold text-white heading-font tracking-tight">selected work</h1>
        </div>

        <p className="text-[#666] text-sm leading-relaxed max-w-2xl">
          A deep dive into some of the most complex and impactful systems I've
          engineered. From Layer 3 rollups to autonomous AI agents.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#555]">
            <Layers className="w-3.5 h-3.5 text-[#00ff41]/40" />
            <span>
              <span className="text-[#00ff41]">{projects.length}</span> projects
            </span>
          </div>
          <div className="w-px h-4 bg-white/[0.06]" />
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#555]">
            <Code2 className="w-3.5 h-3.5 text-[#00ff41]/40" />
            <span>
              <span className="text-[#00ff41]">
                {projects.filter((p) => p.isSpotlight).length}
              </span>{" "}
              spotlight
            </span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <DetailedProjectCard key={index} index={index} {...project} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16">
        <div className="glow-line mb-8" />
        <p className="text-[10px] text-[#333] text-center font-mono">
          More projects on{" "}
          <a
            href="https://github.com/axatbhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff41] hover:brightness-125 transition-all"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  )
}
