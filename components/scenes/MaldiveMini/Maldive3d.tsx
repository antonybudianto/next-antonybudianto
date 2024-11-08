/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// @ts-ignore
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// import { LoopOnce } from "three/src/constants";
// https://github.com/mrdoob/three.js/blob/master/src/constants.js#L125
const LoopOnce = 2200;

export default function Model(props) {
  const { dark } = props;
  const light = dark ? 1 : 0;
  const seaRef = useRef();
  const cocoRef = useRef();
  // @ts-ignore
  const { nodes, materials, animations } = useGLTF("/3d/maldive-mini.gltf");
  const { actions } = useAnimations(animations, seaRef);
  const { actions: cocoActions } = useAnimations(animations, cocoRef);

  useEffect(() => {
    actions?.SeaWave?.play();
    cocoActions?.Swing?.setLoop(LoopOnce, 1);
  }, []);
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="HutCentralPoint"
          position={[3.571, 0.891, 1.47]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.5}
        >
          <group
            name="Camera001"
            position={[7.359, 5.275, 4.618]}
            rotation={[1.242, 0.33, -0.76]}
          />
          <mesh
            name="Cone"
            castShadow
            receiveShadow
            geometry={nodes.Cone.geometry}
            material={materials["Roof.001"]}
            position={[-0.099, 3.02, -1.834]}
            rotation={[0, -1.179, 0]}
            scale={[1.477, 1.436, 1.477]}
          />
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials["FenceMaterial.001"]}
            position={[-2.577, 0.824, -3.714]}
            rotation={[0, -1.182, 0]}
            scale={[1.9, 2.58, 0.05]}
          />
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials["FenceMaterial.001"]}
            position={[-1.942, 0.822, -1.059]}
            scale={[0.05, 2.573, 1.404]}
          />
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.WhiteWindow}
            position={[-0.262, 0.851, -3.514]}
            rotation={[Math.PI, -1.562, Math.PI]}
            scale={[0.637, 1.03, 0.035]}
          />
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials["FenceMaterial.001"]}
            position={[3.689, 0.822, -1.188]}
            scale={[0.05, 2.573, 1.579]}
          />
          <mesh
            name="Cube004"
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials.WhiteWindow}
            position={[0.103, 0.851, -3.547]}
            rotation={[Math.PI, -1.562, Math.PI]}
            scale={[0.383, 1.03, 0.035]}
          />
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials["FenceMaterial.001"]}
            position={[2.714, 0.822, -2.427]}
            scale={[1.134, 2.573, 0.07]}
          />
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials["FenceBrown.001"]}
            position={[-2.012, 0.127, -5.275]}
            rotation={[Math.PI, -1.57, Math.PI]}
            scale={[-0.05, -0.089, -1.436]}
          />
          <mesh
            name="Cube007"
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials["FenceBrown.001"]}
            position={[3.685, 0.127, -3.906]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube008"
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials["FenceBrown.001"]}
            position={[3.685, 0.127, -3.906]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube009"
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials["FenceBrown.001"]}
            position={[-2.012, 0.589, -5.275]}
            rotation={[Math.PI, -1.57, Math.PI]}
            scale={[-0.05, -0.089, -1.436]}
          />
          <mesh
            name="Cube010"
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials["FenceBrown.001"]}
            position={[-1.68, 0.127, -5.275]}
            rotation={[Math.PI, -1.57, Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube011"
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials["FenceBrown.001"]}
            position={[-1.68, 0.127, -5.275]}
            rotation={[Math.PI, -1.57, Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube012"
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials["FenceBrown.001"]}
            position={[-1.68, 0.127, -5.275]}
            rotation={[Math.PI, -1.57, Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube013"
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials["FenceBrown.001"]}
            position={[-1.68, 0.127, -5.275]}
            rotation={[Math.PI, -1.57, Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube014"
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials["FenceBrown.001"]}
            position={[-1.68, 0.127, -5.275]}
            rotation={[Math.PI, -1.57, Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube015"
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials["FenceBrown.001"]}
            position={[-1.414, 0.141, -3.753]}
            rotation={[0, -0.777, 0]}
            scale={[0.517, 0.3, 0.647]}
          />
          <mesh
            name="Cube016"
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={materials["FenceBrown.001"]}
            position={[-1.747, 0.358, -3.415]}
            rotation={[-0.945, -0.523, 2.537]}
            scale={[-0.517, -0.103, -0.241]}
          />
          <mesh
            name="Cube017"
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={materials["Yellow.001"]}
            position={[-1.726, 0.388, -3.436]}
            rotation={[-0.945, -0.523, 2.537]}
            scale={[-0.517, -0.21, -0.241]}
          />
          <mesh
            name="Cube018"
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials["Yellow.001"]}
            position={[-1.275, 0.209, -3.894]}
            rotation={[0, -0.777, -Math.PI]}
            scale={[-0.517, -0.21, -0.442]}
          />
          <mesh
            name="Cube019"
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials["FenceBrown.001"]}
            position={[-1.797, 0.265, -3.364]}
            rotation={[0.989, -0.496, -2.515]}
            scale={[-0.517, -0.103, -0.101]}
          />
          <mesh
            name="Cube020"
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials["FenceBrown.001"]}
            position={[-2.311, 0.265, -4.014]}
            rotation={[0.989, -0.496, -2.515]}
            scale={[-0.517, -0.103, -0.101]}
          />
          <mesh
            name="Cube021"
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials["Yellow.001"]}
            position={[-1.789, 0.209, -4.544]}
            rotation={[0, -0.777, -Math.PI]}
            scale={[-0.517, -0.21, -0.442]}
          />
          <mesh
            name="Cube022"
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials["Yellow.001"]}
            position={[-2.239, 0.388, -4.086]}
            rotation={[-0.945, -0.523, 2.537]}
            scale={[-0.517, -0.21, -0.241]}
          />
          <mesh
            name="Cube023"
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials["FenceBrown.001"]}
            position={[-2.26, 0.358, -4.065]}
            rotation={[-0.945, -0.523, 2.537]}
            scale={[-0.517, -0.103, -0.241]}
          />
          <mesh
            name="Cube024"
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={materials["FenceBrown.001"]}
            position={[-1.928, 0.141, -4.403]}
            rotation={[0, -0.777, 0]}
            scale={[0.517, 0.3, 0.647]}
          />
          <mesh
            name="Cube025"
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={nodes.Cube025.material}
            position={[1.775, -0.515, -5.534]}
            scale={[1.95, 0.5, 1.3]}
          />
          <mesh
            name="Cube026"
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials["FenceBrown.001"]}
            position={[3.685, 0.127, -3.906]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube027"
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials["FenceBrown.001"]}
            position={[3.685, 0.127, -3.906]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube028"
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials["FenceBrown.001"]}
            position={[3.685, 0.127, -3.906]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube029"
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials["FenceBrown.001"]}
            position={[3.685, 0.127, -3.906]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube030"
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials["FenceBrown.001"]}
            position={[3.685, 0.127, -3.906]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube031"
            castShadow
            receiveShadow
            geometry={nodes.Cube031.geometry}
            material={materials["FenceBrown.001"]}
            position={[3.685, 0.127, -3.906]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.05, -0.089, -1.862]}
          />
          <mesh
            name="Cube033"
            castShadow
            receiveShadow
            geometry={nodes.Cube033.geometry}
            material={materials["Glass.001"]}
            position={[1.775, -0.513, -6.608]}
            scale={[1.832, 0.436, 0.03]}
          />
          <mesh
            name="Cube035"
            castShadow
            receiveShadow
            geometry={nodes.Cube035.geometry}
            material={materials.WhiteWindow}
            position={[-0.114, 0.866, -0.158]}
            scale={[0.6, 0.643, 0.1]}
          />
          <mesh
            name="Cube036"
            castShadow
            receiveShadow
            geometry={nodes.Cube036.geometry}
            material={materials.WhiteWindow}
            position={[-0.114, 0.866, -0.151]}
            scale={[0.02, 0.579, 0.03]}
          />
          <mesh
            name="Cube037"
            castShadow
            receiveShadow
            geometry={nodes.Cube037.geometry}
            material={materials["Glass.001"]}
            position={[0.166, 0.867, -0.15]}
            scale={[0.26, 0.579, 0.02]}
          />
          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials["FenceBrown.001"]}
            position={[-1.61, 0.801, -4.16]}
            scale={[0.3, 1.418, 0.3]}
          />
          <mesh
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials["Gray.001"]}
            position={[-3.025, -1.401, -5.175]}
            scale={[0.99, 1.21, 0.99]}
          />
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials["Gray.001"]}
            position={[-1.795, -1.196, -0.203]}
          />
          <mesh
            name="Cylinder003"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials["Gray.001"]}
            position={[3.519, -1.196, -0.203]}
          />
          <mesh
            name="Cylinder004"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials["Gray.001"]}
            position={[3.519, -1.243, -6.496]}
            scale={[0.99, 1.367, 0.99]}
          />
          <mesh
            name="Cylinder005"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials["Gray.001"]}
            position={[0.069, -1.247, -6.496]}
            scale={[0.99, 1.369, 0.99]}
          />
          <mesh
            name="Cylinder006"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials["Gray.001"]}
            position={[3.519, -1.243, -5.509]}
            scale={[0.99, 1.367, 0.99]}
          />
          <mesh
            name="Cylinder007"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials["Gray.001"]}
            position={[0.069, -1.247, -5.509]}
            scale={[0.99, 1.369, 0.99]}
          />
          <mesh
            name="Cylinder008"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials["Gray.001"]}
            position={[3.486, -1.243, -4.456]}
            scale={[0.99, 1.367, 0.99]}
          />
          <mesh
            name="Cylinder009"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials["Gray.001"]}
            position={[0.037, -1.247, -4.456]}
            scale={[0.99, 1.369, 0.99]}
          />
          <mesh
            name="Cylinder010"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials["Silver.001"]}
            position={[-0.285, -0.37, -6.657]}
            scale={[0.3, 0.227, 0.3]}
          />
          <mesh
            name="Cylinder011"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={materials["Silver.001"]}
            position={[-0.482, -0.62, -7.077]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.161, 0.7, 0.161]}
          />
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials["Silver.001"]}
            position={[-0.679, -0.37, -6.657]}
            scale={[0.3, 0.227, 0.3]}
          />
          <mesh
            name="Cylinder013"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013.geometry}
            material={materials["Silver.001"]}
            position={[-0.482, -0.82, -7.077]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.161, 0.7, 0.161]}
          />
          <mesh
            name="Cylinder014"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014.geometry}
            material={materials["Silver.001"]}
            position={[-0.482, -1.02, -7.077]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.161, 0.7, 0.161]}
          />
          <mesh
            name="Cylinder015"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015.geometry}
            material={materials["Silver.001"]}
            position={[-0.482, -1.22, -7.077]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.161, 0.7, 0.161]}
          />
          <mesh
            name="Cylinder016"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016.geometry}
            material={materials["Silver.001"]}
            position={[-0.482, -1.42, -7.077]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.161, 0.7, 0.161]}
          />
          <mesh
            name="Cylinder017"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017.geometry}
            material={materials["Silver.001"]}
            position={[-0.482, -0.42, -7.077]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.161, 0.7, 0.161]}
          />
          <mesh
            name="Cylinder018"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018.geometry}
            material={materials["Silver.001"]}
            position={[0.606, 0.293, -5.163]}
            scale={[0.3, 0.194, 0.239]}
          />
          <mesh
            name="Cylinder019"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019.geometry}
            material={materials["Silver.001"]}
            position={[0.408, 0.079, -5.498]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.128, 0.7, 0.138]}
          />
          <mesh
            name="Cylinder020"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020.geometry}
            material={materials["Silver.001"]}
            position={[0.212, 0.293, -5.163]}
            scale={[0.3, 0.194, 0.239]}
          />
          <mesh
            name="Cylinder021"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021.geometry}
            material={materials["Silver.001"]}
            position={[0.408, -0.092, -5.498]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.128, 0.7, 0.138]}
          />
          <mesh
            name="Cylinder022"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022.geometry}
            material={materials["Silver.001"]}
            position={[0.408, -0.263, -5.498]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.128, 0.7, 0.138]}
          />
          <mesh
            name="Cylinder023"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023.geometry}
            material={materials["Silver.001"]}
            position={[0.408, -0.435, -5.498]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.128, 0.7, 0.138]}
          />
          <mesh
            name="Cylinder024"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024.geometry}
            material={materials["Silver.001"]}
            position={[0.408, -0.606, -5.498]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.128, 0.7, 0.138]}
          />
          <mesh
            name="Cylinder025"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025.geometry}
            material={materials["Silver.001"]}
            position={[0.408, 0.25, -5.498]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.128, 0.7, 0.138]}
          />
          <mesh
            name="DoorFrameBox"
            castShadow
            receiveShadow
            geometry={nodes.DoorFrameBox.geometry}
            material={materials.WhiteWindow}
            position={[-0.067, 0.854, -3.48]}
            rotation={[Math.PI, -1.561, Math.PI]}
            scale={[0.85, 1.127, 1.083]}
          />
          <mesh
            name="FloorBox"
            castShadow
            receiveShadow
            geometry={nodes.FloorBox.geometry}
            material={materials["WoodFloor.001"]}
            position={[-0.099, 0.162, -1.834]}
            rotation={[Math.PI, -1.169, Math.PI]}
            scale={[1.783, 0.061, 1.783]}
          />
          <mesh
            name="GlassDoorBox1"
            castShadow
            receiveShadow
            geometry={nodes.GlassDoorBox1.geometry}
            material={materials["Glass.001"]}
            position={[-0.428, 0.852, -3.524]}
            rotation={[Math.PI, -1.561, Math.PI]}
            scale={[0.078, 1.03, 0.268]}
          />
          <mesh
            name="GlassDoorBox2"
            castShadow
            receiveShadow
            geometry={nodes.GlassDoorBox2.geometry}
            material={materials["Glass.001"]}
            position={[-0.079, 0.852, -3.521]}
            rotation={[Math.PI, -1.561, Math.PI]}
            scale={[0.078, 1.03, 0.296]}
          />
          <mesh
            name="HutBodyCylinder"
            castShadow
            receiveShadow
            geometry={nodes.HutBodyCylinder.geometry}
            material={materials["WoodFloor.001"]}
            position={[-0.099, 0.906, -1.834]}
            rotation={[Math.PI, -1.169, Math.PI]}
            scale={[1.926, 0.684, 1.926]}
          />
          <mesh
            name="HutMainFloor"
            castShadow
            receiveShadow
            geometry={nodes.HutMainFloor.geometry}
            material={materials["WoodFloor.001"]}
            position={[0.23, 0.052, -2.656]}
            scale={[3.5, 0.05, 2.666]}
          />
          <mesh
            name="HutMainFloor001"
            castShadow
            receiveShadow
            geometry={nodes.HutMainFloor001.geometry}
            material={nodes.HutMainFloor001.material}
            position={[0.23, -0.098, -2.656]}
            scale={[3.5, 0.1, 2.666]}
          />
          <mesh
            name="LightBall1"
            castShadow
            receiveShadow
            geometry={nodes.LightBall1.geometry}
            material={materials["WhiteGlass.001"]}
            position={[3.104, 0.306, -3.619]}
          />
          <mesh
            name="LightBall2"
            castShadow
            receiveShadow
            geometry={nodes.LightBall2.geometry}
            material={materials["WhiteGlass.001"]}
            position={[2.849, 0.306, -3.196]}
          />
          <group name="LightBallParent" position={[3.425, 0.171, -2.683]} />
          <group
            name="LightBallPoint1"
            position={[2.849, 0.313, -3.185]}
            scale={[0.169, 0.1, 0.1]}
          >
            <group name="LightBallPoint1_Orientation">
              <pointLight
                name="LightBallPoint1_Orientation_Orientation"
                decay={2}
                color="#ffc35e"
                intensity={light}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
          </group>
          <group
            name="LightBallPoint2"
            position={[3.104, 0.309, -3.623]}
            scale={[0.169, 0.1, 0.1]}
          >
            <group name="LightBallPoint2_Orientation">
              <pointLight
                name="LightBallPoint2_Orientation_Orientation"
                decay={2}
                color="#ffc35e"
                intensity={light}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
          </group>
          <mesh
            name="Parasol"
            castShadow
            receiveShadow
            geometry={nodes.Parasol.geometry}
            material={nodes.Parasol.material}
            position={[-1.61, 1.366, -4.16]}
            scale={[0.8, 0.177, 0.8]}
          />
          <mesh
            name="PoolWater"
            castShadow
            receiveShadow
            geometry={nodes.PoolWater.geometry}
            material={materials.PoolWater}
            position={[1.773, -0.84, -5.825]}
            scale={[1.831, 0.99, 0.76]}
          />
          <mesh
            name="SideWindowBox1"
            castShadow
            receiveShadow
            geometry={nodes.SideWindowBox1.geometry}
            material={materials.WhiteWindow}
            position={[-1.301, 0.916, -3.058]}
            rotation={[0, -0.8, 0]}
            scale={[0.4, 1.216, 1.126]}
          />
          <mesh
            name="SideWindowBox2"
            castShadow
            receiveShadow
            geometry={nodes.SideWindowBox2.geometry}
            material={materials.WhiteWindow}
            position={[1.128, 0.912, -3.034]}
            rotation={[Math.PI, -0.776, Math.PI]}
            scale={[0.4, 1.216, 1.126]}
          />
          <mesh
            name="SideWindowGlass1"
            castShadow
            receiveShadow
            geometry={nodes.SideWindowGlass1.geometry}
            material={materials["Glass.001"]}
            position={[-1.301, 0.916, -3.058]}
            rotation={[0, -0.794, 0]}
            scale={[0.078, 1.113, 1.048]}
          />
          <mesh
            name="SideWindowGlass2"
            castShadow
            receiveShadow
            geometry={nodes.SideWindowGlass2.geometry}
            material={materials["Glass.001"]}
            position={[1.128, 0.912, -3.034]}
            rotation={[Math.PI, -0.776, Math.PI]}
            scale={[0.078, 1.113, 1.048]}
          />
          <mesh
            name="SlidingFrontGlassDoor"
            castShadow
            receiveShadow
            geometry={nodes.SlidingFrontGlassDoor.geometry}
            material={materials["Glass.001"]}
            position={[-0.394, 0.867, -0.201]}
            scale={[0.26, 0.579, 0.02]}
          />
          <mesh
            name="SlidingGlassDoorBox"
            castShadow
            receiveShadow
            geometry={nodes.SlidingGlassDoorBox.geometry}
            material={materials["Glass.001"]}
            position={[0.258, 0.852, -3.473]}
            rotation={[Math.PI, -1.561, Math.PI]}
            scale={[0.078, 1.03, 0.332]}
          />
          <mesh
            name="Stairs"
            castShadow
            receiveShadow
            geometry={nodes.Stairs.geometry}
            material={nodes.Stairs.material}
            position={[-0.488, -0.093, -5.423]}
            scale={[0.3, 0.1, 0.1]}
          />
          <mesh
            name="Stairs001"
            castShadow
            receiveShadow
            geometry={nodes.Stairs001.geometry}
            material={nodes.Stairs001.material}
            position={[-0.117, -0.152, 0.149]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.597, 0.156, 0.148]}
          />
        </group>
        <group
          name="Camera"
          position={[7.359, 4.958, 6.926]}
          rotation={[1.242, 0.33, -0.76]}
        />
        <mesh
          name="BeachBase"
          castShadow
          receiveShadow
          geometry={nodes.BeachBase.geometry}
          material={materials.Sand}
          position={[0, -0.028, 0]}
          scale={[1.076, 1.01, 1.076]}
        />
        <mesh
          // @ts-ignore
          ref={seaRef}
          name="SeaWater"
          castShadow
          receiveShadow
          geometry={nodes.SeaWater.geometry}
          material={materials.WaterMat}
          position={[3.198, -0.093, 0]}
          scale={4}
        />
        <mesh
          name="UnderwaterBase"
          castShadow
          receiveShadow
          geometry={nodes.UnderwaterBase.geometry}
          material={materials.Sand}
          position={[5.643, -0.544, 0]}
          scale={[1.76, 0.9, 4.28]}
        />
        <mesh
          name="Stone4"
          castShadow
          receiveShadow
          geometry={nodes.Stone4.geometry}
          material={materials.Stone}
          position={[-2.184, 1.108, -3.271]}
          rotation={[0.068, 0.543, -0.13]}
          scale={[0.571, 0.273, 0.795]}
        />
        <mesh
          name="Stone7"
          castShadow
          receiveShadow
          geometry={nodes.Stone7.geometry}
          material={materials.Stone}
          position={[5.506, -0.38, -3.328]}
          rotation={[0, -1.181, 0]}
          scale={[0.571, 0.273, 0.795]}
        />
        <mesh
          name="Stone5"
          castShadow
          receiveShadow
          geometry={nodes.Stone5.geometry}
          material={materials.Stone}
          position={[5.086, -0.379, 3.526]}
          rotation={[-3.056, -1.035, -2.916]}
          scale={[0.349, 0.273, 0.486]}
        />
        <mesh
          name="Stone1"
          castShadow
          receiveShadow
          geometry={nodes.Stone1.geometry}
          material={materials.Stone}
          position={[-3.273, 1.176, 2.667]}
          rotation={[0.731, -1.542, 0.902]}
          scale={[0.441, 0.459, 0.541]}
        />
        <mesh
          name="Stone3"
          castShadow
          receiveShadow
          geometry={nodes.Stone3.geometry}
          material={materials.Stone}
          position={[-3.271, 1.147, 1.873]}
          rotation={[0.066, -1.28, 0.235]}
          scale={[0.288, 0.313, 0.348]}
        />
        <mesh
          name="Stone2"
          castShadow
          receiveShadow
          geometry={nodes.Stone2.geometry}
          material={materials.Stone}
          position={[-2.679, 1.147, 3.225]}
          rotation={[0.019, 0.174, 0.168]}
          scale={[0.411, 0.447, 0.498]}
        />
        <mesh
          // @ts-ignore
          ref={cocoRef}
          name="CoconutTree"
          onClick={() => {
            cocoActions?.Swing?.reset();
            cocoActions?.Swing?.play();
          }}
          castShadow
          receiveShadow
          geometry={nodes.CoconutTree.geometry}
          material={materials.CoconutTree}
          position={[-3.039, 0.858, -3.14]}
          scale={0.182}
        >
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.Leaf}
            position={[2.615, 16.604, -2.547]}
            rotation={[-0.089, -0.104, -0.229]}
            scale={[4.662, 4.662, 1.838]}
          />
          <mesh
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.Leaf}
            position={[1.558, 16.319, -4.85]}
            rotation={[-0.079, 1.144, -0.337]}
            scale={[4.17, 4.17, 1.644]}
          />
          <mesh
            name="Plane002"
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials.Leaf}
            position={[-1.107, 16.925, -4.282]}
            rotation={[-2.742, 0.649, 2.816]}
            scale={[4.379, 4.379, 1.726]}
          />
          <mesh
            name="Plane003"
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials.Leaf}
            position={[-1.514, 16.604, -1.703]}
            rotation={[-3.036, -0.497, 2.995]}
            scale={[4.518, 4.518, 1.781]}
          />
          <mesh
            name="Plane004"
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials.Leaf}
            position={[0.502, 16.604, -1.234]}
            rotation={[0.164, -1.187, 0.252]}
            scale={[4.774, 4.774, 1.882]}
          />
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials.Leaf}
            position={[0.067, 17.29, -4.282]}
            rotation={[2.415, 1.371, -2.255]}
            scale={[2.605, 2.605, 1.027]}
          />
          <mesh
            name="Plane006"
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials.Leaf}
            position={[1.638, 17.29, -3.381]}
            rotation={[0.056, 0.455, -0.13]}
            scale={[2.302, 2.302, 0.908]}
          />
          <mesh
            name="Plane007"
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials.Leaf}
            position={[1.638, 17.014, -1.831]}
            rotation={[0.059, -0.535, -0.075]}
            scale={[2.302, 2.302, 0.908]}
          />
          <mesh
            name="Plane008"
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials.Leaf}
            position={[0.236, 17.23, -1.653]}
            rotation={[-2.908, -1.151, -2.891]}
            scale={[2.302, 2.302, 0.908]}
          />
          <mesh
            name="Plane009"
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials.Leaf}
            position={[-0.655, 17.29, -3.049]}
            rotation={[2.689, 0.016, -2.923]}
            scale={[2.208, 2.208, 0.87]}
          />
          <mesh
            name="Plane010"
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials.Leaf}
            position={[2.615, 16.604, -2.547]}
            rotation={[-0.089, -0.104, -0.229]}
            scale={[4.662, 4.662, 1.838]}
          />
          <mesh
            name="Plane011"
            castShadow
            receiveShadow
            geometry={nodes.Plane011.geometry}
            material={materials.Leaf}
            position={[1.558, 16.319, -4.85]}
            rotation={[-0.079, 1.144, -0.337]}
            scale={[4.17, 4.17, 1.644]}
          />
          <mesh
            name="Plane012"
            castShadow
            receiveShadow
            geometry={nodes.Plane012.geometry}
            material={materials.Leaf}
            position={[-1.107, 16.925, -4.282]}
            rotation={[-2.742, 0.649, 2.816]}
            scale={[4.379, 4.379, 1.726]}
          />
          <mesh
            name="Plane013"
            castShadow
            receiveShadow
            geometry={nodes.Plane013.geometry}
            material={materials.Leaf}
            position={[-1.514, 16.604, -1.703]}
            rotation={[-3.036, -0.497, 2.995]}
            scale={[4.518, 4.518, 1.781]}
          />
          <mesh
            name="Plane014"
            castShadow
            receiveShadow
            geometry={nodes.Plane014.geometry}
            material={materials.Leaf}
            position={[0.502, 16.604, -1.234]}
            rotation={[0.164, -1.187, 0.252]}
            scale={[4.774, 4.774, 1.882]}
          />
          <mesh
            name="Plane015"
            castShadow
            receiveShadow
            geometry={nodes.Plane015.geometry}
            material={materials.Leaf}
            position={[0.067, 17.29, -4.282]}
            rotation={[2.415, 1.371, -2.255]}
            scale={[2.605, 2.605, 1.027]}
          />
          <mesh
            name="Plane016"
            castShadow
            receiveShadow
            geometry={nodes.Plane016.geometry}
            material={materials.Leaf}
            position={[1.638, 17.29, -3.381]}
            rotation={[0.056, 0.455, -0.13]}
            scale={[2.302, 2.302, 0.908]}
          />
          <mesh
            name="Plane017"
            castShadow
            receiveShadow
            geometry={nodes.Plane017.geometry}
            material={materials.Leaf}
            position={[1.638, 17.014, -1.831]}
            rotation={[0.059, -0.535, -0.075]}
            scale={[2.302, 2.302, 0.908]}
          />
          <mesh
            name="Plane018"
            castShadow
            receiveShadow
            geometry={nodes.Plane018.geometry}
            material={materials.Leaf}
            position={[0.236, 17.23, -1.653]}
            rotation={[-2.908, -1.151, -2.891]}
            scale={[2.302, 2.302, 0.908]}
          />
          <mesh
            name="Plane019"
            castShadow
            receiveShadow
            geometry={nodes.Plane019.geometry}
            material={materials.Leaf}
            position={[-0.655, 17.29, -3.049]}
            rotation={[2.689, 0.016, -2.923]}
            scale={[2.208, 2.208, 0.87]}
          />
        </mesh>
        <mesh
          name="Stone1001"
          castShadow
          receiveShadow
          geometry={nodes.Stone1001.geometry}
          material={materials.Stone}
          position={[-3.273, 1.242, -3.813]}
          rotation={[0.731, -1.542, 0.902]}
          scale={[0.441, 0.459, 0.541]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3d/maldive-mini.gltf");
