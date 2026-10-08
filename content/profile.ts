/**
 * Verified profile content.
 *
 * Rules:
 * - Only factual, confirmed information.
 * - Do not add invented metrics, titles, or claims.
 * - Do not add fabricated clients, employers, or testimonials.
 */

export const profile = {
  name: "Fadhel",
  fullName: "Fadhel Naufal Akbar",

  /**
   * Primary professional positioning.
   * Used as eyebrow / label context.
   */
  role: "Web Developer",

  /**
   * More specific positioning.
   * Used as the subheading beneath the primary identity.
   */
  discipline: "Full-Stack Web Developer",

  /**
   * Short supporting statement for the Hero.
   * Concise, factual, non-generic.
   */
  tagline:
    "Building web applications with attention to engineering and interface quality.",

  /**
   * Primary CTA label and destination.
   */
  cta: {
    label: "View selected work",
    href: "#work",
  },

  /**
   * Optional secondary CTA.
   */
  secondaryCta: {
    label: "Contact",
    href: "#contact",
  },
} as const;
