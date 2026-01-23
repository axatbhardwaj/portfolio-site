import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { Analytics } from "@vercel/analytics/react"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://axatbhardwaj.eth.limo"),
  title: {
    default: "Axat Bhardwaj | Blockchain Engineer",
    template: "%s | Axat Bhardwaj",
  },
  description: "Blockchain and Backend Engineer building decentralized systems",
  openGraph: {
    title: "Axat Bhardwaj",
    description: "Blockchain and Backend Engineer building decentralized systems",
    url: "https://axatbhardwaj.eth.limo",
    siteName: "Axat Bhardwaj",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Axat Bhardwaj",
    card: "summary_large_image",
    creator: "@axatbhardwaj",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono bg-background text-foreground`}
      >
        {/* Main Container */}
        <div className="relative min-h-screen">
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
