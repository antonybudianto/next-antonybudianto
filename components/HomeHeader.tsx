import Link from "next/link";
import { useCallback } from "react";

import Button from "./Button";
import showCredit from "./helpers/showCredit";

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function HomeHeader({
  credits = [],
  title,
  dark,
  setDark,
  autoRotate,
  setAutoRotate,
}) {
  const handleShowCredit = useCallback(() => {
    showCredit(credits);
  }, [credits]);

  return (
    <div className="fixed left-0 top-0 z-10 w-full p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex items-center gap-3 rounded-full border py-1.5 pl-1.5 pr-4 backdrop-blur-md ${
            dark
              ? "border-white/10 bg-zinc-900/60 text-zinc-100"
              : "border-black/5 bg-white/70 text-zinc-900 shadow-sm"
          }`}
        >
          <Link
            href="/3d"
            aria-label="Back to the 3D showcase"
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
              dark ? "hover:bg-white/10" : "hover:bg-black/5"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M13 8H3M7 4 3 8l4 4" {...STROKE} />
            </svg>
          </Link>
          <div className="leading-tight">
            <p className="text-[14px] font-semibold tracking-[-0.01em]">
              {title}
            </p>
            <p
              className={`text-[12px] ${dark ? "text-zinc-400" : "text-zinc-500"}`}
            >
              by Antony Budianto
            </p>
          </div>
        </div>

        <div className="flex select-none items-center gap-2">
          {credits.length ? (
            <Button
              title="Credits"
              aria-label="Credits"
              dark={dark}
              onClick={handleShowCredit}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" {...STROKE} />
                <path d="M12 11v5M12 7.5v.5" {...STROKE} />
              </svg>
            </Button>
          ) : null}
          <Button
            title="Auto-rotate"
            aria-label="Auto-rotate"
            aria-pressed={autoRotate}
            dark={dark}
            active={autoRotate}
            onClick={() => {
              setAutoRotate(!autoRotate);
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 12a8 8 0 1 1-2.34-5.66" {...STROKE} />
              <path d="M20 4v4.5h-4.5" {...STROKE} />
            </svg>
          </Button>
          <Button
            title={dark ? "Day" : "Night"}
            aria-label={dark ? "Switch scene to day" : "Switch scene to night"}
            dark={dark}
            onClick={() => {
              setDark(!dark);
            }}
          >
            {dark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" {...STROKE} />
                <path
                  d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"
                  {...STROKE}
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"
                  {...STROKE}
                />
              </svg>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
