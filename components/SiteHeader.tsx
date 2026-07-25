import Link from "next/link";

import DarkmodeButtonWrapper from "./DarkmodeButtonWrapper";
import QuantBand from "./QuantBand";

interface SiteHeaderProps {
  /** Current section, shown after the wordmark as a breadcrumb. */
  nav?: {
    name: string;
    href: string;
  };
}

/**
 * Nav lists only routes that exist today. /work and /about arrive in Phase 2,
 * and /writing + /lab replace /blog + /3d once the Netlify redirects land —
 * see PROPOSAL.md §4. Linking /3d here also fixes the orphaned showcase noted
 * in the audit.
 */
const NAV = [
  { name: "work", href: "/#work" },
  { name: "writing", href: "/blog" },
  { name: "lab", href: "/3d" },
];

export default function SiteHeader({ nav }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 z-40 w-full">
      <div className="surface-blur border-b border-rule">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8">
          <div className="t-title min-w-0 truncate">
            {/* The mark sits over the wordmark rather than running the full
                width — full-bleed it read as a progress bar. */}
            <QuantBand className="mb-1.5 w-[132px]" />
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

          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="t-nav flex items-center gap-4 sm:gap-5">
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
