import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <BrowserRouter>

      <div
        className={`flex min-h-screen ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-black"
        }`}
      >

        {/* SIDEBAR */}

        <Sidebar />

        {/* MAIN CONTENT */}

        <div className="flex-1">

          <Navbar />

          <div className="p-6">

            <Routes>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
  path="/expenses"
  element={<Expenses darkMode={darkMode} />}
/>

              <Route
                path="/analytics"
                element={<Analytics />}
              />

              <Route
                path="/settings"
                element={
                  <Settings
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                  />
                }
              />

            </Routes>

          </div>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;