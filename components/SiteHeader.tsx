import Link from "next/link";

import DarkmodeButtonWrapper from "./DarkmodeButtonWrapper";
import LayerMark from "./LayerMark";

interface SiteHeaderProps {
  /** Current section, shown after the wordmark as a breadcrumb. */
  nav?: {
    name: string;
    href: string;
  };
}

/**
 * Nav lists only what exists today. `/3d` is reached from the footer and from
 * the scene cards in the work grid, so it stays out of a header that also has to
 * fit on a 360px screen.
 */
const NAV = [
  { name: "work", href: "/#work" },
  { name: "experience", href: "/#experience" },
  { name: "writing", href: "/blog" },
];

export default function SiteHeader({ nav }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 z-40 w-full">
      <div className="surface-blur border-b border-rule">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6 md:px-8">
          <div className="flex min-w-0 items-center gap-3">
            {/* The site's mark at its smallest: a stack seen edge-on. */}
            <LayerMark depth={4} rungs={4} width={9} className="shrink-0" />
            {/* Drops a size on phones so "antonybudianto" is not truncated by
                the nav. */}
            <div className="t-title min-w-0 truncate !text-[15px] sm:!text-[17px]">
              <Link href="/" title="Home" className="hover:text-cool">
                antonybudianto
              </Link>
              {nav ? (
                <>
                  <span className="text-faint"> / </span>
                  <Link href={nav.href} title={nav.name} className="text-warm">
                    {nav.name}
                  </Link>
                </>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="t-nav flex items-center gap-3.5 text-[11px] sm:gap-5 sm:text-[12px]">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-mute hover:text-ink"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <DarkmodeButtonWrapper />
          </div>
        </div>
      </div>
    </header>
  );
}
