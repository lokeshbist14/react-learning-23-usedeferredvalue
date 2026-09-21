import { useDeferredValue, useMemo, useState } from "react";

function DeferredSearch() {
  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const items = useMemo(() => {
    return Array.from({ length: 5000 }, (_, index) => {
      return `Product ${index + 1}`;
    });
  }, []);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredSearch.toLowerCase())
  );

  return (
    <div>
      <h2>Example 2 - Search with useDeferredValue</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />

      <p>Searching for: {search}</p>

      {search !== deferredSearch && <p>Updating results...</p>}

      <ul>
        {filteredItems.slice(0, 20).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DeferredSearch;