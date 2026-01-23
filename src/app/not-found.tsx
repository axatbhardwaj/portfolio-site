import Link from "next/link"
import { ArrowLeft, AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="space-y-8 text-center max-w-md">
        {/* ASCII Art */}
        <pre className="font-mono text-primary text-xs sm:text-sm whitespace-pre glow-text">
          {`
  ╔══════════════════════════════╗
  ║                              ║
  ║     ██╗  ██╗ ██████╗ ██╗  ██╗║
  ║     ██║  ██║██╔═████╗██║  ██║║
  ║     ███████║██║██╔██║███████║║
  ║     ╚════██║████╔╝██║╚════██║║
  ║          ██║╚██████╔╝     ██║║
  ║          ╚═╝ ╚═════╝      ╚═╝║
  ║                              ║
  ╠══════════════════════════════╣
  ║  ERROR: PAGE_NOT_FOUND       ║
  ╚══════════════════════════════╝
          `}
        </pre>

        {/* Error Message */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-warning">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-mono text-sm uppercase tracking-wider">
              Route Not Found
            </span>
          </div>
          <p className="text-foreground-muted font-mono text-sm">
            The requested path does not exist on this decentralized node.
          </p>
        </div>

        {/* Action */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-background-card border border-primary/30 rounded-lg text-primary hover:bg-primary/5 hover:border-primary/50 hover:glow-text transition-all font-mono text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          return to home
        </Link>

        {/* Footer */}
        <p className="text-xs text-foreground-muted/50 font-mono">
          <span className="text-primary">&gt;</span> sys.redirect: /
        </p>
      </div>
    </div>
  )
}
