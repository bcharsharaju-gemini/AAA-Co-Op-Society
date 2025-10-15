"use client";

import { Layout } from "@/components/Layout";
import { DollarSign } from "lucide-react"; // Using DollarSign icon for payroll

const Payroll = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Payroll</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <DollarSign className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No payroll data available
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage employee payroll and compensation here.
          </p>
          {/* Future: Add payroll processing options or display */}
        </div>
      </div>
    </Layout>
  );
};

export default Payroll;