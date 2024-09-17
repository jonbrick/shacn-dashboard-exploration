"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export function DashboardCard({ title, content, footer }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">{content}</CardContent>
      {footer && <CardFooter className="pt-2">{footer}</CardFooter>}
    </Card>
  );
}
