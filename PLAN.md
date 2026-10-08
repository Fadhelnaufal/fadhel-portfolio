# Fadhel Portfolio — Implementation Plan

## 1. Purpose

This document defines the execution order for building the Fadhel Portfolio.

The purpose is to:

* prevent premature implementation
* keep product, design, and engineering decisions aligned
* provide clear milestones for Antigravity
* define verification gates
* prevent visual drift
* prevent unnecessary feature expansion
* ensure the final product is reviewed before launch

The agent should follow this plan sequentially unless a dependency requires a different order.

---

# 2. Working Model

The project uses four complementary layers:

```text
PRODUCT.md
    ↓
Product context and positioning

SPEC.md
    ↓
Product requirements

DESIGN_SYSTEM.md
    ↓
Visual language

ARCHITECTURE.md
    ↓
Technical implementation

AGENTS.md
    ↓
Agent behavior

tasks/PLAN.md
    ↓
Execution sequence
```

The agent must not treat any single document as an isolated specification.

---

# 3. Execution Principles

Before beginning any phase:

1. Read the relevant source-of-truth documents.
2. Inspect the current implementation.
3. Identify dependencies.
4. Make the smallest coherent change.
5. Verify the result.
6. Review visually when the change affects UI.
7. Update documentation when a meaningful decision changes.

Never implement based on assumptions when the required information is unavailable.

---

# Phase 0 — Project Foundation

**Status: COMPLETE**

## Objective

Establish a working Next.js development environment.

## Completed

* [x] Create Next.js project
* [x] Configure TypeScript
* [x] Configure ESLint
* [x] Configure Tailwind CSS
* [x] Configure App Router
* [x] Initialize Git
* [x] Verify development server
* [x] Run `npm run lint`
* [x] Run `npm run build`

## Gate

Foundation is considered valid when:

* lint passes
* production build passes
* application runs locally

---

# Phase 1 — Agent Environment

**Status: COMPLETE**

## Objective

Establish the AI-assisted engineering workflow.

## Completed

* [x] Install Antigravity CLI
* [x] Install Addy Osmani Agent Skills
* [x] Verify Agent Skills installation
* [x] Initialize Impeccable
* [x] Verify `.impeccable/`
* [x] Establish project-level `AGENTS.md`

## Tools

### Antigravity

Primary implementation environment.

### Addy Agent Skills

Engineering workflow and development quality.

### Impeccable

Visual critique and refinement.

## Gate

The agent must understand the role of each tool before implementation begins.

---

# Phase 2 — Product Foundation

**Status: COMPLETE / REVIEW REQUIRED**

## Objective

Establish a single source of truth for the product.

## Documents

* [x] `PRODUCT.md`
* [x] `SPEC.md`
* [x] `DESIGN_SYSTEM.md`
* [x] `ARCHITECTURE.md`
* [x] `AGENTS.md`
* [x] `tasks/PLAN.md`

## Review

* [ ] Confirm target audience
* [ ] Confirm portfolio positioning
* [ ] Confirm primary conversion goal
* [ ] Confirm V1 scope
* [ ] Confirm visual direction
* [ ] Confirm content boundaries

## Gate

Do not begin detailed UI implementation until product direction is approved.

---

# Phase 3 — Content Audit

**Status: COMPLETE**

## Objective

Establish verified portfolio content before building detailed UI.

## Tasks

### Profile

* [ ] Verify name
* [ ] Verify professional title/positioning
* [ ] Verify short bio
* [ ] Verify current professional focus

### Projects

* [ ] Review candidate projects
* [ ] Select final V1 projects
* [ ] Verify project names
* [ ] Verify descriptions
* [ ] Verify roles
* [ ] Verify technologies
* [ ] Verify links
* [ ] Verify images
* [ ] Identify confidential information

### Experience

* [ ] Verify organizations
* [ ] Verify roles
* [ ] Verify dates
* [ ] Verify responsibilities

### Technology

* [ ] Verify frontend technologies
* [ ] Verify backend technologies
* [ ] Verify database technologies
* [ ] Verify tools/platforms

