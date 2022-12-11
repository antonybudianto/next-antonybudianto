import "tailwindcss/tailwind.css";
// import { cookies } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const nextCookies = cookies();
  // const dark = nextCookies.get("dark").value === "1";
  const dark = false;

  return (
    <html className={`${dark ? "dark" : ""}`}>
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
