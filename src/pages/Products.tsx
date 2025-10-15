"use client";

import { Layout } from "@/components/Layout";
import { Package } from "lucide-react"; // Using Package icon for Products

const Products = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Package className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Manage Your Product Catalog
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Add, edit, and organize all the products offered by your business.
          </p>
          {/* Future: Add product listing, adding, editing, and deleting functionality */}
        </div>
      </div>
    </Layout>
  );
};

export default Products;