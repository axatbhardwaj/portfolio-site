/**
 * GitHub API Server
 *
 * Run with: bun run server/github-api.ts
 *
 * Environment variables:
 *   GITHUB_TOKEN - Your GitHub personal access token
 *   PORT - Server port (default: 3456)
 *
 * Endpoints:
 *   /api/github   - Contribution calendar data
 *   /api/projects - Pinned repositories
 *   /health       - Health check
 *
 * The server caches data for 24 hours and refreshes automatically.
 */

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const PORT = parseInt(process.env.PORT || "3456")
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 hours in ms
const GITHUB_USERNAME = "axatbhardwaj"

if (!GITHUB_TOKEN) {
  console.error("Error: GITHUB_TOKEN environment variable is required")
  console.error("Create a token at: https://github.com/settings/tokens")
  console.error("Required scope: read:user")
  process.exit(1)
}

interface CachedData {
  data: unknown
  timestamp: number
}

let contributionsCache: CachedData | null = null
let projectsCache: CachedData | null = null

// Language color mapping
const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Solidity: "#AA6746",
  Rust: "#dea584",
  Go: "#00ADD8",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
}

async function fetchGitHubContributions() {
  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                contributionLevel
              }
            }
          }
        }
      }
    }
  `

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  return response.json()
}

async function fetchGitHubProjects() {
  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              primaryLanguage {
                name
                color
              }
            }
          }
        }
        repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
          nodes {
            name
            description
            url
            stargazerCount
            primaryLanguage {
              name
              color
            }
            updatedAt
          }
        }
      }
    }
  `

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  const result = await response.json()

  // Transform to simpler format
  const pinnedRepos = result.data?.user?.pinnedItems?.nodes || []
  const recentRepos = result.data?.user?.repositories?.nodes || []

  // Use pinned repos if available, otherwise fall back to recent
  const repos = pinnedRepos.length > 0 ? pinnedRepos : recentRepos.slice(0, 6)

  return repos.map((repo: any) => ({
    name: repo.name,
    description: repo.description || "No description",
    url: repo.url,
    stars: repo.stargazerCount,
    language: repo.primaryLanguage?.name || "Unknown",
    color: repo.primaryLanguage?.color || languageColors[repo.primaryLanguage?.name] || "#858585",
  }))
}

async function getContributions() {
  const now = Date.now()

  if (contributionsCache && now - contributionsCache.timestamp < CACHE_TTL) {
    console.log(`[${new Date().toISOString()}] Serving cached contributions`)
    return contributionsCache.data
  }

  console.log(`[${new Date().toISOString()}] Fetching fresh contributions from GitHub`)
  try {
    const data = await fetchGitHubContributions()
    contributionsCache = { data, timestamp: now }
    return data
  } catch (error) {
    console.error("Failed to fetch contributions:", error)
    if (contributionsCache) {
      console.log("Returning stale cached contributions")
      return contributionsCache.data
    }
    throw error
  }
}

async function getProjects() {
  const now = Date.now()

  if (projectsCache && now - projectsCache.timestamp < CACHE_TTL) {
    console.log(`[${new Date().toISOString()}] Serving cached projects`)
    return projectsCache.data
  }

  console.log(`[${new Date().toISOString()}] Fetching fresh projects from GitHub`)
  try {
    const data = await fetchGitHubProjects()
    projectsCache = { data, timestamp: now }
    return data
  } catch (error) {
    console.error("Failed to fetch projects:", error)
    if (projectsCache) {
      console.log("Returning stale cached projects")
      return projectsCache.data
    }
    throw error
  }
}

// Pre-fetch on startup
Promise.all([getContributions(), getProjects()]).then(() => {
  console.log("Initial data fetched and cached")
})

// Refresh cache periodically
setInterval(
  () => {
    console.log("Refreshing caches...")
    getContributions()
    getProjects()
  },
  CACHE_TTL / 2
) // Refresh every 12 hours

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url)

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }

    if (req.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders })
    }

    // Health check
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      })
    }

    // GitHub contributions endpoint
    if (url.pathname === "/api/github") {
      try {
        const data = await getContributions()
        return new Response(JSON.stringify(data), {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600",
          },
        })
      } catch (error) {
        return new Response(
          JSON.stringify({ error: "Failed to fetch GitHub data" }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        )
      }
    }

    // Projects endpoint
    if (url.pathname === "/api/projects") {
      try {
        const data = await getProjects()
        return new Response(JSON.stringify(data), {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600",
          },
        })
      } catch (error) {
        return new Response(
          JSON.stringify({ error: "Failed to fetch projects" }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        )
      }
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders })
  },
})

console.log(`
╔════════════════════════════════════════════════════════════╗
║  GitHub API Server                                         ║
╠════════════════════════════════════════════════════════════╣
║  Contributions: http://localhost:${PORT}/api/github          ║
║  Projects:      http://localhost:${PORT}/api/projects        ║
║  Health:        http://localhost:${PORT}/health              ║
║  Cache:         24 hours (refreshes every 12 hours)        ║
╚════════════════════════════════════════════════════════════╝
`)
