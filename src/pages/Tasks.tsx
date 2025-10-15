"use client";

import { Layout } from "@/components/Layout";
import { CheckSquare } from "lucide-react"; // Using CheckSquare icon for tasks

const Tasks = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Tasks</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <CheckSquare className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No tasks created yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage your daily tasks and to-dos here.
          </p>
          {/* Future: Add task creation, listing, and management */}
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;