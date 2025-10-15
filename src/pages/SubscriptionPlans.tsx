"use client";

import { Layout } from "@/components/Layout";
import { Package } from "lucide-react"; // Using Package icon for Subscription Plans

const SubscriptionPlans = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Subscription Plans</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Package className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Explore Our Subscription Tiers
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Choose the plan that best fits your needs and unlock more features.
          </p>
          {/* Future: Add plan comparison, upgrade/downgrade options, current plan details */}
        </div>
      </div>
    </Layout>
  );
};

export default SubscriptionPlans;