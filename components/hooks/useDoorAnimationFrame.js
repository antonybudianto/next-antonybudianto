import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import degToRad from "../helpers/degToRad";

const DOOR_OPEN = degToRad(-49.847);

function doorAnimationFrame(doorRef, doorOpen) {
  const y = doorRef.current.rotation.y;
  let addY = y < 0 ? 0.01 : 0;
  if (doorOpen) {
    addY = y > DOOR_OPEN ? -0.01 : 0;
  }
  if (addY) {
    doorRef.current.rotation.y += addY;
  }
}

function useDoorAnimationFrame() {
  const doorRef = useRef();
  const [doorOpen, setDoorOpen] = useState(true);

  useFrame(() => {
    doorAnimationFrame(doorRef, doorOpen);
  });

  return [doorRef, doorOpen, setDoorOpen];
}

export default useDoorAnimationFrame;
