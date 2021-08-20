import dynamic from "next/dynamic";

const HomeScene = dynamic(() => import("./Apart/HomeScene"));
const MaldiveMiniScene = dynamic(() =>
  import("./MaldiveMini/MaldiveMiniScene")
);
const MaldiveResortScene = dynamic(() =>
  import("./MaldiveResort/MaldiveResortScene")
);

export const SHOWCASE_LIST = [
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
