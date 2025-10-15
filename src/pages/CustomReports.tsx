"use client";

import { Layout } from "@/components/Layout";
import { FileBarChart } from "lucide-react"; // Using FileBarChart icon for Custom Reports

const CustomReports = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Custom Reports</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <FileBarChart className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Design Your Own Reports
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Create and save custom reports based on your specific data needs.
          </p>
          {/* Future: Add report builder interface, saved reports list, and export options */}
        </div>
      </div>
    </Layout>
  );
};

export default CustomReports;