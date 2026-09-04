# CLAUDE.md

Next.js 15 static portfolio site for IPFS/ENS deployment. Dark, single-column, minimal; see `docs/redesign-spec.md`.

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
| `tailwind.config.ts` | Fonts and colour tokens        | Modifying styles, adding design tokens                                |
| `tsconfig.json`      | Path aliases, compiler options | Adding path aliases, modifying TypeScript config                      |
| `package.json`       | Dependencies, scripts          | Adding dependencies, modifying scripts                                |

## Directories

| Directory  | What                               | When to read                                                       |
| ---------- | ---------------------------------- | ------------------------------------------------------------------ |
| `src/`     | Application source code            | Implementing features, modifying components, debugging             |
| `docs/`    | Design spec                        | Understanding the visual design and its constraints                |
| `posts/`   | MDX blog posts with frontmatter    | Adding blog posts, modifying post content                          |
| `scripts/` | IPFS publish helpers               | Modifying IPFS publish flow                                        |
| `.github/` | CI/CD workflows                    | Modifying automated workflows, debugging CI, configuring deployment|
| `public/`  | Static assets (favicon, resume)    | Adding static assets, updating resume, modifying public files      |
