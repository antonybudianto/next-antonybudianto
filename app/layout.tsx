import Script from "next/script";
import "tailwindcss/tailwind.css";
import "./style.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dark = false;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L79J59SE0Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L79J59SE0Q');
        `}
      </Script>
      <body
        style={{
          overscrollBehavior: "none",
          fontFamily: "Nunito, Arial",
        }}
      >
        {children}
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <script type="text/javascript">
            try {
              const __isdark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
              window.__dark = __isdark;
              if (__dark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            }catch(e){console.error(e)}
            </script>
          `,
          }}
        />
      </body>
    </html>
  );
}
