import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center h-[calc(100dvh-56px)]">
      <h1>This is about page</h1>
    </div>
  );
}
