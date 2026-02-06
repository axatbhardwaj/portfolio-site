import { ScrambleText } from "@/components/scramble-text"
import { Hexagon, Code2, Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="mb-20 pt-2">
      <div className="grid grid-cols-12 gap-3">
        {/* Main identity — 8 cols */}
        <div className="col-span-12 lg:col-span-8">
          <div className="glass-glow p-8 sm:p-10 h-full relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00ff41]/30 via-[#00d4ff]/20 to-transparent" />
            <div className="relative z-10">
              {/* Status bar */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] text-[#555] uppercase tracking-[0.2em]">Portfolio</span>
                <div className="h-px flex-1 bg-white/[0.04]" />
                <span className="flex items-center gap-1.5 text-[10px] text-[#00ff41]/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] status-pulse" />
                  Available for work
                </span>
              </div>

              <h1 className="heading-font text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight leading-[1.05]">
                <ScrambleText text="Axat" />
                <br />
                <ScrambleText text="Bhardwaj" /><span className="text-[#00ff41]">_</span>
              </h1>

              <p className="text-sm text-[#00ff41]/80 mb-6 tracking-wide">
                Blockchain & Backend Engineer
              </p>

              <p className="text-[13px] text-[#777] leading-[1.9] max-w-md">
                Building <span className="text-[#ccc]">decentralized infrastructure</span> and{" "}
                <span className="text-[#ccc]">autonomous agents</span> in the Ethereum ecosystem.
                Passionate about cryptography and trustless computation.
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-6">
                <span className="px-3 py-1 rounded-full bg-[#00ff41]/[0.08] text-[#00ff41] text-[10px] border border-[#00ff41]/15 tracking-wide">
                  Delhi, India
                </span>
                <a href="https://www.valory.xyz/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-[#00d4ff]/[0.08] text-[#00d4ff] text-[10px] border border-[#00d4ff]/15 hover:bg-[#00d4ff]/15 transition-all tracking-wide">
                  @Valory
                </a>
                <span className="px-3 py-1 rounded-full bg-white/[0.03] text-[#666] text-[10px] border border-white/[0.05] tracking-wide">
                  4+ years
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — 3 stacked cards */}
        <div className="col-span-12 lg:col-span-4 grid grid-rows-3 gap-3">
          <div className="glass p-5 flex items-center gap-4 lift shine-sweep">
            <div className="w-10 h-10 rounded-xl bg-[#00ff41]/[0.08] border border-[#00ff41]/[0.12] flex items-center justify-center flex-shrink-0">
              <Hexagon className="w-4 h-4 text-[#00ff41]/70" />
            </div>
            <div>
              <div className="text-[9px] text-[#444] uppercase tracking-[0.2em] mb-0.5">Focus</div>
              <div className="text-sm text-white font-medium heading-font">EVM and ZK</div>
            </div>
          </div>

          <div className="glass p-5 flex items-center gap-4 lift shine-sweep">
            <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/[0.08] border border-[#00d4ff]/[0.12] flex items-center justify-center flex-shrink-0">
              <Code2 className="w-4 h-4 text-[#00d4ff]/70" />
            </div>
            <div>
              <div className="text-[9px] text-[#444] uppercase tracking-[0.2em] mb-0.5">Stack</div>
              <div className="text-sm text-white font-medium heading-font">Backend and Smart Contracts</div>
            </div>
          </div>

          <div className="glass p-5 lift shine-sweep">
            <div className="text-[9px] text-[#444] uppercase tracking-[0.2em] mb-3">Quick Links</div>
            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: "https://github.com/axatbhardwaj" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/axatbhardwaj" },
                { icon: Twitter, href: "https://x.com/axatbhardwaj" },
                { icon: Mail, href: "mailto:axatbhardwaj@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center hover:border-[#00ff41]/20 hover:bg-[#00ff41]/[0.05] transition-all">
                  <Icon className="w-3.5 h-3.5 text-[#555] hover:text-[#00ff41] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
