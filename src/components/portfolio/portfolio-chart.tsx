"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2023-01", value: 150000 },
  { date: "2023-02", value: 158000 },
  { date: "2023-03", value: 165000 },
  { date: "2023-04", value: 172000 },
  { date: "2023-05", value: 168000 },
  { date: "2023-06", value: 175000 },
  { date: "2023-07", value: 167435 },
];

export function PortfolioChart() {
  return (
    <Card className="h-[400px] bg-[#0A1929] p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Value over time</h3>
        <Tabs defaultValue="ALL" className="w-auto">
          <TabsList className="bg-transparent">
            {["1D", "1W", "1M", "1Q", "YTD", "1Y", "ALL"].map((period) => (
              <TabsTrigger
                key={period}
                value={period}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-400 hover:text-white"
              >
                {period}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="mt-4 h-[300px] w-full text-white">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              stroke="#ffffff40"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#ffffff40"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "white",
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, "Value"]}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
