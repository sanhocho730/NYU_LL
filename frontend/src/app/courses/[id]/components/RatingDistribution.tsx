"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styles from "./RatingDistribution.module.scss";

type DataPoint = { rating: string; count: number };

export default function RatingDistribution({
  data,
}: {
  data: DataPoint[];
}) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Rating Distribution</h3>
      <BarChart
        width={240}
        height={200}
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" hide />
        <YAxis
          dataKey="rating"
          type="category"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: "rgba(0,0,0,0.05)" }}
          formatter={(value) => [`${value}`, "Count"]}
        />
        <Bar
          dataKey="count"
          fill="#8900e1"
          barSize={12}
          radius={[0, 8, 8, 0]}
        />
      </BarChart>
    </div>
  );
}
