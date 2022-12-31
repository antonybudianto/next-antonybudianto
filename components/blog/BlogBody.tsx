import markdownStyles from "./markdown-styles.module.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/base16/onedark.css";
import "./index.css";

hljs.registerLanguage("js", javascript);

export default function BlogBody({ content }) {
  return (
    <div className="mmax-w-2xl mmx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
