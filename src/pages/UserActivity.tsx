"use client";

import { Layout } from "@/components/Layout";
import { UserCog } from "lucide-react"; // Using UserCog icon for user activity

const UserActivity = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">User Activity</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <UserCog className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No user activity recorded yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Monitor individual user actions and system interactions here.
          </p>
          {/* Future: Add a table to display user activity entries with filters and pagination */}
        </div>
      </div>
    </Layout>
  );
};

export default UserActivity;