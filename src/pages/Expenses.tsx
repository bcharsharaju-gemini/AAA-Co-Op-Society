"use client";

import { Layout } from "@/components/Layout";
import { ReceiptText } from "lucide-react"; // Using ReceiptText icon for expenses

const Expenses = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Expenses</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <ReceiptText className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No expenses recorded yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Track and manage all your organizational expenses here.
          </p>
          {/* Future: Add expense entry forms or display */}
        </div>
      </div>
    </Layout>
  );
};

export default Expenses;