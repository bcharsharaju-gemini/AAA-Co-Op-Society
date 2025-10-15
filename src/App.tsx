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
import Notifications from "./pages/Notifications";
import Team from "./pages/Team";
import Analytics from "./pages/Analytics";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import RolesPermissions from "./pages/RolesPermissions";
import Users from "./pages/Users";
import AuditLog from "./pages/AuditLog";
import SystemStatus from "./pages/SystemStatus";
import NotificationSettings from "./pages/NotificationSettings";
import HelpCenter from "./pages/HelpCenter";
import Integrations from "./pages/Integrations";
import Maintenance from "./pages/Maintenance";
import Feedback from "./pages/Feedback";
import UserActivity from "./pages/UserActivity";
import Security from "./pages/Security";
import AppearanceSettings from "./pages/AppearanceSettings";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Licenses from "./pages/Licenses";
import Changelog from "./pages/Changelog";
import GettingStarted from "./pages/GettingStarted";
import Roadmap from "./pages/Roadmap";
import KnowledgeBase from "./pages/KnowledgeBase";
import Tutorials from "./pages/Tutorials";
import Resources from "./pages/Resources";
import Announcements from "./pages/Announcements";
import DashboardSettings from "./pages/DashboardSettings";
import Personalization from "./pages/Personalization";
import Billing from "./pages/Billing";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import APIKeys from "./pages/APIKeys"; // Import the APIKeys page

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
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/team" element={<Team />} />
          <Route path="/roles-permissions" element={<RolesPermissions />} />
          <Route path="/users" element={<Users />} />
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
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/audit-log" element={<AuditLog />} />
          <Route path="/system-status" element={<SystemStatus />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification-settings" element={<NotificationSettings />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/user-activity" element={<UserActivity />} />
          <Route path="/security" element={<Security />} />
          <Route path="/appearance-settings" element={<AppearanceSettings />} />
          <Route path="/dashboard-settings" element={<DashboardSettings />} />
          <Route path="/personalization" element={<Personalization />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/subscription-plans" element={<SubscriptionPlans />} />
          <Route path="/api-keys" element={<APIKeys />} /> {/* Add route for API Keys */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/announcements" element={<Announcements />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;