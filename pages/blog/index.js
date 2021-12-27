import Head from "next/head";
import Link from "next/link";
import { SHOWCASE_LIST } from "../../components/scenes/list";

export default function MaldiveMiniPage() {
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
          <meta name="description" content="Blog by Antony Budianto" />
          <meta property="og:site_name" content="antonybudianto.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Blog by Antony" />
          <meta property="og:description" content="Blog by Antony Budianto" />
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
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-gray-900 rounded px-5 py-3">
            <Link href="/blog/intro-to-3d-on-web">
              <a>Intro to 3D on Web</a>
            </Link>
          </div>
          <div className="bg-blue-50 dark:bg-gray-900 rounded px-5 py-3">
            Modeling a simple door
          </div>
          <div className="bg-blue-50 dark:bg-gray-900 rounded px-5 py-3">
            Modeling a simple door
          </div>
          <div className="bg-blue-50 dark:bg-gray-900 rounded px-5 py-3">
            Modeling a simple door
          </div>
        </div>
      </div>
    </div>
  );
}
