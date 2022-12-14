"use client";

import DarkmodeButton from "./DarkmodeButton";
import useDarkMode from "./hooks/useDarkMode";

const DarkmodeButtonWrapper = () => {
  const { dark, setDark } = useDarkMode();
  const iconText = dark ? "🌙" : "☀️";
  const btnText =
    typeof document === "undefined" ? (
      <div style={{ width: "18px", height: "24px" }}>&nbsp;</div>
    ) : (
      iconText
    );
  return (
    <DarkmodeButton
      title="Switch Night Mode"
      onClick={() => {
        setDark(!dark);
      }}
    >
      {btnText}
    </DarkmodeButton>
  );
};

export default DarkmodeButtonWrapper;
