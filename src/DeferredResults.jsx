import React, { useDeferredValue, useMemo, useState } from 'react'

function DeferredResults() {
    const [search, setSearch] = useState("");

    const DeferredSearch = useDeferredValue(search);

    const products = useMemo(() => {
        return Array.from({ lenght: 5000 }, (_, index) => {
            return `Product ${index + 1}`;
        });
    },[]);

    const results = products.filter((product) =>
    product.toLowerCase().includes(DeferredSearch.toLowerCase())
);

  return (
    <div>
      <h2>Example 8 - useDeferredValue with Results Count</h2>

      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
      placeholder='Search products...'/>

      <p>Current Search: {search}</p>

      <p>Deferred Search: {DeferredSearch}</p>

      <h3>Results Found: {results.lenght}</h3>

      <ul>
        {results.slice(0, 20).map((product) => (
            <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default DeferredResults;
