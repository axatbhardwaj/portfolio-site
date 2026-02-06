"use client"

import { ActivityCalendar } from "react-activity-calendar"
import fallbackData from "@/data/github-contributions.json"
import { Github, Activity, GitCommit } from "lucide-react"
import Link from "next/link"

const levelMap: Record<string, 0 | 1 | 2 | 3 | 4> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

const neonTheme = {
  light: ["#1a1a1a", "#0d3d1a", "#0f5c20", "#12802a", "#00ff41"],
  dark: [
    "rgba(0, 255, 65, 0.05)",
    "rgba(0, 255, 65, 0.15)",
    "rgba(0, 255, 65, 0.35)",
    "rgba(0, 255, 65, 0.6)",
    "#00ff41",
  ],
}

function parseGitHubData() {
  return fallbackData.data.user.contributionsCollection.contributionCalendar
}

export function GitHubActivity() {
  const githubData = parseGitHubData()

  const calendarData = githubData.weeks.flatMap((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: levelMap[day.contributionLevel] ?? 0,
    }))
  )

  const totalContributions = githubData.totalContributions

  return (
    <section className="animate-fade-in-up">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 rounded-full bg-[#00d4ff]" style={{ boxShadow: "0 0 10px rgba(0,212,255,0.3)" }} />
          <h2 className="text-xl font-bold text-white heading-font tracking-tight">contributions</h2>
        </div>

        {/* GitHub Link */}
        <Link
          href="https://github.com/axatbhardwaj"
          target="_blank"
          className="flex items-center gap-3 text-sm text-foreground-muted hover:text-[#00ff41] transition-colors group font-mono"
        >
          <Github className="w-4 h-4" />
          <span>@axatbhardwaj</span>
          <span className="flex items-center gap-1.5 bg-white/[0.03] text-[#00ff41] px-2.5 py-1 rounded border border-[#00ff41]/15 text-xs group-hover:border-[#00ff41]/50 transition-colors">
            <GitCommit className="w-3 h-3" />
            {totalContributions.toLocaleString()}
          </span>
        </Link>
      </div>

      {/* Calendar Container */}
      <div className="relative group">
        <div className="glass relative p-6 sm:p-8 overflow-hidden">
          <div className="relative z-10 overflow-x-auto hide-scrollbar">
            <div className="min-w-[700px] md:min-w-0 flex justify-center">
              <ActivityCalendar
                data={calendarData}
                theme={neonTheme}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
                colorScheme="dark"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                showWeekdayLabels
              />
            </div>
          </div>

          {/* Stats Row */}
          <div className="relative z-10 flex items-center justify-center gap-6 mt-6 pt-6 border-t border-white/[0.03]">
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#555]">
              <Activity className="w-3.5 h-3.5 text-[#00ff41]/70" />
              <span>
                Daily avg:{" "}
                <span className="text-[#00ff41]">
                  {Math.round(totalContributions / 365)}
                </span>
              </span>
            </div>
            <div className="w-px h-4 bg-white/[0.06]" />
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#555]">Activity:</span>
              <div className="flex gap-1">
                {neonTheme.dark.map((color, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
