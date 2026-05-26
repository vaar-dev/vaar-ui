import { type ReactNode, useState } from "react";
import "./App.css";
import { Badge } from "../lib/components/badge";
import { Button } from "../lib/components/button";
import { Dialog } from "../lib/components/dialog";
import { Panel } from "../lib/components/panel";
import { Table, type TableColumn } from "../lib/components/table";
import { Entry } from "../lib/components/entry";
import { OtpEntry } from "../lib/components/otp-entry";
import "../lib/root.css";

type SampleRow = {
  id: string;
  name: string;
  status: string;
  value: string;
};

const sampleColumns: TableColumn<SampleRow>[] = [
  {
    columnId: "name",
    name: "Name",
    cellBuilder: (row: SampleRow): ReactNode => row.name,
  },
  {
    columnId: "status",
    name: "Status",
    cellBuilder: (row: SampleRow): ReactNode => (
      <Badge variant={row.status === "Active" ? "primary" : undefined}>
        {row.status}
      </Badge>
    ),
  },
  {
    columnId: "value",
    name: "Value",
    cellBuilder: (row: SampleRow): ReactNode => row.value,
  },
];

const sampleData: SampleRow[] = [
  { id: "1", name: "Project Alpha", status: "Active", value: "$12,400" },
  { id: "2", name: "Project Beta", status: "Draft", value: "$8,200" },
  { id: "3", name: "Project Gamma", status: "Active", value: "$24,800" },
  { id: "4", name: "Project Delta", status: "Archived", value: "$3,100" },
];

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [multilineValue, setMultilineValue] = useState("");
  const [otpNumeric, setOtpNumeric] = useState("");
  const [otpAlpha, setOtpAlpha] = useState("");

  return (
    <div className="catalogue">
      <header>
        <img src="/vaar.svg" alt="vaar logo" height="40px" />
        <h1>vaar ui</h1>
      </header>

      <h2>Button</h2>
      <Panel>
        <h3>Variants</h3>
        <div className="variant-row">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
        </div>

        <h3>Sizes</h3>
        <div className="variant-row">
          <Button>Regular</Button>
          <Button size="small">Small</Button>
          <Button size="icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </Button>
          <Button size="small-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </Button>
        </div>
      </Panel>

      <h2>Badge</h2>
      <Panel>
        <h3>Variants</h3>
        <div className="variant-row">
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
        </div>
      </Panel>

      <h2>Entry</h2>
      <Panel>
        <h3>Text input</h3>
        <Entry
          label="Text field"
          type="text"
          value={textValue}
          onChange={setTextValue}
        />

        <h3>Password</h3>
        <Entry label="Password field" type="password" />

        <h3>Multiline</h3>
        <Entry
          label="Multiline field"
          type="multiline"
          multilineRowCount={3}
          value={multilineValue}
          onChange={setMultilineValue}
        />

        <h3>Read only</h3>
        <Entry
          label="Read only field"
          type="text"
          value="This value cannot be edited"
          readOnly
        />
        <Entry
          label="Read only multiline"
          type="multiline"
          multilineRowCount={2}
          value="This multiline value cannot be edited"
          readOnly
        />
      </Panel>

      <h2>OTP Entry</h2>
      <Panel>
        <h3>Numeric (6 digits)</h3>
        <OtpEntry
          label="Verification code"
          length={6}
          value={otpNumeric}
          onChange={setOtpNumeric}
        />

        <h3>Alphanumeric (8 characters)</h3>
        <OtpEntry
          label="Recovery code"
          length={8}
          mode="alphanumeric"
          value={otpAlpha}
          onChange={setOtpAlpha}
        />

        <h3>Read only</h3>
        <OtpEntry label="Confirmed code" length={6} value="482916" readOnly />
      </Panel>

      <h2>Panel</h2>
      <Panel>
        <p style={{ margin: 0 }}>
          Panels are surface containers with rounded corners and a subtle
          shadow. Every section on this page is wrapped in a Panel.
        </p>
      </Panel>

      <h2>Table</h2>
      <Panel>
        <Table data={sampleData} dataId="id" columns={sampleColumns} />
      </Panel>

      <h2>Dialog</h2>
      <Panel>
        <Button variant="primary" onClick={() => setIsDialogOpen(true)}>
          Open Dialog
        </Button>
        <Dialog
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          title="Example Dialog"
          showCloseButton
        >
          <p>
            Dialogs appear centered over a translucent backdrop. Click the
            backdrop or the close button to dismiss.
          </p>
        </Dialog>
      </Panel>
    </div>
  );
}

export default App;
