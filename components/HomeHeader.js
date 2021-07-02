import Link from "next/link";
import Button from "./Button";

function HomeHeader({ dark, setDark, autoRotate, setAutoRotate }) {
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
          <div className="text-lg">3D Apart</div>
          <div className="text-sm">
            by <Link href="/">Antony Budianto</Link>
          </div>
        </div>
        <div className="select-none flex align-center justify-center">
          <Button
            title="Switch Auto-rotate"
            dark={dark}
            onClick={() => {
              setAutoRotate(!autoRotate);
            }}
            className={
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
