import React from "react";
import BarChartComponent from "../UI/Charts/BarChart";

const Overview = () => {
  return (
    <div className="mx-auto px-auto max-w-245 p-6 ">
      <div className="mb-6 p-7 border border-gray-300 rounded-md">
        <div className="mb-5 font-extralight text-[10px] tracking-widest light-text">
          INCOME VS EXPENSES - MONTHLY
        </div>
        <div className="m-auto p-auto w-210 h-70">
          <BarChartComponent />
        </div>
      </div>

      <div className="mb-6 p-7 border border-gray-300 rounded-md">
        <div className="mb-5 font-extralight text-[10px] tracking-widest light-text">
          MONTHLY EXPENSE BREAKDOWN
        </div>
      </div>
    </div>
  );
};

export default Overview;
