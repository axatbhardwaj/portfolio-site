"use client"

import { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#171717",
    primaryTextColor: "#e5e5e5",
    primaryBorderColor: "#404040",
    lineColor: "#737373",
    secondaryColor: "#0f0f0f",
    tertiaryColor: "#171717",
    background: "#0a0a0a",
    mainBkg: "#171717",
    nodeBorder: "#404040",
    clusterBkg: "#0f0f0f",
    edgeLabelBackground: "#0a0a0a",
    textColor: "#e5e5e5",
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
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
      <div className="my-6 font-mono text-[13px] text-fg-muted">
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
