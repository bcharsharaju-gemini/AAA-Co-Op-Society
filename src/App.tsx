import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Members from "./pages/Members";
import Shares from "./pages/Shares";
import Reports from "./pages/Reports";
import Savings from "./pages/Savings";
import Loans from "./pages/Loans";
import Deposits from "./pages/Deposits";
import Withdrawals from "./pages/Withdrawals";
import Accounting from "./pages/Accounting";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import Expenses from "./pages/Expenses";
import Budgets from "./pages/Budgets";
import Invoices from "./pages/Invoices";
import Clients from "./pages/Clients";
import Vendors from "./pages/Vendors";
import Payroll from "./pages/Payroll";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Documents from "./pages/Documents";
import Calendar from "./pages/Calendar";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications"; // Import the Notifications page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/members" element={<Members />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/shares" element={<Shares />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/withdrawals" element={<Withdrawals />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} /> {/* Add route for Notifications */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;