"use client";

import { Layout } from "@/components/Layout";
import { Package2 } from "lucide-react"; // Using Package2 icon for Assets

const Assets = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Assets</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Package2 className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            No assets recorded yet
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage your company's physical and digital assets here.
          </p>
          {/* Future: Add asset listing, adding, editing, and tracking functionality */}
        </div>
      </div>
    </Layout>
  );
};

export default Assets;