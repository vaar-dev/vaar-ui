import { useState } from "react";
import "./App.css";
import { VButton } from "../lib/components/Button";
import "../lib/root.css";
import { VPanel } from "../lib/components/Panel";
import { VBadge } from "../lib/components/Badge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src="/vaar.svg" alt="vaar logo" height="40px" />
      <h1>vaar ui</h1>
      <VButton variant="primary">Primary Btn</VButton>
      <VButton>Normal Btn</VButton>

      <VPanel>
        <VButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </VButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </VPanel>

      <VPanel>
        <VBadge>Normal badge</VBadge>
        <VBadge variant="primary">Primary badge</VBadge>
        <VBadge>Something</VBadge>
      </VPanel>
    </>
  );
}

export default App;
