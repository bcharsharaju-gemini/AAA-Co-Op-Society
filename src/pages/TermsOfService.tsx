"use client";

import { Layout } from "@/components/Layout";
import { ClipboardList } from "lucide-react"; // Using ClipboardList icon for Terms of Service

const TermsOfService = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Terms of Service</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <ClipboardList className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Understand Our Terms
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Review the terms and conditions that govern your use of our services.
          </p>
          {/* Future: Add the actual terms of service content here */}
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;