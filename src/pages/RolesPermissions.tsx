"use client";

import { Layout } from "@/components/Layout";
import { ShieldCheck } from "lucide-react"; // Using ShieldCheck icon for roles and permissions

const RolesPermissions = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Roles & Permissions</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <ShieldCheck className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No roles defined yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage user roles and their access permissions here.
          </p>
          {/* Future: Add role listing, permission assignment, and user-role management */}
        </div>
      </div>
    </Layout>
  );
};

export default RolesPermissions;