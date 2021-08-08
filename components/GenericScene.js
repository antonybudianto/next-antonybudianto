import { useRef, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

import LoadingWidget from "../components/LoadingWidget";
import ProgressLoader from "../components/ProgressLoader";
import getFov from "./helpers/fov";

const GenericScene = ({ dark, autoRotate, children }) => {
  const ref = useRef();
  const camRef = useRef();
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(true);
  const fov = getFov();

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
            {children}
          </Stage>
        </Suspense>
        <PerspectiveCamera
          makeDefault={enable}
          fov={fov}
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

export default GenericScene;
