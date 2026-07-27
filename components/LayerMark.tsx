/**
 * The site's recurring mark: a stack seen edge-on, with one rung lit.
 *
 * Replaces QuantBand. That mark encoded five discrete quantization steps, which
 * belonged to the previous direction; this one encodes depth, which is what the
 * new direction is about. Where a section has a natural depth (post, showcase,
 * work) the lit rung says which.
 */
export default function LayerMark({
  /** Which rung is lit, counting from the bottom. */
  depth = 3,
  rungs = 5,
  /** Width of an unlit rung, in px. The lit rung runs 60% longer. */
  width = 16,
  className = "",
}: {
  depth?: number;
  rungs?: number;
  width?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex flex-col-reverse gap-[3px] ${className}`}
    >
      {Array.from({ length: rungs }, (_, i) => {
        const lit = i + 1 === depth;
        return (
          <i
            key={i}
            className="block"
            style={{
              width: lit ? Math.round(width * 1.6) : width,
              height: Math.max(2, Math.round(width / 8)),
              backgroundColor: lit ? "var(--cool)" : "var(--rule)",
            }}
          />
        );
      })}
    </div>
  );
}
