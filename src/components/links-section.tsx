import Link from "next/link"
import { Mail, Twitter, Github, Linkedin, Calendar, ExternalLink, FileDown } from "lucide-react"

const links = [
  {
    title: "email",
    href: "mailto:axatbhardwaj@gmail.com",
    icon: Mail,
    description: "Get in touch",
  },
  {
    title: "x.com",
    href: "https://x.com/axatbhardwaj",
    icon: Twitter,
    description: "Follow updates",
  },
  {
    title: "github",
    href: "https://github.com/axatbhardwaj",
    icon: Github,
    description: "View code",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/axatbhardwaj",
    icon: Linkedin,
    description: "Connect",
  },
  {
    title: "book a call",
    href: "https://cal.com/axatbhardwaj",
    icon: Calendar,
    description: "Schedule meeting",
  },
  {
    title: "resume",
    href: "/resume.pdf",
    icon: FileDown,
    description: "Download CV",
  },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-primary text-lg">*</span>
          <h2 className="text-2xl font-bold text-white font-mono">links</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-border-dim to-transparent" />
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.title}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              className="group relative p-4 bg-background-card/30 border border-border-dim rounded-lg transition-all duration-300 hover:border-primary/30 hover:bg-background-card/60 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-background-card border border-border-dim flex items-center justify-center mb-3 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                <Icon className="w-4 h-4 text-foreground-muted group-hover:text-primary transition-colors" />
              </div>

              {/* Title */}
              <span className="text-sm font-mono text-foreground-muted group-hover:text-primary transition-colors flex items-center gap-1">
                {link.title}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>

              {/* Description */}
              <span className="text-xs text-gray-500 mt-1 hidden sm:block">
                {link.description}
              </span>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
            </Link>
          )
        })}
      </div>

      {/* Footer Note */}
      <div className="mt-8 pt-8 border-t border-border-default">
        <p className="text-xs text-gray-500 font-mono text-center">
          <span className="text-primary">&gt;</span> Built with Next.js • Deployed on IPFS •{" "}
          <span className="text-primary">axatbhardwaj.eth</span>
        </p>
      </div>
    </section>
  )
}
