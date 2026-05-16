import React from "react";
import LineChartComponent from "../UI/LineChart";
import S_Input from "../UI/Secondary_Input";
import "./Goal.css";

const Goal = () => {
  return (
    <div className="mx-auto px-auto max-w-245 p-6">
      <div className="border border-gray-300 rounded-md p-7 mb-6">
        <div className="mb-2.5 text-[10px] font-extralight tracking-[3px] light-text">
          🎯 SET YOUR SAVINGS GOAL
        </div>
        <div className="grid-five">
          <div>
            <label
              className="text-[10px] font-extralight tracking-widest light-text"
              htmlFor=""
            >
              GOAL NAME
            </label>
            <S_Input />
          </div>
          <div>
            <label
              className="text-[10px] font-extralight tracking-widest accent"
              htmlFor=""
            >
              TARGET AMOUNT (₵)
            </label>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-extralight tracking-widest light-text">
                ₵
              </span>
              <input
                type="number"
                className="w-3xs mt-1 px-3.5 py-2 border-2 border-cyan-500 rounded-md outline-0"
                min={0}
                defaultValue={0}
              />
            </div>
          </div>
          <div>
            <span className="text-[10px] font-extralight tracking-widest light-text">
              TIME PERIOD
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                className="w-13.5 font-extralight text-[11px] 
              border border-gray-300 rounded-md light-text"
              >
                6 mo
              </button>
              <button
                className="w-13.5 px-3 py-1.5 font-extralight text-[11px] 
              border border-gray-300 rounded-md light-text"
              >
                1 yr
              </button>
              <button
                className="w-14.75 px-3 py-1.5 font-extralight text-[11px] 
              border border-gray-300 rounded-md light-text"
              >
                18 mo
              </button>
              <button
                className="w-13.5 px-3 py-1.5 font-extralight text-[11px] 
              border border-gray-300 rounded-md light-text"
              >
                2 yr
              </button>
              <button
                className="w-13.5 px-3 py-1.5 font-extralight text-[11px] 
              border border-gray-300 rounded-md light-text"
              >
                3 yr
              </button>
              <button
                className="w-13.5 px-3 py-1.5 font-extralight text-[11px] 
              border border-gray-300 rounded-md light-text"
              >
                5 yr
              </button>
            </div>
          </div>
        </div>
        <div className="grid-six">
          QUICK PRESETS
          <div className="w-208.5 mt-2 flex flex-wrap gap-2">
            <button className="px-3.5 py-1.5 text-xs font-normal border border-gray-300 rounded-md light-text">
              Emergency Fund · ₵5,000
            </button>
            <button className="px-3.5 py-1.5 text-xs font-normal border border-gray-300 rounded-md light-text">
              New Laptop · ₵3,000
            </button>
            <button className="px-3.5 py-1.5 text-xs font-normal border border-gray-300 rounded-md light-text">
              Vacation · ₵8,000
            </button>
            <button className="px-3.5 py-1.5 text-xs font-normal border border-gray-300 rounded-md light-text">
              Down Payment· ₵20,000
            </button>
            <button className="px-3.5 py-1.5 text-xs font-normal border border-gray-300 rounded-md light-text">
              Business Start · ₵15,000
            </button>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded-md p-7 mb-6">
        <div>
          <h1>EMERGENCY FUND</h1>
          <h1>48%</h1>
        </div>
        <div>
          <p>Target: ₵5,000 · Over 1 year</p>
          <p>of goal reached</p>
        </div>
        <div className="w-full p-2 rounded-xl bg-blue-500"></div>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="p-2 bg-amber-600"></div>
      </div>

      <div className="border border-gray-300 rounded-md p-7 mb-6">
        <div className="m-auto p-auto w-210 h-70">
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Goal;
