export default async function Head({ params }) {
  return (
    <>
      <title>Antony Budianto</title>
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
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* <script
        async
        dangerouslySetInnerHTML={{
          __html: `
              var dark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
              window.__dark = dark;
              if (dark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
          `,
        }}
      /> */}
    </>
  );
}
