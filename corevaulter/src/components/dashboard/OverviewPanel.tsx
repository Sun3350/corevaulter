import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleWithdrawClick = () => {
    setIsWithdrawModalOpen(true);
  };

  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const paymentMethods = [
    { id: "zelle", name: "Zelle", icon: "🏦" },
    { id: "paypal", name: "PayPal", icon: "🔵" },
    { id: "bank", name: "Bank Transfer", icon: "💳" },
  ];

  const calculateFee = () => {
    return demoData.minWithdrawal * demoData.withdrawalFee;
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
          <button
            onClick={handleWithdrawClick}
            className="bg-[#D71E28] text-white mt-10 font-semibold py-2 px-5 rounded hover:bg-[#bb1923] transition-all duration-300 cursor-pointer text-sm group">
            WITHDRAW
          </button>
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

      {/* Withdrawal Modal */}
      <AnimatePresence>
        {isWithdrawModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsWithdrawModalOpen(false)}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#D71E28]">
                  Withdraw Funds from CoreVaulter
                </h3>
                <button
                  onClick={() => setIsWithdrawModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl">
                  ✕
                </button>
              </div>

              <div className="mb-6 space-y-4">
                <p className="text-gray-700">
                  To proceed with your withdrawal, please note:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Minimum withdrawal amount: ₦
                    {demoData.minWithdrawal.toLocaleString()}
                  </li>
                  <li>
                    A 10% processing fee is required before withdrawal:
                    <span className="font-bold ml-1">
                      ₦{calculateFee().toLocaleString()}
                    </span>
                  </li>
                  <li>Payment can be made via:</li>
                </ul>

                <div className="grid grid-cols-3 gap-3 mt-2">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                      className={`p-3 border rounded-lg flex flex-col items-center ${
                        selectedPaymentMethod === method.id
                          ? "border-[#D71E28] bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}>
                      <span className="text-2xl mb-1">{method.icon}</span>
                      <span className="text-sm">{method.name}</span>
                    </button>
                  ))}
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                  <p className="text-sm text-blue-700">
                    Once your fee is confirmed, your withdrawal will be
                    processed immediately.
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setIsWithdrawModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button
                  className={`px-4 py-2 bg-[#D71E28] text-white rounded-md ${
                    !selectedPaymentMethod
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#bb1923]"
                  }`}
                  disabled={!selectedPaymentMethod}
                  onClick={() => {
                    // Handle payment submission here
                    console.log(
                      `Processing payment via ${selectedPaymentMethod}`
                    );
                    setIsWithdrawModalOpen(false);
                  }}>
                  Pay Fee & Withdraw
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
