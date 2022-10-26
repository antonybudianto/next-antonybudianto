import "tailwindcss/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
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
