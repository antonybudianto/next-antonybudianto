import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState(
    typeof window !== "undefined" ? window.__dark : "light"
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

  return [dark, setDark];
};

export default useDarkMode;
