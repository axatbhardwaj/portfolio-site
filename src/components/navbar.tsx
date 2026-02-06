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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/resume.pdf") return false
    return pathname?.startsWith(href)
  }

  return (
    <nav className="flex items-center justify-between py-5 mb-6">
      {/* Logo / Brand */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-9 h-9 rounded-xl bg-[#00ff41]/[0.08] border border-[#00ff41]/15 flex items-center justify-center group-hover:border-[#00ff41]/40 transition-all">
          <Hexagon className="w-4 h-4 text-[#00ff41]" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00ff41] status-pulse" style={{ boxShadow: "0 0 6px rgba(0,255,65,0.5)" }} />
        </div>
        <div className="hidden sm:block">
          <div className="text-xs font-bold text-white tracking-wide">axatbhardwaj</div>
          <div className="text-[9px] text-[#444] tracking-wider">.eth</div>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center">
        <div className="flex items-center rounded-xl border border-white/[0.04] bg-white/[0.015] p-1">
          {[
            { label: "home", href: "/" },
            { label: "blog", href: "/blog" },
            { label: "projects", href: "/projects" },
            { label: "resume", href: "/resume.pdf" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href === "/resume.pdf" ? "_blank" : undefined}
              rel={item.href === "/resume.pdf" ? "noopener noreferrer" : undefined}
              className={`px-3.5 py-1.5 rounded-lg text-[11px] transition-all ${
                isActive(item.href)
                  ? "text-white bg-white/[0.05]"
                  : "text-[#666] hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
