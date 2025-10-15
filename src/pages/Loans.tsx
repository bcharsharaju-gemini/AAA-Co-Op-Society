"use client";

import { Layout } from "@/components/Layout";

const Loans = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Loans</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            No loan data available
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start managing loans here.
          </p>
          {/* Future: Add loan management options or display */}
        </div>
      </div>
    </Layout>
  );
};

export default Loans;