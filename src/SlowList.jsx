import { useDeferredValue, useState } from "react";

function SlowList({ text }) {
  const deferredText = useDeferredValue(text);

  const items = [];

  for (let i = 0; i < 3000; i++) {
    items.push(
      <li key={i}>
        {deferredText} - Item {i + 1}
      </li>
    );
  }

  return (
    <div>
      <h3>Slow List</h3>

      <ul>
        {items.slice(0, 30)}
      </ul>
    </div>
  );
}

function DeferredSlowComponent() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Example 6 - useDeferredValue with Slow Component</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <p>Current Text: {text}</p>

      <SlowList text={text} />
    </div>
  );
}

export default DeferredSlowComponent;