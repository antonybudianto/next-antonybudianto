import Link from "next/link";
import { Metadata } from "next";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WorkGrid from "@/components/WorkGrid";
import LayerStack from "@/components/LayerStack";
import ExperienceLayers from "@/components/ExperienceLayers";
import { PROFILE, STACK } from "@/content/profile";

const META_TITLE = "Antony Budianto — web engineer, Indonesia";
const META_DESC =
  "Frontend platform engineering: design systems, in-house frameworks and the tooling other teams ship on. Ten years across fintech, HRIS, e-commerce and omni-channel. Now building agent systems with MCP, skills and local models.";

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

const SHELL = "mx-auto w-full max-w-[1180px] px-4 sm:px-6 md:px-8";

/**
 * Section headers are two-part: a mono label saying what the section is, and a
 * display line saying what it argues. The right-hand slot carries a real note,
 * never decoration.
 */
function SectionHead({
  label,
  title,
  note,
}: {
  label: string;
  title: string;
  note?: React.ReactNode;
}) {
  return (
    <div className="in-view flex flex-col gap-5 border-t border-rule pt-5 md:flex-row md:items-end md:justify-between md:gap-10">
      <div>
        <span className="t-label">{label}</span>
        <h2 className="t-head mt-3 max-w-[24ch]">{title}</h2>
      </div>
      {note ? (
        <p className="t-data max-w-[36ch] text-[11.5px] leading-relaxed text-faint md:text-right">
          {note}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ------------------------------------------------------------------
            Hero. The statement on the left, the thing it describes on the
            right: six layers with a signal rising through them.
            ------------------------------------------------------------------ */}
        <section className={`${SHELL} iso-bleed pb-20 pt-32 md:pb-28 md:pt-40`}>
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:gap-10">
            <div>
              <p className="t-label rise d-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>{PROFILE.role}</span>
                <span className="text-rule">/</span>
                <span>{PROFILE.location}</span>
                <span className="text-rule">/</span>
                <span>{PROFILE.years}</span>
              </p>

              {/* Emphasis comes from the width axis, not from colour: the first
                  line runs wide and light, the second narrow and heavy. Same
                  family, two very different voices. */}
              <h1 className="t-display mt-7">
                <span
                  className="rise d-2 block"
                  style={{ fontWeight: 500, fontStretch: "100%" }}
                >
                  {PROFILE.thesis}
                </span>
                <span
                  className="rise d-3 block"
                  style={{ fontWeight: 800, fontStretch: "80%" }}
                >
                  {PROFILE.thesisAccent}
                </span>
              </h1>

              <p className="t-lead rise d-4 mt-8">{PROFILE.lead}</p>

              <div className="rise d-5 mt-10 flex flex-wrap gap-3">
                <Link href="#work" className="btn btn--signal">
                  <span>See the work</span>
                </Link>
                <a
                  href="https://github.com/antonybudianto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
                    />
                  </svg>
                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Three facts, kept current in content/profile.ts. */}
              <dl className="rise d-6 mt-14 grid gap-x-8 gap-y-4 border-t border-rule pt-5 sm:grid-cols-3">
                {PROFILE.now.map((fact, i) => (
                  <div key={fact.label}>
                    <dt className="t-label flex items-center gap-2">
                      {i === 0 ? (
                        <span
                          aria-hidden="true"
                          className="breathe inline-block h-1 w-1 rounded-full bg-warm"
                        />
                      ) : null}
                      {fact.label}
                    </dt>
                    <dd className="t-data mt-1.5 text-[12.5px] text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

          </div>
        </section>

        {/* ------------------------------------------------------------------
            Profile + toolkit. One band: who, where, and what with.
            ------------------------------------------------------------------ */}
        <section id="profile" className="on-field scroll-mt-16">
          <div className={`${SHELL} py-14 md:py-20`}>
            <SectionHead label="Profile" title="Introduction" />

            <div className="in-view mt-9 grid gap-12 md:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16">
              <div className="min-w-0">
                <div className="flex items-center gap-5">
                  <img
                    src="/profile.jpeg"
                    alt={PROFILE.name}
                    width={88}
                    height={88}
                    className="h-[88px] w-[88px] shrink-0 border border-rule object-cover"
                  />
                  <div className="min-w-0">
                    <p className="t-title">{PROFILE.name}</p>
                    <p className="t-label mt-1.5">
                      {PROFILE.role} / {PROFILE.location}
                    </p>
                    <a
                      href={PROFILE.credential.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link t-data mt-3 inline-block text-[11.5px]"
                    >
                      {PROFILE.credential.name} ↗
                    </a>
                  </div>
                </div>

                <p className="t-body mt-8 text-mute">
                  Ten years of web work across B2B, HRIS, e-commerce, fintech,
                  CRM and omni-channel — mostly on the parts other engineers
                  depend on. These days most of my time goes to agentic
                  workflows: MCP servers, agent skills, and open-weight models
                  running on my own hardware. I also build{" "}
                  <a
                    href="https://krevios.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Krevios
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://stickynoted.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    StickyNoted
                  </a>
                  , and contribute to open source occasionally.
                </p>

                {/* Range, shown rather than claimed. Runs continuously; pauses
                    on hover so a name can be read. */}
                <div className="mt-10 border-t border-rule pt-4">
                  <span className="t-label">Industries</span>
                  <div className="ticker mt-3">
                    {[0, 1].map((copy) => (
                      <div
                        key={copy}
                        className="ticker-track"
                        aria-hidden={copy === 1 ? "true" : undefined}
                      >
                        {PROFILE.industries.map((industry) => (
                          <span
                            key={industry}
                            className="t-data text-[12.5px] text-mute"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <span className="t-label">Toolkit</span>
                <dl className="mt-5 border-t border-rule">
                  {STACK.map((group) => (
                    <div
                      key={group.group}
                      className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[132px_1fr] sm:gap-6"
                    >
                      <dt className="t-label pt-0.5">{group.group}</dt>
                      <dd className="t-data flex flex-wrap gap-x-4 gap-y-1.5 text-[12.5px] text-ink">
                        {group.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            Work.
            ------------------------------------------------------------------ */}
        <section id="work" className="on-field scroll-mt-16">
          <div className={`${SHELL} py-14 md:py-20`}>
            <SectionHead
              label="Work"
              title="What is live, and what shipped."
              note="Krevios is still in closed beta."
            />
            <div className="mt-9 md:mt-12">
              <WorkGrid />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            Experience — the reason the page exists. Last, so the page closes on
            what was shipped rather than on what is live.
            ------------------------------------------------------------------ */}
        <section id="experience" className="on-field scroll-mt-16">
          <div className={`${SHELL} py-14 md:py-20`}>
            <SectionHead
              label="Experience"
              title="Some things I shipped into other teams' workflow."
              note={
                <>
                  Ordered by distance from the product surface, not by date.
                  Roles, companies and dates are on{" "}
                  <a
                    href="https://www.linkedin.com/in/antonybudianto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    LinkedIn ↗
                  </a>
                </>
              }
            />
            <div className="mt-9 md:mt-12">
              <ExperienceLayers />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
