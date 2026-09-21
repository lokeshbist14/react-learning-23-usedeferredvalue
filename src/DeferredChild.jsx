import { useDeferredValue, useState } from "react";

function ChildComponent({ value }) {
  const deferredValue = useDeferredValue(value);

  return (
    <div>
      <h3>Child Component</h3>

      <p>Deferred Value: {deferredValue}</p>
    </div>
  );
}

function DeferredChild() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Example 4 - useDeferredValue with Child Component</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <p>Parent Value: {text}</p>

      <ChildComponent value={text} />
    </div>
  );
}

export default DeferredChild;