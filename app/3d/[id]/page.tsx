import { SHOWCASE_LIST } from "@/components/scenes/list";
import Display3DBase from "@/components/Display3DBase";

async function getData(id) {
  return {
    modelData: !id ? null : SHOWCASE_LIST.find((l) => l.id === id),
  };
}

export default async function Display3DSlug({ params }) {
  const { id } = params;

  const { modelData } = await getData(id);
  if (!modelData) {
    if (typeof window !== "undefined") {
      window.location.href = "/3d";
    }
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
