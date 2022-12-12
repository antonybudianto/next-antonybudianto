import "tailwindcss/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dark = false;

  return (
    <html suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
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
