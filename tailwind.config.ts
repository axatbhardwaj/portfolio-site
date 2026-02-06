import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-geist-mono)"],
        display: ["var(--font-space-grotesk)"],
      },
      colors: {
        background: "var(--background)",
        "background-elevated": "var(--background-elevated)",
        "background-card": "var(--background-card)",
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        primary: "var(--color-primary)",
        "primary-dim": "var(--color-primary-dim)",
        "primary-glow": "var(--color-primary-glow)",
        "primary-subtle": "var(--color-primary-subtle)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        warning: "var(--color-warning)",
        "border-dim": "var(--border-dim)",
        "border-default": "var(--border-default)",
        "border-highlight": "var(--border-highlight)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "data-stream": "dataStream 3s linear infinite",
        "status-pulse": "statusPulse 2s ease-in-out infinite",
        "orb-drift-1": "orbDrift1 25s ease-in-out infinite",
        "orb-drift-2": "orbDrift2 30s ease-in-out infinite",
        "orb-drift-3": "orbDrift3 35s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 255, 65, 0.15)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 255, 65, 0.15), 0 0 30px rgba(0, 255, 65, 0.08)" },
        },
        dataStream: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 200%" },
        },
        statusPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        orbDrift1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(-40px, 30px)" },
          "66%": { transform: "translate(20px, -20px)" },
        },
        orbDrift2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(50px, -30px)" },
        },
        orbDrift3: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-30px, 40px)" },
          "75%": { transform: "translate(40px, -20px)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(0, 255, 65, 0.15)",
        "glow-md": "0 0 20px rgba(0, 255, 65, 0.15), 0 0 40px rgba(0, 255, 65, 0.08)",
        "glow-lg": "0 0 30px rgba(0, 255, 65, 0.2), 0 0 60px rgba(0, 255, 65, 0.1)",
        "inner-glow": "inset 0 0 30px rgba(0, 255, 65, 0.08)",
        "glow-line": "0 0 10px rgba(0,255,65,0.3)",
      },
      backgroundImage: {
        "grid-pattern": `
          linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px)
        `,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [typography()],
} satisfies Config
