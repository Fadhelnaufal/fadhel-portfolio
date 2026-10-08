# DESIGN_SYSTEM.md

## Fadhel Portfolio — Design System

This document defines the visual language, interface rules, interaction principles, and visual quality standards for the Fadhel Portfolio.

It is the primary visual source of truth for the project.

All UI implementation, visual refinement, and design critique should be evaluated against this document.

---

# 1. Design Philosophy

The portfolio should feel like a carefully crafted digital product rather than a conventional developer resume.

The visual identity should communicate:

* technical confidence;
* precision;
* sophistication;
* restraint;
* personality;
* craftsmanship;
* modernity.

The design should demonstrate frontend and UI engineering ability through the quality of the interface itself.

## Core Principle

> **The interface is the portfolio.**

The website should not need excessive visual effects or exaggerated claims to communicate technical competence.

Quality should emerge from:

1. typography;
2. composition;
3. spacing;
4. hierarchy;
5. imagery;
6. interaction;
7. consistency;
8. performance.

---

# 2. Visual Direction

## Desired Characteristics

The visual language should be:

* premium;
* editorial;
* minimal;
* sophisticated;
* modern;
* personal;
* confident;
* intentional.

## Undesired Characteristics

Avoid visual patterns commonly associated with generic AI-generated portfolios:

* excessive gradients;
* neon color palettes;
* glassmorphism everywhere;
* floating card collections;
* random blobs;
* excessive rounded containers;
* generic SaaS dashboards;
* unnecessary 3D objects;
* decorative code snippets;
* excessive particle effects;
* animated backgrounds;
* excessive cursor effects;
* excessive parallax;
* visual noise.

The website should feel **designed**, not decorated.

---

# 3. Brand Character

The interface should communicate the following personality:

| Attribute     | Expression                                                  |
| ------------- | ----------------------------------------------------------- |
| Confident     | Strong typography and deliberate composition                |
| Technical     | Precise spacing, structured layouts, clean implementation   |
| Sophisticated | Restrained color and typography                             |
| Personal      | Portrait, name treatment, authentic project stories         |
| Creative      | Editorial composition and unconventional but usable layouts |
| Mature        | Minimal decoration and strong information hierarchy         |

Avoid making the design feel:

* childish;
* corporate-template-like;
* overly playful;
* overly futuristic;
* excessively experimental;
* visually loud.

---

# 4. Design Hierarchy

Visual hierarchy should generally follow:

```text
1. Identity
2. Primary message
3. Selected work
4. Supporting narrative
5. Technical details
6. Secondary actions
7. Decorative elements
```

Decorative elements should never compete with content.

---

# 5. Color System

The initial color system should remain restrained.

The project should use semantic color roles rather than arbitrary colors scattered throughout components.

## Required Roles

```text
background: #FFFFFF (light) or #FAFAFA (light alt)
foreground: #18181B
muted: #71717A
surface: #FBFBFB
border: #E4E4E7
accent: monochrome inverse
```

Avoid:
* blue/purple gradients
* neon colors
* excessive accent colors
* glassmorphism
* decorative gradients
* AI-dashboard visual language

Project screenshots and images should provide most of the visual color.

## Rules

* Use the primary background as the dominant canvas.
* Use foreground color for high-priority text.
* Use muted color for secondary information.
* Use borders sparingly.
* Accent color should be intentional and limited.
* Do not introduce multiple competing accent colors without a documented reason.

### Color Philosophy

Color should support hierarchy rather than become the primary source of visual excitement.

The portfolio should remain recognizable and sophisticated even when viewed in grayscale.

---

# 6. Typography

Typography is one of the most important elements of the visual identity.

Typography should carry significant visual weight.

## Typography Decisions

* **Primary UI/body:** Geist Sans
* **Technical metadata:** Geist Mono
* **Hero identity/display:** Dedicated display treatment for "Fadhel". Font selection must prioritize distinctive identity, readability, editorial sophistication, compatibility with the rest of the design, and performance. Do not automatically lock Playfair Display or Instrument Serif. If an existing project already has an appropriate font available, evaluate it first. Do not use crude CSS `-webkit-text-stroke` as the primary treatment for the "Fadhel" identity. Do not install unnecessary font packages.

