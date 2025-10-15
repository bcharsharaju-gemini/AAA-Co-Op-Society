"use client";

import { Layout } from "@/components/Layout";
import { BarChart3 } from "lucide-react"; // Using BarChart3 icon for analytics

const Analytics = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <BarChart3 className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No analytics data available
          </h3>
          <p className="text-sm text-muted-foreground">
            Insights and data visualizations will appear here.
          </p>
          {/* Future: Add charts, graphs, and data tables */}
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;