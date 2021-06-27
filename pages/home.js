import React from "react";
import dynamic from "next/dynamic";

const HomeScene = dynamic(() => import("../components/HomeScene"));

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <HomeScene />
    </div>
  );
}
