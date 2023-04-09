"use client";

import { WORKS } from "@/components/data";
import Link from "next/link";
import { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

export default function RecentWork() {
  useEffect(() => {
    const el = document.querySelector("#recent-works");
    const callback = (es) => {
      es.forEach((ev) => {
        document.querySelectorAll(".ab-masonry-img").forEach((img) => {
          if (ev.isIntersecting && ev.boundingClientRect.bottom > 100) {
            img.classList.add("ab-masonry-img-anim");
            setTimeout(() => {
              img.classList.remove("ab-masonry-img-anim");
            }, 1200);
          }
        });
      });
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(el as Element);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry gutter="15px">
        {WORKS.map((w, i) => {
          let Wrapper = ({ children }) => children;
          if (w.href) {
            Wrapper = ({ children }) => (
              <Link title={w.title} href={w.href}>
                {children}
              </Link>
            );
          }
          return (
            <Wrapper key={i}>
              <img
                src={w.imgSrc as unknown as string}
                alt={w.desc || ""}
                className="ab-masonry-img border-1 dark:border-gray-500 border shadow-md rounded-md ease-in-out duration-300 lg:hover:border-blue-500 lg:hover:shadow-lg dark:border-slate-800"
                style={{ width: "100%" }}
              />
            </Wrapper>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}
