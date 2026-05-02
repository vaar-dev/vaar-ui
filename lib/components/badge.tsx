import * as React from "react";
import "./badge.css";

export type BadgeProps = {
  variant?: "primary";
  children?: React.ReactNode;
};

export function VBadge(props: BadgeProps) {
  let className = "vaar-badge";

  if (props.variant === "primary") {
    className += " vaar-badge-primary";
  }

  return <span className={className}>{props.children}</span>;
}
