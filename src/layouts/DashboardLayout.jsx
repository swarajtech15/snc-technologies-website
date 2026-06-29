import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div data-theme="dark">
      <Outlet />
    </div>
  );
}
