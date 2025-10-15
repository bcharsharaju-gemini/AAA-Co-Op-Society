"use client";

import { Layout } from "@/components/Layout";
import { CreditCard } from "lucide-react"; // Using CreditCard icon for transactions

const Transactions = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Transactions</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <CreditCard className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No transactions recorded yet
          </h3>
          <p className="text-sm text-muted-foreground">
            All deposits, withdrawals, and loan activities will appear here.
          </p>
          {/* Future: Add transaction filtering or display */}
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;