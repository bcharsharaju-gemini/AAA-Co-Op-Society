"use client";

import { Layout } from "@/components/Layout";
import { GitPullRequestArrow } from "lucide-react"; // Using GitPullRequestArrow icon for Changelog

const Changelog = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Changelog</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <GitPullRequestArrow className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            What's New?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Stay up-to-date with our latest features, improvements, and bug fixes.
          </p>
          {/* Future: Add a list of release versions with their respective changes */}
        </div>
      </div>
    </Layout>
  );
};

export default Changelog;