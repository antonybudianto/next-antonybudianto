/**
 * The ambient ground.
 *
 * Replaces WeightsField, which drew a quantized cell grid on a canvas at 12fps
 * — deliberately discrete, and it read as stuttering rather than as a machine
 * aesthetic. This is pure CSS: a fine board grid panning on a seamless loop
 * under two slow chromatic washes drifting at unrelated periods. Nothing here
 * is interpolated in JavaScript and nothing repaints — the whole thing is
 * `transform` on three composited layers, so it runs at display refresh rate
 * and costs nothing on the main thread.
 *
 * Server component: no client JS ships for this at all.
 */
export default function Substrate() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grid. Oversized and inset past the viewport so a full cell of travel
          never exposes an edge. */}
      <div
        className="substrate-grid absolute -inset-24"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Two washes: vein and signal, at the palette's lowest alphas. They keep
          the ground from being flat black without becoming a gradient hero. */}
      <div
        className="substrate-wash-a absolute -left-1/4 -top-1/3 h-[110vh] w-[110vh]"
        style={{
          background:
            "radial-gradient(closest-side, var(--wash-cool), transparent 72%)",
        }}
      />
      <div
        className="substrate-wash-b absolute -right-1/4 top-[38vh] h-[95vh] w-[95vh]"
        style={{
          background:
            "radial-gradient(closest-side, var(--wash-warm), transparent 70%)",
        }}
      />

      {/* Holds the bottom of long pages down so running text never fights the
          field. */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg))",
        }}
      />
    </div>
  );
}
