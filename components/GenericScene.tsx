import { useRef, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

import LoadingWidget from "./LoadingWidget";
import ProgressLoader from "./ProgressLoader";
import getFov from "./helpers/fov";

const GenericScene = ({
  dark,
  autoRotate,
  children,
  cameraPosition,
  customFov,
  orbitTarget = [0, 0, 0],
  maxPolarAngle = Math.PI / 2,
}) => {
  const ref = useRef();
  const camRef = useRef();
  const [loading, setLoading] = useState(false);
  const fov = getFov(customFov);

  return (
    <>
      {loading ? <LoadingWidget /> : null}
      <Canvas shadows dpr={[1, 2]} className="select-none">
        <Suspense fallback={<ProgressLoader setLoading={setLoading} />}>
          <Stage
            controls={ref}
            preset="rembrandt"
            adjustCamera={false}
            intensity={dark ? 0.2 : 0.6}
            environment={dark ? "night" : "city"}
          >
            {children}
          </Stage>
        </Suspense>
        {/* @ts-ignore */}
        <PerspectiveCamera
          makeDefault
          fov={fov}
          ref={camRef}
          position={cameraPosition || [0, 2, -16]}
        />
        <OrbitControls
          camera={camRef.current}
          ref={ref}
          target={orbitTarget}
          autoRotate={autoRotate}
          maxPolarAngle={maxPolarAngle}
        />
      </Canvas>
    </>
  );
};

export default GenericScene;
