"use client";

import { Layout } from "@/components/Layout";
import { Sparkles } from "lucide-react"; // Using Sparkles icon for Personalization

const Personalization = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Personalization</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Sparkles className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Tailor Your Experience
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Customize the application to match your preferences and style.
          </p>
          {/* Future: Add options for theme, language, notification preferences, etc. */}
        </div>
      </div>
    </Layout>
  );
};

export default Personalization;