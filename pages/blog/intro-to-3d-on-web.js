import Head from "next/head";

import CodeBlock from "../../components/CodeBlock";

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
      <nav id="header" className="fixed bg-white w-full z-10 top-0">
        <div id="progress" className="h-1 z-20 top-0"></div>

        <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div className="pl-4">
            <a
              className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
              href="#"
            >
              Antony{"'"}s Blog
            </a>
          </div>

          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                  href="/"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans">
            {/* <p className="text-base md:text-sm text-green-500 font-bold">
              &lt;{" "}
              <a
                href="#"
                className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
              >
                BACK TO BLOG
              </a>
            </p> */}
            <h1 className="font-bold font-sans break-normal text-gray-600 pt-6 pb-2 text-3xl md:text-4xl">
              Introduction to 3D on Web
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-500">
              Published 21 August 2021
            </p>
          </div>
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
            in my recent 3D projects, but it's not required. You can use any
            React boilerplate/starter you want (Next, CRA, etc). <br />
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
          <p>
            You can install required dependencies using:
            <br />
            <CodeBlock>
              {`
npm i three @react-three/fiber
              `}
            </CodeBlock>
          </p>
          <h3 className="pb-2 pt-6 font-sans">Render "Hello box"</h3>
          <p>
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
          </p>
          <div className="mt-2">
            <img
              className="border"
              style={{ height: "220px" }}
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
            (3 item array: x, y, z). You'll use Vector3 a lot since it's the
            most basic unit in 3D, it'll be used for object position, scale,
            rotation, etc.
          </div>
          <h3 className="pt-6 pb-2 font-sans">Import model from Blender</h3>
          <div>
            Three.js offers basic geometries that you can use direcly such as
            Box, Sphere, and so on. They're good for procedural rendering which
            don't have model loading cost. For instance, you want to render
            simple chess tiles, or simple plane, you might not need to import
            Model at all. <br />
            In most cases, you'll create your model in CAD software and import
            them to another medium (Web, Unity, etc). Three.js allows you to
            import model from CAD software (Blender, Maya, etc) by using glTF
            extension, it's one of standard format for 3D scenes and model.{" "}
            <br /> <br />
            From Blender UI, you can export by click menu File > Export > glTF
            2.0 <br />
            <img
              style={{ height: "430px" }}
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
            We need to convert our glTF into React Three Fiber format, we can
            use{" "}
            <a href="https://gltf.pmnd.rs/" className="underline text-blue-500">
              https://gltf.pmnd.rs/
            </a>
            . Go to the site, drag and drop your glTF, and you can copy paste
            your Model component from there. The site also previews your model
            and you'll get something like: <br />
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
            Congrats! Your model finally shows up on your Web! One more thing,
            you might notice that we use React `Suspense` to handle potential
            asset loading state from our Model. <br />
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
            object (like a product showcase in stores ✨), and user can also
            zoom and pan on the scene.
            <br />
            <img
              style={{ height: "300px" }}
              src="https://i.ibb.co/P6kN1nX/Screen-Shot-2021-08-21-at-9-21-47-PM.jpg"
            />
            <br />I think that's all for today, thanks for reading until this
            far, I hope this post will be useful for you, see you next time!
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
        </div>

        <hr className="border-b-2 border-gray-400 mt-8 mx-4" />

        <div className="flex w-full items-center font-sans px-4 py-12">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://antonybudianto.com/profile.jpeg"
            alt="Avatar of Antony"
          />
          <div className="flex-1 px-2">
            <p className="text-base text-gray-600 font-bold text-base md:text-xl leading-none mb-2">
              Antony Budianto
            </p>
            <p className="text-gray-600 text-xs md:text-base">
              Software Engineering
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-400 shadow">
        <div className="container max-w-4xl mx-auto flex py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full md:w-1/2 ">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4 text-gray-600 text-sm">
                  Blog template by TailwindToolbox
                </p>
              </div>
            </div>

            <div className="flex w-full md:w-1/2">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">Social</h3>
                <ul className="list-reset items-center text-sm pt-3">
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      href="https://linkedin.com/in/antonybudianto"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      href="https://twitter.com/antonybudianto"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      href="https://github.com/antonybudianto"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