The hero identity must feel personal, modern, and distinctive rather than like a generic luxury/editorial template.

---

# 7. Typography Scale

Use a fluid type scale where appropriate.

Conceptually:

```text
Display
5xl → 7xl+

H1
4xl → 6xl

H2
3xl → 5xl

H3
2xl → 3xl

Body Large
lg → xl

Body
base → lg

Small
sm

Label
xs → sm
```

Exact values should be tuned during implementation according to viewport and composition.

Large typography must remain readable and structurally sound on mobile.

---

# 8. Spacing System

Spacing should follow a consistent scale.

Prefer Tailwind's spacing system rather than arbitrary values.

Use spacing to create hierarchy.

Conceptual rhythm:

```text
xs
sm
md
lg
xl
2xl
3xl
4xl
5xl
6xl
```

Large whitespace is intentional.

Do not compress sections simply to reduce page length.

---

# 9. Layout & Grid

The layout should feel editorial rather than like a conventional SaaS dashboard.

Use a responsive grid system.

Conceptually:

```text
Maximum content width: 1280px

Desktop
12-column grid

Tablet
8-column grid

Mobile
single-column flow
```

The exact implementation may adapt depending on the section.

## Grid Principles

Use:

* asymmetry where useful;
* strong alignment;
* intentional whitespace;
* controlled overlap;
* clear visual anchors.

Avoid arbitrary positioning that becomes fragile across breakpoints.

---

# 10. Container System

Content should be constrained to a readable maximum width.

Prefer a consistent page container.

Conceptually (these values are design targets, not permission to blindly hardcode them everywhere):

```text
Mobile
horizontal padding: approximately 24px

Tablet
horizontal padding: approximately 32px

Desktop
horizontal padding: approximately 48px

Maximum content width
1280px
```

Exact values should be validated during implementation.

Wide screens should not cause content to become excessively stretched.

---

# 11. Border System

Borders should be subtle.

Use borders primarily for:

* navigation separation;
* project metadata;
* structural divisions;
* interactive controls;
* intentional editorial framing.

Avoid putting borders around every component.

---

# 12. Radius System

The design should avoid excessive rounded-card aesthetics.

Structural borders: 1px
Radius: 0–2px

Avoid:
* rounded cards
* pill-heavy UI

---

# 13. Shadows

Shadows should be used sparingly.

Avoid decorative shadows and floating-card compositions.

Depth should come from:
* typography
* spacing
* image scale
* alignment
* borders
* negative space

---

# 14. Iconography

Icons should be:

* simple;
* consistent;
* functional;
* visually restrained.

Do not use icons merely to decorate every section.

Icons should not replace meaningful text when text is necessary for understanding.

---

# 15. Imagery

Photography and project imagery are important parts of the portfolio.

## Portrait

The portrait should feel editorial rather than like a conventional profile avatar.

The intended hero composition includes:

* shoulders-up portrait;
* centered or near-centered composition;
* partial emergence from the typography/layout;
* strong relationship between portrait and surrounding negative space.

The portrait should feel integrated into the composition.

## Project Imagery

Project imagery should prioritize:

1. authenticity;
2. clarity;
3. visual quality;
4. relevance.

Do not fabricate screenshots or project visuals.

---

# 16. Hero System

The hero is the primary visual statement.

## Objectives

The hero must immediately communicate:

* Fadhel's identity;
* professional role;
* personality;
* visual quality;
* confidence.

## Composition

The Hero must NOT look like a standard developer portfolio template. It should communicate: "This is a personal portfolio belonging to a developer who builds real digital products." It should not communicate: "This is a generic SaaS/developer landing page."

Composition features:
* asymmetric
* typography-led
* large personal identity
* editorial portrait
* strong negative space
* technical positioning information
* portrait can partially break the container boundary

