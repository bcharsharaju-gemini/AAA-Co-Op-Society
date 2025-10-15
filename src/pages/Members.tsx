"use client";

import { Layout } from "@/components/Layout";

const Members = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Members</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no members yet
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start adding members as soon as you create one.
          </p>
          {/* Future: Add Member Button */}
        </div>
      </div>
    </Layout>
  );
};

export default Members;