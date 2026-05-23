📊 Expense Tracker Application
📌 Overview

The Expense Tracker Application is a full-stack web application designed to help users track their income and expenses efficiently. It allows users to add, view, and manage their financial transactions and provides a clear overview of their total balance.

This project helps users understand their spending habits and improve financial management.

🎯 Objective

The main objective of this project is to build a simple and efficient system for tracking personal expenses and income using a full-stack web application.

🚀 Features
Add income and expense transactions
Categorize transactions (Food, Travel, Bills, Shopping, etc.)
View total balance, total income, and total expenses
Display transaction history
Delete or update transactions 
🛠️ Tech Stack
Frontend:
HTML
CSS
JavaScript
React 
Backend:
Node.js
Express.js
Database:
MongoDB
Tools:
Postman (for API testing)
⚙️ How It Works
User enters income or expense details through the UI
Frontend sends data to backend using REST API (POST request)
Backend processes the request and stores data in MongoDB
Backend retrieves updated data when requested (GET request)
Frontend updates UI with latest balance and transaction list
📂 Project Structure
expense-tracker/
│
├── client/                 ← React Frontend
│
│   ├── src/
│   │
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Sidebar.js
│   │   │   └── SummaryCard.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Expenses.js
│   │   │   ├── Analytics.js
│   │   │   └── Settings.js
│   │   │
│   │   ├── charts/
│   │   │   ├── ExpensePieChart.js
│   │   │   └── IncomeExpenseChart.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── tailwind.config.js
│
│
├── server/                 ← Node + Express Backend
│
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── expenseController.js
│   │
│   ├── models/
│   │   └── Expense.js
│   │
│   ├── routes/
│   │   └── expenseRoutes.js
│   │
│   ├── .env
│   ├── index.js
│   └── package.json

🔧 Installation & Setup
2. Navigate to project folder
cd expense-tracker

3. Install dependencies
npm install

4. Setup environment variables
Create a .env file in backend folder:
MONGO_URI=your_mongodb_connection_string
PORT=5000

5. Run the application
Backend:
node server.js

Frontend :
npm start

📚 Learning Outcomes
Full-stack web development workflow
REST API development
CRUD operations with database
Frontend and backend integration
Working with MongoDB database systems
🚀 Future Improvements
User authentication (login/signup)
Monthly budget planner
Graphical data visualization (charts)
Mobile responsive design improvements

GitHub: https://github.com/muheet05/mini-project.git
