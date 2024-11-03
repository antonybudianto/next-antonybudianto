import ErrorBoundary from "@/components/ErrorBoundary";

import { getAllPosts } from "../../lib/api";
import BlogCard from "./BlogCard";
import NewHeader from "@/components/NewHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog by Antony",
  description: "Blog by Antony Budianto, post about web and technology",
  openGraph: {
    siteName: "antonybudianto.com",
    title: "Blog by Antony",
    description: "Blog by Antony Budianto, post about web and technology",
    url: "https://antonybudianto.com/blog",
    images: [
      "https://vercel-og-ab.vercel.app/api/blog?title=Blog%20by%20Antony"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog by Antony",
    description: "Blog by Antony",
    images: [
      "https://vercel-og-ab.vercel.app/api/blog?title=Blog%20by%20Antony"
    ],
    site: "@antonybudianto"
  },
  themeColor: "#FFFFFF"
};

async function getData() {
  try {
    const allPosts = getAllPosts([
      "title",
      "desc",
      "date",
      "slug",
      "active",
      "ogImage"
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
      <NewHeader
        nav={{
          href: "/blog",
          name: "Blog"
        }}
      />
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 text-gray-800 dark:text-white min-h-screen">
        <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 pt-14 md:px-8 py-8 lg:py-20">
          <div className="grid gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((p, i) => (
              <BlogCard
                index={i}
                key={p.slug}
                slug={p.slug}
                title={p.title}
                ogImage={p.ogImage}
                tags={["tech"]}
                date={new Date(p.date).toDateString()}
              />
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
