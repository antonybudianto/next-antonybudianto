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
      <title>3D Showcase by Antony</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="3D Interactive Showcase by Antony Budianto"
      />
      <meta property="og:site_name" content="antonybudianto.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="3D Showcase" />
      <meta
        property="og:description"
        content="3D Interactive Showcase by Antony Budianto"
      />
      <meta property="og:url" content="https://antonybudianto.com/3d" />
      <meta
        property="og:image"
        content="https://antonybudianto.com/meta-3d/meta-maldive-mini.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="3D Showcase" />
      <meta
        name="twitter:description"
        content="3D Interactive Showcase by Antony Budianto"
      />
      <meta name="twitter:url" content="https://antonybudianto.com/3d" />
      <meta
        name="twitter:image"
        content="https://antonybudianto.com/meta-3d/meta-maldive-mini.jpg"
      />
      <meta name="twitter:site" content="@antonybudianto" />
      <meta name="theme-color" content="#FFFFFF" />
    </>
  );
}
