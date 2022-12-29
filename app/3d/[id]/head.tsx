import { getShowcaseData } from "./page";

export default async function Head({ params }) {
  const { id } = params;
  const { modelData } = await getShowcaseData(id);
  const mainTitle = `${modelData.metaTitle} | Antony 3D Showcase`;

  return (
    <>
      <title>{mainTitle}</title>
      <meta name="description" content={modelData.metaContent} />
      <meta property="og:site_name" content="antonybudianto.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={modelData.metaTitle} />
      <meta property="og:description" content={modelData.metaContent} />
      <meta
        property="og:url"
        content={`https://antonybudianto.com/3d/${modelData.id}`}
      />
      <meta property="og:image" content={modelData.metaOgImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={modelData.metaTitle} />
      <meta name="twitter:description" content={modelData.metaContent} />
      <meta
        name="twitter:url"
        content={`https://antonybudianto.com/3d/${modelData.id}`}
      />
      <meta name="twitter:image" content={modelData.metaOgImage} />
      <meta name="twitter:site" content="@antonybudianto" />
      <meta name="theme-color" content="#FFFFFF" />
    </>
  );
}
