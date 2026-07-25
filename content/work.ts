/**
 * Work index. Replaces components/data.ts, which carried only an image path
 * and rendered nothing else — titles showed up as link tooltips at best.
 * See PROPOSAL.md §7 for the schema this is growing into.
 *
 * TODO(owner): `year`, `role` and `metric` are deliberately absent rather than
 * guessed. `metric` is the spine of the direction (PROPOSAL.md Q7) — one real
 * figure per featured item. Fill these in and the cards will render them.
 *
 * `tags` are domain labels taken from each project's own copy, not inferred
 * tech stacks. Swap them for a real `stack` once you confirm each one.
 */

export type WorkStatus = "live" | "shipped" | "experiment";

export interface WorkItem {
  title: string;
  summary: string;
  href?: string;
  status: WorkStatus;
  tags?: string[];
  /** Pulls the item into the wide, top slot of the grid. */
  featured?: boolean;
  /** Copy-and-run lines, shown verbatim with a copy button. */
  commands?: { label: string; command: string }[];
  /** Remote MCP endpoint, rendered as a "connect" strip under the card. */
  mcp?: { endpoint: string };
  cover?: {
    src: string;
    /** Optional matched capture shown when the site is in its dark theme. */
    srcDark?: string;
    w: number;
    h: number;
    alt: string;
  };
  metric?: {
    value: string;
    label: string;
  };
}

export const WORKS: WorkItem[] = [
  {
    title: "Krevios AI Studio",
    summary:
      "A visual AI workflow builder. Connect image and video models on a drag-and-drop canvas, generate stills, animate them into cinematic video, and render motion graphics — no code.",
    href: "https://krevios.com",
    status: "live",
    tags: ["AI workflows", "Image + video", "Node canvas"],
    featured: true,
    mcp: { endpoint: "https://mcp.krevios.com/mcp" },
    commands: [
      {
        label: "Claude Code",
        command:
          "claude mcp add --transport http krevios https://mcp.krevios.com/mcp",
      },
      {
        label: "Codex",
        command: "codex mcp add krevios --url https://mcp.krevios.com/mcp",
      },
      {
        label: "Hermes",
        command: "hermes mcp add krevios --url https://mcp.krevios.com/mcp",
      },
    ],
    cover: {
      /* Matched pair, captured at the same viewport with only the colour
         scheme changed, so the card follows this site's theme. */
      src: "/krevios-light.jpg",
      srcDark: "/krevios-dark.jpg",
      w: 1440,
      h: 810,
      alt: "Krevios AI Studio — a node canvas wiring image generation into video generation",
    },
  },
  {
    title: "skills",
    summary:
      "Custom agent skills for harnesses like Hermes and Claude, installable with npx skills add. Currently three ComfyUI pipelines: LTX video, Qwen image edit, and Z-Image.",
    href: "https://github.com/antonybudianto/skills",
    status: "live",
    tags: ["Agent skills", "ComfyUI"],
    featured: true,
    commands: [
      { label: "install", command: "npx skills add antonybudianto/skills" },
    ],
  },
  {
    title: "NextGPT",
    summary: "An opinionated ChatGPT web client.",
    href: "https://github.com/antonybudianto/next-gpt",
    status: "shipped",
    tags: ["LLM client"],
    cover: {
      src: "/ngpt1.jpg",
      w: 1125,
      h: 1667,
      alt: "NextGPT chat interface",
    },
  },
  {
    title: "JSBench",
    summary:
      "A JavaScript benchmark tool for comparing the performance of two implementations side by side.",
    href: "https://jsbench.netlify.app",
    status: "shipped",
    tags: ["Benchmarking", "Tooling"],
    cover: {
      src: "/jsb.jpg",
      w: 2184,
      h: 1278,
      alt: "JSBench comparing two code snippets side by side",
    },
  },
  {
    title: "Deesain",
    summary:
      "A graphic design platform for social media and other creative work.",
    href: "https://deesain.netlify.app/",
    status: "shipped",
    tags: ["Design platform", "Canvas"],
    cover: {
      src: "/deesain.jpg",
      w: 2880,
      h: 1446,
      alt: "Deesain design editor",
    },
  },
  {
    title: "StickyNoted",
    summary: "A sticky note app with a Markdown flavour.",
    href: "https://stickynoted.netlify.app/",
    status: "shipped",
    tags: ["Markdown", "Notes"],
    cover: {
      src: "/sticky.jpeg",
      w: 1337,
      h: 760,
      alt: "StickyNoted board of Markdown notes",
    },
  },
  {
    title: "CountBoard",
    summary: "A countdown board for the dates you are waiting on.",
    href: "https://countboard.vercel.app",
    status: "shipped",
    cover: {
      src: "/countboard.jpg",
      w: 1125,
      h: 1247,
      alt: "CountBoard countdown list",
    },
  },
  {
    title: "Maldive Resort",
    summary:
      "An interactive scene with baked lighting, built to stay inside a mobile asset budget.",
    href: "/3d/maldive-resort",
    status: "shipped",
    tags: ["three.js", "Blender"],
    cover: {
      src: "/meta-3d/meta-maldive-resort.jpg",
      w: 1368,
      h: 628,
      alt: "3D Maldive resort scene",
    },
  },
  {
    title: "Maldive Mini",
    summary: "A smaller companion scene to the resort.",
    href: "/3d/maldive-mini",
    status: "shipped",
    tags: ["three.js", "Blender"],
    cover: {
      src: "/img-thumbs/mdvm1.jpg",
      w: 676,
      h: 386,
      alt: "3D Maldive mini scene",
    },
  },
  {
    title: "3D Studio",
    summary: "A studio scene, running live on StackBlitz.",
    href: "https://stackblitz.com/edit/vite-antonyb-3d-home?embed=1&file=src%2FApp.jsx&view=preview",
    status: "experiment",
    tags: ["three.js", "R3F"],
    cover: {
      src: "/meta-3d/meta-studio.jpg",
      w: 862,
      h: 464,
      alt: "3D studio scene",
    },
  },
];
