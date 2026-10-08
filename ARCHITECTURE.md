# Fadhel Portfolio — Technical Architecture

## 1. Document Purpose

This document defines the technical architecture and implementation principles for the Fadhel Portfolio.

It describes:

* application structure
* component architecture
* content architecture
* rendering strategy
* styling architecture
* image and font handling
* animation strategy
* accessibility architecture
* SEO architecture
* performance strategy
* dependency policy
* deployment strategy

This document does **not** define:

* product requirements → see `SPEC.md`
* product positioning → see `PRODUCT.md`
* visual tokens → see `DESIGN_SYSTEM.md`
* agent behavior → see `AGENTS.md`
* implementation sequence → see `tasks/PLAN.md`

---

# 2. Technology Stack

## Core

* Next.js
* React
* TypeScript
* App Router
* Tailwind CSS
* Vercel

## Development

* ESLint
* Git
* npm

## Content

* TypeScript-based local content for V1

## Animation

Prefer:

1. CSS transitions
2. CSS animations
3. browser-native APIs
4. animation library only when justified

No animation dependency should be introduced only for decorative effects.

---

# 3. Architectural Principles

## 3.1 Server First

Use React Server Components by default.

A component should become a Client Component only when it genuinely requires:

* browser APIs
* local interactive state
* event handlers
* client-only libraries
* interactive animation logic

Avoid adding:

```tsx
"use client"
```

to large component trees without a concrete reason.

---

## 3.2 Content and Presentation Must Be Separated

Portfolio information should live separately from UI implementation.

Avoid writing large amounts of portfolio copy directly inside visual components.

Preferred:

```text
content/
    projects.ts
    profile.ts
    experience.ts
    technology.ts
```

rather than:

```tsx
<ProjectCard>
  <h2>...</h2>
  <p>...</p>
</ProjectCard>
```

with all content hard-coded inside components.

---

## 3.3 Composition Over Abstraction

Prefer clear composition over excessive abstraction.

Create a component when it:

* represents a meaningful UI unit
* contains independent behavior
* is reused
* improves readability
* represents a stable design-system pattern

Do not create abstractions merely to reduce the number of lines in a file.

Avoid premature components such as:

```text
UniversalCard
GenericSection
BaseComponent
AbstractContainer
SuperButton
```

unless they represent an actual reusable pattern.

---

## 3.4 Semantic HTML First

Use semantic HTML whenever possible.

Examples:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
<h1>
<h2>
<h3>
<a>
<button>
```

Do not recreate native browser behavior with unnecessary JavaScript.

---

# 4. Application Structure

Recommended structure:

```text
fadhel-portfolio/
│
├── .agents/
├── .codex/
├── .impeccable/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── favicon.ico
│   └── ...
│
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   └── SiteFooter.tsx
│   │
│   ├── navigation/
│   │   └── ...
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── Capabilities.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Technology.tsx
│   │   └── Contact.tsx
│   │
│   ├── projects/
│   │   ├── ProjectFeature.tsx
│   │   ├── ProjectItem.tsx
│   │   └── ProjectMedia.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── TextLink.tsx
│   │   ├── Container.tsx
│   │   └── ...
│   │
│   └── motion/
│       └── ...
│
├── content/
│   ├── profile.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── technology.ts
│
├── lib/
│   ├── metadata.ts
│   ├── utils.ts
│   └── ...
│
├── public/
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── tasks/
│   └── PLAN.md
│
├── AGENTS.md
├── PRODUCT.md
├── SPEC.md
├── DESIGN_SYSTEM.md
├── ARCHITECTURE.md
├── package.json
├── next.config.ts
├── tsconfig.json
└── ...
```

### Important

Do not create every directory immediately.

Directories should be introduced when the implementation actually requires them.

The architecture describes the intended direction, not a requirement to create empty folders.

---

# 5. App Router Architecture

The portfolio is a single-page application from the visitor's perspective.

The primary route is:

```text
/
```

implemented by:

```text
app/page.tsx
```

The page should primarily compose sections:

```tsx
export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <SelectedWork />
        <Capabilities />
        <About />
        <Experience />
        <Technology />
        <Contact />
      </main>

      <SiteFooter />
    </>
  )
}
```

The exact composition may evolve as the design develops.

---

# 6. Root Layout

`app/layout.tsx` owns document-level concerns.

Responsibilities include:

* HTML structure
* metadata
* font configuration
* global styles
* global accessibility mechanisms
* providers only when necessary

Do not put page-specific content inside the root layout.

Avoid unnecessary global providers.

---

# 7. Section Architecture

Each major portfolio section should have a clear responsibility.

```text
Hero
    ↓
