import Head from "next/head";
import Image from "next/image";

import deesainJpg from "../public/deesain.jpg";
import stickyJpg from "../public/sticky.jpeg";
import jsbJpg from "../public/jsb.jpg";
import apart3d from "../public/meta-home.jpg";
import mdvm3d from "../public/meta-maldive-mini.jpg";
import HomePortfolio from "../components/HomePortfolio";
import DarkmodeButton from "../components/DarkmodeButton";
import { useEffect, useState } from "react";
import Link from "next/link";

const WORKS = [
  {
    title: "3D Maldive Mini",
    localHref: "/3d/maldive-mini",
    imgSrc: mdvm3d,
    desc: `Interactive Web 3D Maldive-inspired island and resort`,
    imgW: 1218 / 2.5,
    imgH: 657 / 2.5,
    thumbs: [
      {
        type: "img",
        src: "/img-thumbs/mdvm1.jpg",
      },
      {
        type: "img",
        src: "/img-thumbs/mdvm2.jpg",
      },
      {
        type: "img",
        src: "/img-thumbs/mdvm3.jpg",
      },
    ],
  },
  {
    title: "3D Apart",
    localHref: "/3d/apart",
    imgSrc: apart3d,
    desc: `Interactive Web 3D Apartment with low-poly design.`,
    imgW: 1748 / 3,
    imgH: 756 / 3,
    thumbs: [
      {
        type: "video",
        src: "/video/mov1.mp4",
      },
      {
        type: "video",
        src: "/video/mov2a.mp4",
      },
      {
        type: "video",
        src: "/video/mov3a.mp4",
      },
    ],
  },
  {
    title: "Deesain",
    href: "https://deesain.com",
    imgSrc: deesainJpg,
    desc: `Modern Graphic Design platform for social media and any
  creative works`,
    imgW: 2880 / 5,
    imgH: 1446 / 5,
    thumbs: [
      {
        type: "img",
        src: "/img-thumbs/deesain-t1.jpg",
      },
      {
        type: "img",
        src: "/img-thumbs/deesain-t2a.jpg",
      },
    ],
  },
  {
    title: "StickyNoted",
    href: "https://stickynoted.netlify.app/",
    imgSrc: stickyJpg,
    desc: `Simple Sticky Note app with Markdown flavour`,
    imgW: 2880 / 5,
    imgH: 1446 / 5,
  },
  {
    title: "JSBench",
    href: "https://jsbench.netlify.com",
    imgSrc: jsbJpg,
    desc: `Simple JS Benchmark tool to compare code's performance side-by-side.`,
    imgW: 2184 / 4,
    imgH: 1278 / 4,
  },
];

export default function Home() {
  const [dark, setDark] = useState(
    typeof window !== "undefined" ? window.__dark : "light"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme = dark ? "dark" : "light";
    window.__dark = dark;
  }, [dark]);

  return (
    <>
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 dark:text-white lg:h-screen">
        <Head>
          <title>Antony Budianto</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Engineer, Open-source dev, Google cloud certified"
          />
          <meta name="og:title" content="Antony Budianto" />
          <meta
            name="og:description"
            content="Engineer, Open-source dev, Google cloud certified"
          />
        </Head>
        <div className="fixed top-3 right-3 z-10">
          <DarkmodeButton
            title="Switch Night Mode"
            onClick={() => {
              setDark(!dark);
            }}
          >
            {dark ? "🌙" : "☀️"}
          </DarkmodeButton>
        </div>
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
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-blue-500 dark:text-blue-100 my-8 sm:mt-14 sm:mb-10">
              Antony Budianto
            </h1>
            <p className="text-gray-700 dark:text-gray-400 text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
              Engineer, Open-source dev, Google Cloud certified
            </p>
            <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 ">
              <a
                className="w-full sm:w-auto flex-none bg-gray-700 hover:bg-gray-600 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                href="https://github.com/antonybudianto"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="w-full sm:w-auto flex-none bg-blue-900 hover:bg-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                href="#work"
              >
                View work
              </a>
              <Link href="/3d">
                <a className="w-full sm:w-auto flex-none bg-blue-900 hover:bg-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                  3D Showcase
                </a>
              </Link>
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
