"use client";

import { Layout } from "@/components/Layout";
import { Activity } from "lucide-react"; // Using Activity icon for system status

const SystemStatus = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">System Status</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <Activity className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            All systems operational
          </h3>
          <p className="text-sm text-muted-foreground">
            Monitor the health and status of application services here.
          </p>
          {/* Future: Add status indicators for various services */}
        </div>
      </div>
    </Layout>
  );
};

export default SystemStatus;