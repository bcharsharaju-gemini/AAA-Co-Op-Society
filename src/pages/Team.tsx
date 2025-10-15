"use client";

import { Layout } from "@/components/Layout";
import { Users } from "lucide-react"; // Using Users icon for team

const Team = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Team</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <Users className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No team members added yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage your organization's team members here.
          </p>
          {/* Future: Add team member listing, adding, and management */}
        </div>
      </div>
    </Layout>
  );
};

export default Team;