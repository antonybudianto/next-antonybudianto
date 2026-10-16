import React from "react";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { TocDisclosure, TocRail } from "@/components/blog/TableOfContents";
import { formatDate } from "@/lib/date";
import { hasToc, type TocItem } from "@/lib/toc";

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
  /* Posts without enough headings keep a single column rather than reserving
     an empty track. */
  const columns = hasToc(toc)
    ? "lg:grid-cols-[minmax(0,720px)_200px] lg:justify-between"
    : "lg:grid-cols-[minmax(0,720px)]";

  return (
    <>
      <main className="shell pb-24 pt-10 md:pt-16">
        <div className={`grid gap-16 ${columns}`}>
          <article className="min-w-0">
            <Link
              href="/blog"
              className="link-quiet inline-flex items-center gap-1.5 text-[14px]"
            >
              <ArrowLeft />
              Writing
            </Link>

            <h1 className="t-h1 mt-8">{title}</h1>

            <div className="mt-6 flex items-center gap-3">
              <img
                className="h-9 w-9 rounded-full border border-line object-cover"
                src="/profile.jpeg"
                alt=""
                width={36}
                height={36}
              />
              <div className="leading-tight">
                <p className="text-[14px] font-medium">Antony Budianto</p>
                <p className="t-meta mt-0.5">
                  <time dateTime={publishDate}>{formatDate(publishDate)}</time>
                </p>
              </div>
            </div>

            <TocDisclosure items={toc} />

            <div className="mt-10 border-t border-line pt-2">{children}</div>

            <div className="card mt-16 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img
                  className="h-10 w-10 rounded-full border border-line object-cover"
                  src="/profile.jpeg"
                  alt="Antony Budianto"
                  width={40}
                  height={40}
                />
                <div className="leading-tight">
                  <p className="text-[15px] font-semibold">Antony Budianto</p>
                  <p className="t-meta mt-1">
                    Software engineering, web, and some random life thoughts
                  </p>
                </div>
              </div>
              <Link
                href="/blog"
                className="link-quiet inline-flex shrink-0 items-center gap-1.5 text-[14px]"
              >
                More writing <ArrowRight />
              </Link>
            </div>
          </article>

          <TocRail items={toc} />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

export default BlogWrapper;
