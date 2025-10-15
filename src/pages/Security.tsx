"use client";

import { Layout } from "@/components/Layout";
import { Shield } from "lucide-react"; // Using Shield icon for security

const Security = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Security</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <Shield className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            Manage your account security
          </h3>
          <p className="text-sm text-muted-foreground">
            Configure two-factor authentication, change your password, and review active sessions.
          </p>
          {/* Future: Add forms and toggles for various security settings */}
        </div>
      </div>
    </Layout>
  );
};

export default Security;