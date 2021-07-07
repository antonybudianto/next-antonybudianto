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
}) {
  return (
    <div className="bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto py-5 sm:py-20 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold tracking-tight text-white-900 my-8 sm:mt-14 sm:mb-10">
          {title}
        </h2>
        <div>
          <div className="flex flex-col lg:flex-row tems-center">
            <div className="w-12/12 lg:w-8/12">
              <Image
                src={imgSrc}
                className="rounded shadow-md"
                alt={imgAlt}
                width={imgW}
                height={imgH}
                placeholder="blur"
              />
            </div>
            <div className="w-12/12 mt-3 lg:mt-0 lg:ml-14 lg:w-4/12">
              <div className="text-lg sm:text-xl">{desc}</div>
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
        </div>
      </div>
    </div>
  );
}

export default HomePortfolio;
