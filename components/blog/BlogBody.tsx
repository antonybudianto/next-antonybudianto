import "./markdown-styles.css";
import "./syntax.css";
import "./index.css";

/**
 * Highlighting already ran at build time through rehype-highlight in
 * lib/mdToHtml.ts, so the highlight.js runtime that used to be imported here
 * was shipped to the browser for nothing.
 */
export default function BlogBody({ content }) {
  return (
    <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
  );
}
