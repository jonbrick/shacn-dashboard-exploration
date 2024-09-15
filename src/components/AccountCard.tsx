import { Button } from "@/components/ui/button";
import { AccountTable } from "./AccountTable";
import { Account } from "@/data/types";
import { DashboardCard } from "./DashboardCard";

interface AccountCardProps {
  accounts: Account[];
}

export function AccountCard({ accounts }: AccountCardProps) {
  return (
    <DashboardCard
      title="Accounts Overview"
      table={
        <>
          <AccountTable accounts={accounts} />
          <Button className="mt-4">View All Accounts</Button>
        </>
      }
    />
  );
}
