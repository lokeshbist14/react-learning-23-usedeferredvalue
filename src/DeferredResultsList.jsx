import { useDeferredValue, useMemo, useState } from "react";

function ResultsList({ search }) {
  const deferredSearch = useDeferredValue(search);

  const products = useMemo(() => {
    return Array.from({ length: 5000 }, (_, index) => {
      return `Product ${index + 1}`;
    });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(deferredSearch.toLowerCase())
  );

  return (
    <div>
      <h3>Search Results</h3>

      <p>Deferred Search: {deferredSearch}</p>

      <p>Results: {filteredProducts.length}</p>

      <ul>
        {filteredProducts.slice(0, 20).map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

function DeferredResultsList() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h2>Example 9 - useDeferredValue with Component</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />

      <p>Current Search: {search}</p>

      <ResultsList search={search} />
    </div>
  );
}

export default DeferredResultsList;