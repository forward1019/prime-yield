import { PortfolioSummary } from "./portfolio-summary";
import { PortfolioChart } from "./portfolio-chart";
import { PortfolioPie } from "./portfolio-pie";
import { PortfolioSlices } from "./portfolio-slices";

export function PortfolioPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="space-y-8">
        <PortfolioSummary />
        <div className="grid grid-cols-2 gap-8">
          <PortfolioPie />
          <PortfolioChart />
        </div>
        <PortfolioSlices />
      </div>
    </div>
  );
}
