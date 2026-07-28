import { ArrowCta } from "@/components/ArrowCta";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

/**
 * Final connect band + giant brand name footer.
 * Matches the reference: contact block, then oversized name.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-16 sm:gap-20 md:gap-28">
      <Reveal className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16">
        <div>
          <p className="text-meta text-ink">Connect with me</p>
          <ul className="mt-5 flex flex-col gap-2">
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

        <ArrowCta href={`mailto:${site.email}`}>Contact me</ArrowCta>
      </Reveal>

      <Reveal delay={80}>
        <p className="mx-auto flex max-w-lg items-start justify-center gap-4 px-2 text-center text-[0.9rem] leading-relaxed text-muted">
          <span aria-hidden="true" className="font-display text-title leading-none text-ink/20">
            [
          </span>
          <span className="pt-1">{site.tagline}</span>
          <span aria-hidden="true" className="font-display text-title leading-none text-ink/20">
            ]
          </span>
        </p>
      </Reveal>

      <Reveal delay={140}>
        <p
          className="font-display text-display select-none text-center leading-[0.85]"
          aria-hidden="true"
        >
          {site.name}
        </p>
        <p className="text-meta mt-8 text-center text-muted">
          © {year} · {site.location}
        </p>
      </Reveal>
    </div>
  );
}