**Primary identity:**
Fadhel

**Secondary positioning:**
Web Developer
Full-Stack Development

*Note: Do not invent additional titles (like Senior Developer, Software Engineer, Frontend Specialist, AI Engineer) unless explicitly provided.*

---

# 17. Navigation

Navigation should be:

* simple;
* predictable;
* lightweight;
* accessible.

Avoid excessive navigation items.

The navigation should not dominate the visual hierarchy.

On mobile:

* use a clear interaction pattern;
* ensure touch targets are sufficiently large;
* provide visible focus states;
* prevent accidental interaction.

---

# 18. Selected Work System

Selected Work is one of the most important sections.

Projects should be treated as evidence rather than decoration.

## Project Presentation

Each project should communicate:

```text
Project identity
↓
Problem / purpose
↓
Role
↓
Technology
↓
Visual evidence
↓
Relevant outcome
```

Not every project needs every piece of information in the initial viewport.

## Layout

There are exactly two featured projects in V1. Do NOT use a generic card grid.

Use **Alternating Feature Blocks**:

**Project 1 — EduChem_GenAI**
Desktop:
* project information: approximately 5 columns
* project visual: approximately 7 columns

**Project 2 — Disiplin PRO**
Mirror the composition:
* project visual: approximately 7 columns
* project information: approximately 5 columns

Project sections should feel like editorial case-study previews rather than cards. Each project should emphasize project name, role, stack, database, relevant capabilities/features, status, and visual evidence. Do not fabricate metrics or business outcomes.

---

# 19. Section System

Each section should have a clear purpose.

A section should not exist merely because portfolio templates commonly contain it.

Recommended structure:

```text
Hero
↓
Selected Work
↓
Capabilities
↓
About / How I Work
↓
Experience
↓
Technology
↓
Contact
↓
Footer
```

Sections should have distinct visual rhythm while remaining part of the same system.

---

# 20. Buttons

Buttons should be visually confident but restrained.

Primary buttons should communicate:

* clear action;
* strong contrast;
* obvious affordance.

Secondary actions should be visually quieter.

Avoid excessive button variants.

Prefer a small system:

```text
Primary
Secondary
Text / Link
```

---

# 21. Links

Links should remain recognizable as interactive elements.

Hover states may use:

* underline transitions;
* opacity changes;
* subtle movement;
* color changes.

Do not make interaction dependent solely on hover.

All important interactions must remain usable on touch devices.

---

# 22. Interaction States

Interactive elements must define:

```text
Default
Hover
Focus
Active
Disabled
```

Focus state is mandatory.

Do not remove browser focus indicators without replacing them with a clearly visible accessible alternative.

---

# 23. Motion System

Motion philosophy:
**Purpose > Spectacle**

Use CSS-first motion where possible. Do not add a motion library unless there is a concrete requirement that CSS cannot reasonably satisfy.

## Allowed
* subtle opacity/reveal transitions
* small vertical movement
* image hover scale
* hover/focus transitions

## Avoid
* parallax
* scroll-jacking
* continuous floating elements
* excessive animation
* animated gradients
* decorative cursor effects

Always respect:

```text
prefers-reduced-motion
```

---

# 24. Responsive Design

Responsive design is part of the design system, not a final adaptation step.

## Mobile

Prioritize:

* readability;
* clear hierarchy;
* touch accessibility;
* portrait composition;
* simplified navigation;
* controlled typography.

Avoid simply shrinking desktop layouts.

## Tablet

Use tablet space to preserve hierarchy without forcing desktop density.

## Desktop

Take advantage of:

* larger typography;
* generous whitespace;
* editorial grids;
* image composition;
* asymmetric layouts.

---

# 25. Accessibility

Accessibility is a visual and engineering requirement.

The design system must support:

* WCAG principles;
* sufficient contrast;
* keyboard navigation;
* visible focus;
* semantic structure;
* reduced motion;
* readable typography;
* touch-friendly controls.

Never use:

