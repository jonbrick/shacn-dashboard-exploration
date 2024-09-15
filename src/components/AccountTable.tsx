import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Account } from "@/data/types";

interface AccountTableProps {
  accounts: Account[];
}

export function AccountTable({ accounts }: AccountTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Account Name</TableHead>
          <TableHead>Account Type</TableHead>
          <TableHead>Current Balance</TableHead>
          <TableHead>Available Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {accounts.map((account) => (
          <TableRow key={account.accountID}>
            <TableCell>{account.accountName}</TableCell>
            <TableCell>{account.accountType}</TableCell>
            <TableCell>${account.currentDayBalance.toLocaleString()}</TableCell>
            <TableCell>
              ${account.currentDayAvailableBalance.toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
