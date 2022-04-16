import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../../lib/api";

export default function BlogIndex({ allPosts }) {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 text-gray-800 dark:text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-10 ">
        <Head>
          <title>Blog by Antony</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Blog by Antony Budianto, post about web and technology"
          />
          <meta property="og:site_name" content="antonybudianto.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Blog by Antony" />
          <meta
            property="og:description"
            content="Blog by Antony Budianto, post about web and technology"
          />
          <meta property="og:url" content="https://antonybudianto.com/blog" />
          {/* <meta
            property="og:image"
            content="https://antonybudianto.com/meta-3d/meta-maldive-mini.jpg"
          /> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Blog by Antony" />
          <meta name="twitter:description" content="Blog by Antony" />
          <meta name="twitter:url" content="https://antonybudianto.com/blog" />
          {/* <meta
            name="twitter:image"
            content="https://antonybudianto.com/meta-3d/meta-maldive-mini.jpg"
          /> */}
          <meta name="twitter:site" content="@antonybudianto" />
          <meta name="theme-color" content="#FFFFFF" />
        </Head>
        <div className="text-4xl">Blog</div>
        <div>
          by{" "}
          <Link href="/">
            <a className="text-blue-600 dark:text-blue-300">Antony Budianto</a>
          </Link>
        </div>
        <div className="mt-8 gap-4">
          {allPosts.map((p, i) => (
            <div
              key={i}
              className="bg-blue-50 dark:bg-gray-900 rounded px-5 py-3 mb-3 shadow"
            >
              <Link href={"/blog/" + p.slug}>
                <a className="text-2xl font-extrabold hover:underline">
                  {p.title}
                </a>
              </Link>
              <div className="text-gray-500">{p.desc}</div>

              <div className="text-sm mt-1 text-gray-400">
                posted at {new Date(p.date).toDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "desc", "date", "slug"]);

  return {
    props: { allPosts },
  };
}
