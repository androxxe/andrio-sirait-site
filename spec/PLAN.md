# Refactor Plan — andriosirait.com

## Overview

Full refactor covering: data/resume update, code quality improvements, SEO, performance optimizations, multi-language support (EN/ID), and visual redesign.

### Key Decisions

- **i18n data translation scope:** UI strings only (nav, labels, section titles). Content in JSON files (experiences, educations) stays English. Translations live in `messages/en.json` and `messages/id.json` only.
- **i18n profile content (`about`, `hobbies`):** Handled via `messages/id.json`, not added as `_id` fields to `profile.json`.
- **OG image:** `next/og` (`ImageResponse`) for dynamic per-page generation. Static pages (Home, Profile, Resume) get a shared template with page title. Portfolio `[slug]` pages get project name + thumbnail.
- **Dark/light mode:** Dark theme only. No toggle, no `prefers-color-scheme` switching. Keeps implementation focused.
- **Core Web Vitals:** Target green LCP, CLS, FID scores. Profile photo converted to `.webp`. Explicit `width`/`height` on all portfolio images.

---

## Phase 1 — Data & Resume Update

**Status:** In Progress

### Data Files

- [x] `profile.json` — updated bio, role (`Full Stack Engineer`), address (`Bekasi, Jawa Barat`)
- [ ] `experiences.json` — one entry per position, plain text description
  - **Senior Software Engineer** @ PT. Mitra Tech Indonesia, Jakarta Selatan (Jan 2024 – Present, Full-Time)
    > Led a small development team using Scrum, owned code review workflow with merge authority to protected branches. Architected a multi-module React Native app consolidating 4 government service modules used by 100+ field officers, integrated ArcGIS and GeoServer for real-time geospatial data capture. Built a PDF processing microservice (Express.js, Ghostscript, MuTool) processing 10K+ documents/month. Developed an E-Sign gateway service processing 10K+ digital signatures. Also maintained PinjamKu mobile (React Native) and web (Next.js) platforms for a fintech client, and revamped FinBOS mobile app in 2 months for 1,000+ users.
  - **Software Engineer** @ PT. Mitra Tech Indonesia, Jakarta Selatan (Nov 2022 – Dec 2023, Full-Time)
    > Contributed to government and fintech client projects as part of the engineering team. Developed and maintained full-stack features across React Native, Next.js, and Express.js, collaborating with senior engineers on GIS integrations and document processing services.
  - **Mobile Engineer** @ PT. Andomus Tech Universe, Jakarta Selatan (Jan 2023 – Apr 2024, Project Based)
    > Developed a React Native mobile app for a political campaign survey platform enabling field teams to collect voter data with a multi-level user hierarchy (Candidate → Campaign Team → Field Coordinator). Integrated GeoJSON-based mapping with heatmap visualization to analyze voter density and identify coverage areas for campaign targeting.
  - **Co-Founder & Technical Lead** @ PT. Agritech Retail Indonesia (WarungSegar), Pekanbaru (Oct 2019 – Nov 2022, Full-Time)
    > Co-founded WarungSegar, an agritech marketplace connecting local farmers to urban consumers — scaling to 15,000+ users and 30,000+ orders. Built the complete technical stack from scratch: customer mobile app, ordering system, inventory management, admin panel, and reporting dashboard. Expanded to offline retail with an integrated POS system. Secured partnerships with Bank Indonesia KPW Riau and PLN Riau, growing the team to 20+ employees.
  - **Full Stack Developer** @ Site Media, Pekanbaru (Apr 2021 – Nov 2022, Freelance)
    > Developed 5+ client projects across web and mobile using Laravel, React, React Native, and Express.js. Built an offline-first mobile app for PT. Tri Bakti Sarimas (palm oil plantation) enabling harvest data recording without network connectivity with automatic sync. Communicated directly with clients to gather requirements and deliver solutions.
- [ ] `educations.json`
  - Universitas Riau — Bachelor of Engineering, Informatics (2016–2021, GPA 3.71, Final Project: Online Thesis Guidance Management System)
  - SMA Plus Taruna Andalan — Senior High School
  - SMP Global Andalan — Junior High School
  - SD Global Andalan — Elementary School
- [ ] `skills.json` — restructure with new categories:
  - Languages: TypeScript, JavaScript, PHP
  - Frontend: React Native, React.js, Next.js, TailwindCSS
  - Backend: NestJS, Express.js, Laravel, CodeIgniter
  - Databases: PostgreSQL, MySQL, Oracle, Redis
  - DevOps: GitHub Actions, GitLab CI, Docker
  - Cloud: Google App Engine, AWS (EC2 & Amplify), Vercel, VPS/VM
  - Testing: Jest, Detox (E2E)
  - Tools: Jira, Sentry, Figma
  - GIS & Mapping: ArcGIS, GeoServer, GeoJSON, Turf.js
- [ ] `technologies.json` — add missing entries: NestJS, Redis, GitHub Actions, Jest, Detox, AWS, Vercel, Google App Engine, ArcGIS, GeoServer, Turf.js, Sentry, Jira
- [ ] `certifications.json` — new file:
  - Senior Programmer — BNSP (Issued Nov 2023, Expires Nov 2026, Credential: TIK 1565 30858 2023)
  - Mobile Programmer — BNSP (Issued Aug 2025, Expires Aug 2028, Credential: ICT 2121 06153 2025)

