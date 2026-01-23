# Axat Bhardwaj - Portfolio

Decentralized portfolio website with cyberpunk/blockchain aesthetic. Static site on IPFS with dynamic GitHub data via external API.

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

- **Static Site**: Next.js 15 exported to IPFS, accessed via ENS
- **Dynamic Data**: GitHub contributions fetched from your server at runtime
- **No Redeployments**: Data updates without IPFS/ENS changes

## Stack

| Component        | Technology                          |
| ---------------- | ----------------------------------- |
| Framework        | Next.js 15 (Static Export)          |
| Styling          | Tailwind CSS + CSS Variables        |
| Package Manager  | Bun                                 |
| Language         | TypeScript                          |
| Hosting          | IPFS (Pinata) + ENS                 |
| Dynamic Data API | Bun server (see `server/`)          |
| CI/CD            | GitHub Actions                      |

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build static site
bun run build

# Preview build locally
npx serve@latest out
```

## Deployment

### Static Site (IPFS)

1. Push to `main` branch
2. GitHub Actions builds and uploads to Pinata
3. Update ENS content hash with new IPFS CID (manual, saves gas)

### GitHub API Server

See `server/README.md` for setup instructions.

```bash
# Quick start
cd server
GITHUB_TOKEN=ghp_xxx bun run github-api.ts
```

## Design System

### Theme

- **Primary**: Neon green (`#00ff41`)
- **Background**: Black (`#000000`)
- **Font**: Geist Mono

### Visual Elements

- Corner decorations on cards (block-corner-*)
- Hex pattern overlays on hover
- Glow effects (shadow-glow-sm)
- Gradient borders and accents

## Project Structure

```
├── src/
│   ├── app/           # Next.js pages and layouts
│   ├── components/    # React UI components
│   ├── data/          # Static data (projects, fallback GitHub data)
│   └── lib/           # Utilities (MDX parsing, blog helpers)
├── posts/             # MDX blog posts
├── server/            # GitHub API server for dynamic data
├── public/            # Static assets (favicon, resume)
├── scripts/           # Automation scripts
└── .github/workflows/ # CI/CD pipelines
```

## Key Features

- **IPFS/ENS Native**: Static export with trailing slashes for IPFS compatibility
- **Hybrid Data**: Static fallback + dynamic API for GitHub contributions
- **Cyberpunk UI**: Neon green accents, terminal aesthetics, corner decorations
- **Blog System**: MDX with Shiki syntax highlighting
- **Keyboard Navigation**: [h]ome, [b]log, [p]rojects, [r]esume shortcuts

## Environment Variables

| Variable                       | Where     | Description                    |
| ------------------------------ | --------- | ------------------------------ |
| `NEXT_PUBLIC_GITHUB_API_URL`   | Build     | URL to GitHub API server       |
| `PINATA_JWT`                   | GitHub CI | Pinata API token for IPFS      |
| `GITHUB_TOKEN`                 | Server    | GitHub token for GraphQL API   |
