"use client"

import { useEffect, useState } from "react"
import { ProjectShowcase } from "./project-showcase"
import fallbackData from "@/data/projects-fallback.json"

export interface GitHubProject {
  name: string
  description: string
  url: string
  stars: number
  language: string
  color: string
}

const API_URL = process.env.NEXT_PUBLIC_GITHUB_API_URL
  ? process.env.NEXT_PUBLIC_GITHUB_API_URL.replace("/api/github", "/api/projects")
  : null

export function GitHubProjects() {
  const [projects, setProjects] = useState<GitHubProject[]>(fallbackData)
  const [loading, setLoading] = useState(!!API_URL)

  useEffect(() => {
    if (!API_URL) {
      setLoading(false)
      return
    }

    async function fetchProjects() {
      try {
        const res = await fetch(API_URL!, { next: { revalidate: 3600 } })
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data)
        }
      } catch {
        // Keep fallback data on error
        console.log("Using fallback project data")
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <ProjectShowcase
      projects={projects.map((p) => ({
        name: p.name,
        description: p.description,
        language: p.language,
        stars: p.stars,
        url: p.url,
        color: p.color,
      }))}
    />
  )
}
