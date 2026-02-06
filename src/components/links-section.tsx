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
        <div className="w-1.5 h-6 rounded-full bg-[#00ff41]" style={{ boxShadow: "0 0 10px rgba(0,255,65,0.3)" }} />
        <h2 className="text-xl font-bold text-white heading-font tracking-tight">links</h2>
      </div>

      {/* Links Container */}
      <div className="glass p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-all"
              >
                {/* Icon */}
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:border-[#00ff41]/20 group-hover:bg-[#00ff41]/[0.05] transition-all flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-[#555] group-hover:text-[#00ff41] transition-colors" />
                </div>
                {/* Title */}
                <span className="text-[11px] text-[#666] group-hover:text-white transition-colors">{link.title}</span>
              </a>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="glow-line mt-8" />
      <div className="flex items-center justify-between mt-6 text-[10px] text-[#333]">
        <span>Next.js • IPFS • ENS</span>
        <span className="text-[#00ff41]/30 tracking-wider">axatbhardwaj.eth</span>
      </div>
    </section>
  )
}
