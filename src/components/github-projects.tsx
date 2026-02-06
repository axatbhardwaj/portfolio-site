import { ProjectShowcase } from "./project-showcase"
import fallbackData from "@/data/projects-fallback.json"

export function GitHubProjects() {
  return <ProjectShowcase projects={fallbackData} />
}
