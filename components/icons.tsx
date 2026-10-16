/**
 * Arrows as SVG rather than text glyphs: "↗" and "→" come from different
 * fallback fonts and render at visibly different sizes and weights.
 */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowUpRight({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`arrow shrink-0 ${className}`}
    >
      <path d="M5 11 11 5M6 5h5v5" {...STROKE} />
    </svg>
  );
}

export function ArrowLeft({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path d="M13 8H3M7 4 3 8l4 4" {...STROKE} />
    </svg>
  );
}

export function ArrowRight({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`arrow--right shrink-0 ${className}`}
    >
      <path d="M3 8h10M9 4l4 4-4 4" {...STROKE} />
    </svg>
  );
}
