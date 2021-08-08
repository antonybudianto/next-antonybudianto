import dynamic from "next/dynamic";

const HomeScene = dynamic(() => import("./HomeScene"));
const MaldiveMiniScene = dynamic(() => import("./MaldiveMiniScene"));

export const SHOWCASE_LIST = [
  {
    id: "apart",
    name: "3D Apart",
    metaOgImage: "https://antonybudianto.com/meta-home.jpg",
    metaTitle: "3D Apartment",
    metaContent: "3D Interactive Apartment by Antony Budianto",
    component: HomeScene,
  },

  {
    id: "maldive-mini",
    name: "3D Maldive Mini",
    metaOgImage: "https://antonybudianto.com/meta-maldive-mini.jpg",
    metaTitle: "3D Maldive Mini",
    metaContent: "3D Interactive Maldive Mini by Antony Budianto",
    component: MaldiveMiniScene,
    credits: [
      "https://free-3dtextureshd.com",
      "https://www.sketchuptextureclub.com",
      "https://polyhaven.com",
    ],
  },
];
