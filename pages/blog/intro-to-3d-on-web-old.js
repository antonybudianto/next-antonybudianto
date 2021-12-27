import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import BlogNav from "../../components/blog/BlogNav";
import BlogFooter from "../../components/blog/BlogFooter";

import CodeBlock from "../../components/CodeBlock";
import BlogWrapper from "../../components/blog/BlogWrapper";

const metaDesc = "Learn about 3D on Web at Antony's Blog";
const metaTitle = "Introduction to 3D on Web";

export default function Blog3d() {
  return (
    <>
      <Head>
        <title>Introduction to 3D on Web</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metaDesc} />
        <meta name="og:title" content={metaTitle} />
        <meta name="og:description" content={metaDesc} />
        <meta property="og:site_name" content="antonybudianto.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta
          property="og:url"
          content="https://antonybudianto.com/blog/intro-to-3d-on-web"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/P6kN1nX/Screen-Shot-2021-08-21-at-9-21-47-PM.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta
          name="twitter:url"
          content="https://antonybudianto.com/blog/intro-to-3d-on-web"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/P6kN1nX/Screen-Shot-2021-08-21-at-9-21-47-PM.jpg"
        />
        <meta name="twitter:site" content="@antonybudianto" />
      </Head>
      <BlogWrapper
        title="Introduction to 3D on Web"
        publishDate="21 August 2021"
      >
        <p className="mt-2">
          Hello, today I would like to share how to make 3D Web app using
          @react-three/fiber and lastly, how to import your Blender model to
          Web.
        </p>
        <h1 className="pb-2 pt-6 font-sans">Prerequisites</h1>
        <p>
          I used{" "}
          <a href="https://nextjs.org/" className="underline text-blue-500">
            Next.js
          </a>{" "}
          in my recent 3D projects, but it's not required. You can use any React
          boilerplate/starter you want (Next, CRA, etc). <br />
          You need{" "}
          <a
            className="text-blue-500 underline"
            href="https://www.blender.org/"
          >
            Blender
          </a>{" "}
          software if you want to use CAD for creating your 3D model.
        </p>
        <h2 className="pb-2 pt-6 font-sans">Install</h2>
        <div>
          You can install required dependencies using:
          <br />
          <CodeBlock>
            {`
npm i three @react-three/fiber
              `}
          </CodeBlock>
        </div>
        <h3 className="pb-2 pt-6 font-sans">Render "Hello box"</h3>
        <div>
          Let's do simple "hello world" by rendering simple Box in our scene:{" "}
          <br />
          <CodeBlock>
            {`
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'

function Box(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

ReactDOM.render(
  <Canvas>
    <pointLight position={[-2, 2, 10]} />
    <Box position={[2, -2, 0]} scale={1} />
  </Canvas>,
  document.getElementById('root'),
)
            `}
          </CodeBlock>
        </div>
        <div className="mt-2">
          <img
            className="border"
            style={{ height: "220px" }}
            alt="box"
            src="https://i.ibb.co/bRYqtwS/Screen-Shot-2021-08-21-at-8-04-26-PM.png"
          />
          <br />
          Alongside the box, we also render a{" "}
          <a
            href="https://threejs.org/docs/#api/en/lights/PointLight"
            className="underline text-blue-500"
          >
            light
          </a>{" "}
          so that we can see our object on scene. You can set the position for
          the Box with{" "}
          <a
            href="https://threejs.org/docs/#api/en/math/Vector3"
            className="underline text-blue-500"
          >
            Vector3
          </a>{" "}
          (3 item array: x, y, z). You'll use Vector3 a lot since it's the most
          basic unit in 3D, it'll be used for object position, scale, rotation,
          etc.
        </div>
        <h3 className="pt-6 pb-2 font-sans">Import model from Blender</h3>
        <div>
          Three.js offers basic geometries that you can use direcly such as Box,
          Sphere, and so on. They're good for procedural rendering which don't
          have model loading cost. For instance, you want to render simple chess
          tiles, or simple plane, you might not need to import Model at all.{" "}
          <br />
          In most cases, you'll create your model in CAD software and import
          them to another medium (Web, Unity, etc). Three.js allows you to
          import model from CAD software (Blender, Maya, etc) by using glTF
          extension, it's one of standard format for 3D scenes and model. <br />{" "}
          <br />
          From Blender UI, you can export by click menu File > Export > glTF 2.0{" "}
          <br />
          <img
            style={{ height: "390px" }}
            alt="blender"
            src="https://i.ibb.co/w4PbMNG/Screen-Shot-2021-08-21-at-8-36-08-PM.jpg"
          />
          You can save as "hello.gltf" for now. <br />
        </div>
        <h5 className="pb-2 pt-8 font-sans">
          Import glTF with @react-three/drei
        </h5>
        <div>
          We'll use another helper package for handling glTF loading. Let's
          install: <br />
          <CodeBlock>
            {`
npm i @react-three/drei
              `}
          </CodeBlock>
        </div>
        <div className="mt-2">
          We need to convert our glTF into React Three Fiber format, we can use{" "}
          <a href="https://gltf.pmnd.rs/" className="underline text-blue-500">
            https://gltf.pmnd.rs/
          </a>
          . Go to the site, drag and drop your glTF, and you can copy paste your
          Model component from there. The site also previews your model and
          you'll get something like: <br />
          <CodeBlock>
            {`
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/hello.gltf')
  return ( ...
              `}
          </CodeBlock>
        </div>
        <div className="mt-3">
          Next, copy your glTF file into your `public` folder, it should be
          accessible from your server host. (e.g. http://localhost/hello.gltf)
          <br />
          <br />
          Finally, you can import your model into your scene: <br />
          <CodeBlock>
            {`
import Model from './Model'
...
<Canvas>
  <Suspense fallback={null}>
    <Model position={[0.2, -1.3, 0.5]} />
  </Suspense>
  <pointLight position={[-2, 2, 10]} />
</Canvas>
              `}
          </CodeBlock>
          <br />
          Congrats! Your model finally shows up on your Web! One more thing, you
          might notice that we use React `Suspense` to handle potential asset
          loading state from our Model. <br />
          <br />
          As a bonus, you can use drei Stage for fast Scene prototyping like
          Camera, Light setup, etc. Example: <br />
          <CodeBlock>
            {`
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import Model from "./Model";

...
const ref = useRef();
...

<Canvas>
  <Suspense fallback={null}>
    <Stage
      controls={ref}
      preset="rembrandt"
      intensity={1}
      environment="city"
    >
      <Model />
    </Stage>
  </Suspense>
  <OrbitControls ref={ref} autoRotate />
</Canvas>
              `}
          </CodeBlock>
          <br />
          We can use OrbitControls to have the camera to orbit around your
          object (like a product showcase in stores ✨), and user can also zoom
          and pan on the scene.
          <br />
          <img
            style={{ height: "300px" }}
            alt="demo 3d"
            src="https://i.ibb.co/P6kN1nX/Screen-Shot-2021-08-21-at-9-21-47-PM.jpg"
          />
          <br />I think that's all for today, thanks for reading until this far,
          I hope this post will be useful for you, see you next time!
        </div>

        <blockquote className="border-l-4 border-green-500 italic my-8 pl-2 md:pl-3">
          You can also fork my Codesandbox{" "}
          <a
            className="underline text-blue-500"
            href="https://codesandbox.io/s/react-3d-starter-ejmfi"
          >
            here
          </a>{" "}
          for complete code
        </blockquote>
      </BlogWrapper>
    </>
  );
}
