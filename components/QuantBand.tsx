/**
 * The quantized ramp — five discrete steps, never interpolated. Reducing
 * precision without losing the signal, which is what running a 4-bit model
 * actually is. Used as the site's recurring mark: header edge, section
 * dividers, metric bars. See PROPOSAL.md §3.1.
 */
export default function QuantBand({
  /** How many of the five steps are lit; the rest fall back to --rule. */
  steps = 5,
  className = "",
}: {
  steps?: number;
  className?: string;
}) {
  return (
    <div className={`band ${className}`} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <i
          key={n}
          style={{ background: n <= steps ? `var(--q${n})` : "var(--rule)" }}
        />
      ))}
    </div>
  );
}
