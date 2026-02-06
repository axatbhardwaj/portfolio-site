import type { Metadata } from "next"
import { Geist_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { Analytics } from "@vercel/analytics/react"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://axatbhardwaj.eth.limo"),
  title: {
    default: "Axat Bhardwaj | Blockchain Engineer",
    template: "%s | Axat Bhardwaj",
  },
  description: "Blockchain and Backend Engineer building decentralized systems",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        className={`${geistMono.variable} ${spaceGrotesk.variable} antialiased min-h-screen font-mono bg-[#050508] text-foreground`}
      >
        {/* Main Container */}
        <div className="relative min-h-screen">
          {/* Background layers */}
          <div className="fixed inset-0 pointer-events-none z-0" style={{backgroundImage: "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)", backgroundSize: "48px 48px"}} />
          <div className="fixed top-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none z-0 blur-[40px]" style={{background: "radial-gradient(circle, rgba(0,255,65,0.07) 0%, transparent 65%)", animation: "orbDrift1 25s ease-in-out infinite"}} />
          <div className="fixed bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none z-0 blur-[40px]" style={{background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 65%)", animation: "orbDrift2 30s ease-in-out infinite"}} />
          <div className="fixed top-[50%] left-[40%] w-[300px] h-[300px] rounded-full pointer-events-none z-0 blur-[60px]" style={{background: "radial-gradient(circle, rgba(0,255,65,0.03) 0%, transparent 70%)", animation: "orbDrift3 35s ease-in-out infinite"}} />

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-8">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
