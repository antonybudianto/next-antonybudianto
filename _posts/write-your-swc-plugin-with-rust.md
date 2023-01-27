---
title: "Write your swc plugin with Rust"
desc: "I will share how to write your swc plugin with Rust"
date: "2023-01-27T12:33:17.887Z"
ogImage: "https://user-images.githubusercontent.com/7658554/210334921-9907a7e3-2aeb-4147-b729-fdcce736b1d1.jpg"
---

Hi, how are you? Hope you're all good and healthy! 

So last time I'd shared about [Migrating Babel to swc](https://antonybudianto/blog/migrating-babel-to-swc) post, and as promised, I'll share how to write your own swc plugin with [Rust](https://www.rust-lang.org/) language. 

If you haven't read that post, I'd suggest to read that first before reading this one to understand the motivation.

## Background

As we know, [swc](https://swc.rs/) is a modern developer tools written in [Rust](https://www.rust-lang.org/). It offers a very fast compilation and minifier that can replace Babel and Terser.

If you previously used Babel and written/used some babel plugins/presets, then it can't be used anymore since the swc plugin must also be written in [Rust](https://www.rust-lang.org/) and compiled to WASM format.

However, in practical, you might not need to write any swc plugin at all. All common and most used presets like env, react, typescript all already supported by default, and also third-party plugins like loadable, emotion, jest are already available to install and use.

In any case you have to write your own swc plugin, then you might find this post useful for you!


## Getting started

1. You need to install Rust, follow [Rust installation here](https://www.rust-lang.org/tools/install)

2. You can start generate a new swc plugin project by running:

```bash
cargo install swc_cli
swc plugin new --target-type wasm32-wasi my-first-plugin
rustup target add wasm32-wasi
```

> You can also clone my [swc-plugin-starter](https://github.com/antonybudianto/swc-plugin-starter) if you prefer; added commands in a Makefile, prettier and GitHub Action there.

## Plugin workflow

Just like in Babel, swc plugin can traverse all the code with specified visitor.

You'll first develop the plugin by implementing the swc visitor, and you might want to know what kind of visitor type you need.

You can use https://play.swc.rs/ and type your input there, and it can output the Abstract Syntax Tree (AST), so that you have some idea of what kind of visitor you want.

Suppose you want a plugin that replace certain variable name, then you need Identifier visitor.

<img width="587" alt="Screen Shot 2023-01-27 at 7 43 24 PM" src="https://user-images.githubusercontent.com/7658554/215090035-fff85bd0-a35b-4836-be40-e0fc8ed3a100.png">

You'll also write a test to try out your plugin transform result in your code.

Finally, you will build the plugin and it will produce a *.wasm file, which will be included in your npm publish.

After that, your npm plugin can be installed and used by swc projects.

So in summary:

- Develop plugin, implement visitors
- Write the test
- Build and compile to WASM
- npm publish 
- Install and use on an swc project

## Plugin "hello world"

Let's open the generated `src/lib.rs`, you will find:

```rs
pub struct TransformVisitor;
impl VisitMut for TransformVisitor {
  ...
}
```

This block is where we can implement visitor methods we want. You can browse all [available visitors here](https://rustdoc.swc.rs/swc_ecma_visit/trait.VisitMut.html).

So for example, if we want to look over all JS "Identifier" (as in AST), you can do:

```rs
fn visit_mut_ident(&mut self, n: &mut Ident) {
  n.visit_mut_children_with(self);

  println!("Ident: {}", n.sym.to_string());
}
```

and to try out the plugin, let's write a simple test on bottom of the file:

```rs
test!(
    Default::default(),
    |_| as_folder(TransformVisitor),
    simple_transform_global_var,
    r#"let isDev = __DEV__;"#,
    r#"let isDev = false;"#
);
```


Try run:

```
cargo test
```

and you will get output like:

```
----- Actual -----
Ident: isDev
Ident: __DEV__
```

For now, you'll get failed test result as expected, since we're only doing `println` for now. Now that we already get all the identifier, we can start to do some actual transformation.

Let's try to replace all global variable `__DEV__` with `false`, here's how to do it:

```rs
fn visit_mut_ident(&mut self, n: &mut Ident) {
  n.visit_mut_children_with(self);

  if n.sym.to_string() == "__DEV__" {
    n.sym = JsWord::from("false");
  }
}
```

In above example:

- we convert the sym to `String` first and compare againts string literal (`&str`) "__DEV__"
- we reassigned `sym` with new value from JsWord since sym's type is `JsWord`.

Now try to run `cargo test` again, the test will PASS this time. 

Congrats! the plugin is now ready to be build and shipped.

## Publishing plugin

Unlike regular Rust library, for swc plugin, we don't need to publish to crates.io, instead, we will publish to npm as usual.

- Make sure the plugin passed the test as you expect (run `cargo test`)
- Let's run the build

```bash
	cargo build-wasi --release # build wasm32-wasi target binary
	cargo build-wasm32 --release # build wasm32-unknown-unknown target binary
```

3. After succeed, you will see the compiled WASM file in:

`target/wasm32-wasi/release/<your-plugin-name>.wasm`

4. Finally, you can do `npm publish` as usual and Done!

## Using the plugin

You can use the plugin by installing the plugin's npm package on your swc-based project:

```bash
npm i -D my-swc-plugin
```

and list it on your swc config (.swcrc or swc-loader):

```json
{
  "jsc": {
    "experimental": {
      "plugins": [
        ["my-swc-plugin", {}]
      ]
    }
  }
}
```

> The `{}` object is the plugin options as needed

You can copy below snippet to try your new swc plugin quickly:

package.json

```json
{
  "scripts": {
    "build": "swc ./file.js -o out.js"
  },
  "devDependencies": {
    "@swc/cli": "^0.1.59",
    "@swc/core": "^1.3.29"
  }
}
```

file.js

```js
let dev = __DEV__;
```

Try to run `npm run build` and see the content of `out.js`, if should output like:

```js
var dev = false;

//# sourceMappingURL=out.js.map
```

and that's all! Now we've confirmed that the plugin worked! Congrats.

One more thing, swc plugin can also be used on Next.js project via next.config.js:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["my-swc-plugin", {}]],
  },
};
```

## Closing

I think that's all for today's post, I hope you find it useful and if you have feedback/questions, feel free to ping me on my social media! Thanks for reading this far, see you on another post 👋🏻.
