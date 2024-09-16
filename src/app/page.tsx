import data from "@/data/data.json";
import { Data } from "@/data/types";
import { AccountCard } from "@/components/AccountCard";
import { TransactionCard } from "@/components/TransactionsCard";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function Home() {
  const appData: Data = data;

  return (
    <DashboardLayout>
      <AccountCard accounts={appData.accounts} />
      <TransactionCard transactions={appData.transactions} />
    </DashboardLayout>
  );
}
