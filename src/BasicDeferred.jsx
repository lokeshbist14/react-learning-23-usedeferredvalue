import { useDeferredValue, useState } from "react";

function BasicDeferred() {
  const [text, setText] = useState("");

  const deferredText = useDeferredValue(text);

  return (
    <div>
      <h2>Example 1 - Basic useDeferredValue</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <p>Current value: {text}</p>

      <p>Deferred value: {deferredText}</p>
    </div>
  );
}

export default BasicDeferred;