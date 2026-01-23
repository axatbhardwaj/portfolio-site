/**
 * Simple GitHub Contributions API Server
 *
 * Run with: bun run server/github-api.ts
 *
 * Environment variables:
 *   GITHUB_TOKEN - Your GitHub personal access token
 *   PORT - Server port (default: 3001)
 *
 * The server caches data for 24 hours and refreshes automatically.
 */

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const PORT = parseInt(process.env.PORT || "3001")
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

let cache: CachedData | null = null

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

async function getContributions() {
  const now = Date.now()

  // Return cached data if valid
  if (cache && now - cache.timestamp < CACHE_TTL) {
    console.log(`[${new Date().toISOString()}] Serving cached data`)
    return cache.data
  }

  // Fetch fresh data
  console.log(`[${new Date().toISOString()}] Fetching fresh data from GitHub`)
  try {
    const data = await fetchGitHubContributions()
    cache = { data, timestamp: now }
    return data
  } catch (error) {
    console.error("Failed to fetch from GitHub:", error)
    // Return stale cache if available
    if (cache) {
      console.log("Returning stale cached data")
      return cache.data
    }
    throw error
  }
}

// Pre-fetch on startup
getContributions().then(() => {
  console.log("Initial data fetched and cached")
})

// Refresh cache periodically
setInterval(
  () => {
    console.log("Refreshing cache...")
    getContributions()
  },
  CACHE_TTL / 2
) // Refresh every 12 hours

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url)

    // CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }

    // Handle CORS preflight
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
    if (url.pathname === "/api/github" || url.pathname === "/") {
      try {
        const data = await getContributions()
        return new Response(JSON.stringify(data), {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600", // Browser cache 1 hour
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

    return new Response("Not Found", { status: 404, headers: corsHeaders })
  },
})

console.log(`
╔════════════════════════════════════════════════════════════╗
║  GitHub Contributions API Server                           ║
╠════════════════════════════════════════════════════════════╣
║  Endpoint: http://localhost:${PORT}/api/github               ║
║  Health:   http://localhost:${PORT}/health                   ║
║  Cache:    24 hours (refreshes every 12 hours)             ║
╚════════════════════════════════════════════════════════════╝
`)
