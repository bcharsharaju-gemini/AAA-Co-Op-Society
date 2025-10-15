"use client";

import { Layout } from "@/components/Layout";
import { Download } from "lucide-react"; // Using Download icon for Downloads

const Downloads = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Downloads</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Download className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Access Your Downloadable Resources
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Find and download reports, templates, and other important files here.
          </p>
          {/* Future: Add a list of downloadable files with download links */}
        </div>
      </div>
    </Layout>
  );
};

export default Downloads;