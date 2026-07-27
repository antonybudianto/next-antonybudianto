import { Metadata } from "next";

import ErrorBoundary from "@/components/ErrorBoundary";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LayerMark from "@/components/LayerMark";

import { getAllPosts } from "../../lib/api";
import BlogCard from "./BlogCard";

export const metadata: Metadata = {
  title: "Blog by Antony",
  description: "Blog by Antony Budianto, post about web and technology",
  openGraph: {
    siteName: "antonybudianto.com",
    title: "Blog by Antony",
    description: "Blog by Antony Budianto, post about web and technology",
    url: "https://antonybudianto.com/blog",
    images: ["https://vercel-og-ab.vercel.app/api/blog?title=Blog%20by%20Antony"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog by Antony",
    description: "Blog by Antony",
    images: ["https://vercel-og-ab.vercel.app/api/blog?title=Blog%20by%20Antony"],
    site: "@antonybudianto",
  },
};

async function getData() {
  try {
    const allPosts = getAllPosts([
      "title",
      "desc",
      "date",
      "slug",
      "active",
      "ogImage",
    ]);
    return { allPosts };
  } catch (e) {
    return { allPosts: [] };
  }
}

export default async function BlogIndex() {
  const { allPosts } = await getData();

  return (
    <ErrorBoundary>
      <SiteHeader nav={{ href: "/blog", name: "writing" }} />

      <main className="on-field min-h-screen">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 md:px-8 lg:pb-24">
          <div className="grid gap-6 sm:grid-cols-[108px_1fr] sm:gap-7">
            <div>
              <span className="t-label">Writing</span>
              <LayerMark depth={2} className="mt-3" />
            </div>
            <div className="min-w-0">
              <h1 className="t-head">Notes on web, tooling and 3D</h1>
              <p className="t-body mt-3 text-mute">
                {allPosts.length} posts. Longer pieces on build tooling,
                rendering and the things I take apart.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
                {allPosts.map((p, i) => (
                  <BlogCard
                    index={i}
                    key={p.slug}
                    slug={p.slug}
                    title={p.title}
                    ogImage={p.ogImage}
                    date={p.date}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </ErrorBoundary>
  );
}
