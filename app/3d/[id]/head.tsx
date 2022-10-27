export default async function Head({ params }) {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
        rel="stylesheet"
        // @ts-ignore
        precedence="default"
      />
      <title>Model by Antony</title>
      <meta charSet="utf-8" />
      {/* <meta name="description" content={modelData.metaContent} /> */}
      <meta property="og:site_name" content="antonybudianto.com" />
      <meta property="og:type" content="website" />
      {/* <meta property="og:title" content={modelData.metaTitle} />
        <meta property="og:description" content={modelData.metaContent} /> */}
      {/* <meta
        property="og:url"
        content={`https://antonybudianto.com/3d/${modelData.id}`}
      /> */}
      {/* <meta property="og:image" content={modelData.metaOgImage} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:title" content={modelData.metaTitle} /> */}
      {/* <meta name="twitter:description" content={modelData.metaContent} /> */}
      {/* <meta
        name="twitter:url"
        content={`https://antonybudianto.com/3d/${modelData.id}`}
      /> */}
      {/* <meta name="twitter:image" content={modelData.metaOgImage} /> */}
      <meta name="twitter:site" content="@antonybudianto" />
      <meta name="theme-color" content="#FFFFFF" />
    </>
  );
}
