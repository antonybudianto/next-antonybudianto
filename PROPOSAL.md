# Redesign Proposal — antonybudianto.com

**Status:** Phase 1 complete. Phase 2 blocked on Q1–Q3, Q7.
**Branch:** `revamp`
**Date:** 2026-07-25
**Visual specimen:** https://claude.ai/code/artifact/2c5121ca-cf06-4b73-9a23-f016daa99c73

This is the handoff document. It carries everything needed to continue the redesign in a
fresh session with no prior context. Update the checkboxes and the **Progress log** at the
bottom as work lands.

---

## 1. Thesis

The site currently reads as *a web developer who did some 3D experiments and stopped writing
in 2023*. The person behind it is a seasoned frontend engineer building generative-AI systems
— MCP servers, agent tooling, open-weight models running locally.

The redesign closes that gap. The problem is **not primarily visual** — it is that the site
never states what the work is. A new palette alone would not fix it.

---

## 2. Audit (as of commit `aaff54f`)

| Area | Finding | Source |
| --- | --- | --- |
| Positioning | Tagline is "Explore and craft with technology". The words *AI*, *MCP*, *agent*, *LLM* appear zero times on the homepage. | `app/page.tsx:56` |
| Work | 9 raw screenshots in a masonry. `title` renders only as a link tooltip, `desc` only as `alt` text. 3 of 9 entries have no title. **Notium** — the closest item to the new positioning — has no `href`, so it is not clickable. | `app/RecentWork.tsx:44-56`, `components/data.ts:6-10` |
| Depth | No project pages exist. A visitor cannot learn what any project does, the role played, or the stack. | — |
| Writing | 7 posts, newest dated **2023-01-27**. | `_posts/write-your-swc-plugin-with-rust.md` |
| 3D work | 4 Three.js scenes at `/3d`; the homepage link to them is commented out. | `app/page.tsx:80-85`, `components/scenes/list.ts` |
| Visual | Sky→cyan gradient, `rounded-xl` pills, Nunito 300/700. Three sections use three unrelated backgrounds (`sky` gradient, `gray-50`, `blue-50`). No design tokens anywhere. | `app/page.tsx:36-38,90,101`, `tailwind.config.js` |
| Theme flash | Theme-init script is the **last node in `<body>`**, after `{children}` — light paints first, then flips. | `app/layout.tsx:58-74` |
| Images | Raw `<img>` throughout, no width/height → CLS. | `app/page.tsx:44`, `app/RecentWork.tsx:51`, `app/blog/BlogCard.tsx:49` |
| Dead code | `pages/_app.tsx` + `pages/_document.tsx` shadow the App Router (duplicate font links, second copy of theme script). Five `head.tsx` files use a removed App Router convention. `HomePortfolio.tsx` and `ScrollCmp.tsx` have zero references. | `pages/`, `app/**/head.tsx` |
| Metadata | `themeColor` still in a `metadata` export; moved to `viewport` export in Next 14+. | `app/blog/page.tsx:29` |
| Build | `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` are both `true`. | `next.config.ts` |
| SEO | No `sitemap.ts`, no `robots.ts`, no RSS. OG images depend on external `vercel-og-ab.vercel.app`. | — |

### Hard constraint

`next.config.ts:6` sets `output: "export"` in production; Netlify publishes `out/`.
Everything below stays inside static export:

- No server actions, no ISR, no route handlers at runtime.
- `next/image` needs `unoptimized` or a static loader.
- OG images must be generated at **build time** into `public/og/`.
- Redirects go in `netlify.toml`, **not** `next.config.ts`.

---

## 3. Direction — "Weights"

Chosen over two alternates (see §3.6). The artifact linked at the top is rendered in this
direction and is the reference for spacing, rhythm and tone.

### 3.1 Concept

The palette is a **diverging cool/warm pair** — the convention for plotting a weight matrix,
where cool and warm encode opposite signs. It comes with a rule that prevents accent drift:

- **Cool** = structural and interactive — links, focus rings, nav, `shipped` status.
- **Warm** = live and emphatic — current work, metrics, the one thing per screen to read first.
- Nothing else gets colour.

The recurring texture is **quantization**: gradients that step in five discrete bands rather
than blending. Reducing precision without losing signal is what running a 4-bit model is. The
band works at any scale — section rules, metric bars, favicon, OG images.

### 3.2 Colour tokens

