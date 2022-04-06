import { useRef, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

import LoadingWidget from "../components/LoadingWidget";
import ProgressLoader from "../components/ProgressLoader";
import getFov from "./helpers/fov";

const GenericScene = ({
  dark,
  autoRotate,
  children,
  cameraPosition,
  customFov,
  orbitTarget = [0, 3, 0],
  maxPolarAngle = Math.PI / 2,
}) => {
  const ref = useRef();
  const camRef = useRef();
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(true);
  const fov = getFov(customFov);

  const handleUpdate = () => {
    setEnable(true);
    setLoading(false);
  };

  return (
    <>
      {loading ? <LoadingWidget /> : null}
      <Canvas shadows dpr={[1, 2]} className="select-none">
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
          position={cameraPosition || [0, 5, -18]}
        />
        {enable ? (
          <OrbitControls
            camera={camRef.current}
            ref={ref}
            target={orbitTarget}
            autoRotate={autoRotate}
            maxPolarAngle={maxPolarAngle}
          />
        ) : null}
      </Canvas>
    </>
  );
};

export default GenericScene;
