"use client";

import { Layout } from "@/components/Layout";
import { BookOpenText } from "lucide-react"; // Using BookOpenText icon for Knowledge Base

const KnowledgeBase = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Knowledge Base</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <BookOpenText className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Find Your Answers Here
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Browse articles and guides to get the most out of our application.
          </p>
          {/* Future: Add search functionality, categories, and article listings */}
        </div>
      </div>
    </Layout>
  );
};

export default KnowledgeBase;