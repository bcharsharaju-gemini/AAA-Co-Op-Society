"use client";

import { Layout } from "@/components/Layout";
import { User } from "lucide-react"; // Using User icon for profile

const Profile = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Profile</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <User className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            Manage your profile
          </h3>
          <p className="text-sm text-muted-foreground">
            Update your personal information and preferences here.
          </p>
          {/* Future: Add profile details, edit forms, password change, etc. */}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;