import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import data from "@/data/data.json";
import { Data } from "@/data/types";

export default function Home() {
  const appData: Data = data;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Shadcn Dashboard Exploration</h1>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Accounts Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Accounts: {appData.accounts.length}</p>
          <Button className="mt-4">Click me!</Button>
        </CardContent>
      </Card>
    </main>
  );
}
