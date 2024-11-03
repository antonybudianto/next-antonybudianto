import { useEffect } from "react";

function ProgressLoader({ setLoading }) {
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  return null;
}

export default ProgressLoader;
