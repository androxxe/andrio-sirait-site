# Design Plan — andriosirait.com

## Aesthetic Direction

**Theme: Editorial / Technical Precision**

Clean, high-information-density layout that feels like a well-designed engineering resume — not a flashy portfolio. Confident typography, restrained color usage, sharp grid. The kind of site that communicates "I write clean code" through the design itself.

Inspired by: technical documentation sites, editorial print design, monospace code aesthetics combined with refined sans-serif body type.

---

## Typography

| Role           | Font               | Weight                  |
| -------------- | ------------------ | ----------------------- |
| Display / Name | `DM Serif Display` | 400 (italic for accent) |
| Headings       | `DM Sans`          | 600–700                 |
| Body           | `DM Sans`          | 400–500                 |
| Code / Labels  | `JetBrains Mono`   | 400                     |

- Load via `next/font/google` (remove CSS `@import`)
- Remove current Work Sans CSS import from `globals.css`
- Base size: 16px, line-height: 1.6

---

## Color Palette

```css
:root {
  /* Backgrounds */
  --color-bg: #0f0f0f; /* near-black canvas */
  --color-surface: #1a1a1a; /* sidebar / card surface */
  --color-elevated: #242424; /* hover states, elevated cards */

  /* Text */
  --color-text-primary: #f0ede8; /* warm off-white */
  --color-text-secondary: #a09a91; /* muted warm gray */
  --color-text-tertiary: #5c5650; /* placeholders, disabled */

  /* Accent */
  --color-accent: #e8c547; /* amber/gold — one sharp accent */
  --color-accent-dim: #a8902f; /* dimmed accent for hover */

  /* Borders */
  --color-border: #2a2a2a; /* subtle dividers */
  --color-border-accent: #3a3630; /* warm-tinted border */
}
```

**Rationale:** Dark base communicates focus and precision. Single amber accent (inspired by terminal cursor / IDE highlight colors) instead of the current generic sky blue. Warm-tinted neutrals (not cold grays) to feel human, not sterile.

---

## Layout

### Overall Structure

- **Desktop:** Left sidebar (fixed, ~280px) + right content area (scrollable)
- **Mobile:** Top header with hamburger → drawer nav; content full width

### Sidebar (SidebarProfile)

- Dark `--color-surface` background
- Photo: full-width, no border-radius, subtle gradient fade at bottom
- Name in `DM Serif Display`, role in `JetBrains Mono` with amber color
- Social icons: minimal, line-style, spaced evenly
- Bottom: language switcher (EN | ID) in monospace, subtle

### Navigation (Menu)

- Vertical nav inside sidebar on desktop (not top bar)
- Items: left-aligned, monospace label with `01.` `02.` index prefix
- Active state: amber left border + amber text
- Hover: slight indent + text color shift
- Mobile: horizontal scroll tabs at top (keep current approach but restyled)

### Content Area

- `--color-bg` background
- Generous padding: `48px` desktop, `24px` mobile
- Max content width: `720px` centered within content area

---

## Page Designs

### Home (`/`)

- Remove typewriter effect — replace with stacked text reveal animation (CSS `@keyframes` slide-up with stagger)
- Large display name in `DM Serif Display`
- Role stack as code-block-style list: `[ "Mobile Dev", "Frontend", "Backend" ]`
- Brief bio paragraph below
- Subtle background: faint grid pattern or noise texture

### Profile (`/profile`)

- About Me: two-column table → styled definition list with amber label, value on right
- Education: vertical timeline, cleaner markers (thin amber line, not the current circle icon)

### Resume (`/resume`)

- Work Experience: vertical timeline, company + role clearly separated
  - Company name bold, location in monospace gray
  - Date range in amber monospace
  - Description as readable paragraph
- Skills: grouped by category, tag-style chips
  - Expertise items: amber border + amber text
  - Regular items: muted border + secondary text
- Certifications: card-style with issuer, credential ID, validity dates

### Portfolio (`/portfolio`)

- Left filter sidebar: cleaner tag buttons, amber selected state
- Grid: 2–3 col cards with image thumbnail, tech tags, title
- Card hover: subtle lift (`translateY(-4px)`) + border color shift

### Portfolio Detail (`/portfolio/[slug]`)

- Full-width hero image
- Tech tags row
- Description with clean typography
- Photo gallery: masonry or row layout

---

## Motion & Animation

| Element    | Animation                                 | Timing                   |
| ---------- | ----------------------------------------- | ------------------------ |
| Page enter | `opacity: 0 → 1` + `translateY(12px → 0)` | 300ms ease-out           |
| Home text  | Staggered slide-up per line               | 80ms delay between lines |
| Nav hover  | Border + color transition                 | 150ms                    |
| Card hover | `translateY(-4px)` + border               | 200ms ease               |
| Skill tags | Staggered fade-in on mount                | 30ms delay per tag       |

- Keep `framer-motion` for page transitions
- CSS-only for hover states and static animations
- No scroll-triggered animations (keep it fast and simple)

---

## Component Inventory (to redesign)

```
src/components/
  SidebarProfile/index.tsx    ← full redesign
  Menu.tsx                    ← move inside sidebar, vertical layout
  Template.tsx                ← adjust layout structure
  PageTransition.tsx          ← refine animation values
  Experience.tsx              ← timeline redesign, fix date bug
  Education.tsx               ← timeline redesign
  Skill.tsx                   ← tag chip redesign
  Portfolio.tsx               ← card redesign
  Footer.tsx                  ← minimal, bottom of content area
  typography/Title.tsx        ← new heading style with amber accent line
  NEW: Certification.tsx      ← new component for cert cards
  NEW: LanguageSwitcher.tsx   ← EN | ID toggle
```

---

## Tailwind Config Changes

```js
theme: {
  extend: {
    colors: {
      bg: '#0F0F0F',
      surface: '#1A1A1A',
      elevated: '#242424',
      accent: { DEFAULT: '#E8C547', dim: '#A8902F' },
      text: {
        primary: '#F0EDE8',
        secondary: '#A09A91',
        tertiary: '#5C5650',
      },
      border: { DEFAULT: '#2A2A2A', accent: '#3A3630' },
    },
    fontFamily: {
      display: ['DM Serif Display', 'serif'],
      sans: ['DM Sans', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  }
}
```

---

## Accessibility

- Ensure contrast ratio ≥ 4.5:1 for all text on backgrounds
- `amber (#E8C547)` on `#1A1A1A` = ~8:1 ✓
- `#F0EDE8` on `#0F0F0F` = ~17:1 ✓
- `#A09A91` on `#0F0F0F` = ~5.2:1 ✓
- All interactive elements have visible focus styles
- Language switcher has `aria-label`

---

## Mobile Breakpoints

| Breakpoint     | Layout                                    |
| -------------- | ----------------------------------------- |
| `< 768px`      | Full width, top nav tabs, stacked content |
| `768px–1023px` | Same as mobile but more padding           |
| `≥ 1024px`     | Sidebar + content split                   |
