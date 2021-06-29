import React, { useState } from "react";
import dynamic from "next/dynamic";

const HomeScene = dynamic(() => import("../components/HomeScene"));

export default function Home() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: dark
          ? "linear-gradient(to top, #283E51, #0A2342)"
          : "linear-gradient(to top, #FFF, #87cefa)",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 9,
          left: 0,
          top: 0,
          padding: "10px 10px",
        }}
      >
        <div className="flex align-center justify-between">
          <div className={dark ? "text-white" : "text-blue-900"}>
            3D Apart by Antony Budianto
          </div>
          <button
            onClick={() => {
              setDark(!dark);
            }}
            className={`w-full sm:w-auto flex-none bg-${
              dark ? "gray-700" : "blue-100"
            } hover:bg-${
              dark ? "gray-600" : "blue-200"
            } text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-${
              dark ? "gray-900" : "blue-300"
            } focus:outline-none transition-colors duration-200`}
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
      <HomeScene dark={dark} />
    </div>
  );
}
