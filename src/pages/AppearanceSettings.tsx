"use client";

import { Layout } from "@/components/Layout";
import { Palette } from "lucide-react"; // Using Palette icon for appearance settings
import { ModeToggle } from "@/components/ModeToggle"; // Import ModeToggle

const AppearanceSettings = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Appearance Settings</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Palette className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Customize your application's look
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Switch between light, dark, or system default themes.
          </p>
          <ModeToggle /> {/* Integrate the ModeToggle component */}
        </div>
      </div>
    </Layout>
  );
};

export default AppearanceSettings;