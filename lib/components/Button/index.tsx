import * as React from "react";
import "./button.css";

export type ButtonProps = {
  variant?: "primary";
  children?: React.ReactNode;
};

export function VButton(props: ButtonProps) {
  let className = "vaar-button";

  if (props.variant === "primary") {
    className += " vaar-button-primary";
  }

  return <button className={className}>{props.children}</button>;
}
