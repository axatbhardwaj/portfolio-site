import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "var(--bg)",
        fg: {
          DEFAULT: "var(--fg)",
          strong: "var(--fg-strong)",
          muted: "var(--fg-muted)",
          dim: "var(--fg-dim)",
        },
        border: "var(--border)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [typography()],
} satisfies Config
