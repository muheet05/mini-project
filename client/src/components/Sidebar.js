import {
  Home,
  Wallet,
  PieChart,
  Settings
} from "lucide-react";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-10 text-green-400">
        Expense Tracker
      </h1>

      <ul className="space-y-6">

        <Link to="/">
          <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
            <Home size={20} />
            Dashboard
          </li>
        </Link>

        <Link to="/expenses">
          <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
            <Wallet size={20} />
            Expenses
          </li>
        </Link>

        <Link to="/analytics">
          <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
            <PieChart size={20} />
            Analytics
          </li>
        </Link>

        <Link to="/settings">
          <li className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
            <Settings size={20} />
            Settings
          </li>
        </Link>

      </ul>
    </div>
  );
}

export default Sidebar;