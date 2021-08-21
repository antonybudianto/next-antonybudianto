const CodeBlock = ({ children }) => (
  <pre className="bg-gray-900 rounded text-white font-mono text-base md:py-0 md:px-5">
    <code className="break-words whitespace-pre-wrap">{children}</code>
  </pre>
);

export default CodeBlock;
