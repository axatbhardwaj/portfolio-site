# server/

GitHub contributions API server for dynamic data fetching.

## Files

| File                  | What                                     | When to read                                                    |
| --------------------- | ---------------------------------------- | --------------------------------------------------------------- |
| `README.md`           | Setup guide, architecture docs           | Setting up server, understanding data flow, troubleshooting     |
| `github-api.ts`       | Bun server fetching GitHub contributions | Modifying API logic, caching behavior, adding endpoints         |
| `github-api.service`  | Systemd service configuration            | Deploying to production, configuring auto-start, changing ports |

## Commands

```bash
# Run server locally
GITHUB_TOKEN=ghp_xxx bun run github-api.ts

# Check server health
curl http://localhost:3456/health

# Fetch GitHub data
curl http://localhost:3456/api/github
```
