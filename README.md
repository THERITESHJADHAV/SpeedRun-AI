# SpeedRun AI Platform

![SpeedRun AI](https://speedrun-ai-platform.vercel.app/favicon.svg)

> **Experience Next-Gen AI Platform SpeedRun:** the ultimate AI-driven data automation system. Connect pipelines, transform datasets, and deploy intelligent agents in seconds.

## 🚀 Overview

SpeedRun AI is a state-of-the-art landing page built with extreme performance, Generative Engine Optimization (GEO), and strict architectural constraints. It is designed to be the fastest, most scalable, and heavily optimized front-end experience possible. 

### Core Architectural Mandates
This project was engineered following an unyielding set of technical rules to ensure perfect performance metrics and zero layout thrashing:
1. **Zero External Dependencies:** Completely devoid of heavy runtime animation engines or pre-built UI components (e.g., Shadcn, Radix, Framer Motion).
2. **Zero Global Layout Reflows:** Component states (like Pricing toggles and FAQ accordions) utilize isolated PubSub architecture and direct `.textContent` DOM node mutations to bypass the React Virtual DOM reconciliation process completely.
3. **Pure CSS Hardware Acceleration:** All motion sequences utilize GPU-accelerated CSS Transitions and native keyframes (e.g., `animate-fade-up`, glowing bento-box cursor tracking).

## ✨ Key Features

- **Terminal Velocity Workspace:** A real-time looping terminal simulator displaying active neural pulses and pipeline efficiency.
- **Bento Grid Layouts:** Desktop symmetrical 2x2 grids that gracefully degrade into accessible mobile accordions dynamically.
- **Mouse-Tracking Glow:** Custom radial gradients that track cursor coordinates utilizing native CSS variable mapping (`--mouse-x`, `--mouse-y`).
- **Maximum GEO & SEO Alignment:** Hardcoded statistical citations, precise keyword density targeting ("NextGen", "flow", "automate"), and explicit Q&A schemas specifically structured to be ingested by generative AI summary engines.
- **Perfect Accessibility:** 100% compliant aria-labels, semantic HTML hierarchies, and a robust `sitemap.xml` paired with a strict `robots.txt` configuration.

## 🛠 Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS (Vanilla utilities only)
- **Palette:** 
  - Oceanic Noir (`#172836`)
  - Nocturnal Expedition (`#114C5A`)
  - Arctic (`#F1F6F4`)
  - Forsythia (`#FFC801`)

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/THERITESHJADHAV/SpeedRun-AI.git
cd SpeedRun-AI
```

2. Install the dependencies
```bash
npm install
```

3. Spin up the Vite development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📈 Performance & SEO

- **JSON-LD Schema:** Embedded directly into `index.html` to establish an explicit `Organization`, `WebApplication`, and `FAQPage` graph for search engine crawlers before JS execution.
- **Strict Readability Metrics:** Every single descriptive sentence is meticulously kept under a 15-word limit to maximize programmatic readability scores.
- **Optimized Meta Tags:** Canonical tags, exact-match 148-character descriptions, and robust Open Graph configurations are all baked in.

---
*Engineered for Terminal Velocity.*
