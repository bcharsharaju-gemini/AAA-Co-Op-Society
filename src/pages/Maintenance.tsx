"use client";

import { Layout } from "@/components/Layout";
import { Wrench } from "lucide-react"; // Using Wrench icon for maintenance

const Maintenance = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Maintenance</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <Wrench className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No maintenance tasks scheduled
          </h3>
          <p className="text-sm text-muted-foreground">
            View and manage system maintenance activities here.
          </p>
          {/* Future: Add maintenance schedules, logs, or tools */}
        </div>
      </div>
    </Layout>
  );
};

export default Maintenance;