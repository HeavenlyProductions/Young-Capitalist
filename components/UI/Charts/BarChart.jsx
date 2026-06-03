"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = () => {
  const monthly = [
    {
      month: "Jan",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "Feb",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "Mar",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "Apr",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "May",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "June",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "July",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "August",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "September",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "October",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "November",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
    {
      month: "December",
      income: 1500,
      expenses: 1200,
      savings: 200,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={840} height={280} data={monthly} margin={{ right: 30 }}>
        <YAxis
          tickFormatter={(value) => `₵${value}`}
          tick={{
            fill: "#6b6b6b",
            fontSize: 10,
          }}
          axisLine={{ stroke: "#d1d5dc" }}
          strokeDasharray="5 5"
        />

        <XAxis
          dataKey="month"
          stroke="#d1d5dc"
          tick={{
            fill: "#6b6b6b",
            fontSize: 10,
          }}
          axisLine={{ stroke: "#d1d5dc" }}
          strokeDasharray="5 5"
        />

        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomToolTip />} />

        <Bar
          dataKey="income"
          type="monotone"
          stroke="#00c7c7"
          strokeWidth={1}
          fill="#00c7c7"
          radius={[2,2,0,0]}
        />
        <Bar
          dataKey="expenses"
          type="monotone"
          stroke="#000"
          strokeWidth={1}
          fill="#000"
          radius={[2,2,0,0]}
        />
        <Bar
          dataKey="savings"
          type="monotone"
          stroke="#d1d5dc"
          strokeWidth={1}
          fill="#d1d5dc"
          radius={[2,2,0,0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="p-4 bg-[hsl(0,0%,100%)] border border-gray-300 
      rounded-sm shadow-md"
      >
        <p className="font-extrabold text-[12px] bold-text tracking-wide">
          {label}
        </p>
        <p className="text-[12px] accent">Income: ₵{payload[0].value}</p>
        <p className="text-[12px] text-black">Expenses: ₵{payload[1].value}</p>
        <p className="text-[12px] text-[#9fa0a1]">Savings: ₵{payload[2].value}</p>
      </div>
    );
  }
};

export default BarChartComponent;
