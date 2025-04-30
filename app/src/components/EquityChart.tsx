"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Unbound", "Author", "Translator", "Public Offering"],
  datasets: [
    {
      label: "% of Equities",
      data: [10, 60, 10, 20],
      backgroundColor: [
        "hsla(0,100%,69%, 0.2)",
        "hsla(240,100%,69%, 0.2)",
        "hsla(120,100%,69%, 0.2)",
        "hsla(300,100%,69%, 0.2)",
        "hsla(60,100%,69%, 0.2)",
        "hsla(180,100%,69%, 0.2)",
      ],
      borderColor: [
        "hsla(0,100%,69%,1)",
        "hsla(240,100%,69%,1)",
        "hsla(120,100%,69%,1)",
        "hsla(300,100%,69%,1)",
        "hsla(60,100%,69%,1)",
        "hsla(180,100%,69%,1)",
      ],
      borderWidth: 1,
    },
  ],
};

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
