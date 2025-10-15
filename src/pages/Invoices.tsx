"use client";

import { Layout } from "@/components/Layout";
import { Receipt } from "lucide-react"; // Corrected: Using Receipt icon for invoices

const Invoices = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Invoices</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <Receipt className="h-12 w-12 text-muted-foreground mb-4" /> {/* Corrected: Using Receipt icon */}
          <h3 className="text-2xl font-bold tracking-tight">
            No invoices created yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage all your client invoices and billing here.
          </p>
          {/* Future: Add invoice creation, listing, and management */}
        </div>
      </div>
    </Layout>
  );
};

export default Invoices;