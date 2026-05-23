import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function ExpensePieChart({ transactions }) {

  // FILTER ONLY EXPENSES

  const expenses = transactions.filter(
    (t) => t.category !== "Salary"
  );

  // GROUP SAME CATEGORIES

  const groupedData = expenses.reduce((acc, curr) => {

    const existingCategory = acc.find(
      (item) => item.name === curr.category
    );

    if (existingCategory) {

      existingCategory.value += curr.amount;

    } else {

      acc.push({
        name: curr.category,
        value: curr.amount,
      });
    }

    return acc;

  }, []);

  // COLORS

  const COLORS = [
    "#3B82F6", // blue
    "#10B981", // green
    "#F59E0B", // yellow
    "#EF4444", // red
    "#8B5CF6", // purple
    "#EC4899", // pink
    "#14B8A6", // teal
  ];

  return (

    <div className="bg-white p-6 rounded-2xl shadow-md">

      <h2 className="text-2xl font-bold mb-6">
        Expense Breakdown
      </h2>

      <ResponsiveContainer width="100%" height={400}>

        <PieChart>

          <Pie
            data={groupedData}
            dataKey="value"
            nameKey="name"
            outerRadius={140}
            label
          >

            {groupedData.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ExpensePieChart;