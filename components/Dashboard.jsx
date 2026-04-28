import React from "react";
import ".//Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container-one">
      <div className="grid-one">
        <div className="p-5 grid-item left">
          <h3 className="font-extralight text-[8px] light-text">
            MONTHLY INCOME
          </h3>
          <h1 className="font-extrabold text-2xl accent">₵1,500</h1>
          <h4 className="font-extralight text-[11px] light-text">
            ₵18,000 / yr
          </h4>
        </div>
        <div className="p-5 grid-item bg-[hsl(0,0%,96%)] mid-1">
          <h3 className="font-extralight text-[8px] light-text">EXPENSES</h3>
          <h1 className="font-extrabold text-2xl bold-text">₵1,300</h1>
          <h4 className="font-extralight text-[11px] light-text">
            87% of income
          </h4>
        </div>
        <div className="p-5 grid-item mid-2">
          <h3 className="font-extralight text-[8px] light-text">
            SAVINGS RATE
          </h3>
          <h1 className="font-extrabold text-2xl accent">13%</h1>
          <h4 className="font-extralight text-[11px] light-text">₵200 / mo</h4>
        </div>
        <div className="p-5 grid-item right bg-[hsl(0,0%,96%)]">
          <h3 className="font-extralight text-[8px] light-text">
            YEAR-END SAVINGS
          </h3>
          <h1 className="font-extrabold text-2xl bold-text">₵2,400</h1>
          <h4 className="font-extralight text-[11px] light-text">
            projected total
          </h4>
        </div>
      </div>
      <div
        className="flex justify-start px-5 py-2 gap-10 text-[10px] tracking-widest 
      font-extrabold light-text border-b-2 border-b-[#e6dddd]"
      >
        <h2 className="px-6 py-1">OVERVIEW</h2>
        <h2 className="accent p-1">BUDGET</h2>
        <h2 className="px-6 py-1">SAVINGS</h2>
        <h2 className="px-6 py-1">NET WORTH</h2>
        <h2 className="px-6 py-1">BILLS</h2>
        <h2 className="px-6 py-1">GOAL</h2>
      </div>
    </div>
  );
};

export default Dashboard;
