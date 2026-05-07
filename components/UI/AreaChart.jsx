"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const Savings = [
  {
    name: "Jan",
    savings: 200,
  },
  {
    name: "Feb",
    savings: 400,
  },
  {
    name: "Mar",
    savings: 600,
  },
  {
    name: "Apr",
    savings: 800,
  },
  {
    name: "May",
    savings: 1000,
  },
  {
    name: "June",
    savings: 1200,
  },
  {
    name: "July",
    savings: 1400,
  },
  {
    name: "Aug",
    savings: 1600,
  },
  {
    name: "Sep",
    savings: 1800,
  },
  {
    name: "Oct",
    savings: 2000,
  },
  {
    name: "Nov",
    savings: 2200,
  },
  {
    name: "Dec",
    savings: 2400,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={840} height={280} data={Savings} margin={{ right: 30 }}>
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
          dataKey="name"
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

        <Line
          type="monotone"
          dataKey="savings"
          stroke="#00c7c7"
          strokeWidth={3}
          fill="#00c7c7"
        />
      </LineChart>
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
        <p className="font-extrabold text-[14px] bold-text">{label}</p>
        <p>Total Savings: ₵{payload[0].value}</p>
      </div>
    );
  }
};

export default AreaChartComponent;
