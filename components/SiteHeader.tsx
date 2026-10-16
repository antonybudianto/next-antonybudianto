import Link from "next/link";

import DarkmodeButtonWrapper from "./DarkmodeButtonWrapper";

type Section = "work" | "experience" | "writing" | "lab";

const NAV: { id: Section; name: string; href: string }[] = [
  { id: "work", name: "Work", href: "/#work" },
  { id: "experience", name: "Experience", href: "/#experience" },
  { id: "writing", name: "Writing", href: "/blog" },
];

export default function SiteHeader({ active }: { active?: Section }) {
  return (
    <header className="surface-blur sticky top-0 z-40 border-b border-line">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5"
          aria-label="Antony Budianto — home"
        >
          <img
            src="/profile.jpeg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 rounded-full border border-line object-cover"
          />
          {/* The avatar carries the link on phones, where the nav needs the
              room. */}
          <span className="hidden truncate text-[15px] font-semibold tracking-[-0.015em] sm:inline">
            Antony Budianto
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="flex items-center text-[14px]">
            {NAV.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={active === item.id ? "page" : undefined}
                className={`rounded-full px-2.5 py-1.5 transition-colors duration-200 sm:px-3 ${
                  active === item.id
                    ? "text-ink"
                    : "text-mute hover:text-ink"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <span className="mx-1 h-4 w-px bg-line" aria-hidden="true" />
          <DarkmodeButtonWrapper />
        </div>
      </div>
    </header>
  );
}
