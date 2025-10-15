"use client";

import { Layout } from "@/components/Layout";
import { Boxes } from "lucide-react"; // Using Boxes icon for Inventory

const Inventory = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Boxes className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Manage Your Product Inventory
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Track stock levels, add new products, and manage your inventory efficiently.
          </p>
          {/* Future: Add inventory listing, adding, editing, and stock management functionality */}
        </div>
      </div>
    </Layout>
  );
};

export default Inventory;