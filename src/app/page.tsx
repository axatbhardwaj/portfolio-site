import { Section } from "@/components/section"
import { WorkList, type WorkItem } from "@/components/work-list"
import { ProjectList } from "@/components/project-list"
import { PostList } from "@/components/post-list"
import { featuredProjects } from "@/data/projects"
import { getPosts } from "@/lib/blog"

const work: WorkItem[] = [
  {
    company: "defi.com",
    role: "Blockchain Engineer",
    period: "feb 2026 - present",
    description:
      "Shipped an ERC-5564 stealth-address flow on Base mainnet and ported two Node services to Rust.",
    href: "https://defi.com/",
  },
  {
    company: "Valory",
    role: "Python Engineer",
    period: "oct 2024 - feb 2026",
    description:
      "Core contributor to the meme-ooorr agent framework and maintainer of subgraphs across 8+ networks.",
    href: "https://www.valory.xyz/",
  },
  {
    company: "Infrablok",
    role: "Software Engineer - Blockchain",
    period: "nov 2022 - oct 2024",
    description:
      "Led blockchain infrastructure for enterprise clients, including an Ethereum archive node and 9 supply-chain contracts.",
    href: "https://infrablok.com/",
  },
  {
    company: "Solulab",
    role: "Blockchain Developer",
    period: "jun 2021 - nov 2022",
    description:
      "Optimised EVM contracts to cut gas 40% across 30+ contracts and mentored 11 junior developers.",
    href: "https://www.solulab.com/",
  },
]

export default function HomePage() {
  const posts = getPosts()
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
    .slice(0, 3)

  return (
    <>
      <section>
        <h1 className="text-[28px]">Axat Bhardwaj</h1>
        <p className="mt-3 text-fg-muted">
          Software engineer. Five years building backend systems and smart contracts, currently at{" "}
          <a
            href="https://defi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-strong underline decoration-fg-dim underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            defi.com
          </a>
          .
        </p>
      </section>

      <Section label="Work">
        <WorkList items={work} />
      </Section>

      <Section label="Projects" link={{ label: "all projects", href: "/projects" }}>
        <ProjectList projects={featuredProjects.slice(0, 4)} />
      </Section>

      <Section label="Writing" link={{ label: "all posts", href: "/blog" }}>
        <PostList posts={posts} />
      </Section>
    </>
  )
}
