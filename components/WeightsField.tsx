"use client";

import { useEffect, useRef } from "react";

/**
 * The site's ground: a weight matrix, plotted.
 *
 * A diverging cool/warm ramp is the convention for visualising a weight
 * matrix — that is where this direction's palette comes from (PROPOSAL.md
 * §3.1). So the background is not a gradient standing in for the idea, it is
 * the thing itself: a coarse grid of cells whose values drift, mapped through
 * the five-step quantized ramp. Cool cells are one sign, warm the other, and
 * cells near zero fade out, which is what makes it read as a field rather
 * than as noise.
 *
 * It reads its colours from the CSS custom properties, so it follows the
 * theme, and it redraws when the theme class changes.
 */

const CELL = 26; // grid pitch in CSS px
const GAP = 3; // leaves a square, not a tile
const PERIOD = 42000; // one full cycle, in ms — slow enough to feel ambient

function parseColor(value: string): [number, number, number] {
  const hex = value.trim();
  const n = parseInt(hex.slice(1), 16);
  if (hex.length === 7 && !Number.isNaN(n)) {
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  return [128, 128, 128];
}

export default function WeightsField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let ramp: [number, number, number][] = [];
    /* The same alpha that reads as a texture on the dark ground reads as
       pastel confetti on the light one, so the light theme gets about half. */
    let themeScale = 1;
    const readRamp = () => {
      const cs = getComputedStyle(document.documentElement);
      ramp = [1, 2, 3, 4, 5].map((n) =>
        parseColor(cs.getPropertyValue(`--q${n}`))
      );
      themeScale = document.documentElement.classList.contains("dark")
        ? 1
        : 0.45;
    };

    /* Stable per-cell jitter. Without it the waves below line up into a plaid
       that reads as a rendering artifact rather than a field. */
    const jitter = (x: number, y: number) => {
      const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      return s - Math.floor(s);
    };

    let w = 0;
    let h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const draw = (time: number) => {
      const t = (time / PERIOD) * Math.PI * 2;
      const cols = Math.ceil(w / CELL);
      const rows = Math.ceil(h / CELL);
      ctx.clearRect(0, 0, w, h);

      for (let y = 0; y < rows; y++) {
        // Density falls off down the viewport so the field never competes
        // with running text further down the page.
        const falloff = 1 - 0.6 * (y / rows);

        for (let x = 0; x < cols; x++) {
          // Four offset waves stand in for smooth noise: cheap, seamless, and
          // at these frequencies there is no repeating tile to lock onto.
          const v =
            Math.sin(x * 0.29 + t) +
            Math.sin(y * 0.36 - t * 0.7) +
            Math.sin((x + y) * 0.17 + t * 0.45) +
            1.3 * Math.sin(x * 0.113 - y * 0.127 + t * 0.31);
          const n = (v / 4.3 + 1) / 2; // → 0..1

          const step = Math.min(4, Math.max(0, Math.floor(n * 5)));
          // Cells near the middle of the ramp are close to zero weight, so
          // they read faintest; the extremes carry the signal.
          const alpha =
            (0.02 + Math.abs(n - 0.5) * 0.3) *
            falloff *
            themeScale *
            (0.5 + 0.5 * jitter(x, y));
          if (alpha < 0.012) continue;

          const [r, g, b] = ramp[step];
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
          ctx.fillRect(x * CELL, y * CELL, CELL - GAP, CELL - GAP);
        }
      }
    };

    let raf = 0;
    let last = 0;
    const loop = (time: number) => {
      // ~12fps is plenty for something this slow, and keeps the main thread
      // free on the pages that actually have work to do. Nothing is drawn
      // while the tab is in the background.
      if (!document.hidden && time - last > 80) {
        draw(time);
        last = time;
      }
      raf = requestAnimationFrame(loop);
    };

    readRamp();
    resize();

    if (reduce) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      draw(performance.now());
    };
    window.addEventListener("resize", onResize);

    const themeObserver = new MutationObserver(() => {
      readRamp();
      draw(performance.now());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
