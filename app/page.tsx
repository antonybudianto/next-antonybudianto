import Link from "next/link";
import { Metadata } from "next";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WorkGrid from "@/components/WorkGrid";
import ExperienceList from "@/components/ExperienceList";
import PostList from "@/components/PostList";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { LINKS, PROFILE, STACK } from "@/content/profile";
import { getAllPosts } from "@/lib/api";

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

const GITHUB = LINKS.find((l) => l.name === "GitHub")!;
const LINKEDIN = LINKS.find((l) => l.name === "LinkedIn")!;

/** Stagger index for the arrival animation in globals.css. */
const enter = (i: number) =>
  ({ "--i": i } as React.CSSProperties);

function SectionHead({
  title,
  desc,
  aside,
}: {
  title: string;
  desc?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
      <div>
        <h2 className="t-h2">{title}</h2>
        {desc ? <p className="mt-2 max-w-[56ch] text-mute">{desc}</p> : null}
      </div>
      {aside ? <div className="shrink-0 text-[14px]">{aside}</div> : null}
    </div>
  );
}

/** Sections are separated by a hairline inset to the content width. */
function Section({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="shell">
      <div className="border-t border-line py-16 md:py-24">{children}</div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.63 0H2.37A2.37 2.37 0 0 0 0 2.37v11.26A2.37 2.37 0 0 0 2.37 16h11.26A2.37 2.37 0 0 0 16 13.63V2.37A2.37 2.37 0 0 0 13.63 0ZM4.9 13.4H2.53V6.02H4.9v7.38ZM3.72 5a1.37 1.37 0 1 1 0-2.74 1.37 1.37 0 0 1 0 2.74Zm9.76 8.4h-2.37V9.8c0-.86-.02-1.96-1.2-1.96-1.2 0-1.38.93-1.38 1.9v3.66H6.16V6.02h2.27v1h.03c.32-.6 1.09-1.22 2.24-1.22 2.4 0 2.84 1.58 2.84 3.63v3.97Z"
      />
    </svg>
  );
}

export default function Home() {
  const posts = getAllPosts(["title", "desc", "date", "slug", "active"]).slice(
    0,
    3
  );

  const facts = [
    ...PROFILE.now,
    { label: "Based in", value: PROFILE.location },
    {
      label: "Certified",
      value: PROFILE.credential.name,
      href: PROFILE.credential.href,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main>
        {/* ------------------------------------------------------------------
            Hero
            ------------------------------------------------------------------ */}
        <section className="shell pb-20 pt-14 md:pb-28 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end lg:gap-20">
            <div>
              <img
                src="/profile.jpeg"
                alt={PROFILE.name}
                width={72}
                height={72}
                className="enter h-[72px] w-[72px] rounded-full border border-line object-cover shadow-sm"
                style={enter(0)}
              />

              <p
                className="enter mt-8 text-[15px] font-medium text-mute"
                style={enter(1)}
              >
                {PROFILE.role} · {PROFILE.years}
              </p>
              <h1 className="t-display enter mt-2" style={enter(2)}>
                {PROFILE.name}
              </h1>

              <p
                className="t-lead enter mt-6 max-w-[58ch]"
                style={enter(3)}
              >
                {PROFILE.lead}
              </p>

              <div
                className="enter mt-9 flex flex-wrap gap-3"
                style={enter(4)}
              >
                <Link href="#work" className="btn btn--primary">
                  See the work
                </Link>
                <a
                  href={GITHUB.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn max-sm:w-10 max-sm:px-0"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href={LINKEDIN.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn max-sm:w-10 max-sm:px-0"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* What is true right now. Kept current in content/profile.ts. */}
            <aside className="card enter p-5" style={enter(5)}>
              <p className="flex items-center gap-2.5 text-[13px] font-medium">
                <span className="dot dot--live" aria-hidden="true" />
                Now
              </p>
              <dl className="mt-3 divide-y divide-line">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 py-3 last:pb-0"
                  >
                    <dt className="t-meta shrink-0">{fact.label}</dt>
                    <dd className="t-small min-w-0 text-right font-medium">
                      {fact.href ? (
                        <a
                          href={fact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link"
                        >
                          {fact.value}
                        </a>
                      ) : (
                        fact.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <Section id="work">
          <SectionHead
            title="Work"
            desc="What is live, and what shipped. Krevios is still in closed beta."
          />
          <div className="mt-10 md:mt-12">
            <WorkGrid />
          </div>
        </Section>

        <Section id="experience">
          <SectionHead
            title="Experience"
            desc="Some things I shipped into other teams' workflow."
            aside={
              <a
                href={LINKEDIN.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                Roles and dates on LinkedIn <ArrowUpRight />
              </a>
            }
          />
          <div className="mt-10 md:mt-12">
            <ExperienceList />
          </div>
        </Section>

        <Section id="toolkit">
          <SectionHead
            title="Toolkit"
            desc="What I reach for, and where I've used it."
          />
          <dl className="mt-10 divide-y divide-line border-t border-line md:mt-12">
            {[
              ...STACK,
              { group: "Industries", items: PROFILE.industries },
            ].map((group) => (
              <div
                key={group.group}
                className="grid gap-x-10 gap-y-3 py-5 md:grid-cols-[180px_minmax(0,1fr)] md:items-baseline"
              >
                <dt className="t-meta">{group.group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="writing">
          <SectionHead
            title="Writing"
            desc="Notes on web tooling, 3D, and running models at home."
            aside={
              <Link href="/blog" className="link-quiet">
                All posts <ArrowRight />
              </Link>
            }
          />
          <div className="mt-8 md:mt-10">
            <PostList posts={posts} />
          </div>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