```
                 dark        light
--bg             #0F1116     #EFEFF2
--panel          #161920     #FAFAFB
--panel-2        #1D212A     #E9E9EE
--rule           #2A2F3A     #D7D8DF
--rule-soft      #21252E     #E4E5EA
--text           #E7E9ED     #14161C
--mute           #98A0AE     #5A6270
--faint          #6B7382     #878E9B
--cool           #6398E0     #2A5FAF
--warm           #D06A44     #A94E2E

quantized ramp (5 steps, never interpolated)
--q1..--q5       #5B93DE #7E9BBE #9E9A99 #BE8770 #D06A44   (dark)
                 #2A5FAF #6E8BB5 #A39C97 #C08163 #A94E2E   (light)
```

Neutrals are graphite with a faint blue bias so they sit under the cool signal rather than
fighting it. Light ground is a cool paper, not white, so the warm accent stays readable.
Both themes get equal care — do not derive one by inverting the other.

### 3.3 Typography — mono leads, sans supports

Monospace is the **display** face; the sans only handles prose. This inversion is the
identity, not a quirk — the subject is code and measurement.

| Role | Face | Treatment |
| --- | --- | --- |
| Display | mono 500 | `clamp(30px, 5.2vw, 52px)`, tracking `-0.035em`, `text-wrap: balance` |
| Section head | mono 500 | 26px, tracking `-0.02em` |
| Project title | mono 600 | 15–17px |
| Label / eyebrow | mono | 10.5px, uppercase, tracking `0.08em` |
| Body | sans 400 | 15px / 1.62, max **66ch** |
| Data | mono | `font-variant-numeric: tabular-nums` everywhere digits align |

Production faces — **decision pending (Q6)**:

- Display: **Berkeley Mono** (paid, ~$75 personal) or **Commit Mono** (free, variable).
- Body: **Instrument Sans** or **Public Sans**.
- Self-host via `next/font/local`, two weights each, Latin subset. Drop the Google Fonts
  `<link>` tags and the inline `fontFamily` on `<body>`.

### 3.4 Layout — the ledger

Narrow left rail carrying mono metadata (section index, dates, roles, stack) beside a wide
content column, separated by hairlines rather than cards and shadows. Scales from homepage to
case study to blog post without redesign; collapses to one column below 720px.

### 3.5 Motion

One orchestrated moment: on load, hero lines resolve in a five-step stagger mirroring the
ramp. After that, only hover and focus states move. The existing `ab-fade` / `ab-time--*`
keyframes in `app/style.css` are folded into tokens rather than discarded. Everything sits
behind `prefers-reduced-motion`.

### 3.6 Alternates considered (rejected)

- **B — Viewport.** Blender/WebGL heritage: viewport grey `#2B2B2B`, selection orange
  `#E87D0D`, live 3D hero. *Rejected:* puts 2021 work in the hero and 2026 work below the
  fold — the exact inversion of the problem.
- **C — Paper Spec.** Light-only technical documentation aesthetic, dense typography, no
  imagery. *Rejected:* no room to demonstrate interface craft, which is half the pitch.

---

## 4. Information architecture

```
/                        home — thesis, now, 3 featured projects, latest writing
/work                    NEW  index — featured grid + compact list of everything else
/work/[slug]             NEW  case study — problem, role, stack, the number, links
/writing                 MOVED from /blog
/writing/[slug]          MOVED from /blog/[slug]
/lab                     MOVED from /3d — experiments, scenes, non-products
/lab/[id]                MOVED from /3d/[id] — scene viewer, internals unchanged
/about                   NEW  long version, contact, availability
/rss.xml /sitemap.xml    NEW  generated at build; robots.ts alongside
```

- **Redirect, don't break.** `/blog/*` has three years of inbound links. Redirects go in
  `netlify.toml`.
- **"writing" over "blog"** — "blog" implies a cadence; "writing" is a body of work and a gap
  in it reads differently.
- **"lab" absorbs "3d"** — gives the scenes a permanent home that doesn't compete with the AI
  work for the headline, and gives future model experiments somewhere to land.

---

## 5. Home page composition

