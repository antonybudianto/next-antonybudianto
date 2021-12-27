import markdownStyles from "./markdown-styles.module.css";

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
