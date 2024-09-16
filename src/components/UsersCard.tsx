import { User } from "@/data/types";
import { DashboardCard } from "./DashboardCard";
import { DashboardTable } from "./DashboardTable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UsersCardProps {
  users: User[];
}

export function UsersCard({ users }: UsersCardProps) {
  const columns = [
    {
      header: "Avatar",
      accessorKey: "avatarURL",
      cell: (user: User) => (
        <Avatar>
          <AvatarImage src={user.avatarURL} alt={`${user.name}'s avatar`} />
          <AvatarFallback>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ),
    },
    { header: "Name", accessorKey: "name" },
    { header: "Role", accessorKey: "role" },
    { header: "Email", accessorKey: "email" },
  ];

  const content = (
    <DashboardTable
      data={users}
      columns={columns}
      rowsPerPage={5}
      totalRows={users.length}
    />
  );

  return <DashboardCard title="Team Members" content={content} />;
}
