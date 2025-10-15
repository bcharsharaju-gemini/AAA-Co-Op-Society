"use client";

import { Layout } from "@/components/Layout";
import { RotateCcw } from "lucide-react"; // Using RotateCcw icon for Returns

const Returns = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Returns</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <RotateCcw className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            No returns recorded yet
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage product returns and exchanges here.
          </p>
          {/* Future: Add return listing, processing, and status updates */}
        </div>
      </div>
    </Layout>
  );
};

export default Returns;