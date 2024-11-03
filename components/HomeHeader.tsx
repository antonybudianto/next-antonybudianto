import Link from "next/link";
import { useCallback } from "react";

import Button from "./Button";
import showCredit from "./helpers/showCredit";

function HomeHeader({
  credits = [],
  title,
  dark,
  setDark,
  autoRotate,
  setAutoRotate,
}) {
  const handleShowCredit = useCallback(() => {
    showCredit(credits);
  }, [credits]);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 9,
        left: 0,
        top: 0,
        padding: "20px",
      }}
    >
      <div className="flex align-center justify-between">
        <div className={dark ? "text-white" : "text-blue-900"}>
          <div className="text-sm lg:text-lg">{title}</div>
          <div className="text-xs lg:text-sm">
            by{" "}
            <Link className="underline" href="/3d">
              Antony Budianto
            </Link>
          </div>
        </div>
        <div className="select-none flex align-center justify-center">
          {credits.length ? (
            <Button title="Info" dark={dark} onClick={handleShowCredit}>
              {"ℹ️"}
            </Button>
          ) : null}
          <Button
            title="Switch Auto-rotate"
            dark={dark}
            onClick={() => {
              setAutoRotate(!autoRotate);
            }}
            textColor={
              autoRotate ? (dark ? "text-blue-200" : "text-blue-500") : ""
            }
          >
            {"↺"}
          </Button>
          <Button
            title="Switch Night Mode"
            dark={dark}
            onClick={() => {
              setDark(!dark);
            }}
          >
            {dark ? "🌙" : "☀️"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
