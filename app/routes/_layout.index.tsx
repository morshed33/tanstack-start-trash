import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex items-center justify-center h-[calc(100dvh-56px)]">
      <h1>This is Home page</h1>
      <Outlet />
    </div>
  );
}
