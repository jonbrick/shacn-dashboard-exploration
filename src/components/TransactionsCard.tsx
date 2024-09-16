import { Transaction } from "@/data/types";
import { DashboardCard } from "./DashboardCard";
import { DashboardTable } from "./DashboardTable";

interface TransactionCardProps {
  transactions: Transaction[];
}

export function TransactionsCard({ transactions }: TransactionCardProps) {
  const columns = [
    {
      header: "Value Date",
      accessorKey: "valueDate",
      cell: (transaction: Transaction) =>
        new Date(transaction.valueDate).toLocaleDateString(),
    },
    { header: "Ref ID", accessorKey: "refID" },
    {
      header: "Amount",
      accessorKey: "amount",
      cell: (transaction: Transaction) =>
        `$${transaction.amount.toLocaleString()}`,
    },
    { header: "Type", accessorKey: "type" },
    {
      header: "Status",
      accessorKey: "statusHistory",
      cell: (transaction: Transaction) =>
        transaction.statusHistory[transaction.statusHistory.length - 1].status,
    },
  ];

  const content = (
    <DashboardTable
      data={transactions}
      columns={columns}
      rowsPerPage={5}
      totalRows={transactions.length}
    />
  );

  return <DashboardCard title="Recent Transactions" content={content} />;
}
