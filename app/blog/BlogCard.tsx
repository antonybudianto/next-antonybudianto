import Link from "next/link";

import LayerMark from "@/components/LayerMark";

interface BlogCardProps {
  index: number;
  title: string;
  slug: string;
  /** ISO date string from the post frontmatter. */
  date: string;
  ogImage?: string;
}

/**
 * Fixed locale so the build output is deterministic rather than dependent on
 * the machine doing the rendering.
 */
const fmt = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export default function BlogCard({
  title,
  slug,
  date,
  ogImage,
  index,
}: BlogCardProps) {
  return (
    <article
      className="ab-fade-b group flex flex-col border border-rule bg-panel transition-colors duration-300 hover:border-cool"
      style={{ animationDelay: `${0.05 + index * 0.06}s` }}
    >
      <Link
        href={`/blog/${slug}`}
        className="block"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="flex aspect-video items-center justify-center overflow-hidden border-b border-rule bg-panel-2">
          {ogImage ? (
            <img
              src={ogImage}
              alt=""
              loading={index > 2 ? "lazy" : undefined}
              decoding="async"
              className="h-full w-full object-cover"
            />
          ) : (
            /* No cover image: the site's own mark stands in rather than
               borrowing a placeholder from someone else's CDN. */
            <LayerMark depth={4} rungs={5} width={40} />
          )}
        </div>
      </Link>

      <div className="flex grow flex-col gap-3 p-4">
        <h2 className="t-title">
          <Link href={`/blog/${slug}`} className="group-hover:text-cool">
            {title}
          </Link>
        </h2>
        <time className="t-label mt-auto" dateTime={date}>
          {fmt.format(new Date(date))}
        </time>
      </div>
    </article>
  );
}
