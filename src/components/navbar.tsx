import Link from "next/link"
import { NavLink } from "@/components/nav-link"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="text-fg-strong font-medium hover:text-accent">
        Axat Bhardwaj
      </Link>
      <ul className="flex items-center gap-5">
        <li>
          <NavLink href="/blog">blog</NavLink>
        </li>
        <li>
          <NavLink href="/projects">projects</NavLink>
        </li>
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-dim hover:text-fg-strong"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  )
}
