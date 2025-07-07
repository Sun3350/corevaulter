import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { date: "Jun 1", total: 5.8, core: 2.3, growth: 2.9, flexible: 0.6 },
  { date: "Jun 8", total: 6.0, core: 2.4, growth: 3.0, flexible: 0.6 },
  { date: "Jun 15", total: 6.1, core: 2.4, growth: 3.1, flexible: 0.6 },
  { date: "Jun 22", total: 6.2, core: 2.5, growth: 3.1, flexible: 0.6 },
  { date: "Jun 29", total: 6.3, core: 2.5, growth: 3.2, flexible: 0.6 },
];

export function AssetInsight() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Asset Performance</h3>
      </div>
      <div className="p-6">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                formatter={(value) => [`$${value}M`, "Value"]}
                labelFormatter={(label) => `Date: ${label}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#D71E28"
                strokeWidth={2}
                name="Total Value"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="core"
                stroke="#1E3A8A"
                name="Core Reserve"
              />
              <Line
                type="monotone"
                dataKey="growth"
                stroke="#10B981"
                name="Growth Vault"
              />
              <Line
                type="monotone"
                dataKey="flexible"
                stroke="#F59E0B"
                name="Flexible Funds"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
