# Redesign spec: dark, minimal, senior-engineer portfolio

Status: agreed 2026-09-04. Implementation follows this document.

## Goal

Replace the "terminal noir" cyberpunk theme with a quiet, document-like site.
Near-black background, one narrow column, plain lists, one muted green used
sparingly. Nothing moves except hover colours.

## Non-goals

- Light mode or theme toggle.
- Any decorative animation, glow, glass, grid, orb, scramble, or shine effect.
- Dynamic GitHub data (contribution calendar, repo feed).
- Keyboard shortcuts (site nav h/b/p/r, blog j/k and search).

## Design tokens

| Token          | Value       | Use                                        |
| -------------- | ----------- | ------------------------------------------ |
| `--bg`         | `#0a0a0a`   | Page background                            |
| `--fg`         | `#e5e5e5`   | Body text                                  |
| `--fg-strong`  | `#ffffff`   | Headings, active nav, hovered links        |
| `--fg-muted`   | `#a3a3a3`   | Descriptions, secondary text               |
| `--fg-dim`     | `#808080`   | Dates, labels, inactive nav, stack lines. 5.0:1 on `--bg`; `#737373` was 4.17:1 and failed the Lighthouse accessibility gate |
| `--border`     | `#262626`   | Horizontal rules only                      |
| `--accent`     | `#4ade80`   | Link hover, inline code, active state only |

No cyan, no purple, no warning yellow. No box-shadow anywhere.

Fonts: Geist Sans (body, headings), Geist Mono (dates, stack lines, labels,
code). Both via `next/font/google`. Drop Space Grotesk.

Type scale (px): 13 mono meta, 15 body, 17 h2, 24 h1 on subpages, 28 name on
home. Line-height 1.6 body. Section labels: 13px mono, uppercase, letter-spacing
0.08em, `--fg-dim`.

Layout: single column, `max-width: 42rem` (672px), horizontal padding 1.5rem,
top padding 3rem. Sections separated by 4rem vertical space. No cards, no
borders around content. Rules (`--border`, 1px) only above the footer.

Transitions: `color 150ms` on links. Nothing else.

## Pages

### Layout (all pages)

- Navbar: name "Axat Bhardwaj" left, links `blog · projects · resume` right.
  Text only. Active route white, others `--fg-dim`, hover white. Resume opens
  `/resume.pdf` in a new tab. No logo, no `.eth` subtitle.
- Main: page content.
- Footer: 1px rule, then one row of text links: github, x, linkedin, email,
  cal.com. `--fg-dim`, hover white. Nothing else. Replaces the home-page links
  section.
- Keep `@vercel/analytics`.

### Home `/`

Sections in order:

1. Intro. h1 "Axat Bhardwaj". Below it, one paragraph:
   "Software engineer. Five years building backend systems and smart
   contracts, currently at defi.com." Text link on defi.com. No title chip, no
   location, no availability badge, no YOE pill.
2. Work. Label "Work". Four rows, each: company (link) and role on one line,
   period right-aligned in mono, one-sentence description below in
   `--fg-muted`. Data stays in `page.tsx` as it is today, descriptions trimmed
   to one sentence.
3. Projects. Label "Projects" with a "all projects" link to `/projects`. Four
   rows from `projects.ts` where `featured: true`: title (links to project
   href) and one-line description. Featured set: Stealth Addresses on Base,
   Rust Backend + Azure Infrastructure, AI Agent meme-ooorr, L3 Rollup on
   Base.
4. Writing. Label "Writing" with an "all posts" link to `/blog`. Latest three
   posts: title (link) and date in mono.

### Projects `/projects`

- h1 "Projects", one-line intro.
- All nine projects from `projects.ts`, ordered as in the file. Each entry:
  - Title as link to `href`, period in mono to the right.
  - Description paragraph.
  - Achievements as a plain `ul` with `--fg-muted` text.
  - Stack as one mono line, items joined by " · ", `--fg-dim`.
- Dropped fields on render: `role`, `impactStats`, index numbers, spotlight
  badge. Remove `role` and `impactStats` from the data type and file.
- Rename `isSpotlight` to `featured`; unflag Autonolas Subgraphs Studio.
- No footer blurb about GitHub.

### Blog `/blog`

- h1 "Writing", one-line intro.
- Plain list, newest first: title (link) and date in mono. No search, no
  keyboard hints, no post count.
- Remove the `openGraph.images` entry pointing at the non-existent `/og/home`.

### Post `/blog/[slug]`

- Same column width as everything else (drop `max-w-3xl`).
- "← writing" link back to `/blog`, then h1, date in mono, then article.
- Prose: `@tailwindcss/typography` with `prose-invert`, overridden so links use
  `--accent` on hover and inline code uses `--accent` on a
  `--border`-coloured background. No `prose-lg`. Code blocks have no border.
- Inline links inside running text (intro paragraph, work rows, prose) are
  underlined so they do not rely on colour alone.
- Code blocks: shiki `vesper`, single theme (drop the light variant).
- Mermaid stays, rendered with a dark theme.

### 404

h1 "Not found", one sentence, link home. Same layout.

