import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_chatlayout/chat")({
  errorComponent: () => <div>Something went wrong inside chat</div>,
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-[calc(100dvh-56px)]">
      <div className="w-64 border-r border-gray-300 flex items-center justify-center">
        this is sidebar
      </div>
      <div className="flex-1 flex items-center justify-center">
        this is default content
      </div>
    </div>
  );
}
