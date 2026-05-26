import type { ReactNode } from "react";
import "./stack.css";

export type StackProps = {
  children: ReactNode;
  direction: "vertical" | "horizontal";
};

export function Stack(props: StackProps) {
  const className =
    props.direction === "horizontal"
      ? "vaar-stack stack-horizontal"
      : "vaar-stack stack-vertical";
  return <div className={className}>{props.children}</div>;
}