### Contact

* [ ] Verify email
* [ ] Verify GitHub
* [ ] Verify LinkedIn
* [ ] Verify other professional links

## Output

Create:

```text
content/
├── profile.ts
├── projects.ts
├── experience.ts
└── technology.ts
```

## Gate

No unverified professional claims may enter the application.

If information is missing, the agent must ask the human.

---

# Phase 4 — Design Foundation

**Status: COMPLETE**

## Objective

Translate the design system into actual implementation tokens.

## Tasks

### Typography

* [ ] Select final font family
* [ ] Configure font loading
* [ ] Define display typography
* [ ] Define heading typography
* [ ] Define body typography
* [ ] Define label typography
* [ ] Define tracking rules

### Color

* [ ] Define background
* [ ] Define foreground
* [ ] Define muted colors
* [ ] Define surfaces
* [ ] Define borders
* [ ] Define accent
* [ ] Define inverse colors

### Layout

* [ ] Define container
* [ ] Define spacing scale
* [ ] Define grid behavior
* [ ] Define section spacing

### Shape

* [ ] Define border rules
* [ ] Define radius rules
* [ ] Define shadow rules

### Interaction

* [ ] Define hover behavior
* [ ] Define focus behavior
* [ ] Define active behavior
* [ ] Define disabled behavior

## Impeccable Review

Review:

* typography hierarchy
* spacing
* contrast
* density
* consistency
* overall visual character

## Gate

The visual foundation must feel coherent before building the full page.

---

# Phase 5 — Application Shell

**Status: COMPLETE**

## Objective

Build the structural skeleton of the portfolio.

## Tasks

* [ ] Configure `app/layout.tsx`
* [ ] Configure global styles
* [ ] Create `SiteHeader`
* [ ] Create `SiteFooter`
* [ ] Create main page composition
* [ ] Establish semantic landmarks
* [ ] Establish section IDs
* [ ] Establish container behavior
* [ ] Establish mobile navigation structure

## Verification

* [ ] semantic HTML
* [ ] keyboard navigation
* [ ] focus visibility
* [ ] mobile navigation
* [ ] no horizontal overflow
* [ ] lint passes
* [ ] build passes

## Gate

The page structure must be stable before section-level visual work begins.

---

# Phase 6 — Hero

**Status: COMPLETE**

## Objective

Create the primary visual identity of the portfolio.

## Tasks

