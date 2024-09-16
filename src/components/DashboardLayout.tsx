import React from "react";
import { ModeToggle } from "./ModeToggle";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="flex justify-end mb-4">
        <ModeToggle />
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
