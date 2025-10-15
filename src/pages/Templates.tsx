"use client";

import { Layout } from "@/components/Layout";
import { LayoutTemplate } from "lucide-react"; // Using LayoutTemplate icon for Templates

const Templates = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Templates</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <LayoutTemplate className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Manage Your Application Templates
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Create, edit, and organize templates for various purposes.
          </p>
          {/* Future: Add template listing, creation, and editing functionality */}
        </div>
      </div>
    </Layout>
  );
};

export default Templates;