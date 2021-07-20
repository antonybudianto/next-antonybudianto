import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import HomeHeader from "../../components/HomeHeader";

const MaldiveMiniScene = dynamic(() =>
  import("../../components/scenes/MaldiveMiniScene")
);

export default function MaldiveMiniPage() {
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
        <title>3D Maldive by Antony</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="3D Interactive Maldive by Antony Budianto"
        />
        <meta property="og:site_name" content="antonybudianto.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="3D Maldive" />
        <meta
          property="og:description"
          content="3D Interactive Maldive by Antony Budianto"
        />
        <meta property="og:url" content="https://antonybudianto.com/home" />
        <meta
          property="og:image"
          content="https://antonybudianto.com/meta-home.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3D Maldive" />
        <meta
          name="twitter:description"
          content="3D Interactive Maldive by Antony Budianto"
        />
        <meta name="twitter:url" content="https://antonybudianto.com/home" />
        <meta
          name="twitter:image"
          content="https://antonybudianto.com/meta-home.jpg"
        />
        <meta name="twitter:site" content="@antonybudianto" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <HomeHeader
        title="3D Maldive Mini"
        dark={dark}
        autoRotate={autoRotate}
        setDark={setDark}
        setAutoRotate={setAutoRotate}
        credits={[
          "https://free-3dtextureshd.com",
          "https://www.archibaseplanet.com",
          "https://www.sketchuptextureclub.com",
          "https://www.goodtextures.com",
          "https://polyhaven.com",
        ]}
      />
      <MaldiveMiniScene dark={dark} autoRotate={autoRotate} />
    </div>
  );
}
