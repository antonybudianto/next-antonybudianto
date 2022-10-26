"use client";

import React, { Suspense, useState } from "react";
// import { useRouter } from "next/router";

import HomeHeader from "@/components/HomeHeader";
import { SHOWCASE_LIST } from "@/components/scenes/list";

export default function Home({ params }) {
  const [dark, setDark] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  // const router = useRouter();
  const { id } = params;

  let modelData = null;
  if (id) {
    modelData = SHOWCASE_LIST.find((l) => l.id === id);
    if (!modelData) {
      window.location.href = "/3d";
      return null;
    }
  } else {
    return null;
  }
  if (!modelData) {
    return null;
  }

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
      <HomeHeader
        title={modelData.name}
        dark={dark}
        autoRotate={autoRotate}
        setDark={setDark}
        setAutoRotate={setAutoRotate}
        credits={modelData.credits}
      />
      <Suspense fallback={null}>
        <modelData.component dark={dark} autoRotate={autoRotate} />
      </Suspense>
    </div>
  );
}
