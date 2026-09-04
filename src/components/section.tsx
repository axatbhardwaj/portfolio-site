import Link from "next/link"

type SectionProps = {
  label: string
  link?: { label: string; href: string }
  children: React.ReactNode
}

export function Section({ label, link, children }: SectionProps) {
  return (
    <section className="mt-16 first:mt-0">
      <div className="mb-5 flex items-baseline justify-between">
        <h2 className="font-mono text-[13px] uppercase tracking-[0.08em] text-fg-dim font-normal">
          {label}
        </h2>
        {link && (
          <Link href={link.href} className="font-mono text-[13px] text-fg-dim hover:text-fg-strong">
            {link.label}
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}
