import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
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
      <div className="p-8 mx-auto container rounded-xl shadow-md bg-white">
        <h2
          id="work"
          className="mb-8 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-blue-700"
        >
          My recent work
        </h2>
        <div
          className="flex flex-col lg:flex-row"
          style={{
            contentVisibility: "auto",
          }}
        >
          <div className="py-2 bg-white text-gray-500 lg:w-4/12">
            <h3 className="text-2xl font-bold mb-2">
              <a
                className="text-green-800 hover:underline"
                href="https://deesain.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deesain
              </a>
            </h3>
            <p className="mb-5">
              Modern Design platform for social media, thumbnails, or any
              creative works. Made using NextJS (React), Bootstrap, and
              Firebase.
            </p>
            <Image
              src="/deesain.jpg"
              alt="Deesain"
              className="rounded"
              width={2880 / 5}
              height={1446 / 5}
            />
          </div>

          <div className="py-2 bg-white text-gray-500 lg:w-4/12 mt-8 lg:mt-0 lg:ml-12">
            <h3 className="text-2xl font-bold mb-2">
              <a
                className="text-green-800 hover:underline"
                href="https://stickynoted.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                StickyNoted
              </a>
            </h3>
            <p className="mb-5">
              Simple Sticky Note app with Markdown flavour. Supports progressive
              web app so users can install on Android and iOS.
            </p>
            <Image
              src="/sticky.jpeg"
              alt="StickyNoted"
              className="rounded"
              width={2880 / 5}
              height={1446 / 5}
            />
          </div>

          <div className="py-2 bg-white text-gray-500 lg:w-4/12 mt-8 lg:mt-0 lg:ml-12">
            <h3 className="text-2xl font-bold mb-2">
              <a
                className="text-green-800 hover:underline"
                href="https://jsbench.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                JSBench
              </a>
            </h3>
            <p className="mb-5">
              Simple JS Benchmark tools, easily compare codes side-by-side.
              Using WebWorker API for UI responsiveness.
            </p>
            <div
              className="border rounded-lg overflow-hidden"
              style={{
                height: "200px",
              }}
            >
              <Image
                src="/jsb.jpg"
                alt="JSBench"
                className="rounded"
                width={2184 / 5}
                height={1278 / 5}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto text-center container text-gray-500">
        Designed with{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TailwindCSS
        </a>
        . {new Date().getFullYear()}.
      </div>
    </div>
  );
}
