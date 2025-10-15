"use client";

import { Layout } from "@/components/Layout";
import { Map } from "lucide-react"; // Using Map icon for Roadmap

const Roadmap = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Roadmap</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Map className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Our Future Plans
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See what's coming next! Explore our planned features and improvements.
          </p>
          {/* Future: Add sections for "In Progress", "Coming Soon", "Planned", etc. */}
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;