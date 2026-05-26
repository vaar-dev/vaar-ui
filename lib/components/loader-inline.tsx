import "./loader-inline.css";

export type LoaderInlineProps = {
  variant?: "primary";
};

export function LoaderInline(props: LoaderInlineProps) {
  let className = "vaar-loader-inline";
  if (props.variant === "primary") {
    className += " vaar-loader-inline-primary";
  }

  return (
    <span className={className}>
      <span className="vaar-loader-inline-square" />
      <span className="vaar-loader-inline-square" />
    </span>
  );
}
