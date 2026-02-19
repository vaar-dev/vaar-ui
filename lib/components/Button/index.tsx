import { type ReactNode } from "react";
import "./button.css";

export type ButtonProps = {
  variant?: "primary";
  size?: "small" | "small-icon" | "icon";
  children?: ReactNode;
  onClick?: () => void;
};

export function VButton(props: ButtonProps) {
  let className = "vaar-button";

  if (props.variant === "primary") {
    className += " vaar-button-primary";
  }

  if (props.size === "small") {
    className += " vaar-button-small";
  } else if (props.size === "small-icon") {
    className += " vaar-button-small vaar-button-icon";
  } else if (props.size === "icon") {
    className += " vaar-button-icon";
  }

  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
