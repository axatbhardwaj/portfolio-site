import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "AI Agent - meme-ooorr",
    period: "Nov 2024 – present",
    description: [
      "Contributed to the core AI agent for creating and managing meme-token economies, adding 6 critical features.",
      "Developed and integrated image and video generation into the AI agent to automate rich content creation for Twitter.",
      "Engineered a new service to capture and store 4000+ daily Twitter interactions for persistent AI agent persona management.",
      "Resolved over 10 critical bugs within a two-month sprint, enhancing AI agent reliability and performance.",
    ],
    href: "https://www.agents.fun/",
  },
  {
    title: "L3 rollup on Base",
    period: "Sep 2024 – Nov 2024",
    description: [
      "Developed six smart contracts for stablecoins, native tokens, multi-signature treasuries, and multi-signature vaults.",
      "Led a team of five developers in the development and deployment of a Layer 3 rollup using the OP-stack on Base Layer 2.",
      "Configured rollup parameters for the Layer 3 OP-proposer, OP-node, and OP-batcher for optimal data availability.",
    ],
    href: "https://lydiacoins.com/",
  },
  {
    title: "Real Estate Tokenisation",
    period: "Jan 2022 – Nov 2022",
    description: [
      "Designed and developed a new custom TOKEN standard.",
      "Designed the project flow and efficient blockchain utilization strategy.",
      "Developed 5 smart contracts for token minting, rental management, multi-signature agreements, and a marketplace.",
    ],
    href: "https://www.mogul.club/",
  },
  {
    title: "NFT MarketPlace",
    period: "Nov 2021 – Jan 2022",
    description: [
      "Responsible for implementing the Payout Flow of the NFT marketplace.",
      "Developed & deployed 3 Smart contracts for payout management on Polygon.",
      "Closely involved in the integration and testing of the contracts.",
    ],
    href: "https://www.mogul.club/",
  },
  {
    title: "EVM APIs",
    period: "Feb 2023 – May 2023",
    description: [
      "Set up and maintained an Ethereum mainnet Archive Node for over 7 months with 95% uptime.",
      "Developed scripts to fetch relevant data from the ETH Node to serve APIs using Ethers.js and Viem.js.",
    ],
    href: "https://infrablok.com/evm-apis",
  },
  {
    title: "Node on Demand",
    period: "May 2023 – May 2024",
    description: [
      "Developed a one-click solution for deploying Ethereum Mainnet nodes using express.js and Bash.",
      "Designed and developed the backend application for installing and launching execution and consensus clients.",
    ],
    href: "https://infrablok.com/node-on-demand",
  },
]

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-accent mb-8 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        back to home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-white">all projects</h1>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-white mb-2">
              <Link
                href={project.href}
                target="_blank"
                className="hover:text-accent transition-colors duration-200"
              >
                {project.title}
              </Link>
            </h2>
            <p className="text-gray-400 mb-4">{project.period}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
} 