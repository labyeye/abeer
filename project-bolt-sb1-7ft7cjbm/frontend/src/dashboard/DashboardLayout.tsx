import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { DashboardSidebar } from "./components/DashboardSidebar";
import { DashboardHeader } from "./components/DashboardHeader";

export const DashboardLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardSidebar />
      <div className="flex-1 ml-64">
        <DashboardHeader />
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};