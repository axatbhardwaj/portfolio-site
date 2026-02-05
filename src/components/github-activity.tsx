import { ActivityCalendar } from "react-activity-calendar"
import fallbackData from "@/data/github-contributions.json"
import { Github, Activity, GitCommit } from "lucide-react"
import Link from "next/link"

interface ContributionDay {
  contributionCount: number
  date: string
  contributionLevel: string
}

interface Week {
  contributionDays: ContributionDay[]
}

interface GitHubData {
  totalContributions: number
  weeks: Week[]
}

const levelMap: Record<string, 0 | 1 | 2 | 3 | 4> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

function parseGitHubData(raw: typeof fallbackData): GitHubData {
  return raw.data.user.contributionsCollection.contributionCalendar
}

export function GitHubActivity() {
  const githubData = parseGitHubData(fallbackData)

  // Neon green theme matching the cyberpunk aesthetic
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
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">*</span>
            <h2 className="text-2xl font-bold text-white font-mono">
              contributions
            </h2>
          </div>
          <div className="hidden sm:block flex-1 w-20 h-px bg-gradient-to-r from-border-dim to-transparent" />
        </div>

        {/* GitHub Link */}
        <Link
          href="https://github.com/axatbhardwaj"
          target="_blank"
          className="flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors group font-mono"
        >
          <Github className="w-4 h-4" />
          <span>@axatbhardwaj</span>
          <span className="flex items-center gap-1.5 bg-background-card text-primary px-2.5 py-1 rounded border border-primary/20 text-xs group-hover:border-primary/50 transition-colors">
            <GitCommit className="w-3 h-3" />
            {totalContributions.toLocaleString()}
          </span>
        </Link>
      </div>

      {/* Calendar Container */}
      <div className="relative group">
        {/* Card */}
        <div className="relative p-6 sm:p-8 bg-background-card border border-border-dim rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-glow-sm">
          {/* Corner Decorations */}
          <div className="block-corner block-corner-tl" />
          <div className="block-corner block-corner-tr" />
          <div className="block-corner block-corner-bl" />
          <div className="block-corner block-corner-br" />

          {/* Hex Pattern */}
          <div className="absolute inset-0 hex-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Calendar */}
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
          <div className="relative z-10 flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border-default">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <Activity className="w-3.5 h-3.5 text-primary/70" />
              <span>
                Daily avg:{" "}
                <span className="text-primary">
                  {Math.round(totalContributions / 365)}
                </span>
              </span>
            </div>
            <div className="w-px h-4 bg-border-default" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gray-400">Activity:</span>
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
