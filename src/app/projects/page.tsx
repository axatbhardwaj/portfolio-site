import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { DetailedProjectCard } from "@/components/detailed-project-card"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-primary mb-12 hover:underline group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        back to home
      </Link>
      
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">
          <span className="text-primary">*</span> selected work
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          A deep dive into some of the most complex and impactful systems I've engineered. 
          From Layer 3 rollups to autonomous AI agents.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <DetailedProjectCard key={index} {...project} isSpotlight={true} />
        ))}
      </div>
    </div>
  )
}