/**
 * Fixed locale so the build output is deterministic rather than dependent on
 * the machine doing the rendering. Inputs are ISO strings from post
 * frontmatter.
 */
const full = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const short = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});

export const formatDate = (iso: string) => full.format(new Date(iso));

export const formatDayMonth = (iso: string) => short.format(new Date(iso));

export const yearOf = (iso: string) => new Date(iso).getUTCFullYear();
