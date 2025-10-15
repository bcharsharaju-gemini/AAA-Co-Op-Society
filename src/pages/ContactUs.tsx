"use client";

import { Layout } from "@/components/Layout";
import { Mail } from "lucide-react"; // Using Mail icon for Contact Us

const ContactUs = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Contact Us</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Mail className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-2xl font-bold tracking-tight">
            Get in Touch
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Have questions or need support? Reach out to us!
          </p>
          {/* Future: Add a contact form, email address, phone number, and office hours */}
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;