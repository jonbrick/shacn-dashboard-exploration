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
    <Card className="max-w-4xl">
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
