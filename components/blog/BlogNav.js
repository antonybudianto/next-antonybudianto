"use client";

import React, { useState } from "react";
import Link from "next/link";

function BlogNav(props) {
  const [menuHidden, setMenuHidden] = useState(true);

  return (
    <nav
      id="header"
      className="fixed bg-blue-100 dark:bg-gray-900 dark:text-white w-full z-10 top-0"
    >
      <div id="progress" className="h-1 z-20 top-0"></div>

      <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <Link
            href="/blog"
            className="text-gray-900 dark:text-white no-underline hover:no-underline font-extrabold text-xl"
          >
            Antony{"'"}s Blog
          </Link>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            onClick={() => setMenuHidden((m) => !m)}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:border-blue-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:w-auto lg:block mt-2 lg:mt-0 z-20 px-5 py-3 lg:px-0 lg:py-0 ${
            menuHidden ? "hidden" : ""
          }`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link
                className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                href="/"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default BlogNav;
