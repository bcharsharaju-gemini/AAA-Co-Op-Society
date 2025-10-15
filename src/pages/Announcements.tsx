"use client";

import { Layout } from "@/components/Layout";
import { Megaphone } from "lucide-react"; // Using Megaphone icon for Announcements

const Announcements = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Announcements</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Megaphone className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Important Updates & News
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Stay informed with the latest announcements from our team.
          </p>
          {/* Future: Add a list of announcements with dates and content */}
        </div>
      </div>
    </Layout>
  );
};

export default Announcements;