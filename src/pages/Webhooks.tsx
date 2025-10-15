"use client";

import { Layout } from "@/components/Layout";
import { Webhook } from "lucide-react"; // Using Webhook icon for Webhooks

const Webhooks = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Webhooks</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Webhook className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Configure Your Webhooks
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Set up webhooks to receive real-time notifications and integrate with other services.
          </p>
          {/* Future: Add webhook listing, creation, and testing functionality */}
        </div>
      </div>
    </Layout>
  );
};

export default Webhooks;