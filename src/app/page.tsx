import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Shadcn Dashboard Exploration</h1>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a simple card component.</p>
          <Button className="mt-4">Click me!</Button>
        </CardContent>
      </Card>
    </main>
  );
}
