"use client";

import { Layout } from "@/components/Layout";

const Deposits = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Deposits</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            No deposit data available
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start managing deposits here.
          </p>
          {/* Future: Add deposit management options or display */}
        </div>
      </div>
    </Layout>
  );
};

export default Deposits;