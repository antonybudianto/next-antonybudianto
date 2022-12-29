import { SHOWCASE_LIST } from "@/components/scenes/list";
import Display3DBase from "@/components/Display3DBase";

export async function getShowcaseData(id) {
  return {
    modelData: SHOWCASE_LIST.find((l) => l.id === id),
  };
}

export default async function Display3DSlug({ params }) {
  const { id } = params;
  const { modelData } = await getShowcaseData(id);

  return (
    <Display3DBase
      name={modelData.name}
      credits={modelData.credits}
      modelId={id}
    />
  );
}

export async function generateStaticParams() {
  return SHOWCASE_LIST.map((post) => {
    return {
      id: post.id,
    };
  });
}
