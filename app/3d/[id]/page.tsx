import Display3DBase from "@/components/Display3DBase";
import { getShowcaseData } from "@/lib/showcase3d";
import { SHOWCASE_LIST_CMP } from "@/components/scenes/list-cmp";

export default async function Display3DSlug(props) {
  const params = await props.params;
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
  return SHOWCASE_LIST_CMP.map((post) => {
    return {
      id: post.id,
    };
  });
}
