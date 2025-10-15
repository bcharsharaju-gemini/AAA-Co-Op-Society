"use client";

import { Layout } from "@/components/Layout";
import { Upload } from "lucide-react"; // Using Upload icon for Data Import

const DataImport = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Data Import</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Upload className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Import Data into Your Application
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Upload files to import new data or update existing records.
          </p>
          {/* Future: Add options for selecting file, mapping fields, and initiating import */}
        </div>
      </div>
    </Layout>
  );
};

export default DataImport;