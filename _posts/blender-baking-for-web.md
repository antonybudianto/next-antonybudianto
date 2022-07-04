---
title: "Blender Baking for Web"
desc: "Learn how to bake your 3D Model for Web"
date: "2021-12-30T10:35:07.322Z"
ogImage: "https://i.ibb.co/gW45hwc/Screen-Shot-2021-12-30-at-11-20-49-AM.jpg"
active: false
---

## Introduction

Hi, welcome to another blog about 3D tech. This post assumes you already had experience with Blender and its tools.

## Baking

So, we've done our 3D Model, the rendering result from Blender was great, but when you try to export and import into Web/other platform, the result is usually quite different from what we expect from Blender's render.

Why it happened? Because rendering engines used to render between Blender and Web (or other platform) are different, especially the well known "Cycles" engine which used advanced path tracer for more realistic result.

Thankfully, Blender provides baking tools so that you can "pre-render" your model and produces an image texture that we can use for our production model.

Besides ensuring consistent result when exporting, baking also helps faster preview and re-render as well.

## Get started: UV Unwrapping

Firstly, we need to UV unwrap our model, this is required so that the image texture mapping works correctly.

Select your model, enter Edit mode (press Tab), and select all faces (press A).

Right click to open context menu -> "UV Unwrap Faces" -> "Smart UV Project"

<img src="https://i.ibb.co/YBHbSB1/Screen-Shot-2021-12-29-at-11-19-31-PM.jpg" width="300" />

Open UV Editor by press Shift+F10, click menu Image > New, popup will showup, give the image name (e.g. "img123"), just click OK.
This will creates image that will be used as canvas by the baking process.

## Setup Material

Next, you need to have material assigned to your model. If not yet, just create dummy new material on the model's material properties.

Open another panel by dragging on the top-right corner, and Press Shift+F3 to open Shader Editor. Select the model on the scene (**important!**).

Make sure the model default material is shown on the Shader Editor, then press Shift+A (or menu Add), and Search: Image Texture. This will create Image Texture instance.
Choose the image name you created earlier, e.g. "img123"

<img src="https://i.ibb.co/806yyTF/Screen-Shot-2021-12-30-at-10-53-24-AM.jpg" width="300" />

For now we don't connect the texture to the Material Output yet, we will back to do this when baking is done. This step is done here

## Let's bake!

So far we've done these things at least:

- UV unwrap the model
- Make sure the model have material assigned
- Add texture image to the model's material via Shader Editor

Before baking, make sure your scene is ready as well, such as lights, plane, and of course, the model itself.

For baking, we need to select the model on scene that we want to bake, then go to Render properties.

<img src="https://i.ibb.co/qFsZYZb/Screen-Shot-2021-12-30-at-11-13-06-AM.jpg" width="300" />

Find Bake section there, and click the "Bake" button.
This process will take a while depending on your setup and machine you use.

After the baking process is done, you can go back to UV Editor (Shift+F10) to see the result:

<img src="https://i.ibb.co/gW45hwc/Screen-Shot-2021-12-30-at-11-20-49-AM.jpg" width="300" />

Save the image (Image > Save).

## Assign baked texture

This will be the final step, in which we assign the baked texture to the model.

Remember where to setup the material earlier? Yes, Shader Editor (Shift+F3).

Select the model in scene, then on Shader Editor, cut out the line connecting between "Material Output" and "Principled BSDF", this will make your model color become black in your scene, it's expected since material output missing the source for now.

Now, try connecting dot from Material Output's surface to Image Texture's color:

<img src="https://i.ibb.co/BzFKGyv/Screen-Shot-2021-12-30-at-11-27-40-AM.jpg" width="300" />

Done! You should see similar result with the original material input.

> If the result is unexpected or broken, you might need to redo UV Unwrap since the mapping might be incorrect or need manual adjustment.

Try to export your model now and load on Web, you should see more consistent result since the model is now using baked texture instead of relying on the platform's render engine.

If you change your viewport shading to material preview, it should have similar result between material preview and render preview. This time when you access render preview, the speed of the render preview is also increased significantly, especially when you use Cycles engine.

## Re-bake?

If you need to change something and needs re-bake, don't forget to revert back your material from texture to original one. Remember that you bake based on your original material, not the pre-baked one.

## Limitation

- Models need to be modifier-applied in advance for UV Unwrapping
- UV Unwrapping is hard, need manual adjustment for correct mapping
- There's still noise result to be handled
- If shadows are baked, lights and object cannot move with respect to each other. If moved, then must re-bake again

## Disclaimer

I'm still learning this technique as of today, so I might be missing something or some best practices. I hope this post is useful for you when learning Blender. Thanks for reading.

## Resources

[Blender Bake Manual](https://docs.blender.org/manual/en/2.79/render/blender_render/bake.html)
