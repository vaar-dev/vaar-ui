import "./entry.css";
import type { HTMLInputTypeAttribute } from "react";

type ExcludedTypes =
  | "button"
  | "checkbox"
  | "color"
  | "radio"
  | "hidden"
  | "submit"
  | "reset"
  | "image"
  | "range";
type EntryType = Exclude<HTMLInputTypeAttribute, ExcludedTypes> | "multiline";

export type EntryProps = {
  type: EntryType;
  label: string;
  multilineRowCount?: number;
  value?: string
  onChange?: (value: string) => void;
};

function EntryInner(props: EntryProps) {
  switch (props.type) {
    case "multiline":
      return (
        <textarea
          rows={props.multilineRowCount}
          value={props.value}
          onChange={(e) => {if(props.onChange !== undefined){ props.onChange(e.target.value)}}}
        />
      );
    default:
      return <input type={props.type} value={props.value} onChange={(e) => {if(props.onChange !== undefined){ props.onChange(e.target.value)}}} />;
  }
}

export function Entry(props: EntryProps){
  const innerComponent = <EntryInner {...props} />

  return (
    <div className="vaar-entry">
      <label>{props.label}</label>
      {innerComponent}
    </div>
  );
}
