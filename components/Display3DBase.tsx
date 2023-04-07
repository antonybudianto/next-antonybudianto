"use client";

import { Suspense, useState } from "react";
import HomeHeader from "./HomeHeader";
import { SHOWCASE_LIST_CMP } from "@/components/scenes/list-cmp";

export default function Display3DBase({ modelId, name, credits }) {
  const [dark, setDark] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  // @ts-ignore
  const Cmp = SHOWCASE_LIST_CMP.find((l) => l.id === modelId).component;
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
        title={name}
        dark={dark}
        autoRotate={autoRotate}
        setDark={setDark}
        setAutoRotate={setAutoRotate}
        credits={credits}
      />
      <Suspense fallback={null}>
        <Cmp dark={dark} autoRotate={autoRotate} />
      </Suspense>
    </div>
  );
}
