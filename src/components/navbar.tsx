"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function Navbar() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Don't trigger if any input elements are focused or if event target is an input
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
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  return (
    <nav className="flex items-center justify-between mb-12 text-sm">
      <div className="flex space-x-6">
        <NavLink href="/" shortcut="h" label="home" />
        <NavLink href="/blog" shortcut="b" label="blog" />
        <NavLink href="/projects" shortcut="p" label="projects" />
      </div>
    </nav>
  )
}

function NavLink({ href, shortcut, label }: { href: string; shortcut: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-1 hover:text-primary transition-colors duration-200"
    >
      <span className="text-gray-500 group-hover:text-primary transition-colors duration-200">
        [{shortcut}]
      </span>
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
      </span>
    </Link>
  )
}
