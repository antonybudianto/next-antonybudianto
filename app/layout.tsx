import Script from "next/script";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import type { Viewport } from "next";

import Substrate from "@/components/Substrate";

import "./globals.css";

/**
 * Three faces, three jobs. Fetched at build and emitted into
 * `_next/static/media` — no runtime font CDN, which also keeps the static
 * export self-contained. See PROPOSAL.md §11.2.
 *
 * Display is Bricolage Grotesque, requested with its optical-size and width
 * axes: the page narrows the display face as it gets bigger, which is what a
 * width axis is for and is not something a static face can do.
 */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

/** Demoted from display to data: labels, stacks, endpoints, anything measured. */
const data = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-data",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    /* Kept in step with --bg in app/globals.css. These paint the mobile
       browser chrome, so a stale value leaves a green bar around a blue
       page. */
    { media: "(prefers-color-scheme: light)", color: "#eef1f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1017" },
  ],
};

/**
 * Resolves the theme before first paint. This has to stay inline in <head>:
 * it previously sat at the end of <body>, so the light theme painted and then
 * flipped to dark. See PROPOSAL.md §2.
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
      className={`${display.variable} ${body.variable} ${data.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <Substrate />
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
