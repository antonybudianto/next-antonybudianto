import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import HomeHeader from "../../components/HomeHeader";
import { SHOWCASE_LIST } from "../../components/scenes/list";
import Script from "next/script";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (typeof iNoBounce !== "undefined" && !iNoBounce.isEnabled()) {
      iNoBounce.enable();
    }
    return () => {
      if (iNoBounce && iNoBounce.isEnabled()) {
        iNoBounce.disable();
      }
    };
  }, []);

  let modelData = null;
  if (id) {
    modelData = SHOWCASE_LIST.find((l) => l.id === id);
    if (!modelData) {
      window.location.href = "/3d";
      return null;
    }
  } else {
    return null;
  }

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
        <title>{modelData.name} by Antony</title>
        <meta charSet="utf-8" />
        <meta name="description" content={modelData.metaContent} />
        <meta property="og:site_name" content="antonybudianto.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={modelData.metaTitle} />
        <meta property="og:description" content={modelData.metaContent} />
        <meta
          property="og:url"
          content={`https://antonybudianto.com/3d/${modelData.id}`}
        />
        <meta property="og:image" content={modelData.metaOgImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={modelData.metaTitle} />
        <meta name="twitter:description" content={modelData.metaContent} />
        <meta
          name="twitter:url"
          content={`https://antonybudianto.com/3d/${modelData.id}`}
        />
        <meta name="twitter:image" content={modelData.metaOgImage} />
        <meta name="twitter:site" content="@antonybudianto" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.2.0/inobounce.min.js"></Script>
      <HomeHeader
        title={modelData.name}
        dark={dark}
        autoRotate={autoRotate}
        setDark={setDark}
        setAutoRotate={setAutoRotate}
        credits={modelData.credits}
      />
      <modelData.component dark={dark} autoRotate={autoRotate} />
    </div>
  );
}
