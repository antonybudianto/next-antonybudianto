import Head from "next/head";
import Image from "next/image";

import deesainJpg from "../public/deesain.jpg";
import stickyJpg from "../public/sticky.jpeg";
import jsbJpg from "../public/jsb.jpg";
import apart3d from "../public/meta-home.jpg";
import HomePortfolio from "../components/HomePortfolio";

const WORKS = [
  {
    title: "3D Apart",
    localHref: "/home",
    imgSrc: apart3d,
    desc: `Interactive Web 3D Apartment with low-poly design.`,
  },
  {
    title: "Deesain",
    href: "https://deesain.com",
    imgSrc: deesainJpg,
    desc: `Modern Design platform for social media, thumbnails, or any
  creative works`,
    imgW: 2880 / 5,
    imgH: 1446 / 5,
  },
  {
    title: "StickyNoted",
    href: "https://stickynoted.netlify.app/",
    imgSrc: stickyJpg,
    desc: `Simple Sticky Note app with Markdown flavour. Supports progressive
      web app so users can install on Android, iOS, Windows.`,
    imgW: 2880 / 5,
    imgH: 1446 / 5,
  },
  {
    title: "JSBench",
    href: "https://jsbench.netlify.com",
    imgSrc: jsbJpg,
    desc: `Simple JS Benchmark tools, easily compare code's performance side-by-side.`,
    imgW: 2184 / 4,
    imgH: 1278 / 4,
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800 text-white h-screen">
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
        <div
          className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-start items-center"
          style={{
            height: "95%",
          }}
        >
          <div className="text-left">
            <div className="container">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                priority
                className="rounded-full mb-5"
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-white-900 my-8 sm:mt-14 sm:mb-10">
              Antony Budianto
            </h1>
            <p className="text-gray-400 text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
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
                className="w-full sm:w-auto flex-none bg-blue-600 hover:bg-blue-900 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                href="#work"
              >
                View work
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="work">
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
          />
        ))}
      </div>

      <div className="px-4 py-8 bg-gray-900 mx-auto text-center text-gray-100">
        &copy; {new Date().getFullYear()}. Antony Budianto.
      </div>
    </>
  );
}
