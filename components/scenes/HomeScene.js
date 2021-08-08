import GenericScene from "../GenericScene";
import Home3d from "./Home3d";

const HomeScene = (p) => (
  <GenericScene {...p}>
    <Home3d {...p} />
  </GenericScene>
);

export default HomeScene;
