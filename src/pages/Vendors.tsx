"use client";

import { Layout } from "@/components/Layout";
import { Truck } from "lucide-react"; // Using Truck icon for vendors

const Vendors = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Vendors</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <Truck className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No vendors added yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage your supplier and vendor details here.
          </p>
          {/* Future: Add vendor creation, listing, and management */}
        </div>
      </div>
    </Layout>
  );
};

export default Vendors;