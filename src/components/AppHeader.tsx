import { ModeToggle } from "./ModeToggle";

export function AppHeader() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-lg font-semibold">Shadcn Dashboard Exploration</h1>
      <ModeToggle />
    </header>
  );
}
