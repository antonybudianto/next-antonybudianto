import { LAYERS } from "@/content/profile";

/**
 * Shipped work from the profile README, one row each: the layer it touched,
 * what shipped and why it mattered, and the tools involved.
 */
export default function ExperienceList() {
  return (
    <ol className="divide-y divide-line border-t border-line">
      {LAYERS.map((layer) => (
        <li
          key={layer.title}
          className="grid gap-x-10 gap-y-2 py-7 md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-baseline"
        >
          <p className="t-meta first-letter:uppercase">{layer.layer}</p>
          <div className="min-w-0">
            <h3 className="t-h3">{layer.title}</h3>
            <p className="t-small mt-1.5 max-w-[62ch] text-mute">
              {layer.detail}
            </p>
          </div>
          <ul className="mt-2 flex flex-wrap gap-1.5 md:mt-0 md:justify-end">
            {layer.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
