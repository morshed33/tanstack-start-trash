import { Outlet, createFileRoute } from "@tanstack/react-router";
import Navbar from "~/components/shared/Navbar";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="">
      <Navbar isLoggedIn={true} />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
