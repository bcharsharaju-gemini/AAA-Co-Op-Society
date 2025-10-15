"use client";

import { Layout } from "@/components/Layout";
import { Banknote } from "lucide-react"; // Changed from ReceiptDollar to Banknote

const Billing = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Billing</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Banknote className="h-12 w-12 text-muted-foreground mb-2" /> {/* Changed icon here */}
          <h3 className="text-2xl font-bold tracking-tight">
            Manage Your Billing & Subscriptions
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            View your invoices, update payment methods, and manage your plan.
          </p>
          {/* Future: Add billing history, payment method management, subscription details */}
        </div>
      </div>
    </Layout>
  );
};

export default Billing;