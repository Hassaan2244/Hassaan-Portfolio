type TornEdgeProps = {
  /** Color of the torn paper (usually the section above) */
  fill: "ink" | "paper";
  /** Alternate jagged profiles so seams don’t look stamped */
  variant?: 0 | 1 | 2;
  className?: string;
};

const PATHS: Record<0 | 1 | 2, string> = {
  0: `M0 0 H1200 V12
      C1160 28 1125 4 1080 18
      C1035 32 995 2 950 16
      C900 30 860 0 815 18
      C770 34 730 6 680 14
      C630 24 590 -2 545 16
      C500 32 460 4 415 18
      C370 30 330 0 285 14
      C240 28 200 4 155 18
      C110 30 70 6 35 16
      C15 22 5 10 0 16 Z`,
  1: `M0 0 H1200 V16
      C1175 6 1150 30 1110 12
      C1070 -2 1035 28 990 14
      C945 2 905 32 860 10
      C815 -4 775 26 730 16
      C685 4 645 34 600 12
      C555 -2 515 28 470 14
      C425 2 385 30 340 10
      C295 -2 255 26 210 16
      C165 4 125 32 80 12
      C45 0 20 24 0 14 Z`,
  2: `M0 0 H1200 V10
      C1180 22 1145 2 1105 18
      C1065 32 1030 4 985 12
      C940 22 900 0 855 20
      C810 36 770 6 725 10
      C680 16 640 34 595 8
      C550 -4 510 28 465 14
      C420 2 380 30 335 12
      C290 -2 250 26 205 16
      C160 4 120 32 75 10
      C40 0 15 20 0 12 Z`,
};

/**
 * Irregular torn-paper strip. Place at the top of a band with the
 * previous band's fill so it reads as that surface ripping into this one.
 */
export function TornEdge({
  fill,
  variant = 0,
  className = "",
}: TornEdgeProps) {
  const fillClass = fill === "ink" ? "fill-ink" : "fill-paper";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 z-10 leading-none ${className}`}
    >
      <svg
        className="torn-edge block h-8 w-full sm:h-10 md:h-12"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={fillClass} d={PATHS[variant]} />
      </svg>
    </div>
  );
}