### Code Changes

- [ ] `data/index.ts` — export `certifications`
- [ ] `types/index.ts` — add `ICertification` interface; update `IExperience` type to include `location` field
- [ ] `Experience.tsx` — fix date display bug (end date incorrectly formats from `start_year`), add `location` field
- [ ] `resume/page.tsx` — add Certifications section below Skills
- [ ] Create `src/components/Certification.tsx` — new component for cert cards

---

## Phase 2 — Code Quality

**Status:** Pending

### Tasks

- [ ] Remove `any` types in `resume/page.tsx` (`skillsData: any`, `item: any`) — derive proper types from `skills.json` shape
- [ ] Fix font conflict — `globals.css` imports Work Sans via Google Fonts CDN, but `layout.tsx` uses Plus Jakarta Sans via `next/font`; remove the `@import` from `globals.css`
- [ ] Replace deprecated `JSX.Element` return type in `SidebarProfile/index.tsx` with `React.ReactElement`
- [ ] Type `groupByTechnologyType` function in `portfolio/page.tsx` — remove all `any`
- [ ] Remove unused `Services.tsx` export from `src/components/index.tsx`
- [ ] Standardize prop type naming — use `interface IFoo` consistently (currently mixed `TFoo` / `IFoo`)
- [ ] Fix `Education.tsx` — `start_year`/`end_year` currently all null, will be populated in Phase 1

---

## Phase 3 — SEO

**Status:** Pending

### Audit Findings

| Issue                                                                                        | Severity |
| -------------------------------------------------------------------------------------------- | -------- |
| All page descriptions are generic (`"Profile X Personal Website"`)                           | High     |
| No `sitemap.xml` — Google doesn't know all pages exist                                       | High     |
| No `robots.txt`                                                                              | Medium   |
| No `canonical` URL — risk of duplicate content (will worsen after i18n adds `/en/` + `/id/`) | High     |
| No structured data (JSON-LD) — missing `Person` schema for rich results / Knowledge Panel    | Medium   |
| Portfolio `[slug]` is fully `"use client"` — slower and less reliable for crawlers           | Medium   |
| No `generateStaticParams` on `portfolio/[slug]` — pages not pre-rendered at build time       | Medium   |
| OG image is just profile photo, not a proper 1200×630 image, same image for all pages        | Low      |
| Keywords outdated — says "Full-stack Developer", missing GIS, NestJS, fintech                | Low      |
| `lang="en"` hardcoded — must be dynamic after i18n                                           | Medium   |

### Tasks

- [ ] Fix all page `metadata` descriptions to be meaningful and unique per page:
  - `profile/layout.tsx` — describe who you are and what visitors find on this page
  - `resume/layout.tsx` — highlight key skills and years of experience
  - `portfolio/layout.tsx` — describe the range of projects
  - `portfolio/[slug]/layout.tsx` — use `portfolio.description` not a generic string
- [ ] Update root layout `keywords` — add: Full Stack Engineer, GIS, NestJS, React Native, fintech, government, Indonesia, Bekasi
- [ ] Add `metadataBase` to root layout `metadata` — required for absolute OG image URLs to resolve correctly
- [ ] Add `alternates.canonical` to root layout metadata
- [ ] Add `src/app/sitemap.ts` — static routes + all portfolio slugs
- [ ] Add `src/app/robots.ts` — allow all, point to sitemap
- [ ] Add JSON-LD `Person` schema to root `layout.tsx`:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andrio Pratama Sirait",
    "url": "https://www.andriosirait.com",
    "jobTitle": "Full Stack Engineer",
    "worksFor": { "@type": "Organization", "name": "PT. Mitra Tech Indonesia" },
    "sameAs": ["linkedin", "github", "instagram"]
  }
  ```
- [ ] Split `portfolio/[slug]/page.tsx` — extract lightbox + photo album into a `PortfolioGallery` client component; make the page itself a Server Component
- [ ] Add `generateStaticParams` to `portfolio/[slug]/layout.tsx` — pre-render all portfolio pages at build time
- [ ] Add `src/app/opengraph-image.tsx` — `next/og` `ImageResponse` for static pages (Home, Profile, Resume, Portfolio) with name + role + page title template
- [ ] Add `src/app/portfolio/[slug]/opengraph-image.tsx` — dynamic OG image per portfolio project using project name + short description
- [ ] `lang` attribute — note to make dynamic in Phase 4 (i18n) when locale segment is added

---

## Phase 4 — i18n (EN / ID)

**Status:** Pending

### Approach

Use **`next-intl`** — best-in-class for Next.js App Router, supports React Server Components natively.

### File Structure

```
src/
  i18n/
    routing.ts        # locales: ['en', 'id'], defaultLocale: 'en'
    request.ts        # next-intl server-side config
  messages/
    en.json
    id.json
  app/
    [locale]/
      layout.tsx      # set lang={locale} on <html>
      page.tsx
      profile/
      resume/
      portfolio/
