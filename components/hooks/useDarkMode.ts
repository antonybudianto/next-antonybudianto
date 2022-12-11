import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";

const useDarkMode = () => {
  const [dark, setDark] = useState<boolean>(
    typeof window !== "undefined" ? Cookies.get("dark") === "1" : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    Cookies.set("dark", dark ? 1 : 0, { expires: 7 });
  }, [dark]);

  return useMemo(() => {
    return { dark, setDark };
  }, [dark, setDark]);
};

export default useDarkMode;
