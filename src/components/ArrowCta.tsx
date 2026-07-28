import type { ReactNode } from "react";

type ArrowCtaProps = {
  href: string;
  children: ReactNode;
  /** Open in new tab when true */
  external?: boolean;
  className?: string;
};

/** Chunky arrow CTA — matches the reference CONTACT ME treatment. */
export function ArrowCta({
  href,
  children,
  external = false,
  className = "",
}: ArrowCtaProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 font-display text-title tracking-wide transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 48 24"
        className="h-5 w-10 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 sm:h-6 sm:w-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12H42M42 12L32 3M42 12L32 21"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
        />
      </svg>
    </a>
  );
}
