import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_chatlayout/chat/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello from chat index!</div>;
}
