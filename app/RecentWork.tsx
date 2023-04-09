"use client";

import { WORKS } from "@/components/data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function RecentWork() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry gutter="15px">
        {WORKS.map((w, i) => {
          let Wrapper = ({ children }) => children;
          if (w.href) {
            Wrapper = ({ children }) => (
              <a title={w.title} href={w.href}>
                {children}
              </a>
            );
          }
          return (
            <Wrapper key={i}>
              <img
                src={w.imgSrc as unknown as string}
                alt={w.desc || ""}
                className="border shadow-md rounded-md ease-in-out duration-300 lg:hover:scale-95 dark:border-slate-800"
                style={{ width: "100%" }}
              />
            </Wrapper>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}