* [x] Implement hero structure (`components/sections/Hero.tsx`)
* [x] Implement name/identity typography (fluid type via CSS clamp, Geist Sans 900)
* [x] Implement professional positioning (eyebrow + discipline subtitle)
* [x] Implement supporting copy (tagline from `content/profile.ts`)
* [x] Implement primary CTA ("View selected work" → #work)
* [x] Implement secondary CTA ("Contact" → #contact)
* [x] Portrait zone reserved (no verified portrait asset — placeholder frame with monogram)
* [x] Implement responsive hero (single column mobile, asymmetric two-column desktop)
* [x] Implement subtle entrance motion (CSS keyframes, staggered delays)
* [x] Implement reduced-motion support (`prefers-reduced-motion`)

## Completed Files

* `content/profile.ts` — verified profile content (name, role, discipline, tagline, CTAs)
* `components/sections/Hero.tsx` — Server Component, no `use client`
* `app/globals.css` — hero CSS: fluid type scale, entrance animation, reduced-motion override
* `app/page.tsx` — Hero wired as first section

## Design Decisions

* "Fadhel" display: Geist Sans weight-900, `clamp(5rem, 18vw, 14rem)`, `line-height: 0.88`, `letter-spacing: -0.03em`
* No text-stroke, no gradient, no glassmorphism
* Asymmetric two-column grid (desktop): `grid-cols-[1fr_auto]` — identity left, portrait zone right
* Portrait zone: `hidden lg:flex` — only visible on desktop; `aria-hidden="true"` throughout
* Single semantic H1 (`sr-only`): "Fadhel Naufal Akbar — Full-Stack Web Developer"
* H1 SEO content matches page title + description
* Entrance animation: CSS-only, 5 staggered stages (0.05s → 0.55s delays)
* Reduced motion: all animation collapsed to `animation: none`

## Impeccable Review Findings

1. ✅ Hierarchy clear: eyebrow → name → discipline → tagline → CTAs
2. ✅ "Fadhel" visually dominant at all desktop breakpoints
3. ✅ Editorial rather than SaaS feel
4. ✅ Negative space intentional via `min-h-[100svh]`
5. ✅ Portrait zone compositionally reserved without generating fake image
6. ✅ Mobile: single column, natural flow, no horizontal overflow risk
7. ✅ No gradients, no decorative blobs, no glassmorphism
8. ✅ Monochrome palette intact
9. ✅ Accessibility: semantic section, sr-only H1, aria-hidden on decorative elements, visible focus rings, nav landmark
10. ✅ Reduced motion: CSS media query removes all animation

## Validation

* lint: PASS (exit 0)
* build: PASS (exit 0, static prerender)
* Browser check: HTTP 200

---

# Phase 7 — Selected Work

**Status: NEXT**

## Tasks

* [ ] Implement project content model
* [ ] Implement featured project
* [ ] Implement secondary project presentation
* [ ] Implement project metadata
* [ ] Implement project media
* [ ] Implement project links
* [ ] Optimize project images
* [ ] Implement responsive project composition

## Content Review

Verify:

* [ ] project names
* [ ] roles
* [ ] descriptions
* [ ] technologies
* [ ] links
* [ ] claims

## Design Review

Check:

* project hierarchy
* media scale
* editorial composition
* readability
* consistency

## Gate

No project may contain fabricated information.

---

# Phase 8 — Capabilities

## Objective

Communicate what Fadhel can build.

## Tasks

* [ ] Implement capability groups
* [ ] Write concise descriptions
* [ ] Connect capabilities to actual experience
* [ ] Avoid keyword-wall presentation

## Review

Ask:

> Does this section add useful information beyond the projects?

If not, simplify.

---

# Phase 9 — About / How I Work

## Objective

Introduce the person behind the work.

## Tasks

* [ ] Implement short introduction
* [ ] Implement professional philosophy
* [ ] Implement working process
* [ ] Add supporting details where useful

## Review

Avoid:

* generic developer language
* unnecessary autobiography
* exaggerated claims

Critical question:

> Could this text belong to any developer?

If yes, rewrite.

---

# Phase 10 — Experience

## Objective

Provide professional context.

## Tasks

* [ ] Implement experience structure
* [ ] Add verified entries
* [ ] Add roles
* [ ] Add dates
* [ ] Add relevant responsibilities
* [ ] Establish visual hierarchy

## Gate

All professional history must be factual.

---

# Phase 11 — Footer & Global Completion (LOCKED)

## Objective

Finalize global navigation, section flow, footer, and complete responsive/QA verification.

## Tasks

* [x] verify global navigation (desktop/mobile)
* [x] verify mobile menu open/close behavior
* [x] verify scroll-margin for sticky header anchoring
* [x] verify global page flow (Hero → Work → Capabilities → About → Contact)
* [x] no overlapping sections
* [x] horizontal overflow prevented globally
* [x] minimal editorial footer implemented
* [x] dynamic copyright year + profile name
* [x] anchor navigation links integrated
* [x] no fabricated social/contact links added
* [x] global CSS audited (no conflicting design systems)
* [x] no temporary/placeholder content remains (TODO/dummy text removed)
* [x] `npm run lint` passes
* [x] `npm run build` passes
* [x] responsive verification (desktop, tablet, mobile)
* [x] accessibility verification (semantic sections, anchor tags)
* [x] performance/runtime verification (clean console, no hydration errors)

## Review

Technology should support credibility rather than dominate the page.

---

# Phase 12 — Portfolio Depth & Conversion

**Status: COMPLETE**

## Objective

Expand the portfolio in three controlled areas without redesigning the existing portfolio.

## Milestones

* Phase 12A — Contact Conversion
* Phase 12B — Deep Project Case Studies
* Phase 12C — Personal Narrative
* Phase 12D — Integration & QA

---

# Phase 13 — Footer

## Objective

Finish the page without unnecessary visual weight.

## Tasks

* [ ] Add name/brand
* [ ] Add professional links
* [ ] Add copyright/year if desired
* [ ] Verify responsive behavior

---

# Phase 14 — Responsive Pass

**Do not treat responsive work as a final afterthought.**

## Viewports

Verify at minimum:

* mobile
* tablet
* desktop
* wide desktop

## Areas

* [ ] navigation
* [ ] hero
* [ ] typography
* [ ] portrait
* [ ] selected work
* [ ] capabilities
* [ ] about
* [ ] experience
* [ ] technology
* [ ] contact
* [ ] footer

## Checks

* [ ] no horizontal scrolling
* [ ] no clipped text
* [ ] no overlapping elements
* [ ] touch targets are usable
* [ ] typography remains hierarchical

---

# Phase 15 — Motion Pass

**Only after major sections are complete.**

## Tasks

* [ ] Audit existing motion
* [ ] Remove unnecessary animation
* [ ] Add purposeful transitions
* [ ] Add entrance effects only where beneficial
* [ ] Add hover/focus feedback
* [ ] Implement reduced-motion behavior

## Review Principle

```text
Purpose > Spectacle
Continuity > Novelty
Subtlety > Exaggeration
Performance > Complexity
```

---

# Phase 16 — Accessibility Pass

## Tasks

* [ ] Verify landmarks
* [ ] Verify heading hierarchy
* [ ] Verify keyboard navigation
* [ ] Verify focus states
* [ ] Verify link names
* [ ] Verify button names
* [ ] Verify image alt text
* [ ] Verify contrast
* [ ] Verify reduced motion
* [ ] Verify touch targets
* [ ] Perform screen-reader sanity check

## Target

WCAG 2.2 AA where practical.

---

# Phase 17 — SEO Pass

## Tasks

* [ ] Page title
* [ ] Meta description
* [ ] Canonical URL
* [ ] Open Graph metadata
* [ ] Social metadata
* [ ] Favicon
* [ ] Robots configuration
* [ ] Sitemap where appropriate
* [ ] Structured data only where justified

## Verification

Inspect production metadata, not only source code.

---

# Phase 18 — Performance Pass

## Objective

Optimize without degrading the design.

## Tasks

* [ ] Optimize hero image
* [ ] Optimize project images
* [ ] Review font loading
* [ ] Review Client Components
* [ ] Review dependencies
* [ ] Review animation
* [ ] Review third-party scripts
* [ ] Check layout stability
* [ ] Run Lighthouse

## Target

Aim for:

```text
Performance      90+
Accessibility    90+
Best Practices   90+
SEO              90+
```

These are targets, not reasons to compromise the actual product.

---

# Phase 19 — Engineering Review

## Objective

Perform a production-oriented technical review.

Use Addy Agent Skills where appropriate.

## Review

* [ ] component boundaries
* [ ] Server/Client boundaries
* [ ] unnecessary abstractions
* [ ] unnecessary dependencies
* [ ] TypeScript quality
* [ ] accessibility implementation
* [ ] image handling
* [ ] font handling
* [ ] performance
* [ ] maintainability
* [ ] architecture consistency

## Verification

```bash
npm run lint
npm run build
```

Both must pass.

---

# Phase 20 — Visual Review

## Objective

Perform a dedicated visual quality pass.

Use Impeccable.

## Review Priority

1. Accessibility
2. Hierarchy
3. Layout
4. Typography
5. Spacing
6. Consistency
7. Interaction
8. Decoration

## Questions

### Identity

* Does the portfolio feel personal?
* Is Fadhel immediately recognizable?

### Quality

* Does it feel premium?
* Does it feel intentional?
* Does it feel technically precise?

### Work

* Does Selected Work receive enough attention?
* Are projects presented as evidence rather than cards?

### Visual System

* Is typography consistent?
* Is spacing consistent?
* Are borders/radii/shadows restrained?

### Restraint

* Is anything decorative without purpose?
* Are there unnecessary gradients?
* Are there excessive animations?
* Are there unnecessary cards?
* Does anything feel like generic AI-generated design?

---

# Phase 21 — Simplification Pass

## Objective

Remove unnecessary complexity before launch.

## Review

Look for:

* unnecessary components
* duplicate UI
* redundant copy
* excessive animation
* excessive borders
* excessive shadows
* unnecessary gradients
* unnecessary dependencies
* unnecessary client-side state
* unnecessary abstractions

The final portfolio should become clearer as complexity decreases.

---

# Phase 22 — Final QA

## Functional

* [ ] navigation works
* [ ] anchor links work
* [ ] external links work
* [ ] email/contact works
* [ ] all images load
* [ ] no broken assets
* [ ] no console errors
* [ ] no build errors

## Responsive

* [ ] mobile
* [ ] tablet
* [ ] desktop
* [ ] wide desktop

## Accessibility

* [ ] keyboard
* [ ] focus
* [ ] contrast
* [ ] reduced motion
* [ ] semantic structure

## Performance

* [ ] Lighthouse reviewed
* [ ] images reviewed
* [ ] fonts reviewed
* [ ] Client Components reviewed

## Content

* [ ] all claims verified
* [ ] no placeholder copy
* [ ] no fabricated information
* [ ] contact information verified

## Visual

* [ ] design system followed
* [ ] hero approved
* [ ] projects approved
* [ ] typography approved
* [ ] mobile composition approved

---

# Phase 23 — Production Deployment

## Tasks

* [ ] Production build passes
* [ ] Vercel deployment configured
* [ ] Production URL verified
* [ ] Production metadata verified
* [ ] Open Graph preview verified
* [ ] Robots/sitemap verified where applicable
* [ ] Final browser QA completed
* [ ] Final Git commit created

---

# 4. Change Management

When requirements change:

1. Identify which source-of-truth document is affected.
2. Update the document first.
3. Re-evaluate affected implementation.
4. Update this plan if execution order changes.
5. Only then implement.

Do not silently change requirements inside code.

---

# 5. Stop Conditions

The agent must stop and ask the human when:

* professional information is missing
* a project claim cannot be verified
* a design decision materially conflicts with the design system
* two source-of-truth documents conflict
* a new dependency is required for a non-trivial feature
* a feature expands V1 scope
* a visual direction would significantly change the established identity
* a security/privacy concern appears
* an implementation requires assumptions about personal information

---

# 6. Milestone Gates

The project should not progress blindly from one phase to another.

## Gate A — Foundation

Before UI implementation:

* `PRODUCT.md` approved
* `SPEC.md` approved
* `DESIGN_SYSTEM.md` established
* `ARCHITECTURE.md` established
* `AGENTS.md` established

## Gate B — Content

Before detailed project UI:

* portfolio content verified
* project list selected
* professional information verified

## Gate C — Visual Foundation

Before full-page implementation:

* typography established
* colors established
* spacing established
* layout system established

## Gate D — Hero

Before remaining visual polish:

* hero composition approved
* responsive hero approved

## Gate E — Feature Complete

Before final review:

* all V1 sections implemented
* navigation complete
* content complete

## Gate F — Production Ready

Before launch:

* engineering review complete
* visual review complete
* accessibility review complete
* performance review complete
* SEO review complete
* final QA complete

---

# 7. Definition of Done

The portfolio is ready for launch when:

* all approved V1 requirements are implemented
* content is factual
* design system is consistently applied
* responsive behavior is verified
* accessibility is verified
* performance is verified
* SEO is implemented
* engineering review is complete
* visual review is complete
* unnecessary complexity has been removed
* production deployment has been verified

The goal is not maximum feature count.

The goal is:

> maximum clarity, credibility, and visual quality with minimum unnecessary complexity.