## Files

### Delete

- `src/components/`: `header`, `scramble-text`, `spotlight-showcase`,
  `project-showcase`, `project-card`, `github-projects`, `github-activity`,
  `links-section`, `blog-section`, `posts`, `posts-list`, `post-item`,
  `section-list`, `detailed-project-card`.
- `src/data/github-contributions.json`, `src/data/projects-fallback.json`.
- `server/` (entire directory).
- `scripts/fetch-stats.sh`, and `scripts/` if nothing else remains besides
  `ipfs`.
- `.github/workflows/update-stats.yml`.
- Dependencies: `use-scramble`, `react-activity-calendar`, `lucide-react` if
  no icon survives (footer and nav are text-only, so it should not).

### Rewrite

- `src/app/globals.css`: tokens, base, prose overrides. Target under 120
  lines.
- `tailwind.config.ts`: fonts and colours mapped to the tokens above. No
  animations, keyframes, shadows, or background images.
- `src/app/layout.tsx`: fonts, navbar, main, footer. No background layers.
- `src/app/page.tsx`, `src/app/projects/page.tsx`, `src/app/blog/page.tsx`,
  `src/app/blog/[slug]/page.tsx`, `src/app/not-found.tsx`.
- `src/data/projects.ts`: field changes above.

### New components (`src/components/`)

- `navbar.tsx` (rewrite in place, server component, active state via
  `usePathname` in a tiny client child or via CSS on `aria-current`).
- `footer.tsx`
- `section.tsx`: label + optional trailing link + children.
- `work-list.tsx`, `project-list.tsx`, `post-list.tsx`: plain row renderers.

### Docs

- `README.md`: remove "Dynamic Data", server, `NEXT_PUBLIC_GITHUB_API_URL`,
  and the stats workflow sections. Update the directory tree.
- `CLAUDE.md` files in root, `src/`, `src/components/`, `src/data/`,
  `scripts/`, `.github/`: drop references to deleted files.

## Delivery

gh stack on `t3code/dark-senior-engineer-redesign`, four PRs, semantic
commits around 200 lines each:

1. `feat(theme): tokens, fonts, layout, navbar, footer`
2. `feat(home): rewrite home page as single column`
3. `feat(pages): rewrite projects, blog, post, 404`
4. `chore: remove github stats pipeline and dead components`

Each PR must pass `bun run build` and `bun run lint`. Visual check on
mobile (375px) and desktop (1280px) before marking ready.

## Acceptance

- No `#00ff41`, `#00d4ff`, `glass`, `glow`, `orb`, `scramble`, or `animate-`
  strings anywhere under `src/`.
- `globals.css` under 120 lines.
- Lighthouse performance and accessibility both 100 on home. Measured against
  a gzip-serving static server (`npx serve out`), mobile with
  `--throttling-method=devtools` and the desktop preset. The default simulated
  mobile run reports 99 because Lantern's LCP estimate charges the Next
  runtime chunks (about 105 KB gzipped, the App Router floor) against LCP even
  though they are async. Client JS is limited to the Next runtime, analytics,
  the nav active-state child, and mermaid on posts.
- Site builds to `/out` and the IPFS deploy workflow is unchanged.

## Portfolio content update (approved 2026-09-05)

- Lead with ownership of defi.com’s multichain wallet core: account creation,
  authentication, deployment, transactions, and recovery.
- Feature Multichain Wallet Core, AI Code-Review Infrastructure, Rust Backend
  + Azure Infrastructure, and AI Agent - meme-ooorr. Keep earlier stealth
  work on the full projects page in past tense, dated through July 2026.
- Add the supplied portrait to the introduction: 144px rounded square,
  framed with CSS, above the text on mobile and beside it on desktop.
- Add Education after Work: Inderprastha Engineering College, B.Tech.,
  Information Technology, 2017–2021. School education remains off the homepage.
- Align roles and dates with the supplied LinkedIn PDF: Valory starts November
  2024, Infrablok ends September 2024, and SoluLab distinguishes the internship
  from full-time work. Preserve the existing visual tokens and static export.
- Stack work/project dates beneath titles on mobile to accommodate longer text.

## Skills section (approved 2026-09-05)

Add Skills between Work and Education as six plain definition-list groups:
EVM & smart contracts, Wallets & identity, Backend & system design,
Blockchain data, AI agents, and Infrastructure. Use the existing strong and
muted text tokens with natural wrapping. No proficiency ratings or badges.

## Final section order (approved 2026-09-05)

Order the homepage as Intro, Work, Projects, Skills, Writing, Education.
Projects precede Skills to foreground delivered work; Education comes last.
Include RAG in the AI agents skill group.

## Official title and founding-team positioning (corrected 2026-09-06)

- Present the official defi.com title first as "Full-Stack Engineer", followed
  by "Founding Engineering Team".
- State that the multichain wallet core, frontend, Rust backend, Azure
  infrastructure, and AI-assisted engineering systems were established from
  scratch.
- Describe Axat as a full-stack engineer on the founding engineering team in
  the homepage introduction and metadata. Do not present "Founding Engineer"
  as the official HR title.
