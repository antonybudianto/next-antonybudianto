import Image from "next/legacy/image";
import Link from "next/link";

import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import DarkmodeButtonWrapper from "@/components/DarkmodeButtonWrapper";
import RecentWork from "./RecentWork";
import { Metadata } from "next";

const META_TITLE = `Visit Antony Budianto's Personal Website`;
const META_DESC = `Hi! I'm Antony, currently living in Indonesia, I post tech content and web development stuff`;

const encodedTitle = encodeURIComponent("Antony Budianto");

export const metadata: Metadata = {
  title: "Antony Budianto",
  description: META_DESC,
  creator: "",
  openGraph: {
    url: "https://antonybudianto.com",
    title: META_TITLE,
    description: META_DESC,
    images: [`https://vercel-og-ab.vercel.app/api/blog?title=${encodedTitle}`],
  },
  twitter: {
    card: "summary_large_image",
    site: "@antonybudianto",
    title: META_TITLE,
    description: META_DESC,
    images: [`https://vercel-og-ab.vercel.app/api/blog?title=${encodedTitle}`],
  },
};

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 dark:text-white lg:h-screen">
        <DarkmodeButtonWrapper />
        <div className="fixed top-0 left-0 px-3 lg:px-20 py-5 w-full z-40 backdrop-blur-lg font-semibold">
          antonybudianto
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-0 lg:py-0 flex min-h-[88vh] md:min-h-screen justify-start items-center">
          <div className="text-left">
            <div className="container">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                className="rounded-full mb-5 ab-fade ab-time--1"
                priority
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-500 dark:text-gray-100 my-8 sm:mt-14 sm:mb-10 ab-fade-l ab-time--2">
              Antony Budianto
            </h1>
            <p className="text-gray-700 dark:text-gray-400 text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 ab-fade-l ab-time--3">
              Engineering, Open-source dev, Web
            </p>
            <div className="flex flex-wrap flex-row gap-2 ab-fade-l ab-time--4">
              <a
                className="bg-sky-200 dark:bg-gray-700 text-sky-900 dark:text-sky-50 dark:hover:bg-gray-500 hover:bg-sky-100 text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                href="https://github.com/antonybudianto"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="bg-sky-200 dark:bg-gray-700 text-sky-900 dark:text-sky-50 dark:hover:bg-gray-500 hover:bg-sky-100 text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                href="#work"
              >
                Recent works
              </a>
              <Link
                href="/blog"
                className="bg-sky-200 dark:bg-gray-700 text-sky-900 dark:text-sky-50 dark:hover:bg-gray-500 hover:bg-sky-100 text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
              >
                Blog
              </Link>
              {/* <Link
                href="/3d"
                className="bg-sky-200 dark:bg-gray-700 text-sky-900 dark:text-sky-50 dark:hover:bg-gray-500 hover:bg-sky-100 text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
              >
                3D Showcase
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div id="work" className="bg-gray-50 dark:bg-zinc-900 py-2">
        <div className="my-5 px-2 lg:px-0 lg:my-20 container mx-auto">
          <h3 className="text-xl lg:text-4xl leading-none font-extrabold tracking-tight text-gray-500 dark:text-gray-100 my-5 sm:mb-10 ab-fade-l ab-time--2">
            Recent works
          </h3>
          <RecentWork />
        </div>
      </div>
      <div className="bg-blue-50 dark:bg-black">
        <div className="px-2 py-8 lg:px-0 lg:py-10 container mx-auto flex justify-center items-center flex-col">
          <h3 className="text-xl lg:text-4xl leading-none font-extrabold tracking-tight text-gray-500 dark:text-gray-100 my-5 sm:mb-10 ab-fade-l ab-time--2">
            Let's connect
          </h3>
          <div className="flex gap-8">
            <a
              title="Twitter"
              href="https://twitter.com/antonybudianto"
              className="text-gray-800 dark:text-white text-4xl"
            >
              <FaTwitter />
            </a>
            <a
              title="GitHub"
              href="https://github.com/antonybudianto"
              className="text-gray-800 dark:text-white text-4xl"
            >
              <FaGithub />
            </a>
            <a
              title="Instagram"
              href="https://instagram.com/antonybudianto"
              className="text-gray-800 dark:text-white text-4xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 bg-blue-50 dark:bg-black mx-auto text-center text-gray-700 dark:text-gray-100">
        &copy; {new Date().getFullYear()}. Antony Budianto.
      </div>
    </>
  );
}
