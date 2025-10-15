"use client";

import { Layout } from "@/components/Layout";
import { Gavel } from "lucide-react"; // Using Gavel icon for Licenses

const Licenses = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Licenses</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Gavel className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Software Licenses & Disclaimers
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            View information about the licenses governing this application and its components.
          </p>
          {/* Future: Add actual license content or links to license files */}
        </div>
      </div>
    </Layout>
  );
};

export default Licenses;