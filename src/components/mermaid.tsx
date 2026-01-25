"use client"

import { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#1a1a2e",
    primaryTextColor: "#00ff41",
    primaryBorderColor: "#00ff41",
    lineColor: "#00ff41",
    secondaryColor: "#0d0d1a",
    tertiaryColor: "#1a1a2e",
    background: "#0d0d1a",
    mainBkg: "#1a1a2e",
    nodeBorder: "#00ff41",
    clusterBkg: "#0d0d1a",
    edgeLabelBackground: "#0d0d1a",
    textColor: "#e0e0e0",
  },
  flowchart: {
    htmlLabels: true,
    curve: "basis",
  },
})

interface MermaidProps {
  chart: string
}

export function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function renderChart() {
      if (!containerRef.current) return

      try {
        const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`
        const { svg } = await mermaid.render(id, chart)
        setSvg(svg)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to render diagram")
      }
    }

    renderChart()
  }, [chart])

  if (error) {
    return (
      <div className="p-4 border border-red-500/30 rounded-lg bg-red-500/10 text-red-400 font-mono text-sm">
        Mermaid Error: {error}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="my-6 flex justify-center overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
