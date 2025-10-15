"use client";

import { Layout } from "@/components/Layout";
import { BookUser } from "lucide-react"; // Using BookUser icon for User Guides

const UserGuides = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">User Guides</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <BookUser className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Comprehensive Guides for Every Feature
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Dive deep into detailed instructions and best practices for using our application.
          </p>
          {/* Future: Add categories, search, and links to individual guide articles */}
        </div>
      </div>
    </Layout>
  );
};

export default UserGuides;