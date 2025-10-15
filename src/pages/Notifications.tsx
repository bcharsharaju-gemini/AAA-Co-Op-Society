"use client";

import { Layout } from "@/components/Layout";
import { Bell } from "lucide-react"; // Using Bell icon for notifications

const Notifications = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Notifications</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <Bell className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No new notifications
          </h3>
          <p className="text-sm text-muted-foreground">
            Important updates and alerts will appear here.
          </p>
          {/* Future: Add notification listing and management */}
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;