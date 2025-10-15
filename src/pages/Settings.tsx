"use client";

import { Layout } from "@/components/Layout";

const Settings = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Settings</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            No settings configured yet
          </h3>
          <p className="text-sm text-muted-foreground">
            You can manage application settings here.
          </p>
          {/* Future: Add various settings options */}
        </div>
      </div>
    </Layout>
  );
};

export default Settings;