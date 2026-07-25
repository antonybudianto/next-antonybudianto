import Link from "next/link";
import { Metadata } from "next";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuantBand from "@/components/QuantBand";
import WorkGrid from "@/components/WorkGrid";

const META_TITLE = `Visit Antony Budianto's Personal Website`;
const META_DESC = `Hi! I'm Antony, currently living in Indonesia, I post tech content and web development stuff`;

const encodedTitle = encodeURIComponent("Antony Budianto");

export const metadata: Metadata = {
  title: "Antony Budianto",
  description: META_DESC,
  creator: "",
  openGraph: {
    url: "https://antonybudianto.com",
    title: META_TITLE,
    description: META_DESC,
    images: [`https://vercel-og-ab.vercel.app/api/blog?title=${encodedTitle}`],
  },
  twitter: {
    card: "summary_large_image",
    site: "@antonybudianto",
    title: META_TITLE,
    description: META_DESC,
    images: [`https://vercel-og-ab.vercel.app/api/blog?title=${encodedTitle}`],
  },
};

/** Sourced from the brief. Replaced by content/now.ts in Phase 2. */
const FOCUS = ["Frontend", "Generative AI / MCP", "Open-weight LLMs"];

const ACTIONS = [
  { name: "GitHub", href: "https://github.com/antonybudianto", external: true },
  { name: "Recent works", href: "#work" },
  { name: "Writing", href: "/blog" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* The hero is the one place the weight field is shown at full
            strength; everything below sits on a ground so prose stays off the
            texture. */}
        <section>
          <div className="mx-auto flex min-h-[92vh] max-w-6xl items-center px-4 pt-24 pb-16 sm:px-6 md:px-8">
            <div className="w-full">
              <div className="ab-fade-l ab-time--1 flex items-center gap-3">
                <img
                  src="/profile.jpeg"
                  alt="Antony Budianto"
                  width={40}
                  height={40}
                  className="rounded-full border border-rule"
                />
                <span className="t-label">Indonesia</span>
              </div>

              {/*
                TODO(Q1): the thesis line — "I build the interface layer for
                models" — plus years and current role replace the
                name-as-headline in Phase 2. Holding the existing copy until
                those are confirmed.
              */}
              <h1 className="t-display ab-fade-l ab-time--2 mt-8">
                Antony Budianto
              </h1>

              <p className="t-body ab-fade-l ab-time--3 mt-5 text-lg text-mute sm:text-xl">
                Explore and craft with technology
              </p>

              <div className="ab-fade-l ab-time--4 mt-10 flex flex-wrap gap-2">
                {ACTIONS.map((action) =>
                  action.external ? (
                    <a
                      key={action.name}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-nav border border-rule bg-panel px-4 py-2.5 text-mute transition-colors duration-200 hover:border-cool hover:text-ink"
                    >
                      {action.name}
                    </a>
                  ) : (
                    <Link
                      key={action.name}
                      href={action.href}
                      className="t-nav border border-rule bg-panel px-4 py-2.5 text-mute transition-colors duration-200 hover:border-cool hover:text-ink"
                    >
                      {action.name}
                    </Link>
                  )
                )}
              </div>

              <div className="ab-fade-l ab-time--5 mt-14 border-t border-rule pt-4">
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {FOCUS.map((item) => (
                    <li key={item} className="t-label text-mute">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="on-field scroll-mt-16 border-t border-rule">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 lg:py-24">
            <div className="grid gap-6 sm:grid-cols-[108px_1fr] sm:gap-7">
              <div>
                <span className="t-label">Work</span>
                <QuantBand steps={3} className="mt-3 max-w-[72px]" />
              </div>
              <div className="min-w-0">
                <h2 className="t-head">Recent works</h2>
                {/* TODO(Q7): each featured item still needs its one real
                    measurement — add `metric` in content/work.ts and the cards
                    will render it. */}
                <div className="mt-8">
                  <WorkGrid />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
