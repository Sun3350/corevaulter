import { useState } from "react";
import { OverviewPanel } from "../components/dashboard/OverviewPanel";
import { VaultBreakdown } from "../components/dashboard/VaultBreakdown";
import { AssetInsight } from "../components/dashboard/AssetInsight";
import { ActivityLog } from "../components/dashboard/ActivityLog";
import { useAuthStore } from "../stores/auth.store";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiSettings,
  FiUsers,
  FiFileText,
  FiLogOut,
  FiArrowLeft,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export function DashboardPage() {
  const { user, logout, loadUser } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    loadUser();
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [loadUser]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-md transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}>
        <div className="p-4 flex items-center justify-between border-b">
          {sidebarOpen ? (
            <Link to="/">
              {" "}
              <img src="/Logo2.png" alt="Logo" className="w-32" />
            </Link>
          ) : (
            <Link to="/">
              {" "}
              <img src="/icon.PNG" alt="Logo" className="w-5" />
            </Link>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-lg hover:bg-gray-100 text-2xl">
            {sidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>

        <nav className="mt-6">
          <NavItem
            icon={<FiHome />}
            text="Dashboard"
            open={sidebarOpen}
            active
          />
          <NavItem icon={<FiPieChart />} text="Analytics" open={sidebarOpen} />
          <NavItem
            icon={<FiDollarSign />}
            text="Transactions"
            open={sidebarOpen}
          />
          <NavItem icon={<FiUsers />} text="Clients" open={sidebarOpen} />
          <NavItem icon={<FiFileText />} text="Reports" open={sidebarOpen} />
          <NavItem icon={<FiSettings />} text="Settings" open={sidebarOpen} />

          <div className="absolute bottom-0 w-fit p-4">
            <button
              onClick={logout}
              className="flex items-center w-full p-3 text-red-600 rounded-lg hover:bg-red-50">
              <FiLogOut className="text-lg" />
              {sidebarOpen && <span className="ml-3">Logout</span>}
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Header */}
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-medium">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                {sidebarOpen && (
                  <span className="ml-2 text-gray-700">{user.name}</span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3">
              <OverviewPanel />
            </div>

            <div className="md:col-span-1">
              <VaultBreakdown />
            </div>

            <div className="md:col-span-1 lg:col-span-2">
              <AssetInsight />
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <ActivityLog />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Reusable NavItem component
function NavItem({
  icon,
  text,
  open,
  active = false,
}: {
  icon: React.ReactNode;
  text: string;
  open: boolean;
  active?: boolean;
}) {
  return (
    <NavLink
      to="#"
      className={`flex items-center p-3 mx-3 my-1 rounded-lg transition-colors ${
        active ? "bg-indigo-50 text-red-600" : "hover:bg-gray-100"
      }`}>
      <span className="text-lg">{icon}</span>
      {open && <span className="ml-3">{text}</span>}
    </NavLink>
  );
}
