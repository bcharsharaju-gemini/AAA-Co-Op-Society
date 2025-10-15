"use client";

import { Layout } from "@/components/Layout";
import { MessageSquare } from "lucide-react"; // Using MessageSquare icon for messages

const Messages = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Messages</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No messages yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Communicate with your team and clients here.
          </p>
          {/* Future: Add message listing, sending, and management */}
        </div>
      </div>
    </Layout>
  );
};

export default Messages;