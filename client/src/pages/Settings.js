function Settings({ darkMode, setDarkMode }) {

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div
        className={`p-6 rounded-2xl shadow-md ${
          darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }`}
      >

        <h2 className="text-2xl font-semibold mb-6">
          Application Settings
        </h2>

        <div className="space-y-6">

          {/* DARK MODE */}

          <div className="flex justify-between items-center">

            <h3 className="text-lg font-medium">
              Dark Mode
            </h3>

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`px-5 py-2 rounded-lg text-white transition duration-300 ${
                darkMode
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
            >

              {darkMode ? "ON" : "OFF"}

            </button>

          </div>

          {/* CURRENCY */}

          <div>

            <label className="block mb-2 font-medium">
              Currency
            </label>

            <select
              className={`border p-3 rounded-lg w-full ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black"
              }`}
            >

              <option>INR (₹)</option>
              <option>USD ($)</option>
              <option>GBP (£)</option>

            </select>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;