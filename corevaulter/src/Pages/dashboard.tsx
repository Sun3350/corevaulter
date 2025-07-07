import { OverviewPanel } from "../components/dashboard/OverviewPanel";
import { VaultBreakdown } from "../components/dashboard/VaultBreakdown";
import { AssetInsight } from "../components/dashboard/AssetInsight";
import { ActivityLog } from "../components/dashboard/ActivityLog";
import { useAuthStore } from "../stores/auth.store";
import { useEffect } from "react";

export function DashboardPage() {
  const { user, logout, loadUser } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            <span className="text-[#D71E28]">Core</span>Vault
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">{user.name}</span>
            <button
              onClick={logout}
              className="px-4 py-2 bg-[#D71E28] text-white rounded-md hover:bg-red-700">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
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
  );
}
