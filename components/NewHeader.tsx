import Link from "next/link";
import DarkmodeButtonWrapper from "./DarkmodeButtonWrapper";

interface NewHeaderProps {
  nav?: {
    name: string;
    href: string;
  };
}

export default function NewHeader({ nav }: NewHeaderProps) {
  return (
    <div className="fixed top-0 left-0 px-2 py-2 lg:py-3 w-full z-40 backdrop-blur-lg font-semibold">
      <div className="flex container max-w-6xl mx-auto justify-between items-center">
        <div className="text-slate-700 dark:text-white font-bold text-xl">
          <Link title="Home" href="/" className="hover:underline">
            antonybudianto
          </Link>
          {nav ? (
            <span>
              {" / "}
              <Link
                className="text-cyan-700 dark:text-cyan-100 hover:underline"
                href={nav.href}
                title={nav.name}
              >
                {nav.name}
              </Link>
            </span>
          ) : null}
        </div>
        <DarkmodeButtonWrapper />
      </div>
    </div>
  );
}
