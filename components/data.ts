import deesainJpg from "../public/deesain.jpg";
import stickyJpg from "../public/sticky.jpeg";
import jsbJpg from "../public/jsb.jpg";

export const WORKS = [
  // {
  //   title: "3D Maldive Mini",
  //   localHref: "/3d/maldive-mini",
  //   imgSrc: mdvm3d,
  //   desc: `Interactive Web 3D Maldive-inspired island and resort`,
  //   imgW: 1218 / 2.5,
  //   imgH: 657 / 2.5,
  //   thumbs: [
  //     {
  //       type: "img",
  //       src: "/img-thumbs/mdvm1.jpg",
  //     },
  //     {
  //       type: "img",
  //       src: "/img-thumbs/mdvm2.jpg",
  //     },
  //     {
  //       type: "img",
  //       src: "/img-thumbs/mdvm3.jpg",
  //     },
  //   ],
  // },
  // {
  //   title: "3D Apart",
  //   localHref: "/3d/apart",
  //   imgSrc: apart3d,
  //   desc: `Interactive Web 3D Apartment with low-poly design.`,
  //   imgW: 1748 / 3,
  //   imgH: 756 / 3,
  //   thumbs: [
  //     {
  //       type: "video",
  //       src: "/video/mov1.mp4",
  //     },
  //     {
  //       type: "video",
  //       src: "/video/mov2a.mp4",
  //     },
  //     {
  //       type: "video",
  //       src: "/video/mov3a.mp4",
  //     },
  //   ],
  // },
  {
    title: "Deesain",
    href: "https://deesain.netlify.app/",
    imgSrc: deesainJpg,
    desc: `Modern Graphic Design platform for social media and any
  creative works`,
    imgW: 2880 / 5,
    imgH: 1446 / 5,
    thumbs: [
      {
        type: "img",
        src: "/img-thumbs/deesain-t1.jpg",
      },
      {
        type: "img",
        src: "/img-thumbs/deesain-t2a.jpg",
      },
    ],
  },
  {
    title: "StickyNoted",
    href: "https://stickynoted.netlify.app/",
    imgSrc: stickyJpg,
    desc: `Simple Sticky Note app with Markdown flavour`,
    imgW: 2880 / 5,
    imgH: 1446 / 5,
  },
  {
    title: "JSBench",
    href: "https://jsbench.netlify.com",
    imgSrc: jsbJpg,
    desc: `Simple JS Benchmark tool to compare code's performance side-by-side.`,
    imgW: 2184 / 4,
    imgH: 1278 / 4,
  },
];
