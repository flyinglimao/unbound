"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function EquityChart({
  holding,
}: {
  holding: { [key: string]: number };
}) {
  const holdingEntries = Object.entries(holding);
  const total = holdingEntries.reduce((acc, [, value]) => acc + value, 0);

  return (
    <Pie
      data={{
        labels: holdingEntries.map((e) => e[0]),
        datasets: [
          {
            label: "% of Equities",
            data: holdingEntries.map((e) => e[1] / total),
            backgroundColor: holdingEntries.map(
              (_, index) =>
                `hsla(${(index * 360) / holdingEntries.length},100%,69%,0.2)`
            ),
            borderColor: holdingEntries.map(
              (_, index) =>
                `hsla(${(index * 360) / holdingEntries.length},100%,69%,12)`
            ),
            borderWidth: 1,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      }}
    />
  );
}
