import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { SpotlightShowcase } from "@/components/spotlight-showcase"
import { DetailedProjectCard } from "@/components/detailed-project-card"
import { spotlightProjects } from "@/data/projects"

const workItems: Item[] = [
  {
    title: "Valory",
    role: "Blockchain and Backend Engineer",
    period: "jul 2025 - present",
    description: "Building autonomous agents for the blockchain, helping team in building various decentralized agents and create in house subgraphs for indexing the data from OLAS protocol",
    href: "https://www.valory.xyz/",
  },
  {
    title: "Freelancer",
    role: "Blockchain Engineer",
    period: "oct 2024 - jun 2025",
    description:
      "Worked on various projects for clients, building Dapps and oracles.",
    href: "https://www.ibi.cash/",
  },
  {
    title: "Infrablok",
    role: "Blockchain Engineer",
    period: "nov 2022 - oct 2024",
    description:
      "Led the design and development of the foundational blockchain infrastructure for enterprise clients. Acted as the first point of contact for Blockchain in the organization.",
    href: "https://infrablok.com/",
  },
  {
    title: "Solulab",
    role: "Blockchain Developer",
    period: "jun 2021 - nov 2022",
    description:
      "Worked on various DeFi protocols and NFT marketplaces.",
    href: "https://www.solulab.com/",
  },
]



export default function HomePage() {
  return (
    <div className="space-y-20">
      <Header />
      
      {/* Featured Projects Section - GitHub Showcase */}
      {/* Featured Projects Section - GitHub Showcase */}
      {/* Spotlight Projects Section */}
      <section className="animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-8 flex items-center text-white">
          <span className="text-primary mr-2">*</span> selected work
        </h2>
        <SpotlightShowcase projects={spotlightProjects} />
      </section>

      {/* Featured Projects Section - GitHub Showcase */}
      <section className="animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-8 flex items-center text-white">
          <span className="text-primary mr-2">*</span> latest projects
        </h2>
        
        <ProjectShowcase projects={[
          {
            name: "Subgraph-Sentinel",
            description: "Bun + Grammy Telegram bot that watches The Graph subgraphs for fee regressions, KPI drops, and fetch failures.",
            language: "JavaScript",
            stars: 0,
            url: "https://github.com/axatbhardwaj/Subgraph-Sentinel",
            color: "#f7df1e"
          },
          {
            name: "bodhi",
            description: "Decentralized AI for everyone. A TypeScript-based project exploring decentralized artificial intelligence.",
            language: "TypeScript",
            stars: 0,
            url: "https://github.com/axatbhardwaj/bodhi",
            color: "#3178c6"
          },
          {
            name: "memebase-bot",
            description: "Telegram bot analyzing memebase token contract for game stats (24h). Built with Python.",
            language: "Python",
            stars: 0,
            url: "https://github.com/axatbhardwaj/memebase-game-stats-bot",
            color: "#3572A5"
          },
          {
            name: "Veridian",
            description: "ETHGlobal New Delhi 2025 hackathon project. Built with TypeScript.",
            language: "TypeScript",
            stars: 0,
            url: "https://github.com/axatbhardwaj/Veridian",
            color: "#3178c6"
          },
          {
            name: "Haoshoku",
            description: "Toolkit automating installation of essential dev tools and terminal configs for Linux distributions.",
            language: "JavaScript",
            stars: 0,
            url: "https://github.com/axatbhardwaj/Haoshoku",
            color: "#f7df1e"
          },
          {
            name: "TracePool",
            description: "JS-based tracing tool or utility.",
            language: "JavaScript",
            stars: 0,
            url: "https://github.com/axatbhardwaj/TracePool",
            color: "#f7df1e"
          },
          {
            name: "palworld-server",
            description: "Python package to manage Palworld server instances easily.",
            language: "Python",
            stars: 0,
            url: "https://github.com/axatbhardwaj/palworld-server-launcher",
            color: "#3572A5"
          },
          {
            name: "Ec-recover-exp",
            description: "Experimentation with Elliptic Curve Recovery in Python for signature verification.",
            language: "Python",
            stars: 0,
            url: "https://github.com/axatbhardwaj/Ec-recover-experimentation",
            color: "#3572A5"
          },
          {
            name: "yt-dlp-wrapper",
            description: "Rust wrapper for yt-dlp to download specific video segments. Explores Rust process interactions.",
            language: "Rust",
            stars: 0,
            url: "https://github.com/axatbhardwaj/yt-dlp-wrapper",
            color: "#dea584"
          },
          {
            name: "arbitrage-bot",
            description: "A simple arbitrage bot written in JavaScript.",
            language: "JavaScript",
            stars: 1,
            url: "https://github.com/axatbhardwaj/arbitrage-bot",
            color: "#f7df1e"
          },
          {
            name: "AnimeQuote-oracle",
            description: "Solidity Oracle contract fetching quotes from animechan.io on-chain.",
            language: "Solidity",
            stars: 0,
            url: "https://github.com/axatbhardwaj/AnimeQuote-oracle",
            color: "#363636"
          },
          {
            name: "100xDev-NFT",
            description: "SBT minting using Chainlink DON for verification of cohort members.",
            language: "Solidity",
            stars: 1,
            url: "https://github.com/axatbhardwaj/100xDev-NFT",
            color: "#363636"
          }
        ]} />
      </section>

      <SectionList title="work" items={workItems} />
      
      <BlogSection />
      
      <LinksSection />
    </div>
  )
}
