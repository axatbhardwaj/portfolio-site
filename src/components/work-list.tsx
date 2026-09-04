export type WorkItem = {
  company: string
  role: string
  period: string
  description: string
  href: string
}

export function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={item.company}>
          <div className="flex items-baseline justify-between gap-4">
            <p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-strong underline decoration-fg-dim underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                {item.company}
              </a>
              <span className="text-fg-muted"> · {item.role}</span>
            </p>
            <span className="shrink-0 font-mono text-[13px] text-fg-dim">{item.period}</span>
          </div>
          <p className="mt-1 text-fg-muted">{item.description}</p>
        </li>
      ))}
    </ul>
  )
}
