import * as React from "react";
import "./panel.css";

export type PanelProps = {
  children?: React.ReactNode;
};

export function Panel(props: PanelProps) {
  return <div className="vaar-panel">{props.children}</div>;
}
