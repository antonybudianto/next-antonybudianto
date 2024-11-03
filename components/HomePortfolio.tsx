import Link from "next/link";

interface Thumb {
  type: string;
  src: string;
}

interface HomePortfolioProps {
  title: string;
  imgW: number;
  imgH: number;
  localHref: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  desc: string;
  thumbs: Thumb[];
}

function HomePortfolio({
  title,
  imgW,
  imgH,
  localHref,
  href,
  imgSrc,
  imgAlt,
  desc,
  thumbs = [],
}: HomePortfolioProps) {
  // useScrollAnimation();

  return (
    <div className="bg-gradient-to-tr border-b-2 border-sky-500/20 dark:border-white/5 flex flex-col justify-center text-gray-500 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 dark:text-white lg:h-screen">
      <div className="container mx-auto py-5 lg:pb-20 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold tracking-tight text-sky-700 dark:text-blue-200 my-8 sm:mt-14 sm:mb-10">
          {title}
        </h2>
        <div>
          <div className="flex flex-col lg:flex-row tems-center">
            <div className="w-12/12 lg:w-8/12">
              <img
                src={imgSrc}
                className="rounded-lg shadow-md"
                alt={imgAlt}
                width={imgW}
                height={imgH}
              />
            </div>
            <div className="w-12/12 mt-3 lg:mt-0 lg:ml-14 lg:w-4/12">
              <div className="text-lg text-gray-600 dark:text-blue-100 sm:text-xl">
                {desc}
              </div>
              <div className="my-7">
                {localHref ? (
                  <Link
                    href={localHref}
                    className="bg-sky-200 dark:bg-gray-700 dark:hover:bg-gray-500 hover:bg-sky-100 text-sky-900 dark:text-sky-50 text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                  >
                    Visit {title}
                  </Link>
                ) : (
                  <a
                    href={href}
                    className="bg-sky-200 dark:bg-gray-700 dark:hover:bg-gray-500 hover:bg-sky-100 text-sky-900 dark:text-sky-50 text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                  >
                    Visit {title}
                  </a>
                )}
              </div>
            </div>
          </div>
          {thumbs.length !== 0 ? (
            <div className="flex my-5 lg:mt-6 max-w-full sm:max-w-none overflow-x-auto">
              {thumbs.map(({ type, src: tmbSrc }, tmbIdx) => {
                if (type === "video") {
                  return (
                    <video
                      data-animate-type="lg:animate-fadeslide"
                      className="show-on-scroll rounded-lg w-1/3 xl:w-1/5 mr-3 lg:mr-8"
                      autoPlay
                      muted
                      playsInline
                      loop
                      key={tmbIdx}
                      style={{
                        willChange: "transform, opacity",
                      }}
                    >
                      <source src={tmbSrc} type="video/mp4" />
                    </video>
                  );
                } else if (type === "img") {
                  return (
                    <div
                      key={tmbIdx}
                      data-animate-type="lg:animate-fadeslide"
                      className="show-on-scroll rounded-lg h-20 lg:h-32 2xl:h-40 w-1/3 xl:w-1/5 mr-3 lg:mr-8"
                      style={{
                        background: `url(${tmbSrc})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        willChange: "transform, opacity",
                      }}
                    ></div>
                  );
                }
                return null;
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default HomePortfolio;
