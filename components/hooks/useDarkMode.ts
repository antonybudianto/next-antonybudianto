import { useEffect, useMemo, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState<boolean>(
    typeof window !== "undefined" ? window.__dark : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme = dark ? "dark" : "light";
    window.__dark = dark;
  }, [dark]);

  return useMemo(() => {
    return { dark, setDark };
  }, [dark, setDark]);
};

export default useDarkMode;
