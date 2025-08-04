import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "Valory",
    role: "Blockchain and Backend Engineer",
    period: "jul 2025 - present",
    description: "Bulding autonomous agents for the blockchain , helping team in builing various decentralized agents and create in house subgraphs for indexing the data from OLAS protocol",
    href: "https://www.valory.xyz/",
  },
  {
    title: "Freelancer",
    role: "Blockchain and Backend Engineer",
    period: "oct 2024 - jun 2025",
    description:
      "worked on various projects for clients , helping them in building various Dapps and oracles",
    href: "https://www.ibi.cash/",
  },
  {
    title: "Infrablok",
    role: "Blockchain and Backend Engineer",
    period: "nov 2022 - oct 2024",
    description:
      "Led the design and development of the foundational blockchain infrastructure for enterprise clients, ensuring scalability and robustness Acted as the first point of contact for Blockchain in the organization.",
    href: "https://infrablok.com/",
  },
  {
    title: "Solulab",
    role: "Blockchain Developer",
    period: "jun 2021 - nov 2022",
    description:
      "worked on various projects for clients , helping them in building various Dapps and oracles",
    href: "https://www.solulab.com/",
  },
]

const projectItems = [
  {
    title: "AI Agent - meme-ooorr",
    role: "Blockchain and Backend Engineer",
    period: "Nov 2024 – present",
    description:
      "Contributed to an AI agent for meme-token economies, adding features for content generation and high-volume data storage, and improving system stability.",
    href: "https://www.agents.fun/",
  },
  {
    title: "L3 rollup on Base",
    role: "Lead Developer",
    period: "Sep 2024 – Nov 2024",
    description:
      "Led a team to deploy a Layer 3 rollup on Base, developing smart contracts and configuring the OP-stack for data availability.",
    href: "https://lydiacoins.com/",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <BlogSection />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <LinksSection />
    </>
  )
}
