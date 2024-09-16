import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Column<T> {
  header: string;
  accessorKey: string;
  cell?: (item: T) => React.ReactNode;
}

interface DashboardTableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowsPerPage?: number;
  totalRows?: number;
}

export function DashboardTable<T>({
  data,
  columns,
  rowsPerPage,
  totalRows,
}: DashboardTableProps<T>) {
  const displayedRows = rowsPerPage
    ? Math.min(rowsPerPage, data.length)
    : data.length;
  const totalRowCount = totalRows || data.length;

  return (
    <div className="mb-4">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.header}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.slice(0, displayedRows).map((item, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.header}>
                  {column.cell
                    ? column.cell(item)
                    : (item[column.accessorKey as keyof T] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="text-sm text-gray-500 mt-4">
        Showing {displayedRows} of {totalRowCount} rows
      </div>
    </div>
  );
}
