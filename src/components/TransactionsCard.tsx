import { Transaction } from "@/data/types";
import { DashboardCard } from "./DashboardCard";
import { DashboardTable } from "./DashboardTable";

interface TransactionCardProps {
  transactions: Transaction[];
}

export function TransactionsCard({ transactions }: TransactionCardProps) {
  const columns = [
    { header: "Transaction ID", accessorKey: "transactionID" },
    { header: "Ref ID", accessorKey: "refID" },
    {
      header: "Amount",
      accessorKey: "amount",
      cell: (transaction: Transaction) =>
        `$${transaction.amount.toLocaleString()}`,
    },
    {
      header: "Value Date",
      accessorKey: "valueDate",
      cell: (transaction: Transaction) =>
        new Date(transaction.valueDate).toLocaleDateString(),
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
      data={transactions.slice(0, 10)} // Only pass the first 10 transactions
      columns={columns}
      rowsPerPage={10}
      totalRows={transactions.length} // Pass the total number of transactions
    />
  );

  return <DashboardCard title="Recent Transactions" content={content} />;
}
