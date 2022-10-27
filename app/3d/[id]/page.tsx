import React from "react";

import { SHOWCASE_LIST } from "@/components/scenes/list";
import Display3DBase from "@/components/Display3DBase";

async function getData(id) {
  return {
    modelData: SHOWCASE_LIST.find((l) => l.id === id),
  };
}

async function Display3DSlug({ params }) {
  const { id } = params;

  const { modelData } = await getData(id);
  if (id) {
    if (!modelData) {
      if (typeof window !== "undefined") {
        window.location.href = "/3d";
      }
      return null;
    }
  } else {
    return null;
  }
  if (!modelData) {
    return null;
  }

  return (
    <Display3DBase
      name={modelData.name}
      credits={modelData.credits}
      modelId={id}
    />
  );
}

export async function generateStaticParams() {
  return [
    {
      id: "hello",
    },
    {
      id: "blender-baking-for-web",
    },
    {
      id: "blender-shortcuts",
    },
    {
      id: "intro-to-3d-on-web",
    },
  ];
}

export default Display3DSlug;
