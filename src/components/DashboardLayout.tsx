import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="flex justify-end"></div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
