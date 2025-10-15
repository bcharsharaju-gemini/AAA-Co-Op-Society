"use client";

import { Layout } from "@/components/Layout";
import { Gift } from "lucide-react"; // Using Gift icon for Promotions

const Promotions = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Promotions</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Gift className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            No promotions created yet
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Create and manage your special offers, discounts, and campaigns.
          </p>
          {/* Future: Add promotion listing, creation, editing, and activation/deactivation */}
        </div>
      </div>
    </Layout>
  );
};

export default Promotions;