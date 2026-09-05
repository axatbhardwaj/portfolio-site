import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
  adjustFontFallback: false,
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://axatbhardwaj.eth.limo"),
  title: {
    default: "Axat Bhardwaj",
    template: "%s | Axat Bhardwaj",
  },
  description: "Founding engineer at defi.com, building multichain wallets, Rust backends, and AI agents.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Axat Bhardwaj",
    description: "Founding engineer at defi.com, building multichain wallets, Rust backends, and AI agents.",
    url: "https://axatbhardwaj.eth.limo",
    siteName: "Axat Bhardwaj",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  twitter: {
    title: "Axat Bhardwaj",
    card: "summary",
    creator: "@axatbhardwaj",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-bg text-fg font-sans">
        <div className="mx-auto max-w-2xl px-6 pt-12 pb-16">
          <Navbar />
          <main className="mt-16">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
