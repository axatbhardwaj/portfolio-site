import Link from "next/link"
import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { SpotlightShowcase } from "@/components/spotlight-showcase"
import { GitHubActivity } from "@/components/github-activity"
import { GitHubProjects } from "@/components/github-projects"
import { spotlightProjects } from "@/data/projects"
import { ChevronRight } from "lucide-react"

const workItems: Item[] = [
  {
    title: "defi.com",
    role: "Blockchain Engineer",
    period: "feb 2026 - present",
    description:
      "Shipped stealth-address flow end-to-end on Base mainnet: ERC-5564 scanning, ZeroDev Kernel single-UserOp claim, Aave auto-forward via ERC-7579. Ported passkey-server and fiat-server from TypeScript to Rust/Axum. Provisioned 114-resource Azure staging via OpenTofu.",
    href: "https://defi.com/",
  },
  {
    title: "Valory",
    role: "Python Engineer",
    period: "oct 2024 - feb 2026",
    description:
      "Core contributor to meme-ooorr AI agent framework. Built and deployed 10+ subgraphs across 8+ networks. Developed custom Mech tools for on-chain AI task execution.",
    href: "https://www.valory.xyz/",
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

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Header />

      {/* Spotlight Projects Section */}
      <section className="animate-fade-in-up">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 rounded-full bg-[#00ff41]" style={{ boxShadow: "0 0 10px rgba(0,255,65,0.3)" }} />
            <h2 className="text-xl font-bold text-white heading-font tracking-tight">selected work</h2>
          </div>
          <Link href="/projects" className="flex items-center gap-1.5 text-[11px] text-[#555] hover:text-[#00ff41] transition-colors">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <SpotlightShowcase projects={spotlightProjects} />
      </section>

      {/* Latest Projects Section */}
      <section className="animate-fade-in-up">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 rounded-full bg-[#00ff41]" style={{ boxShadow: "0 0 10px rgba(0,255,65,0.3)" }} />
            <h2 className="text-xl font-bold text-white heading-font tracking-tight">latest projects</h2>
          </div>
          <a href="https://github.com/axatbhardwaj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] text-[#555] hover:text-[#00ff41] transition-colors">
            View all <ChevronRight className="w-3 h-3" />
          </a>
        </div>
        <GitHubProjects />
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
