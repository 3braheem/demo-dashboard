"use client";

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

const getData = async () => {
  const data = await d3.csv("../../iris.csv", d3.autoType);
  return data;
};

const ScatterPlot: React.FC = () => {
  const [data, setData] = useState([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    d3.csv("../../iris.csv").then((x) => setData(x));
  }, []);

  useEffect(() => {
    if (!data) return;
    const plot = Plot.plot({
      y: { grid: true },
      marks: [
        Plot.ruleY([0]),
        Plot.dot(data, {
          x: "sepal_length",
          y: "sepal_width",
          fill: "species",
        }),
      ],
    });
    containerRef.current?.append(plot);
    return () => plot.remove();
  }, [data]);

  return <div ref={containerRef} />;
};

export default ScatterPlot;
