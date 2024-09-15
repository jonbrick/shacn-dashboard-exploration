import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  table: React.ReactNode;
}

export function DashboardCard({ title, table }: DashboardCardProps) {
  return (
    <Card className="max-w-4xl">
      <CardHeader className="pb-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{table}</CardContent>
    </Card>
  );
}
