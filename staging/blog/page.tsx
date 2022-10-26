import ErrorBoundary from "@/components/ErrorBoundary";
import Link from "next/link";

// import { getAllPosts } from "../../lib/api";

async function getData() {
  return { allPosts: [] };
}

export default async function BlogIndex() {
  const { allPosts } = await getData();
  return (
    <ErrorBoundary>
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 text-gray-800 dark:text-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-20 ">
          <div className="text-4xl">Blog</div>
          <div>
            by{" "}
            <Link href="/" className="text-blue-600 dark:text-blue-300">
              Antony Budianto
            </Link>
          </div>
          <div className="mt-8 gap-4">
            {allPosts.map((p, i) => (
              <div
                key={i}
                className="bg-blue-50 dark:bg-gray-900 rounded px-5 py-3 mb-3 shadow"
              >
                <Link
                  href={"/blog/" + p.slug}
                  className="text-2xl font-extrabold hover:underline"
                >
                  {p.title}
                </Link>
                <div className="text-gray-300">{p.desc}</div>

                <div className="text-sm mt-1 text-gray-400">
                  posted at {new Date(p.date).toDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

// async function getData() {
//   try {
//     const allPosts = getAllPosts(["title", "desc", "date", "slug", "active"]);
//     return { allPosts };
//   } catch (e) {
//     return { allPosts: [] };
//   }
// }
