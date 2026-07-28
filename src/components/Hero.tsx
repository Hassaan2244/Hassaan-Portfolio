import type { CSSProperties } from "react";
import { ArrowCta } from "@/components/ArrowCta";
import { site } from "@/content/site";

const focusStrip = [
  "FastAPI",
  "LangChain",
  "RAG",
  "Next.js",
  "GraphQL",
  "Centrifugo",
  "Salesforce",
  "OpenAI",
  "Auth0",
  "LangGraph",
];

/**
 * Brand-first hero + connect strip + focus marquee.
 */
export function Hero() {
  const strip = [...focusStrip, ...focusStrip];

  return (
    <div className="relative flex min-h-[100svh] flex-col justify-between gap-14 py-2 sm:gap-16 md:min-h-[88vh] md:gap-20">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-8 hidden select-none font-display text-[clamp(6rem,22vw,14rem)] leading-none text-ink/[0.04] lg:block"
      >
        HB
      </p>

      <div className="relative">
        <p
          className="hero-rise text-meta text-muted"
          style={{ "--hero-delay": "40ms" } as CSSProperties}
        >
          {site.role} · {site.focus}
        </p>

        <h1
          className="hero-rise font-display text-display mt-5 max-w-[14ch]"
          style={{ "--hero-delay": "120ms" } as CSSProperties}
        >
          {site.name}
        </h1>

        <div
          className="hero-rise mt-10 grid gap-8 md:mt-14 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:gap-16 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-24"
          style={{ "--hero-delay": "220ms" } as CSSProperties}
        >
          <p className="max-w-sm text-[0.95rem] leading-relaxed text-muted md:pt-2">
            {site.summary}
          </p>

          <p className="font-display text-headline max-w-[16ch] text-ink">
            {site.tagline}
          </p>
        </div>
      </div>

      <div
        className="hero-rise -mx-[var(--space-page-x)] overflow-hidden border-y border-ink/10 py-3"
        style={{ "--hero-delay": "280ms" } as CSSProperties}
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {strip.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-[0.85rem] tracking-[0.18em] text-ink/45"
            >
              {item}
              <span className="ml-10 text-ink/20">/</span>
            </span>
          ))}
        </div>
      </div>

      <div
        className="hero-rise grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16"
        style={{ "--hero-delay": "360ms" } as CSSProperties}
      >
        <div>
          <p className="text-meta text-ink">Connect with me</p>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="link-plain break-all text-[0.95rem] sm:break-normal"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-plain text-[0.95rem]"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                {site.linkedin.label}
              </a>
            </li>
            <li className="text-[0.95rem] text-muted">{site.location}</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:items-end sm:gap-4">
          <ArrowCta href={`mailto:${site.email}`}>Contact me</ArrowCta>
          <ArrowCta href="#featured">View work</ArrowCta>
        </div>
      </div>
    </div>
  );
}
