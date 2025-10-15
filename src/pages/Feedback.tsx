"use client";

import { Layout } from "@/components/Layout";
import { MessageSquarePlus } from "lucide-react"; // Using MessageSquarePlus icon for feedback

const Feedback = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Feedback</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <MessageSquarePlus className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            We'd love to hear from you!
          </h3>
          <p className="text-sm text-muted-foreground">
            Share your thoughts, suggestions, or report an issue.
          </p>
          {/* Future: Add a feedback form with fields for type of feedback, message, and contact info */}
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;