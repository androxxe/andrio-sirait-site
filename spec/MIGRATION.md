# Migration: Next.js → SvelteKit

## Overview

Full migration from Next.js 13.4.3 (React) to SvelteKit with Svelte 5, plus a complete visual redesign. The old Next.js project is preserved in the `legacy/` folder for reference.

## Design Redesign

### Theme: Editorial / Technical Precision

| Before (Next.js) | After (SvelteKit) |
|---|---|
| Sky blue (`primary-*`) + neutral gray | Dark (`#0F0F0F`) + amber accent (`#E8C547`) |
| Plus Jakarta Sans | DM Serif Display (name) + DM Sans (body) + JetBrains Mono (labels) |
| Horizontal nav tabs (top bar) | Vertical sidebar nav with `01.` `02.` index prefix |
| Light gray-50 card with rounded border | Full dark canvas, no outer card |
| Generic photo + blue badge | Full-width hero photo with gradient fade, amber role text |
| `framer-motion` transitions | CSS `opacity + translateY` slide-in |
| `typewriter-effect` | CSS staggered text reveal (code-block style) |
| Card-based skill display | Tag chips — amber border for expertise |
| Table-based About Me | Definition list (`<dl>`) with amber labels |
| Circle timeline markers | Thin amber line markers |
| Slide-up portfolio card description | Dark surface card with subtle lift + amber border hover |

### Color Palette

```
bg:          #0F0F0F  (near-black canvas)
surface:     #1A1A1A  (sidebar / card surface)
elevated:    #242424  (hover states)
accent:      #E8C547  (amber/gold)
accent-dim:  #A8902F  (dimmed accent)
text-primary:   #F0EDE8  (warm off-white)
text-secondary: #A09A91  (muted warm gray)
text-tertiary:  #5C5650  (placeholders)
border:         #2A2A2A  (subtle dividers)
border-accent:  #3A3630  (warm-tinted border)
```

### Layout

- **Desktop:** 280px fixed sidebar + scrollable content area
- **Mobile:** Sidebar collapses to top section, horizontal tabs for nav

## What Changed

### Framework & Runtime

| Before (Next.js) | After (SvelteKit) |
|---|---|
| Next.js 13.4.3 (App Router) | SvelteKit 2.x |
| React 18.2.0 | Svelte 5 |
| `next/image` | Native `<img>` tags |
| `next/link` | Native `<a>` tags |
| `next/font/google` | CSS `@import` from Google Fonts |
| `next/script` | Plain `<script>` in `<svelte:head>` |
| `next/navigation` (`useRouter`, `useSearchParams`) | `$app/navigation` (`goto`), `$app/state` (`page`) |
| `"use client"` directives | Not needed — Svelte components are client by default |

### Routing

| Next.js | SvelteKit |
|---|---|
| `src/app/page.tsx` | `src/routes/+page.svelte` |
| `src/app/layout.tsx` | `src/routes/+layout.svelte` |
| `src/app/profile/page.tsx` | `src/routes/profile/+page.svelte` |
| `src/app/resume/page.tsx` | `src/routes/resume/+page.svelte` |
| `src/app/portfolio/page.tsx` | `src/routes/portfolio/+page.svelte` |
| `src/app/portfolio/[slug]/page.tsx` | `src/routes/portfolio/[slug]/+page.svelte` |
| `src/app/error.tsx` | `src/routes/+error.svelte` |
| `generateMetadata()` in layout | `<svelte:head>` in each page |
| `generateStaticParams()` | `entries()` in `+page.ts` |

### Directory Structure

| Before | After |
|---|---|
| `src/components/` | `src/lib/components/` |
| `src/data/` | `src/lib/data/` |
| `src/helpers/` | `src/lib/helpers/` |
| `src/types/` | `src/lib/types/` |
| `public/` | `static/` |
| `src/app/globals.css` | `src/app.css` |

### Dependency Replacements

| Before (React) | After (Svelte) | Notes |
|---|---|---|
| `framer-motion` | CSS `@keyframes` + Svelte transitions | Built-in, zero-dep |
| `typewriter-effect` | CSS staggered text reveal | Custom, no dependency |
| `react-icons` (FA, MD, Rx) | `@lucide/svelte` + inline SVGs | Lucide for UI icons; inline SVG for brand icons (social media) |
| `react-photo-album` | Custom `PhotoGallery.svelte` | No Svelte equivalent exists |
| `yet-another-react-lightbox` | Custom `Lightbox.svelte` | No Svelte equivalent exists |
| `dayjs` | `dayjs` | Kept as-is (framework-agnostic) |
| `clsx` + `tailwind-merge` | `clsx` + `tailwind-merge` | Kept as-is |
| `qs` | `qs` | Kept as-is |
| `next` | `@sveltejs/kit` + `@sveltejs/adapter-static` | Static site adapter |
| `react` / `react-dom` | `svelte` | Core framework |

