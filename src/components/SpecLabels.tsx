type SpecRow = {
  label: string;
  value: string;
};

type SpecLabelsProps = {
  rows: SpecRow[];
  /** ink = light text on dark; paper = dark text on light */
  tone?: "ink" | "paper";
  className?: string;
};

/** Typographic ROLE / STACK / IMPACT sheet — not a card. */
export function SpecLabels({
  rows,
  tone = "ink",
  className = "",
}: SpecLabelsProps) {
  const labelClass =
    tone === "ink" ? "text-paper/45" : "text-muted";
  const valueClass =
    tone === "ink" ? "text-paper/85" : "text-ink";

  return (
    <dl className={`grid gap-5 sm:grid-cols-3 sm:gap-8 ${className}`}>
      {rows.map((row) => (
        <div key={row.label}>
          <dt className={`text-meta ${labelClass}`}>{row.label}</dt>
          <dd
            className={`mt-2 text-[0.9rem] leading-snug ${valueClass}`}
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
