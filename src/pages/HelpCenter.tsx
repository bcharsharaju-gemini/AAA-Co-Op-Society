"use client";

import { Layout } from "@/components/Layout";
import { HelpCircle } from "lucide-react"; // Changed from QuestionCircle to HelpCircle

const HelpCenter = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Help Center</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <HelpCircle className="h-12 w-12 text-muted-foreground mb-4" /> {/* Changed icon here */}
          <h3 className="text-2xl font-bold tracking-tight">
            How can we help you?
          </h3>
          <p className="text-sm text-muted-foreground">
            Find answers to your questions, guides, and troubleshooting tips.
          </p>
          {/* Future: Add search bar, FAQ categories, articles, etc. */}
        </div>
      </div>
    </Layout>
  );
};

export default HelpCenter;