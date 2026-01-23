import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // 1. Added to enable static site generation for ENS/IPFS
  output: 'export',

  // Add trailing slash for IPFS compatibility
  trailingSlash: true,

  // Use relative paths for IPFS gateway compatibility
  assetPrefix: './',

  experimental: {
    // These are fine to keep, they won't affect the static build
    // ppr: true,
    // reactCompiler: true,
  },

  // A reminder: these settings bypass safety checks.
  // It's best to fix errors and remove these for a final production site.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 2. Replaced 'remotePatterns' with 'unoptimized: true' for static export.
  // The default Next.js <Image> component needs a server for optimization.
  // 'unoptimized' makes it work in a static-only environment like IPFS.
  images: {
    unoptimized: true,
  },
}

export default nextConfig