"use client";

import { Layout } from "@/components/Layout";
import { GraduationCap } from "lucide-react"; // Using GraduationCap icon for Tutorials

const Tutorials = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Tutorials</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <GraduationCap className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Learn How to Use Our App
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Explore our video tutorials and step-by-step guides to master all features.
          </p>
          {/* Future: Add video embeds or links to tutorial articles */}
        </div>
      </div>
    </Layout>
  );
};

export default Tutorials;