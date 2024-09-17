import data from "@/data/data.json";
import { Data } from "@/data/types";
import { AccountsCard } from "@/components/cards/AccountsCard";
import { TransactionsCard } from "@/components/cards/TransactionsCard";
import { UsersCard } from "@/components/cards/UsersCard";
import { PendingApprovalsCard } from "@/components/cards/PendingApprovalsCard";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

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
