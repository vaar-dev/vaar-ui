import "./loader.css";
import { BoxGrid, type BoxData } from "./box-grid";
import { useEffect, useState } from "react";

export type LoaderProps = {
  size: "small" | "large" | "button";
  variant?: "color" | "neutral" | "light";
  centered?: boolean;
};

function randomIntensity(): 1 | 2 | 3 | 4 | 5 {
  return (Math.floor(Math.random() * 5) + 1) as 1 | 2 | 3 | 4 | 5;
}

const CONFIG = {
  small: { count: 4, columns: 2, interval: 400 },
  large: { count: 9, columns: 3, interval: 400 },
  button: { count: 3, columns: 3, interval: 400 },
};

function generateData(count: number): BoxData[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i.toString(),
    intensity: randomIntensity(),
  }));
}

export function Loader(props: LoaderProps) {
  const { count, columns, interval } = CONFIG[props.size];
  const [data, setData] = useState(() => generateData(count));

  useEffect(() => {
    const id = setInterval(() => setData(generateData(count)), interval);
    return () => clearInterval(id);
  }, [count, interval]);

  let className = "vaar-loader";
  if (props.size === "small" || props.size === "button") {
    className += " vaar-loader-small";
  }
  if (props.centered) {
    className += " vaar-loader-centered";
  }

  return (
    <div className={className}>
      <BoxGrid
        variant={props.variant ?? "color"}
        columns={columns}
        data={data}
      />
    </div>
  );
}