| Block | Content |
| --- | --- |
| Hero | The thesis: *"I build the interface layer for models."* One line of substantiation with years and current role. **No profile photo at this size** — it competes with the statement. Photo moves to `/about` and the post byline. |
| Now | Three facts on one line: what you're building, which model you're running locally, what you last shipped and when. Sourced from `content/now.ts` so it's a one-line edit. |
| Selected | Three projects, each with a number. AI work first. Each links to a real case study. |
| Index | Everything else as a one-line list with year and stack — Deesain, CountBoard, StickyNoted, NextGPT, the scenes. Range without clutter; nothing stranded the way Notium is today. |
| Writing | Three most recent: title, date, one-line dek. Dates shown honestly — the fix for a 2023 date is a 2026 post. |
| Contact | Email in plain text, GitHub, and whichever of X / LinkedIn / Hugging Face is actually maintained. |

**Organising rule:** every featured project carries a real number — cold-start latency,
tokens/sec on your hardware, build time before/after, bundle delta. No number → it goes in the
index list, not the featured grid. This is the spine of the direction (see Q7).

---

## 6. File-by-file plan

| File | Action | Notes |
| --- | --- | --- |
| `app/layout.tsx` | Rewrite | Token stylesheet, `next/font/local`, theme script into `<head>`, `viewport` export split from `metadata` |
| `app/page.tsx` | Rewrite | Six blocks per §5 |
| `app/RecentWork.tsx` | Retire | Replaced by `WorkGrid` + `WorkIndex`; drops `react-responsive-masonry` dep |
| `components/data.ts` | Replace | Becomes `content/work.ts` with the §7 schema |
| `components/NewHeader.tsx` | Rewrite | `SiteHeader` with real nav (current version has none) |
| `DarkmodeButton*.tsx`, `hooks/useDarkMode.ts` | Keep, restyle | Logic is sound; loses pill styling; `window.__dark` init moves to `<head>` |
| `app/blog/BlogCard.tsx` | Rewrite | Sheds ~90 lines of inline styles copy-pasted from `next/image` output |
| `components/blog/*` | Keep, restyle | `markdown-styles.css` rewritten against tokens; highlight.js theme retuned |
| `app/3d/**`, `components/scenes/**` | Keep, remount | Move under `/lab`. **Scene internals untouched.** |
| `app/work/**`, `app/about/` | New | The missing middle layer |
| `components/HomePortfolio.tsx`, `components/ScrollCmp.tsx` | Delete | Zero references in the repo |
| `pages/_app.tsx`, `pages/_document.tsx` | Delete | Duplicate font links + second copy of theme script |
| `app/head.tsx`, `app/3d/head.tsx`, `app/3d/[id]/head.tsx`, `app/blog/head.tsx`, `app/blog/[slug]/head.tsx` | Delete | Removed App Router convention; `metadata` exports already cover it |
| `app/style.css` | Fold in | Keyframes survive as tokens in the new stylesheet |
| `app/sitemap.ts`, `app/robots.ts`, RSS | New | None exist today |

---

## 7. Content work (not code)

This decides whether the redesign lands. Budget real time.

### Work item schema

```ts
slug     string                        // /work/notium
title    string                        // required; 3 of 9 items lack one today
summary  string                        // one sentence, renders on the card
year     number
status   "live" | "shipped" | "archived" | "experiment"
role     string                        // what you actually did
stack    string[]
metric   { value: string; unit: string; label: string }
links    { live?: string; repo?: string; writeup?: string }
cover    { src: string; w: number; h: number; alt: string }   // dimensions required
```

- [ ] Three case studies, 400–600 words each. Recommended: **Notium** (the MCP story),
      **NextGPT** (opinionated client, LLM UX), and **JSBench** or **Deesain** depending on
      whether you want tooling rigour or product range.
- [ ] Two or three posts from the current era. Candidates: writing an MCP server that survives
      real agent traffic; what actually runs well on your hardware at 4-bit; what changes in
      frontend architecture when a model is in the loop.
- [ ] Alt text + cover dimensions for all 9 work items.
- [ ] A real `/about` — years, domains, shape of the experience. The site never states any of
      it; "seasoned" is currently something a reader has to infer.
- [ ] Own the OG images — generate at build time into `public/og/`.

---

## 8. Phases

Ordered so that stopping after any one still leaves the site better than it is now.

### Phase 1 — Foundation · *complete*

Make it look like a system. **Needs none of the open questions answered.**

- [x] Design tokens — `app/globals.css` (`:root` / `.dark`) + Tailwind theme extension.
      Colour utilities now follow the theme, so `dark:` variants are no longer needed
      for colour.
