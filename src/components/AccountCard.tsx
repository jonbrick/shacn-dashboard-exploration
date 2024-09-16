import { Account } from "@/data/types";
import { DashboardCard } from "./DashboardCard";
import { DashboardTable } from "./DashboardTable";

interface AccountCardProps {
  accounts: Account[];
}

export function AccountCard({ accounts }: AccountCardProps) {
  const columns = [
    { header: "Account Name", accessorKey: "accountName" },
    { header: "Account Type", accessorKey: "accountType" },
    {
      header: "Current Balance",
      accessorKey: "currentDayBalance",
      cell: (account: Account) =>
        `$${account.currentDayBalance.toLocaleString()}`,
    },
    {
      header: "Available Balance",
      accessorKey: "currentDayAvailableBalance",
      cell: (account: Account) =>
        `$${account.currentDayAvailableBalance.toLocaleString()}`,
    },
  ];

  const content = (
    <DashboardTable
      data={accounts}
      columns={columns}
      rowsPerPage={10}
      totalRows={accounts.length}
    />
  );

  return <DashboardCard title="Accounts Overview" content={content} />;
}
