"use client";

import { Layout } from "@/components/Layout";
import { LifeBuoy } from "lucide-react"; // Using LifeBuoy icon for support

const Support = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Support</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <LifeBuoy className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            Need help?
          </h3>
          <p className="text-sm text-muted-foreground">
            Find answers to your questions or contact our support team.
          </p>
          {/* Future: Add FAQ, contact form, or knowledge base links */}
        </div>
      </div>
    </Layout>
  );
};

export default Support;