### Components Migrated (10 total)

| Component | Changes |
|---|---|
| `SidebarProfile` | Full redesign: dark surface, full-width photo with gradient, name in display font, role in mono + amber, social icons minimal, Menu integrated inside |
| `Menu` | Full redesign: vertical nav with monospace `01.` prefix, active state = amber left border, mobile = horizontal tabs |
| `Template` | Simplified — no longer renders Menu (lives in sidebar now) |
| `Footer` | Minimal, monospace text-tertiary color |
| `PageTransition` | `framer-motion` → CSS `opacity + translateY(12px → 0)` |
| `Portfolio` (card) | Dark surface card, subtle lift hover, amber border on hover, no more slide-up description |
| `Experience` | Dark theme: company bold, position in mono, dates in amber mono, thin amber timeline marker |
| `Education` | Thin amber timeline line, degree in bold, school in mono |
| `Skill` | Tag chips — expertise = amber border + "Expert" badge, regular = muted border |
| `Title` | Amber left accent line (`/` prefix), JetBrains Mono font |

### New Components

| Component | Purpose |
|---|---|
| `PhotoGallery` | Custom photo grid replacing `react-photo-album` |
| `Lightbox` | Custom fullscreen lightbox replacing `yet-another-react-lightbox` |

### Dropped

| Item | Reason |
|---|---|
| `Services` component | Exported but never used on any page |
| `i18n/` and `messages/` directories | Empty, never implemented |
| `calculateImageHeight` helper | Was used by `react-photo-album` for row height calculation; not needed with custom gallery |
| `svelte-typewriter` | Not compatible with Svelte 5; replaced by CSS staggered text reveal |
| `Typewriter.svelte` | Replaced by CSS animation on Home page |

### Tailwind CSS

- Upgraded from Tailwind v3 to **Tailwind v4**
- Config moved from `tailwind.config.js` to CSS-based `@theme` directive in `app.css`
- Color tokens defined as CSS custom properties via `@theme`
- Content paths updated to `src/**`

### Metadata / SEO

- Next.js `metadata` API → `<svelte:head>` in each `+page.svelte`
- Root layout sets global meta tags (robots, OG type, Twitter card)
- Each page sets its own `<title>` and `<meta name="description">`

### Analytics

- Umami analytics loaded via `<script>` in `<svelte:head>` of root layout
- Environment variables: `VITE_UMAMI_URL`, `VITE_UMAMI_WEBSITE_ID` (Vite convention)
- `data-umami-event` attributes preserved on interactive elements

### Prerendering

- All routes prerendered at build time via `export const prerender = true` in `+layout.ts`
- Dynamic `[slug]` route uses `entries()` in `+page.ts` to enumerate all portfolio slugs
- Output: fully static HTML in `build/` directory

## Tooling Changes

| Tool | Before | After |
|---|---|---|
| Package manager | Yarn | pnpm |
| Bundler | Webpack (Next.js) | Vite |
| Linting | ESLint + `eslint-config-next` | ESLint + `eslint-plugin-svelte` + `typescript-eslint` |
| Formatting | Prettier | Prettier + `prettier-plugin-svelte` + `prettier-plugin-tailwindcss` |
| Type checking | `tsc` | `svelte-check` |
| Git hooks | Husky + lint-staged | Husky + lint-staged (updated patterns for `.svelte`) |
| Commits | Commitlint | Commitlint (unchanged) |

## Commands

| Action | Old | New |
|---|---|---|
| Dev server | `yarn dev` (Next.js) | `pnpm dev` (Vite) |
| Build | `yarn build` (Next.js) | `pnpm build` (Vite + adapter-static) |
| Preview | `yarn start` | `pnpm preview` |
| Lint | `yarn lint` | `pnpm lint` |
| Format | `yarn format` | `pnpm format` |
| Type check | (implicit in Next.js) | `pnpm svelte-check --tsconfig ./tsconfig.json` |

## Verification

All checks pass:

- `pnpm build` — static site generated in `build/`
- `pnpm lint` — 0 errors
- `pnpm svelte-check` — 0 errors, 0 warnings

## Legacy

The complete Next.js project is preserved in `legacy/` for reference. It includes all original source code, configs, and dependencies. No changes were made to the legacy code.
