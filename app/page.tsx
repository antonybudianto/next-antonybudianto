import Image from "next/image";
import Link from "next/link";

// import apart3d from "../public/meta-3d/meta-home.jpg";
// import mdvm3d from "../public/meta-3d/meta-maldive-mini.jpg";
import HomePortfolio from "../components/HomePortfolio";
import DarkmodeButtonWrapper from "../components/DarkmodeButtonWrapper";
import { WORKS } from "../components/data";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 dark:text-white lg:h-screen">
        <DarkmodeButtonWrapper />
        <div
          className="container mx-auto px-4 sm:px-6 md:px-8 py-16 lg:py-0 flex justify-start items-center"
          style={{
            height: "95%",
          }}
        >
          <div className="text-left">
            <div className="container">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                className="rounded-full mb-5"
                priority
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-500 dark:text-gray-100 my-8 sm:mt-14 sm:mb-10">
              Antony Budianto
            </h1>
            <p className="text-gray-700 dark:text-gray-400 text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
              Engineering, Open-source dev, Web
            </p>
            <div className="flex flex-wrap flex-row gap-2">
              <a
                className="bg-sky-600 dark:bg-gray-700 dark:hover:bg-gray-500 hover:bg-sky-500 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                href="https://github.com/antonybudianto"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="bg-sky-600 dark:bg-gray-700 dark:hover:bg-gray-500 hover:bg-sky-500 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                href="#work"
              >
                Recent works
              </a>
              <Link
                href="/blog"
                className="bg-sky-600 dark:bg-gray-700 dark:hover:bg-gray-500 hover:bg-sky-500 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
              >
                Blog
              </Link>
              {/* <Link
                href="/3d"
                className="bg-sky-600 dark:bg-gray-700 dark:hover:bg-gray-500 hover:bg-sky-500 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
              >
                3D Showcase
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div
        id="work"
        style={{
          contentVisibility: "auto",
        }}
      >
        {WORKS.map((w, i) => (
          <HomePortfolio
            key={i}
            // @ts-ignore
            localHref={w.localHref}
            href={w.href}
            title={w.title}
            desc={w.desc}
            imgSrc={w.imgSrc}
            imgAlt={w.title}
            imgW={w.imgW}
            imgH={w.imgH}
            thumbs={w.thumbs}
          />
        ))}
      </div>

      <div className="px-4 py-8 bg-blue-50 dark:bg-gray-900 mx-auto text-center text-gray-700 dark:text-gray-100">
        &copy; {new Date().getFullYear()}. Antony Budianto.
      </div>
    </>
  );
}

// export default function RootPage() {
//   return (
//     <div>aaa</div>
//   )
// }