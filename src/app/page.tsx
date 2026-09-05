import Image from "next/image"
import { Section } from "@/components/section"
import { WorkList, type WorkItem } from "@/components/work-list"
import { ProjectList } from "@/components/project-list"
import { PostList } from "@/components/post-list"
import { featuredProjects } from "@/data/projects"
import { getPosts } from "@/lib/blog"

const skills = [
  {
    area: "EVM & smart contracts",
    description: "Solidity, token standards, account abstraction, modular accounts",
  },
  {
    area: "Wallets & identity",
    description: "Passkeys, WebAuthn, multichain smart accounts",
  },
  {
    area: "Backend & system design",
    description: "Rust, TypeScript, Python, APIs, PostgreSQL, Redis",
  },
  {
    area: "Blockchain data",
    description: "The Graph, GraphQL, Ponder, event indexing",
  },
  {
    area: "AI agents",
    description: "Autonomous agents, RAG, tool integration, orchestration, automated review",
  },
  {
    area: "Infrastructure",
    description: "Azure, Docker, OpenTofu, CI/CD, Linux",
  },
]

const work: WorkItem[] = [
  {
    company: "defi.com",
    role: "Smart Contracts and Backend Engineer",
    period: "feb 2026 - present",
    description:
      "Built defi.com’s multichain wallet core, from account creation and authentication to transactions and recovery, alongside AI code-review infrastructure and Rust services.",
    href: "https://defi.com/",
  },
  {
    company: "Valory",
    role: "Software Engineer",
    period: "nov 2024 - feb 2026",
    description:
      "Core contributor to the meme-ooorr agent framework and maintainer of subgraphs across 8+ networks.",
    href: "https://www.valory.xyz/",
  },
  {
    company: "Infrablok",
    role: "Software Engineer - Blockchain",
    period: "nov 2022 - sep 2024",
    description:
      "Led blockchain infrastructure for enterprise clients, including an Ethereum archive node and 9 supply-chain contracts.",
    href: "https://infrablok.com/",
  },
  {
    company: "SoluLab",
    role: "Blockchain Developer",
    period: "jun 2021 - nov 2022",
    description:
      "Joined as an intern in June 2021 and became a full-time developer in December; optimised EVM contracts and mentored junior developers.",
    href: "https://www.solulab.com/",
  },
]

export default function HomePage() {
  const posts = getPosts()
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
    .slice(0, 3)

  return (
    <>
      <section className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="h-36 w-36 shrink-0 overflow-hidden rounded-xl">
          <Image
            src="/axat-bhardwaj.jpg"
            alt="Axat Bhardwaj in the mountains"
            width={144}
            height={144}
            priority
            className="h-full w-full origin-[50%_60%] scale-[1.6] object-cover"
          />
        </div>
        <div className="min-w-0">
          <h1 className="text-[28px]">Axat Bhardwaj</h1>
          <p className="mt-3 text-fg-muted">
            Software engineer with 5+ years building backend systems and smart contracts,
            and 2+ years building AI agents. Currently at{" "}
            <a
              href="https://defi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-strong underline decoration-fg-dim underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              defi.com
            </a>
            , working on multichain wallets, passkeys, and Rust services.
          </p>
        </div>
      </section>

      <Section label="Work">
        <WorkList items={work} />
      </Section>

      <Section label="Projects" link={{ label: "all projects", href: "/projects" }}>
        <ProjectList projects={featuredProjects.slice(0, 4)} />
      </Section>

      <Section label="Skills">
        <dl className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.area}>
              <dt className="text-fg-strong">{skill.area}</dt>
              <dd className="mt-1 text-fg-muted">{skill.description}</dd>
            </div>
          ))}
        </dl>
      </Section>


      <Section label="Writing" link={{ label: "all posts", href: "/blog" }}>
        <PostList posts={posts} />
      </Section>

      <Section label="Education">
        <p className="text-fg-strong">Inderprastha Engineering College</p>
        <p className="mt-1 text-fg-muted">B.Tech., Information Technology</p>
        <p className="mt-1 font-mono text-[13px] text-fg-dim">2017 - 2021</p>
      </Section>
    </>
  )
}
