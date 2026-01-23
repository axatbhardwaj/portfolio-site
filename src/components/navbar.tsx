"use client"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import { Hexagon } from "lucide-react"

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return
      }

      switch (event.key.toLowerCase()) {
        case "h":
          router.push("/")
          break
        case "b":
          router.push("/blog")
          break
        case "p":
          router.push("/projects")
          break
        case "r":
          window.open("/resume.pdf", "_blank")
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  return (
    <nav className="flex items-center justify-between mb-12 py-4 border-b border-border-dim">
      {/* Logo / Brand */}
      <Link
        href="/"
        className="flex items-center gap-2 text-primary hover:glow-text transition-all group"
      >
        <Hexagon className="w-5 h-5 group-hover:animate-pulse" />
        <span className="font-mono text-sm font-bold tracking-wider hidden sm:inline">
          axatbhardwaj.eth
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-1 sm:gap-2 font-mono text-sm">
        <NavLink href="/" shortcut="h" label="home" isActive={pathname === "/"} />
        <span className="text-border-highlight">/</span>
        <NavLink href="/blog" shortcut="b" label="blog" isActive={pathname?.startsWith("/blog")} />
        <span className="text-border-highlight">/</span>
        <NavLink href="/projects" shortcut="p" label="projects" isActive={pathname?.startsWith("/projects")} />
        <span className="text-border-highlight">/</span>
        <NavLink href="/resume.pdf" shortcut="r" label="resume" isExternal />
      </div>
    </nav>
  )
}

function NavLink({
  href,
  shortcut,
  label,
  isActive,
  isExternal
}: {
  href: string
  shortcut: string
  label: string
  isActive?: boolean
  isExternal?: boolean
}) {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group relative flex items-center gap-1.5 px-2 py-1 rounded transition-all duration-200 ${
        isActive
          ? "text-primary bg-primary/5"
          : "text-foreground-muted hover:text-primary hover:bg-primary/5"
      }`}
    >
      <span
        className={`text-xs transition-colors duration-200 ${
          isActive ? "text-primary/60" : "text-foreground-muted/50 group-hover:text-primary/60"
        }`}
      >
        [{shortcut}]
      </span>
      <span className="relative">
        {label}
        {isActive && (
          <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-primary" />
        )}
      </span>
    </Link>
  )
}
