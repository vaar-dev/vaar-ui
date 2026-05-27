import "./loader-page.css";
import { BoxGrid, type BoxData } from "./box-grid";
import { useEffect, useState } from "react";

function randomIntensity(): 1 | 2 | 3 | 4 | 5 {
  return (Math.floor(Math.random() * 5) + 1) as 1 | 2 | 3 | 4 | 5;
}

function generateData(): BoxData[] {
  return Array.from({ length: 9 }, (_, i) => ({
    id: i.toString(),
    intensity: randomIntensity(),
  }));
}

export function PageLoader() {
  const [data, setData] = useState(generateData);

  useEffect(() => {
    const interval = setInterval(() => setData(generateData()), 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="vaar-page-loader">
      <BoxGrid variant="color" columns={3} data={data} />
    </div>
  );
}
