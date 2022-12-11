"use client";

import DarkmodeButton from "./DarkmodeButton";
import useDarkMode from "./hooks/useDarkMode";

const DarkmodeButtonWrapper = () => {
  const { dark, setDark } = useDarkMode();
  return (
    <DarkmodeButton
      title="Switch Night Mode"
      onClick={() => {
        setDark(!dark);
      }}
    >
      {dark ? "🌙" : "☀️"}
    </DarkmodeButton>
  );
};

export default DarkmodeButtonWrapper;
