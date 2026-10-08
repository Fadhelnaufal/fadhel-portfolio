import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { profile } from "@/content/profile";
import Lanyard from "./three/Lanyard";
import TechText from "@/components/ui/TechText";

/**
 * Hero — Phase 6 (Revised)
 *
 * Typography-led, asymmetric editorial composition.
 * Server Component — no client-side JavaScript required.
 *
 * Design decisions:
 * - "Fadhel" uses fluid type via CSS clamp() for identity weight.
 *   Geist Sans font-weight: 900 at extreme scale acts as a deliberate identity mark.
 * - Semantic H1 is now the visible display name.
 * - No text-stroke, no gradient fill, no glassmorphism.
 * - Asymmetric composition: constrained width on content forces left alignment
 *   with generous negative space on the right, preserving editorial feel without a portrait.
 * - Mobile: natural content flow without forced viewport heights.
 * - Reduced-motion: all entrance animation removed via CSS media query.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="hero-section relative"
    >
      <Container>
        <div
          className={[
            "hero-inner",
            "flex flex-col justify-center",
            "min-h-[auto] lg:min-h-[75vh]",
            "py-20 lg:py-32",
          ].join(" ")}
        >
          {/* ── Identity & Copy ── */}
          <div className="hero-content flex flex-col items-start max-w-4xl">
            {/* Eyebrow — role label */}
            <p
              className="hero-eyebrow text-xs font-medium tracking-[0.2em] uppercase text-muted mb-6 lg:mb-8"
              aria-hidden="true"
            >
              {profile.role}
            </p>

            {/* Semantic H1 — visually dominant identity mark */}
            <h1 className="sr-only">{profile.name}</h1>
            <div
              className="relative w-full max-w-2xl h-[120px] md:h-[180px] lg:h-[220px] -ml-2 mb-4"
              aria-hidden="true"
            >
              <TechText
                text={profile.name}
                fontWeight={900}
                fontSize={220}
                reveal="area"
                dashLength={4}
                dashGap={2}
                specks={15}
                color="#18181b"
                accentColor="#18181b"
              />
            </div>

            {/* Discipline / positioning */}
            <p className="hero-discipline text-base md:text-lg font-medium text-muted tracking-wide mt-4 lg:mt-6 mb-8 lg:mb-10">
              {profile.discipline}
            </p>

            {/* Thin editorial rule */}
            <div
              aria-hidden="true"
              className="hero-rule w-8 h-px bg-border mb-8 lg:mb-10"
            />

            {/* Supporting statement */}
            <p className="hero-tagline text-sm md:text-base text-muted leading-[1.7] max-w-[38ch] mb-10 lg:mb-12">
              {profile.tagline}
            </p>

            {/* CTAs */}
            <nav
              aria-label="Hero navigation"
              className="hero-actions flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <Link
                href={profile.cta.href}
                className="hero-cta-primary group inline-flex items-center gap-2 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors"
              >
                {profile.cta.label}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href={profile.secondaryCta.href}
                className="hero-cta-secondary text-sm font-medium text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors"
              >
                {profile.secondaryCta.label}
              </Link>
            </nav>
          </div>

          {/* ── Right side: React Bits 3D Lanyard ── */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] z-0 pointer-events-none [&_canvas]:pointer-events-auto">
            <Lanyard position={[0, 0, 15]} gravity={[0, -20, 0]} />
          </div>

        </div>
      </Container>

      {/* Section separator */}
      <div aria-hidden="true" className="border-b border-border" />
    </section>
  );
}
