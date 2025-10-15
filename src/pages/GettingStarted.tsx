"use client";

import { Layout } from "@/components/Layout";
import { Rocket } from "lucide-react"; // Using Rocket icon for Getting Started

const GettingStarted = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Getting Started</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Rocket className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Welcome Aboard!
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Follow these steps to quickly set up and start using your application.
          </p>
          {/* Future: Add steps, links to tutorials, or key feature highlights */}
        </div>
      </div>
    </Layout>
  );
};

export default GettingStarted;