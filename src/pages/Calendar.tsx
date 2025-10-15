"use client";

import { Layout } from "@/components/Layout";
import { CalendarDays } from "lucide-react"; // Using CalendarDays icon for calendar

const Calendar = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Calendar</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <CalendarDays className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">
            No events scheduled yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage your appointments and events here.
          </p>
          {/* Future: Add calendar display and event management */}
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;