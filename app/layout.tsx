import Script from "next/script";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import type { Viewport } from "next";

import WeightsField from "@/components/WeightsField";

import "./globals.css";

/**
 * Self-hosted at build time — no runtime font CDN, which also keeps the
 * static export self-contained.
 *
 * PROPOSAL.md Q6 is still open: the display face is intended to become
 * Berkeley Mono or Commit Mono. That is a swap of this one declaration —
 * everything downstream reads --font-display.
 */
const display = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efeff2" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1116" },
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
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <WeightsField />
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
