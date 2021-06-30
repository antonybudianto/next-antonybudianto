import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";

import Button from "../components/Button";
const HomeScene = dynamic(() => import("../components/HomeScene"));

export default function Home() {
  const [dark, setDark] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: dark
          ? "linear-gradient(to top, #283E51, #0A2342)"
          : "linear-gradient(to top, #FFF, #87cefa)",
      }}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="3D Interactive Apartment by Antony Budianto"
        />
        <meta property="og:site_name" content="antonybudianto.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="3D Apartment" />
        <meta
          property="og:description"
          content="3D Interactive Apartment by Antony Budianto"
        />
        <meta property="og:url" content="https://antonybudianto.com/home" />
        <meta
          property="og:image"
          content="https://antonybudianto.com/meta-home.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3D Apartment" />
        <meta
          name="twitter:description"
          content="3D Interactive Apartment by Antony Budianto"
        />
        <meta name="twitter:url" content="https://antonybudianto.com/home" />
        <meta
          name="twitter:image"
          content="https://antonybudianto.com/meta-home.jpg"
        />
        <meta name="twitter:site" content="@antonybudianto" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <div
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 9,
          left: 0,
          top: 0,
          padding: "20px",
        }}
      >
        <div className="flex align-center justify-between">
          <div className={dark ? "text-white" : "text-blue-900"}>
            <div className="text-lg">3D Apart</div>
            <div className="text-sm">
              by <Link href="/">Antony Budianto</Link>
            </div>
          </div>
          <div className="select-none flex align-center justify-center">
            <Button
              title="Switch Auto-rotate"
              dark={dark}
              onClick={() => {
                setAutoRotate(!autoRotate);
              }}
              className={
                autoRotate ? (dark ? "text-blue-200" : "text-blue-500") : ""
              }
            >
              {"↺"}
            </Button>
            <Button
              title="Switch Night Mode"
              dark={dark}
              onClick={() => {
                setDark(!dark);
              }}
            >
              {dark ? "🌙" : "☀️"}
            </Button>
          </div>
        </div>
      </div>
      <HomeScene dark={dark} autoRotate={autoRotate} />
    </div>
  );
}
