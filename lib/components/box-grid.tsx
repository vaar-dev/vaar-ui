import "./box-grid.css";
import { type CSSProperties } from "react";

export type BoxData = {
  id: string;
  intensity: 1 | 2 | 3 | 4 | 5;
};

type BoxProps = {
  variant: "color" | "neutral";
} & BoxData;

export type BoxGridProps = {
  variant: "color" | "neutral";
  columns?: number;
  data: BoxData[];
};

export function Box(props: BoxProps) {
  let className = "vaar-box-grid-box";
  switch (props.variant) {
    case "color":
      className += " color";
      break;
    case "neutral":
      className += " neutral";
      break;
  }
  className += " intensity-" + props.intensity.toString();
  return <div className={className}></div>;
}

export function BoxGrid(props: BoxGridProps) {
  const boxes = props.data.map((item) => (
    <Box
      key={item.id}
      variant={props.variant}
      id={item.id}
      intensity={item.intensity}
    />
  ));
  const style = props.columns
    ? ({ "--vaar-box-grid-columns": props.columns } as CSSProperties)
    : undefined;

  return (
    <div
      className={`vaar-box-grid${props.columns ? " vaar-box-grid-fixed" : ""}`}
      style={style}
    >
      {boxes}
    </div>
  );
}
