import { Transaction, Account, ThirdParty } from "@/data/types";
import { Button } from "@/components/ui/button";
import { DashboardCard } from "../dashboard/DashboardCard";
import { DashboardTable } from "../dashboard/DashboardTable";

interface PendingApprovalsCardProps {
  transactions: Transaction[];
  accounts: Account[];
  thirdParties: ThirdParty[];
}

function getAccountOrThirdPartyName(
  guid: string,
  accounts: Account[],
  thirdParties: ThirdParty[]
): string {
  const account = accounts?.find((acc) => acc.accountID === guid);
  if (account) return account.accountName;

  const thirdParty = thirdParties?.find((tp) => tp.thirdPartyID === guid);
  return thirdParty ? thirdParty.thirdPartyName : "Unknown";
}

function sortTransactionsByDate(transactions: Transaction[]): Transaction[] {
  return transactions.sort((a, b) => {
    const aDate = new Date(
      a.statusHistory[a.statusHistory.length - 1].timestamp
    );
    const bDate = new Date(
      b.statusHistory[b.statusHistory.length - 1].timestamp
    );
    return bDate.getTime() - aDate.getTime();
  });
}

function filterPendingTransactions(transactions: Transaction[]): Transaction[] {
  return transactions.filter(
    (transaction) =>
      transaction.statusHistory[transaction.statusHistory.length - 1].status ===
      "Pending Approval"
  );
}

export function PendingApprovalsCard({
  transactions,
  accounts = [],
  thirdParties = [],
}: PendingApprovalsCardProps) {
  const pendingTransactions = filterPendingTransactions(transactions);
  const sortedTransactions = sortTransactionsByDate(pendingTransactions);
  const visibleTransactions = sortedTransactions.slice(0, 5);

  const columns = [
    {
      header: "Date",
      cell: (transaction: Transaction) => {
        const latestStatus =
          transaction.statusHistory[transaction.statusHistory.length - 1];
        return new Date(latestStatus.timestamp).toLocaleDateString();
      },
    },
    { header: "Ref ID", accessorKey: "refID" },
    {
      header: "Amount",
      accessorKey: "amount",
      cell: (transaction: Transaction) =>
        `$${transaction.amount.toLocaleString()}`,
    },
    {
      header: "Source",
      cell: (transaction: Transaction) =>
        getAccountOrThirdPartyName(
          transaction.fundingAccount,
          accounts,
          thirdParties
        ),
    },
    {
      header: "Destination",
      cell: (transaction: Transaction) =>
        getAccountOrThirdPartyName(
          transaction.recipientAccount,
          accounts,
          thirdParties
        ),
    },
    {
      header: "Actions",
      cell: () => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Approve
          </Button>
          <Button variant="outline" size="sm">
            Reject
          </Button>
        </div>
      ),
    },
  ];

  const content = (
    <DashboardTable
      data={visibleTransactions}
      columns={columns}
      rowsPerPage={5}
      totalRows={pendingTransactions.length}
    />
  );

  return <DashboardCard title="Pending Approvals" content={content} />;
}
