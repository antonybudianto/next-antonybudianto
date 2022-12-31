import React from "react";

function Footer() {
  return (
    <footer className="container md:max-w-3xl mx-auto border-t dark:border-gray-700">
      <div className="flex py-8">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full md:w-1/2 ">
            <div className="md:px-8">
              <h3 className="font-bold">About</h3>
              <p className="py-4 text-sm">
                Antony Budianto posts about tech stuff; Web, Engineering and
                more
              </p>
            </div>
          </div>

          <div className="flex w-full md:w-1/2">
            <div className="md:px-8">
              <h3 className="font-bold">Social</h3>
              <ul className="list-reset items-center text-sm pt-3">
                <li>
                  <a
                    className="inline-block no-underline hover:underline hover:text-underline py-1 my-1"
                    href="https://linkedin.com/in/antonybudianto"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:underline hover:text-underline py-1 my-1"
                    href="https://twitter.com/antonybudianto"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:underline hover:text-underline py-1 my-1"
                    href="https://github.com/antonybudianto"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
