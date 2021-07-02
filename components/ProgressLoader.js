import { useEffect } from "react";
import { useProgress } from "@react-three/drei";

function ProgressLoader({ setLoading }) {
  const { progress } = useProgress();
  useEffect(() => {
    setLoading(progress !== 100);
  }, [progress]);
  return null;
}

export default ProgressLoader;
