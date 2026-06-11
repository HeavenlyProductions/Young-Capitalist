import React from "react";
import "./Net_Worth.css";
import BarChartComponent from "../UI/Charts/BarChart";
import S_Input from "../UI/Secondary_Input";

const Net_Worth = () => {
  return (
    <div className="mx-auto px-auto max-w-245 p-6">
      <div className="grid-net">
        <div className="left py-5 px-4.5">
          <p className="mb-1 text-xs tracking-[3px] light-text">Total Assets</p>
          <p className="font-black text-2xl accent">₵1,100</p>
        </div>
        <div className="py-5 px-4.5 bg-gray-200 border-y border-gray-200">
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

      <div className="flex gap-5">
        <div className="p-7 border border-cyan-200 rounded-md grow">
          <div className="mb-5 flex justify-between items-center">
            <div className="text-[10px] tracking-widest accent">📈 ASSETS</div>
            <div className="px-3.5 py-1 text-xs text-white bg-cyan-400 rounded-md">
              + Add
            </div>
          </div>

          <div>
            <div className="mb-3 flex gap-3">
              <span className="px-1.75 py-0.5 bg-gray-200 border border-gray-300 rounded-md">
                💸
              </span>
              <input
                className="w-41.5 px-2 text-xs tracking-widest border border-gray-300 rounded-md
                 shrink-0"
                type="text"
                defaultValue="Cash & Savings"
              />
              <div className="flex gap-1 items-center text-xs">
                <span className="text-[11px] text-gray-600">₵</span>
                <input
                  className="max-w-33.25 p-2 text-cyan-500 border border-cyan-500 rounded-md shrink"
                  type="number"
                  defaultValue="0"
                  min="0"
                />
              </div>
              <span className="flex items-center light-text">x</span>
            </div>

            <div className="mb-3 flex gap-3">
              <span className="px-1.75 py-0.5 bg-gray-200 border border-gray-300 rounded-md">
                💸
              </span>
              <input
                className="w-41.5 px-2 text-xs tracking-widest border border-gray-300 rounded-md
                 shrink-0"
                type="text"
                defaultValue="Cash & Savings"
              />
              <div className="flex gap-1 items-center text-xs">
                <span className="text-[11px] text-gray-600">₵</span>
                <input
                  className="max-w-33.25 p-2 text-cyan-500 border border-cyan-500 rounded-md shrink"
                  type="number"
                  defaultValue="0"
                  min="0"
                />
              </div>
              <span className="flex items-center light-text">x</span>
            </div>

            <div className="mb-3 flex gap-3">
              <span className="px-1.75 py-0.5 bg-gray-200 border border-gray-300 rounded-md">
                💸
              </span>
              <input
                className="w-41.5 px-2 text-xs tracking-widest border border-gray-300 rounded-md
                 shrink-0"
                type="text"
                defaultValue="Cash & Savings"
              />
              <div className="flex gap-1 items-center text-xs">
                <span className="text-[11px] text-gray-600">₵</span>
                <input
                  className="max-w-33.25 p-2 text-cyan-500 border border-cyan-500 rounded-md shrink"
                  type="number"
                  defaultValue="0"
                  min="0"
                />
              </div>
              <span className="flex items-center light-text">x</span>
            </div>

            <div className="mb-3 flex gap-3">
              <span className="px-1.75 py-0.5 bg-gray-200 border border-gray-300 rounded-md">
                💸
              </span>
              <input
                className="w-41.5 px-2 text-xs tracking-widest border border-gray-300 rounded-md
                 shrink-0"
                type="text"
                defaultValue="Cash & Savings"
              />
              <div className="flex gap-1 items-center text-xs">
                <span className="text-[11px] text-gray-600">₵</span>
                <input
                  className="max-w-33.25 p-2 text-cyan-500 border border-cyan-500 rounded-md shrink"
                  type="number"
                  defaultValue="0"
                  min="0"
                />
              </div>
              <span className="flex items-center light-text">x</span>
            </div>

            <div className="flex mb-3 gap-3">
              <span className="px-1.75 py-0.5 bg-gray-200 border border-gray-300 rounded-md">
                💸
              </span>
              <input
                className="w-41.5 px-2 text-xs tracking-widest border border-gray-300 rounded-md
                 shrink-0"
                type="text"
                defaultValue="Cash & Savings"
              />
              <div className="flex gap-1 items-center text-xs">
                <span className="text-[11px] text-gray-600">₵</span>
                <input
                  className="max-w-33.25 p-2 text-cyan-500 border border-cyan-500 rounded-md shrink"
                  type="number"
                  defaultValue="0"
                  min="0"
                />
              </div>
              <span className="flex items-center light-text">x</span>
            </div>
          </div>

          <div className="mt-3 py-3 flex justify-between border-t border-t-gray-300">
            <span className="text-[10px] tracking-widest light-text">
              TOTAL ASSETS
            </span>
            <span className="font-black accent">₵1,100</span>
          </div>
        </div>

        <div className="p-7 border border-red-300 rounded-md grow">
          <div className="mb-5 flex justify-between items-center">
            <div className="text-[10px] tracking-widest text-red-700">
              📉 LIABILITIES
            </div>
            <div className="px-3.5 py-1 text-xs text-white bg-red-700 rounded-md">
              + Add
            </div>
          </div>

          <div className="flex mb-3 gap-3">
            <span className="px-1.75 py-0.5 bg-gray-200 border border-gray-300 rounded-md">
              💸
            </span>
            <input
              className="w-41.5 px-2 text-xs tracking-widest border border-gray-300 rounded-md
                 shrink-0"
              type="text"
              defaultValue="Cash & Savings"
            />
            <div className="flex gap-1 items-center text-xs">
              <span className="text-[11px] text-gray-600">₵</span>
              <input
                className="max-w-33.25 p-2 text-red-700 border border-red-700 rounded-md shrink"
                type="number"
                defaultValue="0"
                min="0"
              />
            </div>
            <span className="flex items-center light-text">x</span>
          </div>

          <div className="flex mb-3 gap-3">
            <span className="px-1.75 py-0.5 bg-gray-200 border border-gray-300 rounded-md">
              💸
            </span>
            <input
              className="w-41.5 px-2 text-xs tracking-widest border border-gray-300 rounded-md
                 shrink-0"
              type="text"
              defaultValue="Cash & Savings"
            />
            <div className="flex gap-1 items-center text-xs">
              <span className="text-[11px] text-gray-600">₵</span>
              <input
                className="max-w-33.25 p-2 text-red-700 border border-red-700 rounded-md shrink"
                type="number"
                defaultValue="0"
                min="0"
              />
            </div>
            <span className="flex items-center light-text">x</span>
          </div>

          <div className="flex mb-3 gap-3">
            <span className="px-1.75 py-0.5 bg-gray-200 border border-gray-300 rounded-md">
              💸
            </span>
            <input
              className="w-41.5 px-2 text-xs tracking-widest border border-gray-300 rounded-md
                 shrink-0"
              type="text"
              defaultValue="Cash & Savings"
            />
            <div className="flex gap-1 items-center text-xs">
              <span className="text-[11px] text-gray-600">₵</span>
              <input
                className="max-w-33.25 p-2 text-red-700 border border-red-700 rounded-md shrink"
                type="number"
                defaultValue="0"
                min="0"
              />
            </div>
            <span className="flex items-center light-text">x</span>
          </div>

          <div className="flex mb-3 gap-3">
            <span className="px-1.75 py-0.5 bg-gray-200 border border-gray-300 rounded-md">
              💸
            </span>
            <input
              className="w-41.5 px-2 text-xs tracking-widest border border-gray-300 rounded-md
                 shrink-0"
              type="text"
              defaultValue="Cash & Savings"
            />
            <div className="flex gap-1 items-center text-xs">
              <span className="text-[11px] text-gray-600">₵</span>
              <input
                className="max-w-33.25 p-2 text-red-700 border border-red-700 rounded-md shrink"
                type="number"
                defaultValue="0"
                min="0"
              />
            </div>
            <span className="flex items-center light-text">x</span>
          </div>

          <div className="mt-3 py-3 flex justify-between border-t border-t-gray-300">
            <span className="text-[10px] tracking-widest light-text">
              TOTAL LIABILITIES
            </span>
            <span className="font-black text-red-700">₵2,500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Net_Worth;