- [x] Self-hosted fonts — **`next/font/google`**, not `next/font/local` as originally
      written: JetBrains Mono (display) + Instrument Sans (body). Same outcome — fetched at
      build, emitted into `_next/static/media`, no runtime CDN — without needing font
      binaries in the repo before Q6 is answered. Q6 is now a one-line swap in
      `app/layout.tsx`.
- [x] Theme-init script moved into `<head>`; also sets `color-scheme`. Verified against
      `out/index.html`: script precedes `<body>`.
- [x] `SiteHeader` (with nav) + `SiteFooter`. New `QuantBand` renders the five-step mark.
- [x] Deleted `pages/`, five `head.tsx`, `HomePortfolio.tsx`, `ScrollCmp.tsx`,
      `NewHeader.tsx`, `blog/BlogFooter.tsx`, `blog/BlogNav.tsx`, `app/style.css`.
- [x] `themeColor` → `viewport` export in `app/layout.tsx` (light/dark aware).
- [x] Restyled home, `/blog`, `/blog/[slug]`, `/3d` against tokens.

**Also landed (small, in-scope defects found while working):**

- Theme toggle: emoji → half-filled circle SVG that encodes state by which side is solid.
- `RecentWork`: removed the `IntersectionObserver` that re-fired on every intersection and
  re-animated every image at once. Fixed empty `alt` on linked images.
- `BlogCard`: rewritten; dropped ~90 lines of inline styles copy-pasted from `next/image`
  output, and dropped a placeholder cover borrowed from a Sanity CDN URL — posts without
  `ogImage` now get the quantized band.
- `BlogBody`: dropped the client-side `highlight.js` runtime. Highlighting already runs at
  build via `rehype-highlight` in `lib/mdToHtml.ts`, so it was shipped for nothing.
- Syntax theme: replaced `base16/onedark` with `components/blog/syntax.css` on the palette.
- Heading anchors were absolutely positioned at `right: -35px` and could scroll the page
  sideways on narrow screens; now inline.
- `app/blog/[slug]/page.tsx` had `description: "{post.desc}"` — a literal string, not the
  value.
- Dates are passed as ISO and formatted with a fixed `en-GB` locale so build output is
  deterministic; `<time dateTime>` is now valid.