* low-contrast text for aesthetic reasons;
* tiny text for metadata that is essential;
* animation as the only way to communicate state;
* color as the only semantic indicator.

---

# 26. Component Foundation

Prepare only the primitives required by the current architecture:
* Container
* Section
* Button
* TextLink
* ProjectFeature

Do not create a large generic design system. Avoid premature abstractions.

---

# 27. Tailwind Rules

Tailwind CSS is the primary styling system.

Prefer:

* existing design tokens;
* consistent spacing;
* semantic class composition;
* reusable component patterns.

Avoid excessive arbitrary values.

Arbitrary values are acceptable when they represent an intentional editorial requirement that cannot reasonably be expressed using the existing system.

If an arbitrary value becomes repeated, promote it into the design system.

---

# 28. Design Token Philosophy

Design tokens should represent semantic decisions.

Prefer:

```text
color-background
color-foreground
spacing-section
spacing-content
radius-control
radius-surface
type-display
type-body
```

rather than implementation-specific names.

The goal is consistency and maintainability, not maximum token count.

---

# 29. Impeccable Integration

Impeccable is used as a visual design specialist.

It should:

* critique;
* refine;
* audit;
* improve;
* document visual patterns.

It should not independently redefine the entire visual identity.

Before significant visual changes, evaluate:

```text
PRODUCT.md
SPEC.md
DESIGN_SYSTEM.md
```

When Impeccable identifies a visual problem, prioritize changes using:

```text
1. Accessibility
2. Hierarchy
3. Layout
4. Typography
5. Spacing
6. Consistency
7. Interaction
8. Decoration
```

Fix the highest-impact issues first.

---

# 30. Visual Anti-Patterns

The following should trigger immediate review:

### Generic AI aesthetic

Examples:

* giant gradient headline;
* purple/blue neon gradients;
* glassmorphism panels;
* excessive rounded cards;
* random glowing blobs;
* generic floating UI;
* fake dashboard screenshots.

### Excessive decoration

Examples:

* particles;
* noise;
* unnecessary grid backgrounds;
* decorative code;
* unnecessary 3D objects.

### Interaction gimmicks

Examples:

* cursor-following effects;
* forced scrolling;
* excessive parallax;
* hover effects on everything;
* animation that delays content access.

### Over-designed interfaces

If the visitor notices the effects more than the work, the design has gone too far.

---

# 31. Visual QA

Before considering a major UI section complete, review:

## Composition

* [ ] Strong visual hierarchy
* [ ] Clear focal point
* [ ] Intentional whitespace
* [ ] Alignment is consistent
* [ ] No accidental visual clutter

## Typography

* [ ] Correct hierarchy
* [ ] Readable line lengths
* [ ] Appropriate responsive scaling
* [ ] No unnecessary font variation

## Layout

* [ ] Responsive behavior is intentional
* [ ] No horizontal overflow
* [ ] Grid remains coherent
* [ ] Spacing follows the system

## Interaction

* [ ] Hover states are meaningful
* [ ] Focus states are visible
* [ ] Touch interactions work
* [ ] Motion is purposeful

## Accessibility

* [ ] Contrast is sufficient
* [ ] Semantic structure is correct
* [ ] Keyboard navigation works
* [ ] Reduced motion is respected
* [ ] Images have appropriate alternatives

## Performance

* [ ] Images are optimized
* [ ] No unnecessary client components
* [ ] No unnecessary JavaScript
* [ ] Animations are performant
* [ ] Fonts are handled efficiently

---

# 32. Design Decision Rule

When choosing between two visually valid solutions:

Prefer the solution that is:

1. clearer;
2. simpler;
3. more accessible;
4. more performant;
5. more consistent;
6. more distinctive;
7. less dependent on decorative effects.

---

# 33. Final Design Principle

> **Make it memorable through composition and craft, not through visual noise.**

The portfolio should look like something a skilled engineer with strong design judgment deliberately built.

Not a template.

Not a dashboard.

Not an AI-generated landing page.

A product.
