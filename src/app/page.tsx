import data from "@/data/data.json";
import { Data } from "@/data/types";
import { AccountCard } from "@/components/AccountCard";
import { TransactionCard } from "@/components/TransactionsCard";

export default function Home() {
  const appData: Data = data;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Shadcn Dashboard Exploration</h1>
      <AccountCard accounts={appData.accounts} />
      <TransactionCard transactions={appData.transactions} />
    </main>
  );
}
