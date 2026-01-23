import { ScrambleText } from "@/components/scramble-text"
import { Terminal, Blocks, Hexagon } from "lucide-react"

export function Header() {
  return (
    <header className="relative mb-20 pt-4">
      {/* Main Header Content */}
      <div className="relative">
        {/* Name */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in tracking-tight">
            <ScrambleText text="Axat Bhardwaj" />
            <span className="inline-block ml-2 text-primary">_</span>
          </h1>
        </div>

        {/* Role & Location */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-sm font-mono animate-fade-in-up">
          <span className="text-primary">Blockchain & Backend Developer</span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-400">Delhi, India</span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-400">
            @<a
              href="https://www.valory.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >Valory</a>
          </span>
        </div>

        {/* Bio with Terminal Prompt Style */}
        <div className="relative max-w-2xl animate-fade-in-up">
          <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />
          <p className="text-gray-300 leading-relaxed pl-0 sm:pl-4 text-base">
            Software engineer specializing in{" "}
            <span className="text-white font-medium">blockchain infrastructure</span> and{" "}
            <span className="text-white font-medium">decentralized systems</span>. Building autonomous agents
            and protocol tooling in the Ethereum ecosystem. Passionate about{" "}
            <span className="text-primary font-medium">Web3</span>, cryptography, and pushing the boundaries
            of trustless computation.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-800/50 animate-fade-in-up text-sm font-mono">
          <div className="flex items-center gap-2">
            <Hexagon className="w-4 h-4 text-primary/70" />
            <span className="text-gray-500">Focus:</span>
            <span className="text-gray-300">EVM / L2s</span>
          </div>
          <div className="flex items-center gap-2">
            <Blocks className="w-4 h-4 text-primary/70" />
            <span className="text-gray-500">Stack:</span>
            <span className="text-gray-300">Solidity / Python / JS</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary/70" />
            <span className="text-gray-500">Experience:</span>
            <span className="text-gray-300">4+ years</span>
          </div>
        </div>
      </div>
    </header>
  )
}
