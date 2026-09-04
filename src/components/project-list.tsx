import type { Project } from "@/data/projects"

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="space-y-5">
      {projects.map((project) => (
        <li key={project.title}>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-strong hover:text-accent"
          >
            {project.title}
          </a>
          <p className="mt-1 truncate text-fg-muted">{project.description}</p>
        </li>
      ))}
    </ul>
  )
}
