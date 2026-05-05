import React from "react";
import "./Savings.css";
import AreaChartComponent from "../UI/AreaChart";

const Savings = () => {
  return (
    <div className="mx-auto px-auto max-w-245 p-6">
      <div className="border border-gray-300 rounded-md p-7 mb-6">
        <div className="m-auto p-auto w-210 h-70">
          <AreaChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Savings;
