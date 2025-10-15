"use client";

import { Layout } from "@/components/Layout";
import { Download } from "lucide-react"; // Using Download icon for Data Export

const DataExport = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Data Export</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Download className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Export Your Application Data
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Select data types and formats to export your information.
          </p>
          {/* Future: Add options for selecting data, format, and initiating export */}
        </div>
      </div>
    </Layout>
  );
};

export default DataExport;