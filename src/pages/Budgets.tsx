"use client";

import { Layout } from "@/components/Layout";
import { PiggyBank } from "lucide-react"; // Using PiggyBank icon for budgets

const Budgets = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Budgets</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <PiggyBank className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No budgets created yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Plan and track your financial budgets here.
          </p>
          {/* Future: Add budget creation forms or display */}
        </div>
      </div>
    </Layout>
  );
};

export default Budgets;