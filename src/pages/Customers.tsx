"use client";

import { Layout } from "@/components/Layout";
import { Users } from "lucide-react"; // Using Users icon for Customers

const Customers = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Customers</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Users className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            No customers recorded yet
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage all your customer details, contacts, and history here.
          </p>
          {/* Future: Add customer listing, adding, editing, and viewing details */}
        </div>
      </div>
    </Layout>
  );
};

export default Customers;