Identity + Positioning + CTA

SelectedWork
    ↓
Evidence + Projects

Capabilities
    ↓
What Fadhel Can Build

About
    ↓
Person + Working Philosophy

Experience
    ↓
Professional Evidence

Technology
    ↓
Technical Breadth

Contact
    ↓
Conversion

Footer
    ↓
Supporting Information
```

Sections should not duplicate responsibilities.

For example:

* `Technology` should not become another project section.
* `Capabilities` should not repeat the entire project list.
* `About` should not become an exhaustive CV.
* `Hero` should not contain the full biography.

---

# 8. Content Architecture

V1 uses typed local content.

Recommended:

```text
content/profile.ts
content/projects.ts
content/experience.ts
content/technology.ts
```

Example:

```ts
export type Project = {
  slug: string
  title: string
  description: string
  category: string
  role?: string
  technologies: string[]
  image?: string
  href?: string
  repository?: string
  featured?: boolean
}
```

Content objects should contain factual information only.

Presentation-specific values should remain in components.

---

# 9. Project Architecture

Selected Work should be data-driven.

Recommended flow:

```text
content/projects.ts
        ↓
SelectedWork
        ↓
ProjectFeature / ProjectItem
        ↓
ProjectMedia
        ↓
Project metadata / links
```

This allows future expansion without redesigning the entire content model.

---

# 10. Future Project Pages

V1 does not require individual project pages.

The architecture should nevertheless avoid blocking a future route:

```text
/projects/[slug]
```

Potential future structure:

```text
/projects/[slug]/
    overview
    role
    problem
    approach
    solution
    implementation
    visual evidence
    outcome
    links
