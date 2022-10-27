import "tailwindcss/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
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
      </body>
    </html>
  );
}
