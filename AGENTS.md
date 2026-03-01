# AGENTS.md

## Commands

- **Dev**: `yarn dev`
- **Build**: `yarn build`
- **Lint**: `yarn lint`
- **Format**: `yarn format`
- **Format check**: `yarn format:check`
- No test framework is configured in this project.

## Code Style

- **Language**: TypeScript with React/Next.js 13 (App Router)
- **Formatting**: Prettier — 2-space indent, double quotes, semicolons, 120 char print width, trailing commas (ES5), LF line endings
- **Linting**: ESLint with `next/core-web-vitals` + `prettier/recommended`
- **Imports**: Use `@/` path alias for `src/`; group Next.js/React imports before local imports
- **Types**: Define component prop types inline (`type FooProps = {...}`) or in `src/types/index.ts` using `interface I<Name>` convention
- **Naming**: PascalCase for components and types; camelCase for variables/functions; snake_case for JSON data keys
- **Components**: Functional components only; default export per file; barrel exports via `src/components/index.tsx`
- **Styling**: Tailwind CSS utility classes; use `clsx`/`tailwind-merge` for conditional classes
- **No comments** unless explicitly required
- **Commit messages**: Conventional Commits format (`feat:`, `fix:`, `chore:`, etc.) enforced by commitlint
