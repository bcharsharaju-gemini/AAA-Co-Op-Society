"use client";

import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  PieChart,
  Landmark,
  HandCoins,
  Briefcase,
  BookOpen,
  FileText,
  Wallet,
  Settings,
  CreditCard,
  ReceiptText,
  PiggyBank,
  Receipt,
  BriefcaseBusiness,
  Truck,
  DollarSign,
  FolderOpen,
  CheckSquare,
  File,
  CalendarDays,
  MessageSquare,
  Bell,
  UsersRound,
  BarChart3,
  LifeBuoy,
  ShieldCheck,
  Users2,
  ScrollText,
  Activity,
  BellRing,
  HelpCircle,
  Puzzle,
  Wrench,
  MessageSquarePlus,
  UserCog,
  Shield,
  Palette,
  ShieldQuestion,
  ClipboardList,
  Mail,
  Info,
  MessageCircleQuestion,
  Gavel,
  GitPullRequestArrow,
  Rocket,
  Map,
  BookOpenText,
  GraduationCap,
  Link,
  Megaphone,
  LayoutDashboard,
  Sparkles,
  Banknote,
  Package,
  Key,
  Webhook,
  FileBarChart,
  Download,
  Upload, // Added for Data Import
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Getting Started", href: "/getting-started", icon: Rocket },
  { name: "Members", href: "/members", icon: Users },
  { name: "Clients", href: "/clients", icon: BriefcaseBusiness },
  { name: "Vendors", href: "/vendors", icon: Truck },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Documents", href: "/documents", icon: File },
  { name: "Calendar", href: "/calendar", icon: CalendarDays },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Announcements", href: "/announcements", icon: Megaphone },
  { name: "Notification Settings", href: "/notification-settings", icon: BellRing },
  { name: "Team", href: "/team", icon: UsersRound },
  { name: "Users", href: "/users", icon: Users2 },
  { name: "Roles & Permissions", href: "/roles-permissions", icon: ShieldCheck },
  { name: "Security", href: "/security", icon: Shield },
  { name: "Payroll", href: "/payroll", icon: DollarSign },
  { name: "Shares", href: "/shares", icon: PieChart },
  { name: "Savings", href: "/savings", icon: Landmark },
  { name: "Loans", href: "/loans", icon: HandCoins },
  { name: "Deposits", href: "/deposits", icon: Briefcase },
  { name: "Withdrawals", href: "/withdrawals", icon: Wallet },
  { name: "Transactions", href: "/transactions", icon: CreditCard },
  { name: "Expenses", href: "/expenses", icon: ReceiptText },
  { name: "Budgets", href: "/budgets", icon: PiggyBank },
  { name: "Invoices", href: "/invoices", icon: Receipt },
  { name: "Billing", href: "/billing", icon: Banknote },
  { name: "Subscription Plans", href: "/subscription-plans", icon: Package },
  { name: "API Keys", href: "/api-keys", icon: Key },
  { name: "Webhooks", href: "/webhooks", icon: Webhook },
  { name: "Accounting", href: "/accounting", icon: BookOpen },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Custom Reports", href: "/custom-reports", icon: FileBarChart },
  { name: "Data Export", href: "/data-export", icon: Download },
  { name: "Data Import", href: "/data-import", icon: Upload }, // Added Data Import
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Audit Log", href: "/audit-log", icon: ScrollText },
  { name: "System Status", href: "/system-status", icon: Activity },
  { name: "Integrations", href: "/integrations", icon: Puzzle },
  { name: "Maintenance", href: "/maintenance", icon: Wrench },
  { name: "Support", href: "/support", icon: LifeBuoy },
  { name: "Help Center", href: "/help-center", icon: HelpCircle },
  { name: "Knowledge Base", href: "/knowledge-base", icon: BookOpenText },
  { name: "Tutorials", href: "/tutorials", icon: GraduationCap },
  { name: "Resources", href: "/resources", icon: Link },
  { name: "FAQ", href: "/faq", icon: MessageCircleQuestion },
  { name: "Feedback", href: "/feedback", icon: MessageSquarePlus },
  { name: "User Activity", href: "/user-activity", icon: UserCog },
  { name: "Appearance Settings", href: "/appearance-settings", icon: Palette },
  { name: "Personalization", href: "/personalization", icon: Sparkles },
  { name: "Dashboard Settings", href: "/dashboard-settings", icon: LayoutDashboard },
  { name: "Privacy Policy", href: "/privacy-policy", icon: ShieldQuestion },
  { name: "Terms of Service", href: "/terms-of-service", icon: ClipboardList },
  { name: "Licenses", href: "/licenses", icon: Gavel },
  { name: "Changelog", href: "/changelog", icon: GitPullRequestArrow },
  { name: "Roadmap", href: "/roadmap", icon: Map },
  { name: "Contact Us", href: "/contact-us", icon: Mail },
  { name: "About Us", href: "/about-us", icon: Info },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar({ className }: { className?: string }) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Triple A Consultants
          </h2>
          <div className="space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center rounded-lg px-4 py-2 text-sm font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )
                }
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}