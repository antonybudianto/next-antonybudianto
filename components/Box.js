import { useState, useRef } from "react";

function Box({ size, color = "orange", ...props }) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={hovered ? "hotpink" : color} />
    </mesh>
  );
}

export default Box;
