import { type ReactNode, useState } from "react";
import "./App.css";
import { Badge } from "../lib/components/badge";
import { Button } from "../lib/components/button";
import { Dialog } from "../lib/components/dialog";
import { Panel } from "../lib/components/panel";
import { Table, type TableColumn } from "../lib/components/table";
import "../lib/root.css";
import { Entry } from "../lib/components/entry.tsx";

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
  const [entryValue, setEntryValue] = useState<string>("");

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
      <Button variant="primary">Primary Btn</Button>
      <Button>Normal Btn</Button>

      <Panel>
        <Entry
          label="My Field"
          type="text"
          value={entryValue}
          onChange={setEntryValue}
        />
        <Entry
          label="My Second Field"
          type="password"
        />

        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <Button onClick={() => setIsDialogOpen(!isDialogOpen)}>
          Toggle Dialog
        </Button>

        <Dialog
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
        </Dialog>
      </Panel>

      <Panel>
        <Badge>Normal badge</Badge>
        <Badge variant="primary">Primary badge</Badge>
        <Badge>Something</Badge>
      </Panel>

      <Panel>
        <Table data={tableData} dataId="id" columns={columns} />
      </Panel>
    </>
  );
}

export default App;
