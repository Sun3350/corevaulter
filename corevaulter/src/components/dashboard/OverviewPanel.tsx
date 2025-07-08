export function OverviewPanel() {
  const demoData = {
    totalBalance: 6300000,
    minWithdrawal: 100000,
    withdrawalFee: 0.1,
    dailyTransferLimit: 500000,
    recentActivity: [
      { id: 1, type: "Deposit", amount: 250000, date: "2023-06-15" },
      { id: 2, type: "Withdrawal", amount: 150000, date: "2023-06-10" },
      { id: 3, type: "Transfer", amount: 300000, date: "2023-06-05" },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          Snapshot of Your Treasury
        </h3>
      </div>
      <div className="px-6 py-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Total Balance */}
        <div className="p-4 bg-white rounded-lg border-l-4 border-[#D71E28] shadow-sm">
          <h3 className="text-lg font-medium text-gray-500">Total Balance</h3>
          <h2 className="mt-2 text-3xl font-bold">
            ${demoData.totalBalance.toLocaleString()}
          </h2>
          <div className="mt-2 flex items-center text-green-600">
            <span>+2.3% this month</span>
          </div>
        </div>

        {/* Limits */}
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-500">Account Limits</h3>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Min. Withdrawal</span>
              <span className="font-medium">
                ${demoData.minWithdrawal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Withdrawal Fee</span>
              <span className="font-medium">
                {demoData.withdrawalFee * 100}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Daily Limit</span>
              <span className="font-medium">
                ${demoData.dailyTransferLimit.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-500">Recent Activity</h3>
          <div className="mt-4 space-y-3">
            {demoData.recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{activity.type}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
                <p
                  className={`font-medium ${
                    activity.type === "Deposit"
                      ? "text-green-600"
                      : "text-[#D71E28]"
                  }`}>
                  {activity.type === "Deposit" ? "+" : "-"}$
                  {activity.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
