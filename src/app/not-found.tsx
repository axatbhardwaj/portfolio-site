import Link from "next/link"
import { ArrowLeft, AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="glass p-8 sm:p-12 max-w-md mx-auto">
        <div className="space-y-8 text-center">
          {/* ASCII Art */}
          <pre className="font-mono text-[#00ff41] text-[10px] sm:text-xs whitespace-pre">
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
            <div className="inline-flex items-center justify-center gap-2 bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/20 rounded-full px-3 py-1">
              <AlertTriangle className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">
                Route Not Found
              </span>
            </div>
            <p className="text-[#555] font-mono text-sm">
              The requested path does not exist on this decentralized node.
            </p>
          </div>

          {/* Action */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 glass px-4 py-2 text-[#00ff41] hover:bg-[#00ff41]/[0.05] hover:border-[#00ff41]/20 transition-all text-sm heading-font group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            return to home
          </Link>

          {/* Footer */}
          <p className="text-[10px] text-[#333] font-mono">
            sys.redirect: /
          </p>
        </div>
      </div>
    </div>
  )
}
