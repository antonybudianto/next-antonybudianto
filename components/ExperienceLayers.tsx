import { LAYERS } from "@/content/profile";

/**
 * The hero's diagram, flattened into something readable.
 *
 * Each row is one shipped intervention from the profile README, placed on the
 * layer it touched. The depth marker on the left is the same mark used across
 * the site, and here it does real work: the lit rung is that row's position in
 * the stack, so the column reads as a descent from the product surface down to
 * the tooling underneath.
 */
export default function ExperienceLayers() {
  return (
    <ol className="border-t border-rule">
      {LAYERS.map((layer) => (
        <li key={layer.depth} className="layer-row border-b border-rule">
          <div className="relative grid gap-x-6 gap-y-3 px-4 py-7 sm:px-6 md:grid-cols-[26px_130px_1fr_auto] md:items-baseline md:px-8">
            {/* Depth. `column-reverse` in `.rungs` puts rung 1 at the bottom,
                so the marker is oriented the same way as the diagram. */}
            <div className="rungs hidden md:flex" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <i key={n} data-on={String(n === layer.depth)} />
              ))}
            </div>

            <div className="t-label">{layer.layer}</div>

            <div className="min-w-0">
              <h3 className="t-sub">{layer.title}</h3>
              <p className="t-body mt-2 text-[14.5px] text-mute">
                {layer.detail}
              </p>
            </div>

            <ul className="t-data flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-faint md:justify-end">
              {layer.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
