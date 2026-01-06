# Axat Bhardwaj - Portfolio

A decentralized, AI-themed portfolio website built with Next.js and Tailwind CSS. Designed for static hosting on IPFS.

## Stack
- **Framework**: Next.js 15 (Static Export)
- **Styling**: Tailwind CSS
- **Package Manager**: Bun
- **Language**: TypeScript

## Getting Started

### Prerequisites
- [Bun](https://bun.sh) installed.

### Installation
```bash
bun install
```

### Development
Run the development server:
```bash
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build & Deploy (IPFS)

This project is configured for `next export` to generate a static site suitable for IPFS.

### Build
Generate the static `out` directory:
```bash
bun run build
```

### Preview Static Build
To preview the static site locally (mimicking IPFS):
```bash
npx serve@latest out
```
Or with Python:
```bash
python3 -m http.server 3000 --directory out
```

### Deployment
Upload the contents of the `out/` directory to your IPFS pinning service (e.g., Pinata).
