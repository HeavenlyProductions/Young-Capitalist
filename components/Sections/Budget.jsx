import React from "react";
import "./Bugdet.css";

const Budget = () => {
  return (
    <div className="p-8 border border-gray-200 rounded-xl">
      <div className="mb-3.5 rounded-xl text-[8px] light-text tracking-[3px]">
        ADJUST YOUR MONTHLY BUDGET
      </div>
      <div className="flex justify-between">
        <div>
          <label
            className="text-[8px] text-[#00c7c7] tracking-[3px]"
            htmlFor="1"
          >
            💰 MONTHLY TAKE-HOME INCOME
          </label>
          <div>
            <span className="text-sm light-text">₵</span>
            <input
              id="1"
              className="ml-2 p-2 w-40 border-2 border-[#00c7c7] rounded-md font-medium text-xl 
              text-[#00c7c7]"
              type="number"
              min={0}
              step={1}
            />
          </div>
        </div>
        <div className="h-fit flex px-5 py-3 gap-2 border border-gray-300 rounded-md">
          <div className="relative w-9 h-5 p-1 bg-gray-300 rounded-[10px] toggle"></div>
          <div className="text-[10px] font-black tracking-[1px] light-text">
            IRREGULAR INCOME
            <div className="text-[9px] font-extralight tracking-[1px] light-text">
              Set different income per month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Budget;
