import Head from "next/head";
import Link from "next/link";
import { SHOWCASE_LIST } from "../../components/scenes/list";

export default function MaldiveMiniPage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 text-gray-800 dark:text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-10 ">
        <Head>
          <title>3D Showcase by Antony</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="3D Interactive Showcase by Antony Budianto"
          />
          <meta property="og:site_name" content="antonybudianto.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="3D Showcase" />
          <meta
            property="og:description"
            content="3D Interactive Showcase by Antony Budianto"
          />
          <meta property="og:url" content="https://antonybudianto.com/3d" />
          <meta
            property="og:image"
            content="https://antonybudianto.com/meta-3d/meta-maldive-mini.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="3D Showcase" />
          <meta
            name="twitter:description"
            content="3D Interactive Showcase by Antony Budianto"
          />
          <meta name="twitter:url" content="https://antonybudianto.com/3d" />
          <meta
            name="twitter:image"
            content="https://antonybudianto.com/meta-3d/meta-maldive-mini.jpg"
          />
          <meta name="twitter:site" content="@antonybudianto" />
          <meta name="theme-color" content="#FFFFFF" />
        </Head>
        <div className="text-4xl">3D Showcase</div>
        <div>
          by{" "}
          <Link href="/">
            <a className="text-blue-600 dark:text-blue-300">Antony Budianto</a>
          </Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {SHOWCASE_LIST.map((l, i) => (
            <div
              key={i}
              className="shadow rounded-md relative overflow-hidden flex items-around"
            >
              <Link href={`/3d/${l.id}`} passHref>
                <img
                  className="cursor-pointer rounded-md"
                  alt={l.name}
                  src={l.img}
                />
              </Link>
              <div className="absolute bg-blue-50 text-gray-600 px-2 py-1 rounded bottom-0 left-0 dark:bg-gray-700 dark:text-white">
                {l.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
