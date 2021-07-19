import { useRef, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

import Maldive3d from "./Maldive3d";
import LoadingWidget from "../../components/LoadingWidget";
import ProgressLoader from "../../components/ProgressLoader";

const HomeScene = ({ dark, autoRotate }) => {
  const ref = useRef();
  const camRef = useRef();
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleUpdate = () => {
    setEnable(true);
  };

  return (
    <>
      {loading ? <LoadingWidget /> : null}
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={<ProgressLoader setLoading={setLoading} />}>
          <Stage
            onUpdate={handleUpdate}
            controls={ref}
            preset="rembrandt"
            intensity={dark ? 0.2 : 0.7}
            environment={dark ? "night" : "city"}
          >
            <Maldive3d dark={dark} />
          </Stage>
        </Suspense>
        <PerspectiveCamera
          makeDefault={enable}
          fov={50}
          ref={camRef}
          position={[0, 5, -18]}
        />
        <OrbitControls
          camera={camRef.current}
          ref={ref}
          autoRotate={autoRotate}
        />
      </Canvas>
    </>
  );
};

export default HomeScene;
