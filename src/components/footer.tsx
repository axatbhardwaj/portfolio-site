const links = [
  { label: "github", href: "https://github.com/axatbhardwaj" },
  { label: "x", href: "https://x.com/axatbhardwaj" },
  { label: "linkedin", href: "https://www.linkedin.com/in/axatbhardwaj" },
  { label: "email", href: "mailto:axatbhardwaj@gmail.com" },
  { label: "cal.com", href: "https://cal.com/axatbhardwaj" },
]

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border pt-6">
      <ul className="flex flex-wrap gap-5 text-sm">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-fg-dim hover:text-fg-strong"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
