"use client";

import { Layout } from "@/components/Layout";
import { Truck } from "lucide-react"; // Using Truck icon for Shipments

const Shipments = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Shipments</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Truck className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            No shipments recorded yet
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Track and manage all outgoing product shipments.
          </p>
          {/* Future: Add shipment listing, tracking details, and status updates */}
        </div>
      </div>
    </Layout>
  );
};

export default Shipments;