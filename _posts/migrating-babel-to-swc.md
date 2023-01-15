---
title: "Migrating Babel to swc"
desc: "I will share my experience migrating Babel to swc"
date: "2023-01-15T06:31:24.371Z"
ogImage: "https://user-images.githubusercontent.com/7658554/210334921-9907a7e3-2aeb-4147-b729-fdcce736b1d1.jpg"
---

> If you happen to use meta-frameworks like [Next.js](https://nextjs.org/) or such, this post might not be too useful for you, feel free to skip!

> I provided a basic starter for you to play with here: [playground-react-webpack](https://github.com/antonybudianto/playground-react-webpack/tree/babel)

Hi, I'd like to share my recent experience about migrating [Babel](https://babeljs.io/) to [swc](https://swc.rs/) on professional medium-scale project.

## Initial

If you used Babel for transpiling a web app, it's high chance that you also use Webpack and babel-loader as well.

To start migrating to swc, you can uninstall all babel's related packages, and install these swc packages:

```sh
npm i -D @swc/cli @swc/core swc-loader
```

```json
  "@swc/cli": "0.1.59",
  "@swc/core": "^1.3.26",
  "swc-loader": "0.2.3",
```

With these packages alone, it already can support [TypeScript](https://www.typescriptlang.org/) + TSX, React automatic runtime, all just by defining them on `.swcrc` file, though I'll use config object on swc-loader directly.

## Config

Now I can go ahead to remove any babel config, usually `babel.config.js` or `.babelrc`. After that, add swc config on your `swc-loader`, replacing the `babel-loader` place! 

Also add `TerserPlugin.swcMinify` on your TerserPlugin initialization:

```js
module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: {
            module: {
              type: "es6"
            },
            minify: process.env.NODE_ENV !== "development",
            isModule: true,
            jsc: {
              minify: {
                compress: true
                mangle: true,
                format: {
                  asciiOnly: true,
                  comments: /^ webpack/
                }
              },
              target: "es2016",
              parser: {
                syntax: "typescript",
                tsx: true
              },
              transform: {
                react: {
                  runtime: "automatic"
                }
              }
            }
          }
        }
      }
    ]
  }
};
```

> The swcMinify part is very important, otherwise you'll end up with **bigger bundle size** than Babel!

You might be wondering what this line is for:

```js
  comments: /^ webpack/
```

It's used to ignore JS comment removal during build, since some comments are required for library like `@loadable/component`. If you used `@loadable/component`, you absolutely need this!

... and that's all! You can try to boot up your development server to see if anything works as expected. Also try to run your production build as well.

You can also check the pull request example here: https://github.com/antonybudianto/playground-react-webpack/pull/1.

The initial migration is not too difficult so far, the challenge comes when you have used babel plugins and even harder if you code your own custom babel-plugin or presets.

## Babel plugin or presets

If you have used any babel plugins/presets, then you cannot use them on swc, since swc now used [Rust](https://www.rust-lang.org/) + WASM based plugin.

However, common babel plugins/presets like env, react, typescript are already supported by default, and some popular third-party plugins already supported:

- emotion
- jest
- loadable-components

You can see the [complete list here](https://github.com/swc-project/plugins/tree/main/packages)

### Custom babel plugins or presets

If you made your own babel plugins/presets, you cannot use them directly as expected. You have to rewrite them with [Rust](https://www.rust-lang.org/) language.

I'll try to cover about this in upcoming blog. Stay tuned!

## Benchmark result

For hello world example, it saves build time from ~1.5s to just ~287ms.

For medium-scale project, it can saves from ~120s to just ~20s. It's about 6x faster! The larger the codebase, we can see the gap even better. 

<img width="600" height="350" src="https://user-images.githubusercontent.com/7658554/212531429-e414177a-0f11-4dda-b0a4-8875f794369b.jpg" />

## Conclusion

The migration process was mostly seamless, unless you used many babel plugins, especially custom made ones.

Thank you for reading! See you on another blog post.
