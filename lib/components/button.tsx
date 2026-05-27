import { type ReactNode } from "react";
import "./button.css";
import { Loader } from "./loader";

export type ButtonProps = {
  variant?: "primary";
  size?: "small" | "small-icon" | "icon";
  showLoader?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};

export function Button(props: ButtonProps) {
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

  const loaderVariant = props.variant === "primary" ? "light" : "color";

  return (
    <button className={className} onClick={props.onClick}>
      <span className={props.showLoader ? "vaar-button-content-hidden" : ""}>
        {props.children}
      </span>
      {props.showLoader && (
        <span className="vaar-button-loader">
          <Loader size="button" variant={loaderVariant} />
        </span>
      )}
    </button>
  );
}
