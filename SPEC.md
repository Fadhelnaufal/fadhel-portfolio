# Fadhel Portfolio — Product Specification

## 1. Document Purpose

This document defines what the Fadhel Portfolio must communicate, contain, and accomplish.

It is the product-level source of truth for:

* information architecture
* page sections
* content requirements
* interaction requirements
* responsive behavior
* accessibility expectations
* SEO expectations
* performance expectations
* V1 scope boundaries

This document does not define detailed visual tokens or implementation architecture.

Those responsibilities belong to:

* `DESIGN_SYSTEM.md`
* `ARCHITECTURE.md`

---

# 2. Product Overview

The Fadhel Portfolio is a premium personal portfolio website for Fadhel Naufal.

The website should demonstrate professional capability through the quality of the product itself rather than relying on a long list of claims.

The portfolio should feel like a carefully designed digital product:

* personal
* technically credible
* visually refined
* editorial
* restrained
* confident
* fast
* accessible
* authentic

The website must communicate that Fadhel is capable of building polished digital products, not merely writing code.

---

# 3. Product Goals

## 3.1 Establish Professional Credibility

Visitors should quickly understand:

* who Fadhel is
* what he does
* what technologies he works with
* what kind of products he builds
* what level of craft he brings to his work

## 3.2 Demonstrate Real Work

The portfolio should make selected projects tangible through:

* clear project presentation
* concise context
* role/contribution
* technology
* meaningful outcomes when verified
* visual evidence

The work itself should carry more weight than decorative UI.

## 3.3 Establish a Distinct Personal Identity

The portfolio should not resemble a generic developer template.

Its identity should emerge from:

* typography
* composition
* portrait treatment
* spacing
* editorial rhythm
* interaction
* negative space

## 3.4 Create a Clear Conversion Path

A visitor should always know how to:

1. understand who Fadhel is
2. inspect selected work
3. understand his capabilities
4. learn how he works
5. contact him

The desired outcome is a professional conversation, interview opportunity, project inquiry, or collaboration.

---

# 4. Target Audience

## 4.1 Primary Audience

Recruiters and hiring managers evaluating Fadhel for frontend/UI engineering or software development roles.

Typical behavior:

* scan quickly
* evaluate visual quality immediately
* inspect projects
* verify technical credibility
* look for professionalism and clarity

## 4.2 Secondary Audience

Potential freelance clients, collaborators, and technical peers.

The portfolio should therefore communicate professional engineering capability without becoming a conventional agency website.

---

# 5. Product Positioning

The portfolio should position Fadhel as a developer who combines:

* software engineering
* frontend development
* product thinking
* UI/UX sensitivity
* visual execution

Core positioning principle:

> I build digital products with engineering discipline and visual intention.

This sentence is a positioning principle, not necessarily final homepage copy.

Avoid inflated claims such as:

* world-class
* industry-leading
* expert in everything
* 10x developer
* guaranteed results

unless independently supported and explicitly approved.

---

# 6. Information Architecture

V1 is a single-page portfolio.

Recommended sequence:

1. Hero
2. Selected Work
3. Capabilities
4. About / How I Work
5. Experience
6. Technology
7. Contact
8. Footer

The sequence may be adjusted during implementation if usability testing or visual review demonstrates a clear improvement.

Any major structural change should be reflected in this document.

---

# 7. Hero

## Purpose

The Hero establishes:

* identity
* professional positioning
* visual character
* primary action

It is the first major impression of the portfolio.

## Required Content

* name: Fadhel
* concise professional positioning: Web Developer, Full-Stack Development
* supporting statement
* primary CTA
* optional secondary action
* portrait

## Content Requirements

The hero copy must be concise, specific, factual, and easy to scan. It should communicate: "This is a personal portfolio belonging to a developer who builds real digital products."

Avoid generic statements such as: "I am a passionate developer who loves turning ideas into reality," and do not invent additional titles (like Senior Developer, Software Engineer, Frontend Specialist, AI Engineer) unless explicitly provided.

## Visual Direction

