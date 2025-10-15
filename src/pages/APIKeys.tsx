"use client";

import { Layout } from "@/components/Layout";
import { Key } from "lucide-react"; // Using Key icon for API Keys

const APIKeys = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">API Keys</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Key className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Manage Your API Keys
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Generate and manage API keys for secure integrations.
          </p>
          {/* Future: Add API key listing, generation, and revocation functionality */}
        </div>
      </div>
    </Layout>
  );
};

export default APIKeys;