# Axat Bhardwaj - Portfolio

Static portfolio site on IPFS, resolved via ENS. Dark, single-column, minimal. Design constraints live in `docs/redesign-spec.md`.

## Architecture

- **Static Site**: Next.js 15 exported to `/out`, pinned to IPFS, accessed via ENS
- **No runtime data**: everything is in the repo at build time

## Stack

| Component        | Technology                          |
| ---------------- | ----------------------------------- |
| Framework        | Next.js 15 (Static Export)          |
| Styling          | Tailwind CSS + CSS Variables        |
| Package Manager  | Bun                                 |
| Language         | TypeScript                          |
| Hosting          | IPFS (Pinata) + ENS                 |
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

## Design

See `docs/redesign-spec.md`. Tokens are CSS variables in `src/app/globals.css`, mapped to Tailwind in `tailwind.config.ts`.

## Project Structure

```
├── src/
│   ├── app/           # Next.js pages and layouts
│   ├── components/    # React UI components
│   ├── data/          # Static data (projects)
│   └── lib/           # Utilities (MDX parsing, blog helpers)
├── posts/             # MDX blog posts
├── public/            # Static assets (favicon, resume)
├── scripts/           # IPFS publish helpers
├── docs/              # Design spec
└── .github/workflows/ # CI/CD pipelines
```

## Key Features

- **IPFS/ENS Native**: Static export with trailing slashes for IPFS compatibility
- **Blog System**: MDX with Shiki syntax highlighting

## Environment Variables

| Variable                       | Where     | Description                    |
| ------------------------------ | --------- | ------------------------------ |
| `PINATA_JWT`                   | GitHub CI | Pinata API token for IPFS      |
