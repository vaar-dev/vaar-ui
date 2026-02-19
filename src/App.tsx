import { type ReactNode, useState } from "react";
import "./App.css";
import { VButton, VPanel, VBadge, type TableColumn, VTable } from "../lib";
import "../lib/root.css";
import { VDialog } from "../lib/components/Dialog";

type TestTableData = {
  id: string;
  name: string;
  value: string;
};

const columns: TableColumn<TestTableData>[] = [
  {
    columnId: "name",
    name: "Name",
    cellBuilder: (rowData: TestTableData): ReactNode => rowData.name,
  },
  {
    columnId: "value",
    name: "Value",
    cellBuilder: (rowData: TestTableData): ReactNode => rowData.value,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const tableData: TestTableData[] = [
    {
      id: "id-1",
      name: "First item",
      value: "This is a test value",
    },
    {
      id: "id-2",
      name: "Second item",
      value: "This is a test value",
    },
    {
      id: "id-3",
      name: "Third item",
      value: "This is a test value",
    },
    {
      id: "id-4",
      name: "Fourth item",
      value: "This is a test value",
    },
  ];

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

        <VButton onClick={() => setIsDialogOpen(!isDialogOpen)}>
          Toggle Dialog
        </VButton>

        <VDialog
          isOpen={isDialogOpen}
          setIsOpen={(isOpen) => setIsDialogOpen(isOpen)}
          title="Hello World"
          showCloseButton
        >
          <p>
            This is the main dialog content. This would normally be filled in
            with some useful stuff. But for now this is just some random
            placeholder content.
          </p>
        </VDialog>
      </VPanel>

      <VPanel>
        <VBadge>Normal badge</VBadge>
        <VBadge variant="primary">Primary badge</VBadge>
        <VBadge>Something</VBadge>
      </VPanel>

      <VPanel>
        <VTable data={tableData} dataId="id" columns={columns} />
      </VPanel>
    </>
  );
}

export default App;
