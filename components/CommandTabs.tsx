"use client";

import { useId, useRef, useState } from "react";

import CopyButton from "./CopyButton";

interface Command {
  label: string;
  command: string;
}

/**
 * Copy-and-run lines. Several commands that do the same thing for different
 * harnesses become tabs, so only the one the reader needs is on screen; a
 * single command renders as a plain line.
 *
 * `relative z-10` lifts the whole block above the stretched title link in
 * WorkGrid, so commands stay selectable and the tabs do not navigate the card.
 */
export default function CommandTabs({ items }: { items: Command[] }) {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const current = items[index];
  const tabbed = items.length > 1;

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (index + step + items.length) % items.length;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="relative z-10 overflow-hidden rounded-xl border border-line bg-subtle">
      {tabbed ? (
        <div
          role="tablist"
          aria-label="Choose your agent"
          className="flex gap-4 border-b border-line px-4"
          onKeyDown={onKeyDown}
        >
          {items.map((item, i) => {
            const selected = i === index;
            return (
              <button
                key={item.label}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`-mb-px border-b-2 py-2.5 text-[13px] font-medium transition-colors duration-200 ${
                  selected
                    ? "border-ink text-ink"
                    : "border-transparent text-faint hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        id={`${id}-panel`}
        role={tabbed ? "tabpanel" : undefined}
        aria-labelledby={tabbed ? `${id}-tab-${index}` : undefined}
        className="flex items-center gap-3 py-1.5 pl-4 pr-1.5"
      >
        <span aria-hidden="true" className="t-mono select-none text-faint">
          $
        </span>
        {/* Long commands scroll sideways on phones. The scrollbar is hidden
            and the right edge fades instead; the copy button is the real way
            to take the whole line. */}
        <code className="t-mono min-w-0 flex-1 overflow-x-auto whitespace-pre py-1.5 pr-4 text-ink [mask-image:linear-gradient(to_left,transparent,#000_24px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {current.command}
        </code>
        <CopyButton value={current.command} label={`${current.label} command`} />
      </div>
    </div>
  );
}
