import React from "react";
import ".//Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="p-4 grid-item left">
          <h3 className="font-extralight text-xs light-text">MONTHLY INCOME</h3>
          <h1 className="font-bold text-2xl bold-text">¢1,500</h1>
          <h4 className="font-extralight text-[11px] light-text">
            ¢18,000 / yr
          </h4>
        </div>
        <div className="p-4 grid-item">
          <h3 className="font-extralight text-xs light-text">EXPENSES</h3>
          <h1 className="font-bold text-2xl bold-text">¢1,300</h1>
          <h4 className="font-extralight text-[11px] light-text">
            87% of income
          </h4>
        </div>
        <div className="p-4 grid-item">
          <h3 className="font-extralight text-xs light-text">SAVINGS RATE</h3>
          <h1 className="font-bold text-2xl bold-text">13%</h1>
          <h4 className="font-extralight text-[11px] light-text">¢200 / mo</h4>
        </div>
        <div className="p-4 grid-item right">
          <h3 className="font-extralight text-xs light-text">
            YEAR-END SAVINGS
          </h3>
          <h1 className="font-bold text-2xl bold-text">¢2,400</h1>
          <h4 className="font-extralight text-[11px] light-text">
            projected total
          </h4>
        </div>
      </div>
      <div className="flex justify-start px-10 gap-10">
        <h2>BUDGET</h2>
        <h2>OVERVIEW</h2>
        <h2>SAVINGS</h2>
        <h2>NET WORTH</h2>
        <h2>BILLS</h2>
        <h2>GOAL</h2>
      </div>
    </div>
  );
};

export default Dashboard;
