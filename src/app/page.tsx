import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { SpotlightShowcase } from "@/components/spotlight-showcase"
import { GitHubActivity } from "@/components/github-activity"
import { spotlightProjects } from "@/data/projects"

const workItems: Item[] = [
  {
    title: "Valory",
    role: "Python Engineer",
    period: "jul 2025 - present",
    description:
      "Core contributor to meme-ooorr AI agent framework. Built and deployed 10+ subgraphs across 8+ networks. Developed custom Mech tools for on-chain AI task execution.",
    href: "https://www.valory.xyz/",
  },
  {
    title: "Freelancer",
    role: "Sr. Blockchain Engineer",
    period: "oct 2024 - jul 2025",
    description:
      "Led a team of 5 to deploy an L3 rollup on Base using OP-stack. Developed 6 smart contracts for stablecoins, multi-sig vaults. Built backend handling 4,000+ daily transactions.",
    href: "https://www.ibi.cash/",
  },
  {
    title: "Infrablok",
    role: "Software Engineer - Blockchain",
    period: "nov 2022 - oct 2024",
    description:
      "Led blockchain infrastructure for enterprise clients. Maintained Ethereum Archive node with 100% uptime. Developed 9 smart contracts for supply chain management.",
    href: "https://infrablok.com/",
  },
  {
    title: "Solulab",
    role: "Blockchain Developer",
    period: "jun 2021 - nov 2022",
    description:
      "Optimized EVM contracts reducing gas fees by 40%, saving $10,000+ yearly. Worked on 30+ smart contracts. Mentored 11 junior blockchain developers.",
    href: "https://www.solulab.com/",
  },
]

const projects = [
  {
    name: "Subgraph-Sentinel",
    description:
      "Bun + Grammy Telegram bot that watches The Graph subgraphs for fee regressions, KPI drops, and fetch failures.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/axatbhardwaj/Subgraph-Sentinel",
    color: "#f7df1e",
  },
  {
    name: "bodhi",
    description:
      "Decentralized AI for everyone. A TypeScript-based project exploring decentralized artificial intelligence.",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/axatbhardwaj/bodhi",
    color: "#3178c6",
  },
  {
    name: "memebase-bot",
    description:
      "Telegram bot analyzing memebase token contract for game stats (24h). Built with Python.",
    language: "Python",
    stars: 0,
    url: "https://github.com/axatbhardwaj/memebase-game-stats-bot",
    color: "#3572A5",
  },
  {
    name: "Veridian",
    description:
      "ETHGlobal New Delhi 2025 hackathon project. Built with TypeScript.",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/axatbhardwaj/Veridian",
    color: "#3178c6",
  },
  {
    name: "Haoshoku",
    description:
      "Toolkit automating installation of essential dev tools and terminal configs for Linux distributions.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/axatbhardwaj/Haoshoku",
    color: "#f7df1e",
  },
  {
    name: "TracePool",
    description: "JS-based tracing tool or utility.",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/axatbhardwaj/TracePool",
    color: "#f7df1e",
  },
  {
    name: "palworld-server",
    description: "Python package to manage Palworld server instances easily.",
    language: "Python",
    stars: 0,
    url: "https://github.com/axatbhardwaj/palworld-server-launcher",
    color: "#3572A5",
  },
  {
    name: "Ec-recover-exp",
    description:
      "Experimentation with Elliptic Curve Recovery in Python for signature verification.",
    language: "Python",
    stars: 0,
    url: "https://github.com/axatbhardwaj/Ec-recover-experimentation",
    color: "#3572A5",
  },
  {
    name: "yt-dlp-wrapper",
    description:
      "Rust wrapper for yt-dlp to download specific video segments. Explores Rust process interactions.",
    language: "Rust",
    stars: 0,
    url: "https://github.com/axatbhardwaj/yt-dlp-wrapper",
    color: "#dea584",
  },
  {
    name: "arbitrage-bot",
    description: "A simple arbitrage bot written in JavaScript.",
    language: "JavaScript",
    stars: 1,
    url: "https://github.com/axatbhardwaj/arbitrage-bot",
    color: "#f7df1e",
  },
  {
    name: "AnimeQuote-oracle",
    description:
      "Solidity Oracle contract fetching quotes from animechan.io on-chain.",
    language: "Solidity",
    stars: 0,
    url: "https://github.com/axatbhardwaj/AnimeQuote-oracle",
    color: "#00ff41",
  },
  {
    name: "100xDev-NFT",
    description:
      "SBT minting using Chainlink DON for verification of cohort members.",
    language: "Solidity",
    stars: 1,
    url: "https://github.com/axatbhardwaj/100xDev-NFT",
    color: "#00ff41",
  },
]

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Header />

      {/* Spotlight Projects Section */}
      <section className="animate-fade-in-up">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">*</span>
            <h2 className="text-2xl font-bold text-white font-mono">
              selected work
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-border-dim to-transparent" />
        </div>
        <SpotlightShowcase projects={spotlightProjects} />
      </section>

      {/* Latest Projects Section */}
      <section className="animate-fade-in-up">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">*</span>
            <h2 className="text-2xl font-bold text-white font-mono">
              latest projects
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-border-dim to-transparent" />
        </div>
        <ProjectShowcase projects={projects} />
      </section>

      {/* GitHub Contributions */}
      <GitHubActivity />

      {/* Work History */}
      <SectionList title="work" items={workItems} />

      {/* Blog */}
      <BlogSection />

      {/* Links */}
      <LinksSection />
    </div>
  )
}
