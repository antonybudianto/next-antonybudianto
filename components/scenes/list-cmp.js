import { lazy } from "react";

const HomeScene = lazy(() => import("./Apart/HomeScene"));
const MaldiveMiniScene = lazy(() => import("./MaldiveMini/MaldiveMiniScene"));
const MaldiveResortScene = lazy(() =>
  import("./MaldiveResort/MaldiveResortScene")
);

export const SHOWCASE_LIST_CMP = [
  {
    id: "maldive-resort",
    component: MaldiveResortScene,
  },
  {
    id: "maldive-mini",
    component: MaldiveMiniScene,
  },
  {
    id: "apart",
    component: HomeScene,
  },
];
