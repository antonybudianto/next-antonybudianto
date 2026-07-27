import { LAYERS } from "@/content/profile";

/**
 * The signature: six planes, one per shipped intervention, stacked by distance
 * from the product surface — and a signal that rises through them on a loop,
 * lighting each plane's edge as it passes.
 *
 * It is the hero's argument in one image. The claim is "I work a layer beneath
 * the interface"; this is the layers, with something moving through them.
 *
 * Decorative by construction — the six layers are also rendered as real,
 * readable rows in the experience section below, so this is `aria-hidden` and
 * ships no client JavaScript. Motion is CSS only: see the `.scene` / `.plane` /
 * `.pulse` rules in app/globals.css.
 */

/** Unequal float periods, so the planes never breathe in lockstep. */
const DURATIONS = ["15s", "19s", "13s", "22s", "17s", "24s"];

export default function LayerStack() {
  /* Bottom of the stack first, so `--i` climbs with the DOM and the pulse's
     staggered delays run in source order. */
  const planes = [...LAYERS].reverse();

  return (
    <div
      aria-hidden="true"
      className="relative flex items-center justify-center"
    >
      <div className="scene">
        {planes.map((layer, i) => (
          <div
            key={layer.depth}
            className={`plane ${
              i === planes.length - 1
                ? "plane--dots"
                : i === 0
                ? "plane--grid"
                : ""
            }`}
            style={
              {
                "--i": i,
                "--dur": DURATIONS[i],
              } as React.CSSProperties
            }
          />
        ))}
        <div className="pulse" />
      </div>
    </div>
  );
}
