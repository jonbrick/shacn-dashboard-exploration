import data from "@/data/data.json";
import { Data } from "@/data/types";
import { AccountsCard } from "@/components/AccountsCard";
import { TransactionsCard } from "@/components/TransactionsCard";
import { DashboardLayout } from "@/components/DashboardLayout";
import { UsersCard } from "@/components/UsersCard";

export default function Home() {
  const appData: Data = data;

  return (
    <DashboardLayout>
      <AccountsCard accounts={appData.accounts} />
      <TransactionsCard transactions={appData.transactions} />
      <UsersCard users={appData.users} />
    </DashboardLayout>
  );
}
