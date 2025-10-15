"use client";

import { Layout } from "@/components/Layout";
import { Puzzle } from "lucide-react"; // Using Puzzle icon for integrations

const Integrations = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Integrations</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <Puzzle className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No integrations configured
          </h3>
          <p className="text-sm text-muted-foreground">
            Connect with third-party services to extend functionality.
          </p>
          {/* Future: Add a list of available integrations, connection status, and configuration options */}
        </div>
      </div>
    </Layout>
  );
};

export default Integrations;