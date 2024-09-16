import { Transaction, Account, ThirdParty } from "@/data/types";
import { DashboardCard } from "./DashboardCard";
import { DashboardTable } from "./DashboardTable";
import { Button } from "@/components/ui/button";

// Define the props interface
interface PendingApprovalsCardProps {
  transactions: Transaction[];
  accounts: Account[];
  thirdParties: ThirdParty[];
}

// Function to look up Account or Third Party by GUID
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

// Function to sort transactions by the latest status timestamp (most recent first)
function sortTransactionsByDate(transactions: Transaction[]): Transaction[] {
  return transactions.sort((a, b) => {
    const aDate = new Date(
      a.statusHistory[a.statusHistory.length - 1].timestamp
    );
    const bDate = new Date(
      b.statusHistory[b.statusHistory.length - 1].timestamp
    );
    return bDate.getTime() - aDate.getTime(); // Sort descending by date
  });
}

// Function to filter for only "Pending Approval" transactions
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
  // Get all pending transactions
  const pendingTransactions = filterPendingTransactions(transactions);

  // Sort pending transactions by date
  const sortedTransactions = sortTransactionsByDate(pendingTransactions);

  // Show only the first 5 sorted pending transactions
  const visibleTransactions = sortedTransactions.slice(0, 5);

  const columns = [
    {
      header: "Date", // Date as the first column
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
        <div className="space-x-2">
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
      data={visibleTransactions} // Only pass the 5 sorted transactions
      columns={columns}
      rowsPerPage={5} // Only show up to 5 rows
      totalRows={pendingTransactions.length} // Pass the total number of pending transactions
    />
  );

  return <DashboardCard title="Pending Approvals" content={content} />;
}