The visual treatment should support the established design system.

The intended direction includes:

* shoulders-up portrait
* central or near-central composition
* portrait integrated with typography/layout
* strong negative space
* oversized identity typography
* restrained supporting elements

Detailed visual rules belong in `DESIGN_SYSTEM.md`.

## Acceptance Criteria

* identity is understandable within a few seconds
* positioning is clear
* CTA is discoverable
* portrait contributes to the composition
* hierarchy remains clear on mobile
* content remains usable without animation

---

# 8. Selected Work

## Purpose

Selected Work is the primary evidence section.

It should demonstrate capability through real projects.

## Project Selection Rules

Only include projects that:

1. Fadhel actually worked on.
2. Can be described accurately.
3. Have enough context to be useful.
4. Represent relevant technical or visual capability.
5. Can be publicly presented.

Confirmed featured projects for V1:

* EduChem_GenAI
* Disiplin PRO

## Project Information

A project may include:

* project name
* short description
* category
* role
* technologies
* problem/context
* contribution
* verified outcome/status
* visual evidence
* live URL
* repository URL

Only information that can be verified should be presented.

## Content Integrity

Never fabricate:

* client names
* users
* revenue
* performance metrics
* adoption numbers
* awards
* testimonials
* business outcomes

If information is unavailable, omit it or request clarification.

## Presentation

Selected Work should feel editorial rather than like a generic card grid. V1 uses an Alternating Feature Blocks layout (5/7 column split).

Each project should emphasize project name, role, stack, database, relevant capabilities/features, status, and visual evidence. Do not fabricate metrics or business outcomes.

---

# 9. Capabilities

## Purpose

Explain what kinds of problems Fadhel can solve.

Capabilities should describe meaningful outcomes rather than become a keyword list.

## Potential Categories

### Web Development

* modern web applications
* business websites
* custom systems
* responsive interfaces
* frontend implementation
* performance optimization

### Product & System Development

* dashboards
* management systems
* booking systems
* SaaS applications
* education platforms
* workflow-driven applications

### UI / UX

* interface structure
* responsive design
* component systems
* interaction patterns
* frontend implementation from visual references

### Technical Improvement

* frontend architecture
* performance optimization
* maintainability
* component architecture
* product refinement

Only capabilities supported by actual experience should be presented.

---

# 10. About / How I Work

## Purpose

Provide human context and communicate Fadhel's working philosophy.

This section should not become an unnecessarily long biography.

## Recommended Content

### Introduction

A concise explanation of:

* professional background
* current focus
* type of work

### Working Philosophy

Explain how Fadhel approaches digital products.

### Process

A possible process:

1. Understand
2. Structure
3. Design
4. Build
5. Refine
6. Verify

The exact wording may evolve.

---

# 11. Experience

## Purpose

Provide professional evidence and context.

Each entry should contain, where available:

* organization/project
* role
* timeframe
* responsibilities
* meaningful contribution

Experience should prioritize relevant information over exhaustive chronology.

Do not invent dates, organizations, or responsibilities.

---

# 12. Technology

## Purpose

Demonstrate technical breadth without overwhelming the visitor.

Technology should be grouped semantically.

Possible groups:

### Frontend

* React
* Vue
* Next.js
* Inertia
* Tailwind CSS
* TypeScript
* JavaScript

### Backend

* Laravel
* PHP
* API development

### Database

* MySQL
* PostgreSQL

### Tools / Platform

* Git
* GitHub
* Vercel
* Figma
* development tooling

Only technologies genuinely used by Fadhel should be included.

Technology should support the portfolio narrative, not dominate it.

---

# 13. Contact

## Purpose

Provide a clear final conversion point.

The section should contain:

* concise invitation
* preferred contact method
* relevant professional links

Potential channels:

* email
* GitHub
* LinkedIn

Only verified links should be published.

Avoid unnecessary personal information.

---

# 14. Footer

The footer should contain:

* name/brand
* professional links
* copyright/year if desired
* optional short closing statement

The footer should remain visually restrained.

---

