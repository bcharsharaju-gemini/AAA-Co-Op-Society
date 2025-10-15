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
  BriefcaseBusiness, // Added for Clients
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Members", href: "/members", icon: Users },
  { name: "Clients", href: "/clients", icon: BriefcaseBusiness }, // Added Clients
  { name: "Shares", href: "/shares", icon: PieChart },
  { name: "Savings", href: "/savings", icon: Landmark },
  { name: "Loans", href: "/loans", icon: HandCoins },
  { name: "Deposits", href: "/deposits", icon: Briefcase },
  { name: "Withdrawals", href: "/withdrawals", icon: Wallet },
  { name: "Transactions", href: "/transactions", icon: CreditCard },
  { name: "Expenses", href: "/expenses", icon: ReceiptText },
  { name: "Budgets", href: "/budgets", icon: PiggyBank },
  { name: "Invoices", href: "/invoices", icon: Receipt },
  { name: "Accounting", href: "/accounting", icon: BookOpen },
  { name: "Reports", href: "/reports", icon: FileText },
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