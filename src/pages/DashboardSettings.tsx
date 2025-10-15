"use client";

import { Layout } from "@/components/Layout";
import { LayoutDashboard } from "lucide-react"; // Using LayoutDashboard icon for Dashboard Settings

const DashboardSettings = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard Settings</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <LayoutDashboard className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Customize Your Dashboard
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Personalize your dashboard layout and content to suit your needs.
          </p>
          {/* Future: Add options for widget management, layout preferences, etc. */}
        </div>
      </div>
    </Layout>
  );
};

export default DashboardSettings;