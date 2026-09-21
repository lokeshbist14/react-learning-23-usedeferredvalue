import React, { useDeferredValue, useState } from 'react'

function DeferredPreview() {
    const [text, setText] = useState("");

    const DeferredText = useDeferredValue(text);
    
  return (
    <div>
      <h2>Example 10 - useDeferredValue with Text Preview</h2>
      
      <textarea value={text} onChange={(e) => setText(e.target.value)}
      placeholder='Write something...'
      rows={5}
      cols={40} />

      <h3>Current Text</h3>

      <p>{text}</p>

      <h3>Deferred Preview</h3>

      <div>
        {DeferredText}
      </div>
    </div>
  );
}

export default DeferredPreview;
