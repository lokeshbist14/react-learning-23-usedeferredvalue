import { useDeferredValue, useMemo, useState } from "react";

function LargeDeferredList() {
  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const items = useMemo(() => {
    return Array.from({ length: 10000 }, (_, index) => {
      return `Item ${index + 1}`;
    });
  }, []);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredSearch.toLowerCase())
  );

  return (
    <div>
      <h2>Example 3 - Large List with useDeferredValue</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search 10,000 items..."
      />

      {search !== deferredSearch && <p>Updating list...</p>}

      <p>
        Showing {filteredItems.length} results
      </p>

      <ul>
        {filteredItems.slice(0, 30).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default LargeDeferredList;