**Verified:** `pnpm build` compiles and exports 16 pages. `tsc --noEmit` is clean for every
touched file (the remaining errors are pre-existing R3F `JSX.IntrinsicElements` errors in
`components/scenes/**` — that is what Phase 3's `ignoreBuildErrors` cleanup is for).
**Not verified:** nobody has looked at the rendered pages yet — run `pnpm dev`.

**Ships:** a coherent, current-looking site on the existing content.

### Phase 2 — Substance · *not started*

Build the missing middle. **Blocked on Q1–Q3, Q7.**

- [ ] `content/work.ts` with the new schema; migrate all 9 items
- [ ] `/work` index + `/work/[slug]` case studies
- [ ] `/about`
- [ ] Rewrite homepage around thesis + now-line + three measured projects
- [ ] `netlify.toml` redirects for `/blog/*` → `/writing/*`

**Ships:** the positioning shift. This is the phase that does the actual job.

### Phase 3 — Signal · *not started*

Keep it alive.

- [ ] `/lab` with the 3D scenes remounted; `/3d/*` redirects
- [ ] Build-time OG images into `public/og/`
- [ ] `sitemap.ts`, `robots.ts`, RSS
- [ ] The two or three new posts
- [ ] Turn off `typescript.ignoreBuildErrors` + `eslint.ignoreDuringBuilds`, fix what surfaces

**Ships:** a site that stays current with one-line edits.

---

## 9. Open questions

Phase 1 can start without any of these. Phase 2 cannot.

| # | Question | Answer |
| --- | --- | --- |
| Q1 | Years of experience, current role, availability? The hero's second line and the whole "seasoned" claim depend on it — nothing in the repo says. | *unanswered* |
| Q2 | Which three projects are the case studies? Suggested: Notium, NextGPT, JSBench (swap JSBench → Deesain for product range over tooling rigour). | *unanswered* |
| Q3 | Is Notium public/linkable? It has no `href` today. If it can't be linked or described, the strongest AI item can't headline. | *unanswered* |
| Q4 | How much should the 3D work weigh — archived in `/lab` as proposed, or promoted (that's Direction B, a different site)? | *unanswered* |
| Q5 | Which social links are actually maintained? Twitter/GitHub/Instagram are hardcoded; Hugging Face and LinkedIn are likely more useful now. | *unanswered* |
| Q6 | Display face — Berkeley Mono (paid, more character) or Commit Mono (free, variable)? | *unanswered* |
| Q7 | Real metrics, or drop the number from the cards? The measurement idea is the spine of the direction; if gathering real figures isn't realistic, the card needs reworking. | *unanswered* |

---

## 10. Progress log

Append one line per working session: date, what landed, what's next.

- **2026-07-25** — Audit complete, direction chosen, proposal written. Nothing built yet.
- **2026-07-25** — Added Hermes (`hermes mcp add krevios --url …`) as a third MCP install
  line, confirmed against the Nous Research docs and the `hermes_cli` source. Command labels
  got a fixed 88px column so three rows read as a table. Copy verified in-browser.
- **2026-07-25** — Feedback round 3. Krevios card gained a "connect over MCP" strip with the
  endpoint `https://mcp.krevios.com/mcp` and copy-and-run lines for Claude Code
  (`claude mcp add --transport http …`) and Codex (`codex mcp add … --url …`); both commands
  were checked against current docs rather than written from memory. `command: string` on a
  work item generalised to `commands: {label, command}[]`, rendered with
  `components/CopyButton.tsx`. Cards no longer wrap in an anchor — a button cannot nest
  inside a link — so the whole-card click is a stretched `::after` overlay on the title link,
  with the command rows lifted above it so text stays selectable. Notium removed from
  `content/work.ts`; `public/notium.jpg` is now unreferenced and can be deleted whenever.
  Verified in a real browser: clicking copy puts the right string on the clipboard, flips the
  control to its copied state, and does not navigate the card.
- **2026-07-25** — Feedback round 2. The stepped-gradient `.field` was bad and the ground was
  too plain, so the background is now `components/WeightsField.tsx`: a fixed full-viewport
  canvas plotting a drifting weight matrix through the five-step quantized ramp — the
  direction's own instrument rather than a gradient standing in for it. Cool and warm cells
  are the two signs; cells near zero fade out. 12fps, pauses when the tab is hidden, one
  static frame under `prefers-reduced-motion`, reads its colours from the CSS vars and
  redraws on theme change. Light theme runs at 45% alpha — the same values that read as
  texture on the dark ground read as pastel confetti on the light one. Content sits on
  `.on-field` (88% opaque); long-form posts get a fully opaque ground so prose is never on
  the texture. Krevios now ships a **theme-matched screenshot pair** (`krevios-light.jpg` /
  `krevios-dark.jpg`, captured at the same viewport with only `colorScheme` changed) that
  follows this site's theme. Header mark constrained to 132px over the wordmark — full-bleed
  it read as a progress bar.
  **Verified visually this round:** home, work and blog screenshotted in both themes via
  Playwright driving the installed Chrome against the static export.
- **2026-07-25** — Feedback round 1. Ground was too plain and the work section still used
  the old masonry, so part of Phase 2 was pulled forward: `content/work.ts` now exists with
  the real schema, `components/WorkGrid.tsx` replaces the masonry, and `components/data.ts`
  + `app/RecentWork.tsx` are gone (with `react-responsive-masonry` and the now-unused
  `react-icons`). Added **Krevios AI Studio** (screenshot captured with headless Chrome →
  `public/krevios.jpg`) and **github.com/antonybudianto/skills** as the two featured items.
  Dropped "WebGL" from the focus strip. Background: ruled hairline ground on `body` plus a
  five-step quantized cool→warm wash on the hero (`.field`). `year` / `role` / `metric` are
  still empty in `content/work.ts` — not guessed. **Case-study pages `/work/[slug]` are
  still not built**; the grid links straight out.
- **2026-07-25** — Phase 1 built and verified (see §8). Home still carries the old
  name-as-headline and "Explore and craft with technology" tagline, marked `TODO(Q1)` in
  `app/page.tsx` — the thesis copy is Phase 2 and needs Q1 answered. Nav links only to routes
  that exist (`/#work`, `/blog`, `/3d`); `/3d` is no longer orphaned. **Next:** answer
  Q1–Q3 and Q7, then start Phase 2 with the `content/work.ts` schema.
