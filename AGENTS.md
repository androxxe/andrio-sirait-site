# AGENTS.md

## Commands

- **Dev**: `pnpm dev`
- **Build**: `pnpm build`
- **Preview**: `pnpm preview`
- **Lint**: `pnpm lint`
- **Format**: `pnpm format`
- **Format check**: `pnpm format:check`
- **Type check**: `pnpm svelte-check --tsconfig ./tsconfig.json`
- No test framework is configured in this project.

## Code Style

- **Language**: TypeScript with Svelte 5 + SvelteKit
- **Svelte version**: Svelte 5 (runes mode: `$state`, `$derived`, `$effect`, `$props`)
- **Formatting**: Prettier — 2-space indent, single quotes, tabs, 120 char print width, no trailing commas
- **Linting**: ESLint with `eslint-plugin-svelte` + `typescript-eslint` + `prettier`
- **Imports**: Use `$lib/` path alias for `src/lib/`; group SvelteKit imports before local imports
- **Types**: Define component prop types inline using `$props()` with TypeScript; shared types in `src/lib/types/index.ts`
- **Naming**: PascalCase for components; camelCase for variables/functions; snake_case for JSON data keys
- **Components**: Svelte 5 components with runes; no default exports needed
- **Styling**: Tailwind CSS v4 utility classes; use `clsx`/`tailwind-merge` for conditional classes
- **No comments** unless explicitly required
- **Commit messages**: Conventional Commits format (`feat:`, `fix:`, `chore:`, etc.) enforced by commitlint

## Project Structure

```
src/
  app.html              # HTML template
  app.css               # Global styles + Tailwind
  routes/               # SvelteKit file-based routing
    +layout.svelte      # Root layout (sidebar + footer)
    +layout.ts          # Prerender config
    +error.svelte       # Error page
    +page.svelte        # Home page
    profile/+page.svelte
    resume/+page.svelte
    portfolio/+page.svelte
    portfolio/[slug]/+page.svelte
    portfolio/[slug]/+page.ts  # Dynamic route entries
  lib/
    components/         # Svelte components
    data/               # JSON data files
    helpers/            # Utility functions
    types/              # TypeScript interfaces
static/                 # Static assets (images, favicon)
legacy/                 # Old Next.js project (preserved for reference)
```

## Key Decisions

- **Static site**: Uses `@sveltejs/adapter-static` with `prerender = true`
- **No API routes**: All data is static JSON
- **Icons**: Inline SVGs for social media (Lucide doesn't have brand icons); `@lucide/svelte` for UI icons
- **Photo gallery**: Custom `PhotoGallery` + `Lightbox` components (no Svelte equivalent for react-photo-album)
- **Typewriter**: `svelte-typewriter` package
- **Analytics**: Umami via environment variables (`VITE_UMAMI_URL`, `VITE_UMAMI_WEBSITE_ID`)
