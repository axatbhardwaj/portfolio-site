#!/bin/bash
set -e

# Output file path
OUTPUT_FILE="src/data/github-contributions.json"

echo "Fetching GitHub contribution data..."

# Fetch data using gh api with GraphQL
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
}' > "$OUTPUT_FILE"

echo "Data saved to $OUTPUT_FILE"
