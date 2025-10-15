"use client";

import { Layout } from "@/components/Layout";
import { ScrollText } from "lucide-react"; // Using ScrollText icon for audit log

const AuditLog = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Audit Log</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <ScrollText className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No audit entries yet
          </h3>
          <p className="text-sm text-muted-foreground">
            View a chronological record of all system activities and changes.
          </p>
          {/* Future: Add a table to display audit log entries with filters and pagination */}
        </div>
      </div>
    </Layout>
  );
};

export default AuditLog;