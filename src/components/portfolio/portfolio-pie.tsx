"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PortfolioPie() {
  return (
    <Card className="h-[400px]">
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <div className="text-sm font-medium">Share this pie</div>
          <div className="relative mt-4 h-[250px] w-[250px] rounded-full border-8 border-blue-500">
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div className="text-2xl font-semibold">$167,435.74</div>
              <div className="text-sm text-red-500">-$27,559.36 ▼18.90%</div>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
              Buy/Sell
            </Button>
            <Button variant="outline">Rebalance</Button>
            <Button variant="outline">Edit</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
