# GitHub Contributions API Server

A lightweight API server that fetches and caches your GitHub contribution data.

## Why?

- Keep your IPFS-hosted portfolio showing fresh GitHub stats
- No need to redeploy to IPFS or pay gas for ENS updates
- Data cached for 24 hours, auto-refreshes every 12 hours

## Setup

### 1. Create GitHub Token

1. Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
2. Create a new token (classic) with `read:user` scope
3. Copy the token

### 2. Run the Server

**Option A: Direct (for testing)**
```bash
GITHUB_TOKEN=your_token bun run github-api.ts
```

**Option B: Systemd (for production)**
```bash
# Edit the service file with your token and paths
nano github-api.service

# Install and start
sudo cp github-api.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable github-api
sudo systemctl start github-api

# Check status
sudo systemctl status github-api
```

**Option C: PM2**
```bash
GITHUB_TOKEN=your_token pm2 start github-api.ts --interpreter bun --name github-api
pm2 save
```

### 3. Configure Reverse Proxy (nginx)

```nginx
server {
    listen 443 ssl;
    server_name api.yourdomain.com;

    location /github {
        proxy_pass http://localhost:3001/api/github;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;

        # CORS (if not handled by the app)
        add_header Access-Control-Allow-Origin *;
    }
}
```

### 4. Update Portfolio

Add to GitHub Secrets:
- `GITHUB_API_URL`: `https://api.yourdomain.com/github`

Or for local testing, create `.env.local`:
```
NEXT_PUBLIC_GITHUB_API_URL=http://localhost:3001/api/github
```

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/github` | Returns GitHub contribution data |
| `/health` | Health check endpoint |

## Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────┐
│  IPFS Website   │────▶│  Your Server     │────▶│  GitHub API │
│  (static)       │     │  (caches 24hrs)  │     │  (GraphQL)  │
└─────────────────┘     └──────────────────┘     └─────────────┘
         │
         ▼
   axatbhardwaj.eth
```

- Static site on IPFS (no changes needed for data updates)
- Server fetches from GitHub, caches locally
- Client fetches from your server on page load
- Fallback to bundled static data if server unavailable
