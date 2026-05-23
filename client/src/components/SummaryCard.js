function SummaryCard({ title, amount, color }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">

      <h2 className="text-gray-500 text-lg">
        {title}
      </h2>

      <h1 className={`text-3xl font-bold mt-4 ${color}`}>
        ₹ {amount}
      </h1>

    </div>
  );
}

export default SummaryCard;