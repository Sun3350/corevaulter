export function ActivityLog() {
  const activities = [
    {
      id: 1,
      type: "Deposit",
      amount: 250000,
      date: "2023-06-15",
      vault: "Core Reserve",
    },
    {
      id: 2,
      type: "Withdrawal",
      amount: 150000,
      date: "2023-06-10",
      vault: "Flexible Funds",
    },
    {
      id: 3,
      type: "Transfer",
      amount: 300000,
      date: "2023-06-05",
      from: "Growth Vault",
      to: "Core Reserve",
    },
    {
      id: 4,
      type: "Deposit",
      amount: 500000,
      date: "2023-05-28",
      vault: "Growth Vault",
    },
    {
      id: 5,
      type: "Adjustment",
      amount: 75000,
      date: "2023-05-20",
      description: "Balance correction",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          Recent Transactions
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {activity.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {activity.type}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    activity.type === "Deposit"
                      ? "text-green-600"
                      : "text-[#D71E28]"
                  }`}>
                  {activity.type === "Deposit" ? "+" : "-"}$
                  {activity.amount.toLocaleString()}.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {activity.type === "Transfer"
                    ? `${activity.from} → ${activity.to}`
                    : activity.vault
                    ? activity.vault
                    : activity.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
