import Link from "next/link"
import {
  DetailedProjectProps,
} from "@/components/detailed-project-card"
import { ArrowUpRight, ArrowRight, Layers } from "lucide-react"

export function SpotlightShowcase({
  projects,
}: {
  projects: DetailedProjectProps[]
}) {
  return (
    <div className="grid grid-cols-12 gap-3">
      {projects.map((project, i) => {
        const colSpan = i === 0 ? "col-span-12 lg:col-span-7" : i === 1 ? "col-span-12 lg:col-span-5" : "col-span-12"
        return (
          <a key={i} href={project.href} target="_blank" rel="noopener noreferrer" className={`group ${colSpan}`}>
            <div className="glass shine-sweep p-6 sm:p-7 h-full">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00ff41]/25 via-[#00d4ff]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-[9px] text-[#00ff41]/50 font-bold tracking-[0.2em]">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-base font-bold text-white group-hover:text-[#00ff41] transition-colors heading-font">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#333] group-hover:text-[#00ff41] transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[#555]">
                      <span>{project.role}</span>
                      <span className="w-0.5 h-0.5 rounded-full bg-[#333]" />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  {project.impactStats && project.impactStats.length > 0 && (
                    <div className="flex gap-5">
                      {project.impactStats.map((stat, idx) => (
                        <div key={idx} className="text-right">
                          <div className="text-lg font-bold text-[#00ff41] heading-font" style={{ textShadow: "0 0 15px rgba(0,255,65,0.15)" }}>
                            {stat.value}
                          </div>
                          <div className="text-[8px] text-[#444] uppercase tracking-[0.15em]">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-[12px] text-[#666] leading-[1.7] mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[9px] px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.04] text-[#666] group-hover:text-[#888] group-hover:border-white/[0.08] transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        )
      })}

      <Link href="/projects" className="col-span-12">
        <div className="glass h-full p-8 flex flex-col items-center justify-center text-center group border-dashed hover:border-[#00ff41]/15 transition-all">
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mb-6 group-hover:border-[#00ff41]/30 transition-colors">
              <Layers className="w-8 h-8 text-[#555] group-hover:text-[#00ff41] transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white heading-font">
              View All Projects
            </h3>
            <p className="text-[13px] text-[#666] mb-6 leading-relaxed max-w-md">
              Explore the complete portfolio of work, experiments, and open source contributions.
            </p>
            <div className="flex items-center gap-2 text-[#00ff41] text-sm group-hover:gap-3 transition-all heading-font">
              Explore Archive
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
