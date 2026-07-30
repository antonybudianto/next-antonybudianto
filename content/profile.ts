/**
 * Everything the landing page says about the person, in one file.
 *
 * Source of truth is github.com/antonybudianto/antonybudianto (the profile
 * README). Nothing here is inferred beyond the wording — no years, employers or
 * metrics are invented. `LAYERS` reorders the README's achievement bullets by
 * how far each one sits from the product surface; that ordering is the editorial
 * frame the page is built on, and it is stated as such on the page.
 */

export const PROFILE = {
  name: "Antony Budianto",
  location: "Indonesia",
  years: "10+ years",
  role: "Web engineer",

  /** The hero statement. Read as one sentence with `thesisTail`. */
  thesis: "Antony Budianto",
  thesisAccent: "",

  lead: "10+ years experience on web development from various industry (B2B, HRIS, E-Commerce, Fintech, CRM, Omni-channel). I spent most of my time on Web development, building agentic AI workflows with MCP, Skills, and local AI models",

  /** Shown as a live line under the hero. Keep to three facts. */
  now: [
    { label: "Building", value: "Krevios AI Studio" },
    { label: "Current AI Stack", value: "Claude · Hermes · vLLM" },
  ],

  industries: [
    "B2B",
    "HRIS",
    "E-commerce",
    "Fintech",
    "CRM",
    "Omni-channel",
  ],

  credential: {
    name: "Google Cloud Certified",
    href: "https://googlecloudcertified.credential.net/profile/18610c1496ce93ad6925d78d20c221a35172dcf6",
  },
};

/**
 * The six shipped interventions from the README, each placed on the layer it
 * touched. `depth` is the plane index used by the hero diagram — 6 is nearest
 * the product surface, 1 is underneath everything.
 */
export interface Layer {
  depth: number;
  layer: string;
  title: string;
  detail: string;
  tags: string[];
}

export const LAYERS: Layer[] = [
  {
    depth: 6,
    layer: "design system",
    title: "An MCP server for the internal design system",
    detail:
      "Integrated with Figma MCP, so an agent reads the same components a designer does.",
    tags: ["MCP", "Figma"],
  },
  {
    depth: 5,
    layer: "components",
    title: "One component library for Vue 2 and Vue 3",
    detail:
      "A unified monorepo publishing to both, so a team mid-migration maintains one library instead of two.",
    tags: ["Monorepo", "Vue"],
  },
  {
    depth: 3,
    layer: "transport",
    title: "Chat notifications that actually arrive",
    detail:
      "Short-polling paired with FCM, so a delivery gap stops being the user's problem.",
    tags: ["FCM", "Realtime"],
  },
];

export const STACK: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["Angular", "React", "Vue", "Next.js", "Nuxt", "Vite", "Vitest"],
  },
  { group: "Backend", items: ["Node.js", "Go", "Rust"] },
  { group: "AI", items: ["Claude", "Hermes", "n8n", "vLLM", "ComfyUI"] },
  { group: "Infrastructure", items: ["Docker", "Nginx"] },
];