# 15. Navigation

Navigation must provide quick access to major sections.

## Desktop

* compact
* clear
* visually quiet
* easy to scan

## Mobile

* touch-friendly
* accessible
* simple
* no unnecessary interaction complexity

Navigation must work with:

* keyboard navigation
* reduced-motion preferences
* screen readers

---

# 16. Responsive Requirements

The portfolio must support:

* mobile
* tablet
* desktop
* wide desktop

Mobile must not simply be a compressed desktop layout.

Responsive behavior must account for:

* typography
* portrait composition
* project media
* navigation
* section spacing
* CTA placement
* grid structure
* overflow

There must be no unintended horizontal scrolling.

---

# 17. Accessibility Requirements

Target:

**WCAG 2.2 AA where practical.**

Required:

* semantic HTML
* logical heading hierarchy
* keyboard navigation
* visible focus states
* accessible interactive controls
* sufficient color contrast
* meaningful alternative text
* reduced-motion support
* information not conveyed by color alone
* appropriate touch targets
* accessible labels for interactive controls

Decorative images should not create unnecessary screen-reader noise.

---

# 18. SEO Requirements

V1 should include:

* meaningful page title
* meta description
* canonical URL strategy
* Open Graph metadata
* social metadata where appropriate
* semantic heading structure
* descriptive image metadata
* favicon/site icon
* robots configuration where appropriate
* sitemap where appropriate

Structured data may be used only when genuinely applicable.

SEO must not compromise the visual or content experience.

---

# 19. Performance Requirements

Target:

* Lighthouse Performance: 90+
* Lighthouse Accessibility: 90+
* Lighthouse Best Practices: 90+
* Lighthouse SEO: 90+

Priority:

1. fast initial rendering
2. optimized images
3. minimal client JavaScript
4. sensible font loading
5. limited third-party scripts
6. stable layout
7. controlled animation

Performance targets should not be achieved by compromising essential product quality.

---

# 20. Motion Requirements

Motion should support:

* hierarchy
* continuity
* feedback
* navigation
* progressive disclosure

Avoid:

* constant looping animation
* excessive parallax
* scroll-jacking
* unnecessary cursor effects
* decorative particle systems
* animation that delays access to content

All non-essential motion must respect `prefers-reduced-motion`.

Detailed motion rules belong in `DESIGN_SYSTEM.md`.

---

# 21. Content Integrity Rules

All professional claims must be factual.

The agent must never invent:

* employers
* clients
* project metrics
* users
* revenue
* awards
* testimonials
* credentials
* responsibilities
* dates
* project outcomes

If information is missing:

1. use an explicit placeholder, or
2. ask the human for clarification.

The agent must not silently infer professional facts.

---

# 22. V1 Scope

## In Scope

* single-page portfolio
* responsive layout
* hero
* selected work
* capabilities
* about/how I work
* experience
* technology
* contact
* footer
* SEO
* accessibility
* performance
* restrained motion

## Out of Scope

Unless explicitly approved:

* CMS
* authentication
* admin dashboard
* database
* blog CMS
* complex contact backend
* AI chatbot
* event system
* multi-language system
* unnecessary 3D
* WebGL as a core dependency
* elaborate page transitions
* analytics-heavy infrastructure

---

# 23. Success Criteria

The product is successful when a first-time visitor can quickly answer:

1. Who is Fadhel?
2. What does he do?
3. What has he built?
4. What technologies does he use?
5. How does he approach his work?
6. How can I contact him?

The portfolio should also leave the impression that:

> the quality of the website reflects the quality of the person building digital products.

---

# 24. Definition of Done

The portfolio is product-complete when:

* all approved sections are implemented
* content is factual
* selected work is presented clearly
* responsive behavior is verified
* accessibility is verified
* performance is verified
* SEO metadata is implemented
* visual hierarchy follows `DESIGN_SYSTEM.md`
* motion is restrained and accessible
* no critical build/lint errors remain
* primary navigation and contact paths work
* final visual review has been completed
* unnecessary complexity has been removed