```

Do not implement this route until it provides meaningful value.

---

# 11. Styling Architecture

Tailwind CSS is the primary styling system.

Use:

* semantic utility classes
* CSS custom properties for global design tokens
* component-level composition
* minimal custom CSS

Avoid scattering arbitrary values throughout the application.

For example, do not repeatedly invent:

```tsx
text-[47px]
mt-[83px]
rounded-[17px]
```

without a design-system reason.

Visual decisions should originate from `DESIGN_SYSTEM.md`.

---

# 12. Design Token Architecture

Global semantic tokens should be implemented using CSS custom properties where practical.

Conceptual example:

```css
:root {
  --background: ...;
  --foreground: ...;
  --muted: ...;
  --surface: ...;
  --surface-subtle: ...;
  --border: ...;
  --accent: ...;
  --accent-foreground: ...;
}
```

Components should consume semantic tokens rather than hard-coded color values.

The source of truth remains:

```text
DESIGN_SYSTEM.md
```

If the design system changes materially, implementation tokens must be updated accordingly.

---

# 13. Typography Architecture

Typography is a structural part of the portfolio.

Font decisions should be centralized.

Potential local font files:

```text
public/fonts/
```

or a supported Next.js font integration.

Use as few font families as necessary.

Each font must have a clear role.

The portfolio should avoid:

* excessive font combinations
* arbitrary weights
* inconsistent tracking
* local one-off typography decisions

The hero identity treatment is a special case.

If the intended `fadhel` identity uses an outline typeface, use a genuine suitable font/type treatment where possible rather than relying on a fragile CSS text-outline approximation.

---

# 14. Image Architecture

Use Next.js image optimization wherever appropriate.

Prefer:

```tsx
<Image />
```

over raw image elements for content imagery.

Requirements:

* meaningful dimensions
* appropriate `sizes`
* optimized source assets
* appropriate loading behavior
* meaningful alt text
* decorative imagery marked appropriately

The hero portrait is a primary visual asset and should receive special attention for:

* resolution
* crop
* transparency/background treatment
* loading priority
* mobile behavior

Do not ship unnecessarily large source files.

---

# 15. Motion Architecture

Motion must remain independent from core content whenever possible.

Preferred order:

### Level 1 — CSS

Use CSS for:

* hover transitions
* opacity
* transform
* simple entrance effects
* focus transitions

### Level 2 — Browser APIs

Use native browser APIs when appropriate.

### Level 3 — Animation Library

Introduce an animation library only when it provides meaningful value that cannot reasonably be achieved with CSS/native behavior.

Animation should not force an entire section to become a Client Component unnecessarily.

---

# 16. Reduced Motion

All non-essential motion must respect:

```css
prefers-reduced-motion: reduce
```

When reduced motion is enabled:

* remove decorative movement
* reduce transitions
* avoid large transforms
* preserve content accessibility
* maintain functional interaction

Motion is never a requirement for understanding content.

---

# 17. Component Architecture

Components should follow three broad levels.

## Section Components

Represent major page sections:

```text
Hero
SelectedWork
Capabilities
About
Experience
Technology
Contact
```

## Feature Components

Represent meaningful internal patterns:

```text
ProjectFeature
ProjectItem
ProjectMedia
ExperienceItem
TechnologyGroup
```

## UI Components

Represent small reusable primitives:

```text
Button
TextLink
Container
SectionHeading
Label
```

Not every element needs to become a component.

---

# 18. Client Component Rules

Client Components are allowed only when justified.

Good reasons:

```text
interactive navigation
mobile menu
local UI state
browser APIs
complex animation
interactive media
```

Poor reasons:

```text
styling
static content
simple layout
mapping over an array
using Tailwind
```

Prefer keeping static sections as Server Components.

---

# 19. State Management

No global state management library is required for V1.

Use:

* local React state
* URL state when appropriate
* server-rendered data

Do not introduce:

* Redux
* Zustand
* Jotai
* other global state libraries

unless a concrete product requirement emerges.

---

# 20. Navigation Architecture

Navigation should be lightweight.

Maintain navigation definitions in one place when possible.

Conceptually:

```ts
const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]
```

Desktop and mobile navigation should share the same semantic destination definitions.

Only interaction/presentation should differ where necessary.

---

# 21. Accessibility Architecture

Accessibility must be built into the component structure.

Required:

* semantic landmarks
* logical heading hierarchy
* keyboard navigation
* visible focus states
* accessible names
* meaningful link text
* sufficient contrast
* reduced-motion behavior
* appropriate touch targets

Where possible, prefer semantic HTML over JavaScript-driven accessibility workarounds.

---

# 22. SEO Architecture

Use Next.js Metadata APIs.

Global metadata should be managed through:

```text
app/layout.tsx
```

Reusable metadata helpers may live in:

```text
lib/metadata.ts
```

SEO should include:

* title
* description
* canonical URL
* Open Graph
* social metadata
* favicon
* robots
* sitemap where appropriate

Structured data should only be added when there is a legitimate schema to represent.

Never generate fictional professional data for SEO.

---

# 23. Performance Architecture

Performance is a product requirement, not a final optimization step.

Priorities:

1. Server rendering
2. optimized images
3. minimal client JavaScript
4. controlled font loading
5. limited dependencies
6. minimal third-party scripts
7. stable layout
8. restrained animation

Before adding client-side behavior, ask:

> Can this be implemented on the server or with CSS?

If yes, prefer that solution.

---

# 24. Dependency Policy

Before installing a package, the agent must determine:

1. What problem does it solve?
2. Can native functionality solve it?
3. Does an existing dependency already solve it?
4. What is its runtime/bundle cost?
5. Is it compatible with the current Next.js version?
6. Is the dependency justified by the product?

Avoid dependency accumulation.

A small dependency footprint is preferred.

---

# 25. Data and Backend

V1 does not require:

* database
* API server
* authentication
* CMS
* admin dashboard

Static portfolio content should remain local.

Contact can initially use:

* email
* external professional profiles
* direct links

A contact form backend should only be added when there is a real requirement.

---

# 26. Error and Edge-Case Handling

Even though the portfolio is mostly static, the implementation should account for:

* missing project images
* missing optional links
* invalid external URLs
* unexpected content values
* responsive overflow
* failed image loading where appropriate

Do not render empty visual structures when optional data is absent.

---

# 27. Testing and Verification

After meaningful implementation changes, run:

```bash
npm run lint
npm run build
```

Visual changes must be checked in a real browser.

At minimum verify:

* mobile
* tablet
* desktop
* wide desktop
* keyboard navigation
* reduced motion
* image loading
* console errors
* broken links
* horizontal overflow

---

# 28. Browser Verification

A feature is not visually complete merely because:

```bash
npm run build
```

passes.

The agent must verify the rendered result.

Visual verification should check:

* spacing
* typography
* alignment
* hierarchy
* responsive behavior
* interaction states
* image crops
* visual consistency

Use Impeccable for structured visual critique where appropriate.

---

# 29. Impeccable Integration

Impeccable is the visual review and refinement layer.

It should help with:

* visual critique
* hierarchy
* spacing
* typography
* interaction refinement
* responsive review
* consistency
* visual polish

Impeccable must not override:

* factual content requirements
* accessibility requirements
* product scope
* technical constraints
* architectural decisions without justification

The design system remains the project's visual source of truth.

---

# 30. Agent Skills Integration

Addy Osmani Agent Skills provide engineering workflows and reusable development practices.

Use them for:

* implementation planning
* code quality
* debugging
* review
* refactoring
* testing
* performance
* engineering decision support

The project-level `AGENTS.md` defines when and how these skills should be used.

---

# 31. Git Architecture

Use small, meaningful commits.

Preferred prefixes:

```text
feat:
fix:
refactor:
style:
perf:
docs:
chore:
```

A commit should represent a coherent change.

Avoid large commits that mix:

* feature implementation
* unrelated refactoring
* documentation changes
* dependency changes

unless they are inherently part of the same task.

---

# 32. Deployment Architecture

Target platform:

**Vercel**

Production deployment should use the standard Next.js build/runtime model.

Before deployment verify:

* production build passes
* metadata is correct
* images load
* fonts load
* external links work
* no development-only content remains
* performance is acceptable

---

# 33. Environment Variables

Do not introduce environment variables unless required.

If variables become necessary:

```text
.env.local
```

must remain local and must never be committed.

Provide an appropriate example file if the project requires configuration.

Never store secrets in:

* source code
* content files
* metadata
* public assets
* Git

---

# 34. Architecture Decision Rules

When multiple implementation approaches are possible, prioritize:

1. `SPEC.md`
2. `DESIGN_SYSTEM.md`
3. accessibility
4. performance
5. simplicity
6. maintainability
7. minimal client-side JavaScript
8. dependency minimization

Do not choose an approach merely because it is technically impressive.

The architecture exists to serve the portfolio, not to showcase architecture itself.

---

# 35. Future Scalability

The architecture should leave room for:

* project detail pages
* richer case studies
* CMS integration
* analytics
* contact form backend
* additional content types

However, future possibilities should not create unnecessary V1 complexity.

Build only what the current product requires.

---

# 36. Definition of Technical Done

A technical implementation is complete when:

* it follows this architecture
* it satisfies `SPEC.md`
* it follows `DESIGN_SYSTEM.md`
* lint passes
* production build passes
* no unnecessary Client Components exist
* accessibility behavior is verified
* responsive behavior is verified
* visual behavior is verified
* no obvious performance regression exists
* dependencies are justified
* architecture documentation is updated when a significant decision changes
