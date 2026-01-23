# CLAUDE.md

Next.js 15 static portfolio site for IPFS/ENS deployment with dynamic GitHub data via external API.

## Commands

```bash
bun run dev          # Development server (Turbopack)
bun run build        # Build static site to /out
bun run lint         # Run ESLint
npx serve@latest out # Preview static build
```

## Files

| File                 | What                           | When to read                                                          |
| -------------------- | ------------------------------ | --------------------------------------------------------------------- |
| `README.md`          | Architecture, deployment guide | Understanding architecture, deployment process, design decisions      |
| `next.config.ts`     | Static export, IPFS config     | Modifying build output, debugging export issues, adding Next.js flags |
| `tailwind.config.ts` | Theme colors, fonts, animations| Modifying styles, adding design tokens, adjusting theme               |
| `tsconfig.json`      | Path aliases, compiler options | Adding path aliases, modifying TypeScript config                      |
| `package.json`       | Dependencies, scripts          | Adding dependencies, modifying scripts                                |

## Directories

| Directory  | What                               | When to read                                                       |
| ---------- | ---------------------------------- | ------------------------------------------------------------------ |
| `src/`     | Application source code            | Implementing features, modifying components, debugging             |
| `posts/`   | MDX blog posts with frontmatter    | Adding blog posts, modifying post content                          |
| `server/`  | GitHub API server for dynamic data | Setting up data API, deploying server, modifying caching           |
| `scripts/` | GitHub stats automation scripts    | Modifying stats fetching, debugging GitHub API calls               |
| `.github/` | CI/CD workflows                    | Modifying automated workflows, debugging CI, configuring deployment|
| `public/`  | Static assets (favicon, resume)    | Adding static assets, updating resume, modifying public files      |
