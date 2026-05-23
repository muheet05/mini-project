import { useEffect, useState } from "react";
import axios from "axios";

import SummaryCard from "../components/SummaryCard";
import ExpensePieChart from "../charts/ExpensePieChart";
import IncomeExpenseChart from "../charts/IncomeExpenseChart";

function Home() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  // FETCH DATA

  const fetchTransactions = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/expenses"
      );

      console.log(res.data);

      setTransactions(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // CALCULATIONS

  const income = transactions
    .filter((t) => t.category === "Salary")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter((t) => t.category !== "Salary")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expenses;

  return (

    <div>

      <h1 className="text-3xl font-bold mb-8">
        Welcome Back 👋
      </h1>

      {/* SUMMARY CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <SummaryCard
          title="Total Balance"
          amount={balance}
          color="text-green-500"
        />

        <SummaryCard
          title="Income"
          amount={income}
          color="text-blue-500"
        />

        <SummaryCard
          title="Expenses"
          amount={expenses}
          color="text-red-500"
        />

      </div>

      {/* PIE CHART */}

      <div className="mt-10">
        <ExpensePieChart transactions={transactions} />
      </div>

      {/* BAR CHART */}

      <div className="mt-10">
        <IncomeExpenseChart transactions={transactions} />
      </div>

    </div>
  );
}

export default Home;