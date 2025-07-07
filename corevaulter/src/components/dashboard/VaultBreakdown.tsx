import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const vaultData = [
  { name: "Core Reserve", value: 2500000, color: "#1E3A8A" },
  { name: "Growth Vault", value: 3000000, color: "#10B981" },
  { name: "Flexible Funds", value: 800000, color: "#F59E0B" },
];

export function VaultBreakdown() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Vault Structure</h3>
      </div>
      <div className="p-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={vaultData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }>
                {vaultData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [
                  `$${(Number(value) / 1000000).toFixed(2)}M`,
                  "Value",
                ]}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 space-y-4">
          {vaultData.map((vault) => (
            <div key={vault.name} className="flex justify-between items-center">
              <div className="flex items-center">
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: vault.color }}></div>
                <span>{vault.name}</span>
              </div>
              <span className="font-medium">
                ${(vault.value / 1000000).toFixed(2)}M
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
