"use client";

import { Layout } from "@/components/Layout";
import { Link } from "lucide-react"; // Using Link icon for Resources

const Resources = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Resources</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Link className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Explore Additional Resources
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Find useful links, documents, and tools to enhance your experience.
          </p>
          {/* Future: Add categories for links, downloadable files, or external tools */}
        </div>
      </div>
    </Layout>
  );
};

export default Resources;