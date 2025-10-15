"use client";

import { Layout } from "@/components/Layout";
import { MessageCircleQuestion } from "lucide-react"; // Using MessageCircleQuestion icon for FAQ

const FAQ = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">FAQ</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <MessageCircleQuestion className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Find answers to the most common questions about our service.
          </p>
          {/* Future: Add accordion components for questions and answers */}
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;