import Link from "next/link";
import Image from "next/image";
import useScrollAnimation from "./hooks/useScrollAnimation";

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
}) {
  useScrollAnimation();

  return (
    <div className="bg-gradient-to-tr flex flex-col justify-center from-gray-900 via-gray-900 to-gray-800 text-white lg:h-screen">
      <div className="container mx-auto py-5 lg:pb-20 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold tracking-tight text-blue-200 my-8 sm:mt-14 sm:mb-10">
          {title}
        </h2>
        <div>
          <div className="flex flex-col lg:flex-row tems-center">
            <div className="w-12/12 lg:w-8/12">
              <Image
                src={imgSrc}
                className="rounded-lg shadow-md"
                alt={imgAlt}
                width={imgW}
                height={imgH}
                placeholder="blur"
              />
            </div>
            <div className="w-12/12 mt-3 lg:mt-0 lg:ml-14 lg:w-4/12">
              <div className="text-lg sm:text-2xl">{desc}</div>
              <div className="my-5">
                {localHref ? (
                  <Link href={localHref}>
                    <a className="whitespace-nowrap inline-flex rounded-md bg-blue-900 py-3 sm:py-4 px-5  sm:px-6 text-sm font-semibold uppercase text-blue-100 hover:bg-blue-800">
                      Visit {title}
                    </a>
                  </Link>
                ) : (
                  <a
                    href={href}
                    className="whitespace-nowrap inline-flex rounded-md bg-blue-900 py-3 sm:py-4 px-5  sm:px-6 text-sm font-semibold uppercase text-blue-100 hover:bg-blue-800"
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
                      className="show-on-scroll rounded-lg w-1/3 xl:w-1/5 shadow-md mr-3 lg:mr-8"
                      autoPlay
                      muted
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
                      className="show-on-scroll rounded-lg h-20 lg:h-32 2xl:h-40 w-1/3 xl:w-1/5 shadow-md mr-3 lg:mr-8"
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