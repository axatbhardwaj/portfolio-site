import { DetailedProjectProps } from "@/components/detailed-project-card"

export const projects: DetailedProjectProps[] = [
  {
    title: "AI Agent - meme-ooorr",
    role: "Core Contributor",
    period: "Nov 2024 – present",
    description: "A comprehensive AI agent system designed to autonomously create and manage meme-token economies on the blockchain. The system handles everything from content generation to on-chain interactions.",
    achievements: [
      "Contributed to the core AI agent for creating and managing meme-token economies, adding 6 critical features.",
      "Developed and integrated image and video generation pipelines to automate rich content creation for Twitter/X.",
      "Engineered a persistence service capturing 4000+ daily interactions to maintain long-term agent persona continuity.",
      "Resolved over 10 critical reliability bugs within a high-velocity two-month sprint."
    ],
    techStack: ["Python", "AI/ML", "Twitter API", "Video Generation", "Blockchain"],
    impactStats: [
      { label: "Daily Interactions", value: "4k+" },
      { label: "Features Added", value: "6" }
    ],
    href: "https://www.agents.fun/",
    isSpotlight: true
  },
  {
    title: "L3 Rollup on Base",
    role: "Lead Developer",
    period: "Sep 2024 – Nov 2024",
    description: "A custom Layer 3 rollup deployment built on Base (L2) using the OP Stack, designed to optimize transaction costs and data availability for specialized stablecoin applications.",
    achievements: [
      "Led a team of five developers in the end-to-end deployment of an OP Stack Layer 3 rollup.",
      "Developed suite of 6 smart contracts including stablecoins, native tokens, and multi-sig vaults.",
      "Configured OP-proposer, OP-node, and OP-batcher components for optimal performance and cost-efficiency."
    ],
    techStack: ["OP Stack", "Solidity", "Base L2", "Smart Contracts", "Go"],
    impactStats: [
      { label: "Team Size", value: "5" },
      { label: "Contracts", value: "6" }
    ],
    href: "https://lydiacoins.com/",
    isSpotlight: true
  },
  {
    title: "Autonolas Subgraphs Studio",
    role: "Blockchain Engineer",
    period: "Oct 2024 – Present",
    description: "A monorepo architecture for developing, managing, and deploying multiple Autonolas subgraphs across various networks, featuring shared schemas and automated deployment workflows.",
    achievements: [
      "Architected a monorepo structure to efficiently manage multiple subgraphs (Service Registry, Tokenomics).",
      "Developed and maintained all subgraphs present in the repository, ensuring accurate data indexing.",
      "Implemented a 'common' pattern for shared schemas and mappers, significantly reducing code duplication.",
      "Developed interactive CLI scripts for seamless multi-network deployments (Mainnet, L2s)."
    ],
    techStack: ["The Graph", "TypeScript", "GraphQL", "Monorepo", "Node.js"],
    impactStats: [
      { label: "Architecture", value: "Monorepo" },
      { label: "Networks", value: "Multi-chain" }
    ],
    href: "https://github.com/valory-xyz/autonolas-subgraph-studio",
    isSpotlight: true
  },

  {
    title: "EVM APIs",
    role: "Backend Engineer",
    period: "Feb 2023 – May 2023",
    description: "High-performance API service serving historical and real-time Ethereum data from a self-hosted Archive Node.",
    achievements: [
      "Set up and maintained an Ethereum Mainnet Archive Node for 7+ months.",
      "Maintained 95% uptime for critical data infrastructure.",
      "Built custom extraction scripts using Ethers.js and Viem.js."
    ],
    techStack: ["Ethereum", "Node.js", "Ethers.js", "Viem.js", "DevOps"],
    impactStats: [
      { label: "Uptime", value: "95%" },
      { label: "Duration", value: "7mo" }
    ],
    href: "https://infrablok.com/evm-apis"
  },
  {
    title: "Real Estate Tokenisation",
    role: "Smart Contract dev",
    period: "Jan 2022 – Nov 2022",
    description: "A platform for fractionalized real estate investment using a custom token standard.",
    achievements: [
      "Designed and developed a custom token standard tailored for real estate assets.",
      "Architected the blockchain utilization strategy for efficiency.",
      "Deployed 5 core smart contracts for minting, renting, and marketplace logic."
    ],
    techStack: ["Solidity", "ERC-Standards", "Marketplaces", "Polygon"],
    href: "https://www.mogul.club/"
  },
  {
    title: "Node on Demand",
    role: "Full Stack Developer",
    period: "May 2023 – May 2024",
    description: "Automated infrastructure-as-code solution for one-click Ethereum node deployment.",
    achievements: [
      "Developed a one-click solution for deploying Ethereum Mainnet nodes.",
      "Built backend using Express.js and Bash scripting for automated installation.",
      "Simplified complex consensus/execution client setup for end users."
    ],
    techStack: ["Express.js", "Bash", "Docker", "DevOps"],
    href: "https://infrablok.com/node-on-demand"
  },
  {
    title: "NFT MarketPlace",
    role: "Smart Contract Dev",
    period: "Nov 2021 – Jan 2022",
    description: "A customized NFT marketplace logic focusing on complex payout flows.",
    achievements: [
      "Implemented complex royalty and payout flows.",
      "Deployed payout management contracts on Polygon network.",
      "Handled integration testing and contract verification."
    ],
    techStack: ["Solidity", "Polygon", "IPFS", "Hardhat"],
    href: "https://www.mogul.club/"
  }
]

export const spotlightProjects = projects.filter(p => p.isSpotlight)
