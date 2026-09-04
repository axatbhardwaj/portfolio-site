"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const active = usePathname()?.startsWith(href)
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`hover:text-fg-strong ${active ? "text-fg-strong" : "text-fg-dim"}`}
    >
      {children}
    </Link>
  )
}
