"use client";

import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function PortfolioSummary() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Current value</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Your portfolio's current market value</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-2 flex items-baseline gap-4">
          <h2 className="text-4xl font-semibold">$167,435.74</h2>
          <div className="flex items-center gap-2">
            <span className="text-red-500">-$27,559.36</span>
            <span className="text-red-500">▼18.90%</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">
              Starting value Mar 2, 2020
            </div>
            <div>$0.00</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Market gain</div>
            <div className="text-red-500">-$34,013.66</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">
              Earned dividends
            </div>
            <div className="text-green-500">+$6,454.30</div>
          </div>
        </div>
      </div>
    </div>
  );
}
