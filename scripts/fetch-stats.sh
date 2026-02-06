#!/bin/bash
set -e

CONTRIBUTIONS_FILE="src/data/github-contributions.json"
PROJECTS_FILE="src/data/projects-fallback.json"

echo "Fetching GitHub contribution data..."

gh api graphql -f query='
query {
  user(login: "axatbhardwaj") {
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
}' > "$CONTRIBUTIONS_FILE"

echo "Saved contributions to $CONTRIBUTIONS_FILE"

echo "Fetching GitHub projects..."

gh api graphql -f query='
query {
  user(login: "axatbhardwaj") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          primaryLanguage { name color }
        }
      }
    }
    repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
      nodes {
        name
        description
        url
        stargazerCount
        primaryLanguage { name color }
      }
    }
  }
}' | jq '[
  (if (.data.user.pinnedItems.nodes | length) > 0
   then .data.user.pinnedItems.nodes
   else .data.user.repositories.nodes[:6]
   end)[]
  | {
      name,
      description: (.description // "No description"),
      url,
      stars: .stargazerCount,
      language: (.primaryLanguage.name // "Unknown"),
      color: (.primaryLanguage.color // "#858585")
    }
]' > "$PROJECTS_FILE"

echo "Saved projects to $PROJECTS_FILE"
