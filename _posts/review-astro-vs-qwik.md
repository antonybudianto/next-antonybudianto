---
title: "Review Astro and Qwik"
desc: "Personal review of new modern frontend frameworks: Astro and Qwik"
date: "2022-12-31T05:09:13.392Z"
active: true
---

Hello, today I'd like to review two new frontend frameworks: [Astro](https://astro.build/) and [Qwik](https://qwik.builder.io/). I'm actually interested in how they can produce real zero JavaScript bundle on full static pages. Let's check it out!

## Get started

Here's how to get started on Astro and Qwik.

```sh
# Astro
npm create astro@latest

# Qwik
npm create qwik@latest
```

## Initial impression

### TypeScript and ESLint

All generated project from Astro and Qwik already comes with TypeScript support, no need to setup your own anymore! 🎉 

For ESLint, it's already configured for Qwik. As for Astro, you need to setup yourself [here](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/) even when I've picked the "recommended" choice on Astro CLI prompt.

### Layout

Astro used composition/wrapper component pattern to apply Layouting, which is more explicit.

Qwik used file-based layouting (`layout.tsx`) which is more convenient in my opinion, if you're already familiar with [Next.js layout](https://nextjs.org/docs/basic-features/layouts), then you got it 💪🏻.

### Code Editor / IDE

For Qwik, if you already installed React related IDE's extension, it should already works since Qwik use `*.tsx` file. While for Astro, it used `*.astro` file so you need to install the official language support extension [here](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).

### Scoped Style

Both Astro and Qwik supported scoped style out-of-the-box:

Astro

```html
<h1>Hello</h1>
<style>
  h1 { color: red; }
</style>
```

Qwik

```tsx
import { component$, useStylesScoped$ } from "@builder.io/qwik";

export default component$(() => {
  useStylesScoped$(`
    .component {
      background-color: red;
    }`);
  return <div class="component">Hello Qwik</div>;
});
```

### React

If you still wish to write [React](https://reactjs.org/) in Qwik or Astro, it's possible!

For Qwik, there is official [Qwik React integration](https://qwik.builder.io/integrations/integration/react/).

For Astro, there is also [official React integration](https://docs.astro.build/en/guides/integrations-guide/react/).

### Routing

Both Qwik and Astro used file-based routing system. 

```md
# Qwik
src/routes/index.tsx          -> mysite.com/
src/routes/about/index.tsx    -> mysite.com/about

# Astro
src/pages/index.astro         -> mysite.com/
src/pages/about/index.astro   -> mysite.com/about
src/pages/about.astro         -> mysite.com/about
```

As you can see on "about" routes, Astro supports non-index route as well, while [for Qwik](https://qwik.builder.io/qwikcity/routing/overview/), you must define the index file ("about/index.tsx"). 

### File package.json

Astro

```json
{
  "name": "@example/basics",
  "type": "module",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^1.8.0"
  }
}
```

Qwik

```json
{
  "name": "my-qwik-basic-starter",
  "description": "App with Routing built-in (recommended)",
  "engines": {
    "node": ">=15.0.0"
  },
  "private": true,
  "scripts": {
    "build": "qwik build",
    "build.client": "vite build",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.types": "tsc --incremental --noEmit",
    "deploy": "echo 'Run \"npm run qwik add\" to install a server adaptor'",
    "dev": "vite --mode ssr",
    "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
    "fmt": "prettier --write .",
    "fmt.check": "prettier --check .",
    "lint": "eslint \"src/**/*.ts*\"",
    "preview": "qwik build preview && vite preview --open",
    "start": "vite --open --mode ssr",
    "qwik": "qwik"
  },
  "devDependencies": {
    "@builder.io/qwik": "0.16.1",
    "@builder.io/qwik-city": "0.0.128",
    "@types/eslint": "8.4.10",
    "@types/node": "^18.11.16",
    "@types/node-fetch": "latest",
    "@typescript-eslint/eslint-plugin": "5.46.1",
    "@typescript-eslint/parser": "5.46.1",
    "eslint": "8.30.0",
    "eslint-plugin-qwik": "0.16.1",
    "node-fetch": "3.3.0",
    "prettier": "2.8.1",
    "typescript": "4.9.4",
    "undici": "5.14.0",
    "vite": "4.0.1",
    "vite-tsconfig-paths": "3.5.0"
  }
}
```

As we can see, Astro's package.json is more simple. Oh also, Qwik used Vite under the hood, so if you like Vite, you might like Qwik as well 😆 .

## Build result

It's time to compare the build result! So for fair comparison, I need to setup same code for both generated project. I removed default layout and boilerplate, and only to render "Hello world" on index route.

### Build setup

Qwik

```tsx
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return <div>Hello Qwik</div>;
});
```

Astro

```html
---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Hello">
  <div>Hello Astro</div>
</Layout>
```

### HTML Result

<img src="https://user-images.githubusercontent.com/7658554/208588625-5f94b2b7-0476-4bbb-8ece-46cba4665f2c.jpg" />
<img src="https://user-images.githubusercontent.com/7658554/208588619-3ecf48c1-9003-4377-9373-d2ca5365628b.jpg" />

> HTML output

<img src="https://user-images.githubusercontent.com/7658554/208588626-2cefa049-0425-4458-ac35-55d13d751840.jpg" />
<img src="https://user-images.githubusercontent.com/7658554/208588628-3c2ba754-fd10-4a4f-8022-b605e27b1ead.jpg" />

The result is as we expected, since there's no interactivity, we can see there is no JavaScript being downloaded at all ✨.

From the HTML result, the Astro is smaller and the output is much cleaner. The Qwik's HTML result still contain some comments and inline script.

## Conclusion

Having tried them for some weeks, I personally still loved TSX so I'm more into Qwik for now 😆, there's also [Resumable](https://qwik.builder.io/docs/concepts/resumable/) feature which is very interesting feature compared to common framework Hydration's technique.

Having said that, Astro is still promising and if you prefer Template syntax instead of TSX, then you'll love Astro ❤.

Thanks for reading this far, see you on another post 👋🏻.
