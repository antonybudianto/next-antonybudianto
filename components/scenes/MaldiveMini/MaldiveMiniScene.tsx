"use client";

import GenericScene from "../../GenericScene";
import Maldive3d from "./Maldive3d";

const MaldiveMiniScene = (p) => (
  <GenericScene {...p} orbitTarget={[0, 0, 0.45]}>
    <Maldive3d {...p} />
  </GenericScene>
);

export default MaldiveMiniScene;
