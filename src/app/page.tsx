import data from "@/data/data.json";
import { Data } from "@/data/types";
import { AccountsCard } from "@/components/AccountsCard";
import { TransactionsCard } from "@/components/TransactionsCard";
import { UsersCard } from "@/components/UsersCard";
import { PendingApprovalsCard } from "@/components/PendingApprovalsCard";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function Home() {
  const appData: Data = data;

  return (
    <DashboardLayout>
      <AccountsCard accounts={appData.accounts} />
      <TransactionsCard transactions={appData.transactions} />
      <UsersCard users={appData.users} />
      <PendingApprovalsCard
        transactions={appData.transactions}
        accounts={appData.accounts || []}
        thirdParties={appData.thirdParties || []}
      />
    </DashboardLayout>
  );
}
