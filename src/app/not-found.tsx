import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <h1 className="text-2xl">Not found</h1>
      <p className="mt-3 text-fg-muted">There is nothing at this address.</p>
      <Link href="/" className="mt-6 inline-block text-fg-strong hover:text-accent">
        ← home
      </Link>
    </>
  )
}
