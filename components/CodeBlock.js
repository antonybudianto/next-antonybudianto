const CodeBlock = ({ children }) => (
  <div className="bg-gray-900 rounded text-white font-mono text-xs md:text-base px-2 md:px-5">
    <code className="break-words whitespace-pre-wrap">{children}</code>
  </div>
);

export default CodeBlock;
