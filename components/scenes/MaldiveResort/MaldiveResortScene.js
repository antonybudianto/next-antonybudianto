import GenericScene from "../../GenericScene";
import MaldiveResort3d from "./MaldiveResort3d";
import Hut3d from "./Hut3d";

const MaldiveResortScene = (p) => (
  <GenericScene orbitTarget={[0, 1, 0]} cameraPosition={[-25, 12, 5]} {...p}>
    <MaldiveResort3d {...p} />
    <Hut3d
      dark={p.dark}
      position={[0.747482, -0.337112, 0.526182]}
      scale={0.25}
    />
    <Hut3d
      dark={p.dark}
      position={[-1.45252, -0.337112, 1.57126]}
      scale={0.25}
      quaternion={[0, 0.707, 0, 0.707]}
    />
    <Hut3d
      dark={p.dark}
      position={[-1.25699, -0.337112, 3.73601]}
      scale={0.25}
      quaternion={[0, 0.707, 0, 0.707]}
    />
    <Hut3d
      dark={p.dark}
      position={[2.87248, -0.337112, 1.60081]}
      scale={0.25}
      quaternion={[0, -0.707, 0, 0.707]}
    />
    <Hut3d
      dark={p.dark}
      position={[2.69469, -0.337112, 3.76136]}
      scale={0.25}
      quaternion={[0, -0.707, 0, 0.707]}
    />
  </GenericScene>
);

export default MaldiveResortScene;
