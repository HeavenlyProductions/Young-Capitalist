import React from "react";
import LineChartComponent from "../UI/Charts/LineChart";
import S_Input from "../UI/Secondary_Input";
import "./Goal.css";

const Goal = () => {
  return (
    <div className="mx-auto px-auto max-w-245 p-6 hidden">
      <div className="p-7 mb-6 border border-gray-300 rounded-md">
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
                className="w-3xs mt-1 px-3.5 py-2 text-cyan-500 border-2 border-cyan-400 
                rounded-md outline-0"
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
        <div className="grid-six text-[10px] tracking-widest light-text">
          QUICK PRESETS
          <div className="w-208.5 mt-2 flex flex-wrap gap-2">
            <button
              className="px-3.5 py-1.5 text-xs font-normal border border-gray-300
             rounded-md light-text"
            >
              Emergency Fund · ₵5,000
            </button>
            <button
              className="px-3.5 py-1.5 text-xs font-normal border border-gray-300
             rounded-md light-text"
            >
              New Laptop · ₵3,000
            </button>
            <button
              className="px-3.5 py-1.5 text-xs font-normal border border-gray-300
             rounded-md light-text"
            >
              Vacation · ₵8,000
            </button>
            <button
              className="px-3.5 py-1.5 text-xs font-normal border border-gray-300
             rounded-md light-text"
            >
              Down Payment· ₵20,000
            </button>
            <button
              className="px-3.5 py-1.5 text-xs font-normal border border-gray-300
             rounded-md light-text"
            >
              Business Start · ₵15,000
            </button>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded-md p-7 mb-6">
        <div className="flex justify-between items-center font-black leading-0">
          <h1 className="text-xl">Emergency Fund</h1>
          <h1 className="text-[28px]">48%</h1>
        </div>
        <div className="flex justify-between items-start mb-7 text-[10px] tracking-wider">
          <p>Target: ₵5,000 · Over 1 year</p>
          <p>of goal reached</p>
        </div>
        <div className="w-full p-2 rounded-xl bg-cyan-400"></div>
        <div className="flex justify-between grow mt-5 gap-5">
          <div className="w-full flex flex-col gap-1 p-3.5 bg-gray-100 rounded-md">
            <span className="text-[10px] tracking-widest light-text">
              SAVINGS IN 1 YR
            </span>
            <span className="text-xl font-black">₵2,400</span>
          </div>
          <div className="w-full flex flex-col gap-1 p-3.5 bg-gray-100 rounded-md">
            <span className="text-[10px] tracking-widest light-text">
              REMAINING
            </span>
            <span className="text-xl font-black">₵2,600</span>
          </div>
          <div className="w-full flex flex-col gap-1 p-3.5 bg-gray-100 rounded-md">
            <span className="text-[10px] tracking-widest light-text">
              TIMELINE TO GOAL
            </span>
            <span className="text-xl font-black">2.1 yrs</span>
          </div>
        </div>
        <div
          className="mt-5 px-5 py-3 text-xs text-[rgb(230,168,23)] tracking-widest 
          bg-[hsl(0,100%,97%)] border border-[rgb(230,168,23)] rounded-md"
        >
          <span>
            ⚡ To hit your goal in 12 months, save ₵417/mo. Currently saving
            ₵200/mo
          </span>
        </div>
      </div>

      <div className="border border-gray-300 rounded-md p-7 mb-6">
        <div className="mb-5 font-extralight text-[10px] tracking-widest light-text">
          SAVINGS VS GOAL - 12 - MONTH PROJECTION
        </div>
        <div className="m-auto p-auto w-210 h-70">
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Goal;
