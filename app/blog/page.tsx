import { Metadata } from "next";

import ErrorBoundary from "@/components/ErrorBoundary";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PostList, { type PostSummary } from "@/components/PostList";
import { yearOf } from "@/lib/date";

import { getAllPosts } from "../../lib/api";

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

function getData(): PostSummary[] {
  try {
    return getAllPosts(["title", "desc", "date", "slug", "active"]);
  } catch (e) {
    return [];
  }
}

/** Posts are already sorted newest first, so groups come out in order. */
function byYear(posts: PostSummary[]) {
  const groups: { year: number; posts: PostSummary[] }[] = [];
  for (const post of posts) {
    const year = yearOf(post.date);
    const last = groups[groups.length - 1];
    if (last?.year === year) last.posts.push(post);
    else groups.push({ year, posts: [post] });
  }
  return groups;
}

export default function BlogIndex() {
  const posts = getData();

  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col">
        <SiteHeader active="writing" />

        <main className="shell pb-24 pt-14 md:pt-24">
          <header className="max-w-[640px]">
            <h1 className="t-h1">Writing</h1>
            <p className="t-lead mt-4">
              Notes on build tooling, rendering, 3D on the web, and running
              models at home. {posts.length} posts.
            </p>
          </header>

          <div className="mt-14 flex flex-col gap-10 md:mt-16">
            {byYear(posts).map((group) => (
              <section
                key={group.year}
                className="grid gap-x-10 gap-y-2 border-t border-line pt-6 md:grid-cols-[120px_minmax(0,1fr)]"
              >
                <h2 className="t-meta pt-4 font-medium md:sticky md:top-24 md:self-start">
                  {group.year}
                </h2>
                <PostList posts={group.posts} />
              </section>
            ))}
          </div>
        </main>

        <SiteFooter />
      </div>
    </ErrorBoundary>
  );
}
