"use client";

import { Layout } from "@/components/Layout";
import { ShoppingCart } from "lucide-react"; // Using ShoppingCart icon for Orders

const Orders = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <ShoppingCart className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            No orders recorded yet
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            View and manage all customer orders here.
          </p>
          {/* Future: Add order listing, details, and status updates */}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;