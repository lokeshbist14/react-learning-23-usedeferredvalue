import { memo, useDeferredValue, useState } from "react";

const ChildComponent = memo(function ChildComponent({ text }) {
  console.log("Child Component Rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <p>Deferred Text: {text}</p>
    </div>
  );
});

function DeferredMemo() {
  const [text, setText] = useState("");

  const deferredText = useDeferredValue(text);

  return (
    <div>
      <h2>Example 5 - useDeferredValue with React.memo</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <p>Current Text: {text}</p>

      <ChildComponent text={deferredText} />
    </div>
  );
}

export default DeferredMemo;