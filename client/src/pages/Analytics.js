import { useEffect, useState } from "react";
import axios from "axios";

function Analytics() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/expenses"
      );

      setTransactions(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // TOTAL EXPENSES

  const totalExpenses = transactions
    .filter((t) => t.category !== "Salary")
    .reduce((acc, curr) => acc + curr.amount, 0);

  // TOTAL INCOME

  const totalIncome = transactions
    .filter((t) => t.category === "Salary")
    .reduce((acc, curr) => acc + curr.amount, 0);

  // HIGHEST EXPENSE

  const highestExpense = Math.max(
    ...transactions
      .filter((t) => t.category !== "Salary")
      .map((t) => t.amount),
    0
  );

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-8">
        Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Total Income
          </h2>

          <p className="text-3xl font-bold text-green-500">
            ₹ {totalIncome}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Total Expenses
          </h2>

          <p className="text-3xl font-bold text-red-500">
            ₹ {totalExpenses}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Highest Expense
          </h2>

          <p className="text-3xl font-bold text-blue-500">
            ₹ {highestExpense}
          </p>
        </div>

      </div>

      {/* RECENT TRANSACTIONS */}

      <div className="bg-white p-6 rounded-2xl shadow-md mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">

          {transactions.slice(0, 5).map((transaction) => (

            <div
              key={transaction._id}
              className="flex justify-between border-b pb-3"
            >

              <div>

                <h3 className="font-semibold">
                  {transaction.title}
                </h3>

                <p className="text-gray-500">
                  {transaction.category}
                </p>

              </div>

              <p className="font-bold">
                ₹ {transaction.amount}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Analytics;