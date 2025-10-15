"use client";

import { Layout } from "@/components/Layout";
import { BriefcaseBusiness } from "lucide-react"; // Using BriefcaseBusiness icon for clients

const Clients = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Clients</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <BriefcaseBusiness className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No clients added yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage your client details and interactions here.
          </p>
          {/* Future: Add client creation, listing, and management */}
        </div>
      </div>
    </Layout>
  );
};

export default Clients;