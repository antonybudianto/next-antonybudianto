import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { Viewport } from "next";

import "./globals.css";

/**
 * One family for everything people read. Inter is requested as a variable
 * font with its optical-size axis, so headlines pick up the display cut on
 * their own. Mono only appears where something is meant to be copied: commands
 * and code. Both are fetched at build into `_next/static/media` — no runtime
 * font CDN, which keeps the static export self-contained.
 */
const sans = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    /* Kept in step with --bg in app/globals.css; these paint the mobile
       browser chrome. */
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

/**
 * Resolves the theme before first paint. This has to stay inline in <head>,
 * otherwise the light theme paints first and then flips.
 */
const THEME_INIT = `
try {
  var d = localStorage.theme === 'dark' ||
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  window.__dark = d;
  document.documentElement.classList.toggle('dark', d);
  document.documentElement.style.colorScheme = d ? 'dark' : 'light';
} catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        {children}
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
      </body>
    </html>
  );
}
