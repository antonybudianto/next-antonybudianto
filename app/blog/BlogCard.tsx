import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  ogImage: string;
  tags: string[];
}

export default function BlogCard({
  title,
  slug,
  date,
  tags,
  ogImage,
}: BlogCardProps) {
  return (
    <div className="cursor-pointer group ab-fade-b ab-time--2">
      <div className="relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 aspect-video">
        <Link href={`/blog/${slug}`}>
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          >
            <img
              alt="Thumbnail"
              src={
                ogImage ||
                "https://cdn.sanity.io/images/cijrdavx/production/05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png?rect=0,0,800,468&amp;w=3840&amp;q=75&amp;fit=clip&amp;auto=format"
              }
              decoding="async"
              data-nimg="fill"
              className="transition-all md:hover:scale-110"
              style={{
                position: "absolute",
                inset: "0px",
                boxSizing: "border-box",
                padding: "0px",
                border: "none",
                margin: "auto",
                display: "block",
                width: "0px",
                height: "0px",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </span>
        </Link>
      </div>
      <div className="flex gap-3">
        {tags.map((tag, i) => (
          <a key={i} href="#tech">
            <span className="inline-block mt-3 text-xs font-medium tracking-wider uppercase text-blue-600 dark:text-blue-200 hover:underline">
              {tag}
            </span>
          </a>
        ))}
      </div>
      <h2 className="mt-0 md:mt-1 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
        <span className="bg-gradient-to-r from-cyan-200 to-cyan-100 dark:from-cyan-800 dark:to-cyan-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </span>
      </h2>
      <div className="flex items-center mt-1 md:mt-2 space-x-3 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0 w-5 h-5">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <img
                alt="Antony Budianto"
                src="/_next/image?url=%2Fprofile.jpeg&w=384&q=75"
                decoding="async"
                data-nimg="fill"
                className="rounded-full"
                width="20"
                height="20"
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
              />
            </span>
          </div>
          <span className="text-sm">Antony Budianto</span>
        </div>
        <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
        <time className="text-sm">
          {/* October 21, 2022 */}
          {date}
        </time>
      </div>
    </div>
  );
}
