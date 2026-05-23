const express = require("express");

const router = express.Router();

const {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense
} = require("../controllers/expenseController");

// Add Expense
router.post("/", addExpense);

// Get Expenses
router.get("/", getExpenses);

// Update Expense
router.put("/:id", updateExpense);

// Delete Expense
router.delete("/:id", deleteExpense);

module.exports = router;