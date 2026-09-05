import type { Metadata } from "next"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Systems I have built: multichain wallets, AI agents, Rust backends, and infrastructure.",
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-2xl">Projects</h1>
      <p className="mt-3 text-fg-muted">
        Systems I have built. What shipped, and what it ran on.
      </p>

      <ul className="mt-12 space-y-12">
        {projects.map((project) => (
          <li key={project.title}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h2 className="text-[17px]">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {project.title}
                </a>
              </h2>
              <span className="shrink-0 font-mono text-[13px] text-fg-dim">{project.period}</span>
            </div>
            <p className="mt-2 text-fg-muted">{project.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-muted marker:text-fg-dim">
              {project.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 font-mono text-[13px] text-fg-dim">{project.techStack.join(" · ")}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
