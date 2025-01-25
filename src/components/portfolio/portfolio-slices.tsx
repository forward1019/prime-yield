"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const slices = [
  {
    name: "Crypto Pie",
    value: "$59,927.27",
    gain: "-$46,226.77",
    percentage: "-42.54%",
    target: "40%",
    actual: "35.6%",
  },
  // Add more slices as needed
];

export function PortfolioSlices() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Slices</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {slices.map((slice) => (
            <div key={slice.name} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-blue-500" />
                <div>{slice.name}</div>
              </div>
              <div>{slice.value}</div>
              <div className="text-red-500">
                {slice.gain}
                <span className="ml-1">{slice.percentage}</span>
              </div>
              <div>
                {slice.actual} / {slice.target}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
