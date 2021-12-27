import React from "react";
import Link from "next/link";

import BlogFooter from "./BlogFooter";
import BlogNav from "./BlogNav";

function BlogWrapper({ title, publishDate, children }) {
  return (
    <>
      <BlogNav />
      <div className="pt-20 bg-blue-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <div className="container md:max-w-3xl mx-auto w-full px-4 md:px-6 text-xl leading-normal">
          <div className="font-sans">
            <p className="text-base md:text-sm text-blue-500 font-bold">
              &lt;{" "}
              <Link href="/blog">
                <a className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline">
                  BACK TO BLOG
                </a>
              </Link>
            </p>
            <h1 className="font-bold font-sans break-normal pt-6 pb-2 text-3xl md:text-4xl">
              {title}
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-500">
              Published {publishDate}
            </p>
          </div>
          {children}
          <BlogFooter />
        </div>
      </div>
    </>
  );
}

export default BlogWrapper;
