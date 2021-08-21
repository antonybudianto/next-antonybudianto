import GenericScene from "../../GenericScene";
import Maldive3d from "./Maldive3d";

const MaldiveMiniScene = (p) => (
  <GenericScene {...p}>
    <Maldive3d {...p} />
  </GenericScene>
);

export default MaldiveMiniScene;
