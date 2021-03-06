import { lazy } from "react";

const HomeScene = lazy(() => import("./Apart/HomeScene"));
const MaldiveMiniScene = lazy(() => import("./MaldiveMini/MaldiveMiniScene"));
const MaldiveResortScene = lazy(() =>
  import("./MaldiveResort/MaldiveResortScene")
);

export const SHOWCASE_LIST = [
  {
    id: "studio",
    external: true,
    name: "3D Studio",
    img: "/meta-3d/meta-studio.jpg",
    href: "https://ab-3d-studio.vercel.app/",
  },
  {
    id: "maldive-resort",
    name: "3D Maldive Resort",
    img: "/meta-3d/meta-maldive-resort.jpg",
    metaOgImage: "https://antonybudianto.com/meta-3d/meta-maldive-resort.jpg",
    metaTitle: "3D Maldive Resort",
    metaContent: "3D Interactive Maldive Resort by Antony Budianto",
    component: MaldiveResortScene,
    credits: [
      "https://free-3dtextureshd.com",
      "https://www.sketchuptextureclub.com",
      "https://polyhaven.com",
    ],
  },
  {
    id: "maldive-mini",
    name: "3D Maldive Mini",
    img: "/meta-3d/meta-maldive-mini.jpg",
    metaOgImage: "https://antonybudianto.com/meta-3d/meta-maldive-mini.jpg",
    metaTitle: "3D Maldive Mini",
    metaContent: "3D Interactive Maldive Mini by Antony Budianto",
    component: MaldiveMiniScene,
    credits: [
      "https://free-3dtextureshd.com",
      "https://www.sketchuptextureclub.com",
      "https://polyhaven.com",
    ],
  },
  {
    id: "apart",
    name: "3D Apart",
    img: "/meta-3d/meta-home.jpg",
    metaOgImage: "https://antonybudianto.com/meta-3d/meta-home.jpg",
    metaTitle: "3D Apartment",
    metaContent: "3D Interactive Apartment by Antony Budianto",
    component: HomeScene,
  },
];
