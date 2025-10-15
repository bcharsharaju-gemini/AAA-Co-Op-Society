"use client";

import { Layout } from "@/components/Layout";
import { BellRing } from "lucide-react"; // Using BellRing icon for notification settings

const NotificationSettings = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Notification Settings</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <BellRing className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            Customize your notifications
          </h3>
          <p className="text-sm text-muted-foreground">
            Choose how and when you receive alerts and updates.
          </p>
          {/* Future: Add forms and toggles for various notification preferences */}
        </div>
      </div>
    </Layout>
  );
};

export default NotificationSettings;