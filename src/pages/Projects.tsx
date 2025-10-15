"use client";

import { Layout } from "@/components/Layout";
import { FolderOpen } from "lucide-react"; // Using FolderOpen icon for projects

const Projects = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Projects</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <FolderOpen className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No projects created yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage your ongoing and completed projects here.
          </p>
          {/* Future: Add project creation, listing, and management */}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;