/**
 * Table of contents, read back out of the rendered HTML rather than the raw
 * markdown. rehype-slug has already assigned every heading its id by then, so
 * the anchors here are guaranteed to match the ones in the body — no need to
 * re-implement github-slugger's collision handling.
 */

export interface TocItem {
  id: string;
  text: string;
  /** Original heading level, 1–4. */
  level: number;
  /** Level relative to the shallowest heading in the post, capped at 2. */
  depth: number;
}

const HEADING = /<h([1-4])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;
const ID = /\bid="([^"]*)"/i;

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decode(html: string) {
  return html.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (whole, ref: string) => {
    if (ref[0] === "#") {
      const code =
        ref[1] === "x" || ref[1] === "X"
          ? parseInt(ref.slice(2), 16)
          : parseInt(ref.slice(1), 10);
      return Number.isNaN(code) ? whole : String.fromCodePoint(code);
    }
    return ENTITIES[ref.toLowerCase()] ?? whole;
  });
}

/**
 * Strips the inline markup a heading may carry — `<code>`, `<em>`, and the
 * empty anchor rehype-autolink-headings appends — down to plain text.
 */
function toText(inner: string) {
  return decode(inner.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

export function extractToc(html: string): TocItem[] {
  const found: Omit<TocItem, "depth">[] = [];

  HEADING.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = HEADING.exec(html)) !== null) {
    const id = match[2].match(ID)?.[1];
    const text = toText(match[3]);
    if (!id || !text) continue;
    found.push({ id, text, level: Number(match[1]) });
  }

  if (!found.length) return [];

  /* Posts do not agree on a starting level: some open at h2, and
     blender-shortcuts is entirely h4. Normalising against the shallowest
     heading present keeps a flat post flat instead of indenting all of it. */
  const top = Math.min(...found.map((h) => h.level));

  return found.map((h) => ({ ...h, depth: Math.min(h.level - top, 2) }));
}

/** A single heading is not a table of contents, it is a heading. */
export function hasToc(items: TocItem[]) {
  return items.length > 1;
}
