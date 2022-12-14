import React from "react";
import Link from "next/link";

import BlogFooter from "./BlogFooter";
import BlogNav from "./BlogNav";

function BlogWrapper({ title, publishDate, children }) {
  return (
    <>
      <div className="pt-20 min-h-screen bg-blue-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <div className="container md:max-w-3xl mx-auto w-full px-4 md:px-6 text-xl leading-normal">
          <div className="font-sans">
            <p className="text-base md:text-sm text-blue-500 dark:text-blue-300 font-bold">
              &lt;{" "}
              <Link
                href="/blog"
                className="text-base md:text-sm font-bold no-underline hover:underline"
              >
                BACK TO BLOG
              </Link>
            </p>
            <h1 className="font-bold font-sans break-normal pt-6 pb-2 text-3xl md:text-4xl">
              {title}
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-400">
              Posted at {publishDate}
            </p>
          </div>
          {children}
          <div className=" flex w-full items-center font-sans px-4 py-12">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://antonybudianto.com/profile.jpeg"
              alt="Avatar of Antony"
            />
            <div className="flex-1 px-2">
              <p className=" font-bold text-base md:text-xl leading-none mb-2">
                Antony Budianto
              </p>
              <p className=" text-xs md:text-base">
                Software Engineering, Web, and some random life thoughts.
              </p>
            </div>
          </div>
          <BlogFooter />
        </div>
      </div>
    </>
  );
}

export default BlogWrapper;
