import BasicDeferred from "./BasicDeferred";
import DeferredChild from "./DeferredChild";
import DeferredLoading from "./DeferredLoading";
import DeferredMemo from "./DeferredMemo";
import DeferredPreview from "./DeferredPreview";
import DeferredResults from "./DeferredResults";
import DeferredResultsList from "./DeferredResultsList";
import DeferredSearch from "./DeferredSearch";
import LargeDeferredList from "./LargeDeferredList";
import DeferredSlowComponent from "./SlowList";

function App() {
  return (
    <div>
      <h1>23 - useDeferredValue</h1>

      {/* Example 1 */}
      <BasicDeferred />
      <hr />

      {/* Example 2 */}
      <DeferredSearch />
      <hr />

      {/* Example 3 */}
      <LargeDeferredList />
      <hr />

      {/* Example 4 */}
      <DeferredChild />
      <hr />

      {/* Example 5 */}
      <DeferredMemo />
      <hr />

      {/* Example 6 */}
      <DeferredSlowComponent />
      <hr />

      {/* Example 7 */}
      <DeferredLoading />
      <hr />

      {/* Example 8 */}
      <DeferredResults />
      <hr />

      {/* Example 9 */}
      <DeferredResultsList />
      <hr />

      {/* Example 10 */}
      <DeferredPreview />
    </div>
  );
}

export default App;