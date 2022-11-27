export default async function Head({ params }) {
  return (
    <>
      <title>Blog by Antony</title>
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
      <meta
        name="description"
        content="Blog by Antony Budianto, post about web and technology"
      />
      <meta property="og:site_name" content="antonybudianto.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Blog by Antony" />
      <meta
        property="og:description"
        content="Blog by Antony Budianto, post about web and technology"
      />
      <meta property="og:url" content="https://antonybudianto.com/blog" />
      {/* <meta
            property="og:image"
            content="https://antonybudianto.com/meta-3d/meta-maldive-mini.jpg"
          /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog by Antony" />
      <meta name="twitter:description" content="Blog by Antony" />
      <meta name="twitter:url" content="https://antonybudianto.com/blog" />
      {/* <meta
            name="twitter:image"
            content="https://antonybudianto.com/meta-3d/meta-maldive-mini.jpg"
          /> */}
      <meta name="twitter:site" content="@antonybudianto" />
      <meta name="theme-color" content="#FFFFFF" />
    </>
  );
}
