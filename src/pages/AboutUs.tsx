"use client";

import { Layout } from "@/components/Layout";
import { Info } from "lucide-react"; // Using Info icon for About Us

const AboutUs = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">About Us</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Info className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Learn More About Our Company
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Discover our mission, values, and the team behind our success.
          </p>
          {/* Future: Add company history, mission statement, team profiles, etc. */}
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;