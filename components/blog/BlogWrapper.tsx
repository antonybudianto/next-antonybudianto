import React from "react";

import QuantBand from "@/components/QuantBand";
import SiteFooter from "@/components/SiteFooter";
import { TocDisclosure, TocRail } from "@/components/blog/TableOfContents";
import { hasToc, type TocItem } from "@/lib/toc";

const fmt = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

interface BlogWrapperProps {
  title: string;
  /** ISO date string from the post frontmatter. */
  publishDate: string;
  /** Headings pulled off the rendered body — see lib/toc.ts. */
  toc?: TocItem[];
  children: React.ReactNode;
}

function BlogWrapper({
  title,
  publishDate,
  toc = [],
  children,
}: BlogWrapperProps) {
  /* Posts without enough headings keep the two-column measure rather than
     reserving an empty track. */
  const columns = hasToc(toc)
    ? "sm:grid-cols-[108px_1fr] lg:grid-cols-[108px_minmax(0,1fr)_190px]"
    : "sm:grid-cols-[108px_1fr]";

  return (
    <>
      <main className="min-h-screen bg-bg">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 md:px-8">
          <div className={`grid gap-6 sm:gap-7 ${columns}`}>
            <div className="sm:sticky sm:top-24 sm:self-start">
              <span className="t-label">Post</span>
              <QuantBand steps={2} className="mt-3 max-w-[72px]" />
              <p className="t-label mt-3">
                <time dateTime={publishDate}>
                  {fmt.format(new Date(publishDate))}
                </time>
              </p>
            </div>

            <div className="min-w-0">
              <h1 className="t-head text-[clamp(24px,4vw,38px)]">{title}</h1>

              <TocDisclosure items={toc} />

              <div className="mt-10">{children}</div>

              <div className="mt-16 flex items-center gap-3 border-t border-rule pt-6">
                <img
                  className="h-9 w-9 rounded-full border border-rule"
                  src="/profile.jpeg"
                  alt="Antony Budianto"
                  width={36}
                  height={36}
                />
                <div>
                  <p className="t-title">Antony Budianto</p>
                  <p className="t-label mt-0.5">
                    Software engineering, web, and some random life thoughts
                  </p>
                </div>
              </div>
            </div>

            <TocRail items={toc} />
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

export default BlogWrapper;
