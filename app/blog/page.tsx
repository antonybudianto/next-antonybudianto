import DarkmodeButtonWrapper from "@/components/DarkmodeButtonWrapper";
import ErrorBoundary from "@/components/ErrorBoundary";
import Link from "next/link";

import { getAllPosts } from "../../lib/api";
import BlogCard from "./BlogCard";

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
      <DarkmodeButtonWrapper />
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 text-gray-800 dark:text-white min-h-screen">
        <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-20">
          <div className="text-4xl ab-fade-l ab-time--1">Blog</div>
          <div className="ab-fade-l ab-time--2">
            by{" "}
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-500"
            >
              Antony Budianto
            </Link>
          </div>

          <div className="mt-7 md:mt-10 grid gap-10 lg:gap-10 md:grid-cols-2">
            {allPosts.map((p) => (
              <BlogCard
                key={p.slug}
                slug={p.slug}
                title={p.title}
                ogImage={p.ogImage}
                tags={["technology"]}
                date={new Date(p.date).toDateString()}
              />
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
