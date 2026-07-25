"use client";

import { useEffect, useState } from "react";

import { hasToc, type TocItem } from "@/lib/toc";

/**
 * Roughly the fixed header plus a little air — matches the `scroll-margin-top`
 * on headings in markdown-styles.css, so the entry that highlights after a jump
 * is the one that actually lands below the header.
 */
const OFFSET = 104;

/** Literal classes, so Tailwind's scanner still sees them. */
const INDENT = ["pl-3", "pl-6", "pl-9"];

function useActiveHeading(items: TocItem[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!headings.length) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;

      /* The final section is usually too short to ever reach the top of the
         viewport, so bottoming out the page hands it the highlight. */
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) {
        setActive(headings[headings.length - 1].id);
        return;
      }

      let current = headings[0];
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > OFFSET) break;
        current = heading;
      }
      setActive(current.id);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  return active;
}

function TocList({ items, active }: { items: TocItem[]; active: string }) {
  return (
    <ol className="border-l border-rule">
      {items.map((item) => {
        const current = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={current ? "location" : undefined}
              className={`-ml-px block border-l-2 py-1 text-[12.5px] leading-snug transition-colors duration-200 ${
                INDENT[item.depth]
              } ${
                current
                  ? "border-warm text-warm"
                  : "border-transparent text-mute hover:border-rule hover:text-ink"
              }`}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Sticky rail beside the column. Placed as a direct child of the post grid, so
 * it holds its own track rather than sitting inside the prose measure.
 */
export function TocRail({ items }: { items: TocItem[] }) {
  const active = useActiveHeading(items);

  if (!hasToc(items)) return null;

  return (
    <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
      <span className="t-label">Contents</span>
      <nav className="mt-3">
        <TocList items={items} active={active} />
      </nav>
    </aside>
  );
}

/**
 * The same list for narrow screens, where there is no room for a rail. Sits in
 * the flow above the body, closed by default so it costs one line until asked
 * for.
 */
export function TocDisclosure({ items }: { items: TocItem[] }) {
  const active = useActiveHeading(items);

  if (!hasToc(items)) return null;

  return (
    <details className="mt-8 border-y border-rule py-3 lg:hidden">
      <summary className="t-label cursor-pointer list-none marker:content-none">
        Contents — {items.length} sections
      </summary>
      <nav className="mt-3">
        <TocList items={items} active={active} />
      </nav>
    </details>
  );
}
