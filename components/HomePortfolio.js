import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-800 text-white lg:h-screen">
      <div className="container mx-auto py-5 lg:pb-20 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold tracking-tight text-white-900 my-8 sm:mt-14 sm:mb-10">
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
                    <a className="whitespace-nowrap inline-flex rounded-md bg-blue-900 py-4 px-6 text-sm font-semibold uppercase text-blue-100 hover:bg-blue-800">
                      Visit {title}
                    </a>
                  </Link>
                ) : (
                  <a
                    href={href}
                    className="whitespace-nowrap inline-flex rounded-md bg-blue-900 py-4 px-6 text-sm font-semibold uppercase text-blue-100 hover:bg-blue-800"
                  >
                    Visit {title}
                  </a>
                )}
              </div>
            </div>
          </div>
          {thumbs.length !== 0 ? (
            <div className="flex my-5 lg:mt-6 max-w-full sm:max-w-none overflow-x-auto">
              {thumbs.map(({ type, src: videoSrc }, tmbIdx) => {
                if (type === "video") {
                  return (
                    <video
                      className="rounded-lg w-1/3 xl:w-1/5 shadow-md mr-3 lg:mr-8"
                      autoPlay
                      muted
                      loop
                      key={tmbIdx}
                    >
                      <source src={videoSrc} type="video/mp4" />
                    </video>
                  );
                } else if (type === "img") {
                  return (
                    <div
                      key={tmbIdx}
                      className={`rounded-lg h-20 lg:h-32 2xl:h-40 w-1/3 xl:w-1/5 shadow-md mr-3 lg:mr-8`}
                      style={{
                        background: `url(${videoSrc})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
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