```

### Tasks

- [ ] Install `next-intl`
- [ ] Set up middleware (`src/middleware.ts`) for locale detection and routing
- [ ] Create `messages/en.json` and `messages/id.json`
- [ ] Migrate all static strings into message files
- [ ] Move all routes under `src/app/[locale]/`
- [ ] Set `lang={locale}` dynamically on `<html>` tag in layout
- [ ] Add `LanguageSwitcher` component (EN | ID toggle) to navigation
- [ ] Update `next.config.js` with `next-intl` plugin
- [ ] Update `sitemap.ts` to include both locale variants of each URL

### Strings to Translate (UI only — content stays English)

- Navigation labels: Home, Profile, Resume, Portfolio
- Section titles: About Me, Work Experience, Skill, Education, Hobbies, Certifications
- Profile bio (`about`) and hobbies text — translated via `messages/id.json`, not stored in `profile.json`
- Profile page table labels (Name, Date of Birth, Phone, Email, Web, Address)
- Resume page: skill category labels, certification labels (Issued, Expires, Credential ID)
- Portfolio: filter sidebar labels, empty state message, proprietary projects disclaimer
- Footer text

---

## Phase 5 — Performance

**Status:** Pending

### Tasks

- [ ] Upgrade Next.js `13.4.3` → `15.x` (13→14 minimal breaking changes; 14→15 async `cookies`/`headers` — not used here)
- [ ] Upgrade `framer-motion` `v10` → `v11` (some API removals, verify usage)
- [ ] Upgrade `react-photo-album` `v2` → verify React 19 compat or pin
- [ ] Remove `"use client"` from `app/page.tsx` — replace `typewriter-effect` with CSS `@keyframes` animation to keep Home a Server Component
- [ ] Replace `qs` dependency with native `URLSearchParams` in `portfolio/page.tsx`
- [ ] Wrap portfolio filter logic in `useMemo`
- [ ] Add `placeholder="blur"` + `blurDataURL` to `next/image` in portfolio cards
- [ ] **Core Web Vitals — LCP:** Convert profile photo `foto-jas-2.png` to `.webp` format; ensure `priority={true}` is set (already done)
- [ ] **Core Web Vitals — CLS:** Add explicit `width` and `height` to all portfolio card images to prevent layout shift during load
- [ ] Evaluate `output: 'standalone'` in `next.config.js` for Docker deployments

---

## Phase 6 — Redesign

**Status:** Pending

> See [DESIGN.md](./DESIGN.md) for full design spec and direction.

### Tasks

- [ ] Update `tailwind.config.js` — new color palette, font families, spacing
- [ ] Update `globals.css` — CSS variables, font loading via `next/font`, remove CDN import
- [ ] Redesign `SidebarProfile` — dark surface, photo treatment, social icons
- [ ] Redesign `Menu` — vertical nav inside sidebar (desktop), horizontal tabs (mobile), monospace index labels
- [ ] Redesign `Template` — layout structure, padding, max-width
- [ ] Redesign `Home` page — CSS staggered text reveal, no typewriter JS dependency
- [ ] Redesign `Profile` page — definition list style for about info, refined education timeline
- [ ] Redesign `Resume` page — timeline, skill chips, certification cards
- [ ] Redesign `Portfolio` page — filter sidebar, card grid, hover states
- [ ] Redesign `Portfolio [slug]` page — hero image, tech tags, photo gallery
- [ ] Redesign `Footer` — minimal, inline with content area
- [ ] Update `PageTransition` — refine animation values
- [ ] Dark theme only — no light mode toggle, no `prefers-color-scheme` switching
- [ ] Verify mobile responsiveness on all pages

---

## Phase 7 — Post-Redesign SEO Verification

**Status:** Pending

### Tasks

- [ ] Verify heading hierarchy (`h1` → `h2` → `h3`) is correct and semantic across all pages after redesign
- [ ] Confirm JSON-LD `Person` schema still renders correctly in page source
- [ ] Test all pages with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Check OG images render correctly with [OpenGraph.xyz](https://www.opengraph.xyz) or similar
- [ ] Submit updated `sitemap.xml` to Google Search Console
- [ ] Verify Vercel deployment config — no extra config needed for `next-intl` routing on Vercel

---

## Execution Order

| Order | Phase                                    | Reason                                                                         |
| ----- | ---------------------------------------- | ------------------------------------------------------------------------------ |
| 1     | Phase 1 — Data                           | No UI risk; establishes correct content foundation                             |
| 2     | Phase 2 — Code Quality                   | Cleans up tech debt before structural changes                                  |
| 3     | Phase 3 — SEO                            | Establish crawlability and structured data before i18n complicates URLs        |
| 4     | Phase 4 — i18n                           | Structural route change; update sitemap for both locales after SEO is in place |
| 5     | Phase 5 — Performance                    | Upgrade deps before redesign touches every file                                |
| 6     | Phase 6 — Redesign                       | Last; builds on stable, clean, upgraded foundation                             |
| 7     | Phase 7 — Post-Redesign SEO Verification | Confirm redesign didn't break semantic structure or structured data            |
