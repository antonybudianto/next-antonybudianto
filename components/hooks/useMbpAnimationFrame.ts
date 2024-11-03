import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { MutableRefObject } from "react";
import degToRad from "../helpers/degToRad";

const MBP_CLOSE = degToRad(-90);
const MBP_OPEN = degToRad(10);

function mbpAnimationFrame(
  mbpRef: MutableRefObject<{ rotation: { x: number } }>,
  mbpOpen: boolean
) {
  const x = mbpRef.current.rotation.x;
  let addX = x > MBP_CLOSE ? -0.01 : 0;
  if (mbpOpen) {
    addX = x < MBP_OPEN ? 0.01 : 0;
  }
  if (addX) {
    mbpRef.current.rotation.x += addX;
  }
}

function useMbpAnimationFrame() {
  const mbpRef = useRef();
  const [mbpOpen, setMbpOpen] = useState(true);

  useFrame(() => {
    // @ts-ignore
    mbpAnimationFrame(mbpRef, mbpOpen);
  });

  return { mbpRef, mbpOpen, setMbpOpen };
}

export default useMbpAnimationFrame;
