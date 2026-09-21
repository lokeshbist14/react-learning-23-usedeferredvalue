import React, { useDeferredValue, useState } from 'react'

function DeferredLoading() {
    const [text, setText] = useState("");

    const deferredText = useDeferredValue(text);

    const isUpdating = text !== deferredText;

  return (
    <div>
    <h2>Example 7 - useDeferredValue with Loading Message</h2>  

    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
     placeholder='Type something...'/>

     <p>Current Value: {deferredText}</p>
    </div>
  );
}

export default DeferredLoading;
