"use client";

import { useEffect, useState } from "react";
import DarkmodeButton from "./DarkmodeButton";
import useDarkMode from "./hooks/useDarkMode";

const DarkmodeButtonWrapper = () => {
  const { dark, setDark } = useDarkMode();
  const iconText = dark ? "🌙" : "☀️";
  const [btnText, setBtnText] = useState<JSX.Element | null>(
    <div style={{ width: "18px", height: "24px" }}>&nbsp;</div>
  );

  useEffect(() => {
    setBtnText(null);
  }, []);

  return (
    <DarkmodeButton
      title="Switch Night Mode"
      onClick={() => {
        setDark(!dark);
      }}
    >
      {btnText || iconText}
    </DarkmodeButton>
  );
};

export default DarkmodeButtonWrapper;
