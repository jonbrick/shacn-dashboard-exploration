import { ModeToggle } from "./ModeToggle";

export function AppHeader() {
  return (
    <header className="flex items-center justify-between py-2 px-4 sm:py-4 sm:px-6 border-b">
      <h1 className="text-lg font-semibold">Shadcn Dashboard Exploration</h1>
      <ModeToggle />
    </header>
  );
}
