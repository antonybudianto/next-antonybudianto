import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import Home3d from "../components/Home3d";

const HomeScene = ({ dark }) => {
  const ref = useRef();

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={dark ? 0.2 : 0.7}
          environment={dark ? "night" : "city"}
        >
          <Home3d dark={dark} />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  );
};

export default HomeScene;
