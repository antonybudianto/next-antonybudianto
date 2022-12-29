import { SHOWCASE_LIST } from "@/components/scenes/list";

export async function getShowcaseData(id) {
  return {
    modelData: SHOWCASE_LIST.find((l) => l.id === id),
  };
}
