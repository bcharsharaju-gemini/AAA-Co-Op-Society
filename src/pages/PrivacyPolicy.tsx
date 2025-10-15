"use client";

import { Layout } from "@/components/Layout";
import { ShieldQuestion } from "lucide-react"; // Using ShieldQuestion icon for Privacy Policy

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Privacy Policy</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <ShieldQuestion className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Your Privacy Matters
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Read our full privacy policy to understand how we collect, use, and protect your data.
          </p>
          {/* Future: Add the actual privacy policy content here */}
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;