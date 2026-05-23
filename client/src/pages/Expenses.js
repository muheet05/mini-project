import { useEffect, useState } from "react";
import axios from "axios";

function Expenses() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const [transactions, setTransactions] = useState([]);

  // EDITING STATE

  const [editingId, setEditingId] = useState(null);

  // FETCH EXPENSES

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

  useEffect(() => {
    fetchTransactions();
  }, []);

  // ADD / UPDATE EXPENSE

  const addTransaction = async (e) => {

    e.preventDefault();

    try {

      // UPDATE

      if (editingId) {

        await axios.put(
          `http://localhost:5000/api/expenses/${editingId}`,
          {
            title,
            amount: Number(amount),
            category
          }
        );

        setEditingId(null);

      } else {

        // ADD

        await axios.post(
          "http://localhost:5000/api/expenses",
          {
            title,
            amount: Number(amount),
            category
          }
        );
      }

      // CLEAR FORM

      setTitle("");
      setAmount("");
      setCategory("");

      fetchTransactions();

    } catch (error) {

      console.log(error);

    }
  };

  // DELETE EXPENSE

  const deleteTransaction = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/expenses/${id}`
      );

      fetchTransactions();

    } catch (error) {

      console.log(error);

    }
  };

  // LOAD DATA INTO FORM FOR EDITING

  const editTransaction = (transaction) => {

    setTitle(transaction.title);
    setAmount(transaction.amount);
    setCategory(transaction.category);

    setEditingId(transaction._id);
  };

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-8">
        Expenses
      </h1>

      {/* FORM */}

      <form
        onSubmit={addTransaction}
        className="bg-white p-6 rounded-2xl shadow-md mb-10"
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* TITLE */}

          <input
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* AMOUNT */}

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* CATEGORY */}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          >

            <option value="">
              Select Category
            </option>

            <option value="Food">
              Food
            </option>

            <option value="Shopping">
              Shopping
            </option>

            <option value="Travel">
              Travel
            </option>

            <option value="Bills">
              Bills
            </option>

            <option value="Entertainment">
              Entertainment
            </option>

            <option value="Salary">
              Salary
            </option>

            <option value="Other">
              Other
            </option>

          </select>

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className={`mt-6 text-white px-6 py-3 rounded-lg transition duration-300 ${
            editingId
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >

          {editingId ? "Update Expense" : "Add Expense"}

        </button>

      </form>

      {/* TRANSACTION LIST */}

      <div className="bg-white p-6 rounded-2xl shadow-md">

        <h2 className="text-2xl font-bold mb-6">
          Recent Expenses
        </h2>

        <div className="space-y-4">

          {transactions.map((transaction) => (

            <div
              key={transaction._id}
              className="flex justify-between items-center border-b pb-4"
            >

              {/* LEFT SIDE */}

              <div>

                <h3 className="text-xl font-semibold">
                  {transaction.title}
                </h3>

                <p className="text-gray-500">
                  {transaction.category}
                </p>

              </div>

              {/* RIGHT SIDE */}

              <div className="flex items-center gap-4">

                <h2 className="text-lg font-bold">
                  ₹ {transaction.amount}
                </h2>

                {/* EDIT */}

                <button
                  onClick={() =>
                    editTransaction(transaction)
                  }
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                {/* DELETE */}

                <button
                  onClick={() =>
                    deleteTransaction(transaction._id)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Expenses;