import { useState } from "react";
import "./App.css";
import { VButton } from "../lib/components/Button";
import "../lib/root.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>vaar ui</h1>
      <VButton variant="primary">Primary Btn</VButton>
      <VButton>Normal Btn</VButton>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
