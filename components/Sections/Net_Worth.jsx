import React from "react";
import "./Net_Worth.css";
import BarChartComponent from "../UI/Charts/BarChart";

const Net_Worth = () => {
  return (
    <div className="mx-auto px-auto max-w-245 p-6">
      <div className="grid-net">
        <div className="left py-5 px-4.5">
          <p className="mb-1 text-xs tracking-[3px] light-text">Total Assets</p>
          <p className="font-black text-2xl accent">₵1,100</p>
        </div>
        <div className="py-5 px-4.5 bg-gray-200 border-y border-gray-300">
          <p className="mb-1 text-xs tracking-[3px] light-text">
            Total Liabilities
          </p>
          <p className="font-black text-2xl text-red-700">₵2,500</p>
        </div>
        <div className="right py-5 px-4.5">
          <p className="mb-1 text-xs tracking-[3px] light-text">Net Worth</p>
          <p className="font-black text-2xl text-red-700">₵-1,400</p>
        </div>
      </div>

      <div className="w-full mt-6 p-7 mb-6 border border-gray-300 rounded-md">
        <div className="mb-5 font-extralight text-[10px] tracking-widest light-text">
          NET WORTH PROJECTION - 2025
        </div>
        <div className="m-auto p-auto w-210 h-70">
          <BarChartComponent />
        </div>
      </div>

      <div className="flex flex-1 gap-5">
        <div className="border">
    assets
        </div>
        <div className="border">
Liabilities
        </div>
      </div>
    </div>
  );
};

export default Net_Worth;
