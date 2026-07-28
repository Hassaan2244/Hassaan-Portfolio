import type { ReactNode } from "react";
import { TornEdge } from "./TornEdge";

type SectionBandProps = {
  id?: string;
  tone: "ink" | "paper";
  children: ReactNode;
  /** Torn edge at top, filled with the opposite tone (previous band) */
  tornTop?: boolean;
  /** Which jagged profile to use */
  tearVariant?: 0 | 1 | 2;
  className?: string;
  as?: "section" | "footer" | "div";
};

/**
 * Full-bleed black or white content band.
 * Open typographic layout — no cards.
 */
export function SectionBand({
  id,
  tone,
  children,
  tornTop = false,
  tearVariant = 0,
  className = "",
  as: Tag = "section",
}: SectionBandProps) {
  const isInk = tone === "ink";
  const tearFill = isInk ? "paper" : "ink";

  return (
    <Tag
      id={id}
      className={[
        "relative w-full",
        isInk ? "bg-ink text-paper" : "bg-paper text-ink",
        className,
      ].join(" ")}
    >
      {tornTop ? <TornEdge fill={tearFill} variant={tearVariant} /> : null}
      <div
        className={`section-pad ${tornTop ? "pt-[calc(var(--space-section-y)+1.5rem)] sm:pt-[calc(var(--space-section-y)+2rem)]" : ""}`}
      >
        {children}
      </div>
    </Tag>
  );
}
