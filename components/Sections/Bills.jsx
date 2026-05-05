import React from "react";
import "./Bills..css";

const Bills = () => {
  return (
    <div className="container-two hidden">
      <div className="grid-three">
        <div className="p-5 grid-item left">
          <h3 className="font-extralight text-[8px] light-text">TOTAL BILLS</h3>
          <h1 className="font-extrabold text-2xl bold-text">₵730</h1>
        </div>
        <div className="p-5 grid-item bg-[hsl(0,0%,96%)] mid-1">
          <h3 className="font-extralight text-[8px] light-text">PAID</h3>
          <h1 className="font-extrabold text-2xl text-[hsl(130,98%,43%)]">
            ₵0
          </h1>
        </div>
        <div className="p-5 grid-item mid-2">
          <h3 className="font-extralight text-[8px] light-text">STILL DUE</h3>
          <h1 className="font-extrabold text-2xl text-[hsl(59,94%,41%)]">
            ₵730
          </h1>
        </div>
        <div className="p-5 grid-item right bg-[hsl(0,0%,96%)]">
          <h3 className="font-extralight text-[8px] light-text">
            BILLS OVERDUE
          </h3>
          <h1 className="font-extrabold text-2xl text-[hsl(0,90%,48%)]">5</h1>
        </div>
      </div>
      <div className="border border-gray-300 py-3.5 px-5 rounded-md">
        <div className="flex justify-between items-center tracking-wider mb-1.5">
          <h3 className="text-[9px] font-extralight light-text">
            APR PROGRESS
          </h3>
          <h3 className="text-[8px] font-extralight light-text">
            Day 23 0f 30
          </h3>
        </div>
        <div className="h-2 w-100% bg-cyan-500 rounded-[50px]"></div>
      </div>
      <div
        className="flex items-center mt-5.5 py-3 px-4 text-[11px] bg-[hsl(0,100%,97%)] border 
      border-[hsl(0,100%,90%)] rounded-md text-[hsl(0,100%,45%)] font-extralight tracking-wider"
      >
        ⚠️ 5 overdue bills: Rent, Data Bundle, Electricity, Internet, Gym
      </div>
      <div
        className=" mt-5 p-7 border 
         border-gray-300 rounded-md"
      >
        <div className="flex justify-between items-center">
          <p className="text-[10px] font-extralight tracking-widest light-text">
            RECURRING BILLS & SUBSCRIPTIONS
          </p>
          <div
            className="py-2 px-3 font-black text-[11px] text-white 
            tracking-widest bg-[hsl(30,13%,6%)] rounded-md"
          >
            + ADD BILL_
          </div>
        </div>
        <div
          className="grid-bill items-center mt-5 pb-2.5 gap-2 font-light text-[9px] border-b 
        border-b-gray-300 light-text"
        >
          <span></span>
          <p>NAME</p>
          <p>CATEGORY</p>
          <p>DUE</p>
          <p>AMOUNT</p>
          <p>PAID</p>
          <span></span>
        </div>
        <div
          className="grid-bill items-center mt-5 pb-2.5 gap-2 font-light text-[12px] border-b 
        border-b-gray-300 light-text"
        >
          <span className="px-2 py-1.5 text-sm bg-[hsl(0,0%,95%)] border border-gray-200 rounded-md">
            🏠
          </span>
          <p className="px-3 py-1.5 border border-gray-300 rounded-md">Rent</p>
          <p className="px-3 py-1.25 border border-gray-300 rounded-md">
            Housing
          </p>
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="due relative px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <div className="relative w-9 h-5 p-1 bg-gray-300 rounded-[10px] toggle"></div>
          <span className="flex justify-start items-center text-2xl">×</span>
        </div>
        <div
          className="grid-bill items-center mt-5 pb-2.5 gap-2 font-light text-[12px] border-b 
        border-b-gray-300 light-text"
        >
          <span className="px-2 py-1.5 text-sm bg-[hsl(0,0%,95%)] border border-gray-200 rounded-md">
            ⚡
          </span>
          <p className="px-3 py-1.5 border border-gray-300 rounded-md">
            Electricity
          </p>
          <p className="px-3 py-1.25 border border-gray-300 rounded-md">
            Utilities
          </p>
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <div className="relative w-9 h-5 p-1 bg-gray-300 rounded-[10px] toggle"></div>
          <span className="flex justify-start items-center text-2xl">×</span>
        </div>
        <div
          className="grid-bill items-center mt-5 pb-2.5 gap-2 font-light text-[12px] border-b 
        border-b-gray-300 light-text"
        >
          <span className="px-2 py-1.5 text-sm bg-[hsl(0,0%,95%)] border border-gray-200 rounded-md">
            💧
          </span>
          <p className="px-3 py-1.5 border border-gray-300 rounded-md">Water</p>
          <p className="px-3 py-1.25 border border-gray-300 rounded-md">
            Utilities
          </p>
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <div className="relative w-9 h-5 p-1 bg-gray-300 rounded-[10px] toggle"></div>
          <span className="flex justify-start items-center text-2xl">×</span>
        </div>
        <div
          className="grid-bill items-center mt-5 pb-2.5 gap-2 font-light text-[12px] border-b 
        border-b-gray-300 light-text"
        >
          <span className="px-2 py-1.5 text-sm bg-[hsl(0,0%,95%)] border border-gray-200 rounded-md">
            🌐
          </span>
          <p className="px-3 py-1.5 border border-gray-300 rounded-md">
            Internet
          </p>
          <p className="px-3 py-1.25 border border-gray-300 rounded-md">
            Utilities
          </p>
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <div className="relative w-9 h-5 p-1 bg-gray-300 rounded-[10px] toggle"></div>
          <span className="flex justify-start items-center text-2xl">×</span>
        </div>
        <div
          className="grid-bill items-center mt-5 pb-2.5 gap-2 font-light text-[12px] border-b 
        border-b-gray-300 light-text"
        >
          <span className="px-2 py-1.5 text-sm bg-[hsl(0,0%,95%)] border border-gray-200 rounded-md">
            📺
          </span>
          <p className="px-3 py-1.5 border border-gray-300 rounded-md">
            Cable & Subscriptions
          </p>
          <p className="px-3 py-1.25 border border-gray-300 rounded-md">
            Entertainment
          </p>
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <div className="relative w-9 h-5 p-1 bg-gray-300 rounded-[10px] toggle"></div>
          <span className="flex justify-start items-center text-2xl">×</span>
        </div>
        <div
          className="grid-bill items-center mt-5 pb-2.5 gap-2 font-light text-[12px] border-b 
        border-b-gray-300 light-text"
        >
          <span className="px-2 py-1.5 text-sm bg-[hsl(0,0%,95%)] border border-gray-200 rounded-md">
            🏋️‍♂️
          </span>
          <p className="px-3 py-1.5 border border-gray-300 rounded-md">
            Gym Membership
          </p>
          <p className="px-3 py-1.25 border border-gray-300 rounded-md">
            Entertainment
          </p>
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="px-3 py-1.5 border border-gray-300 rounded-md"
          />
          <div className="relative w-9 h-5 p-1 bg-gray-300 rounded-[10px] toggle"></div>
          <span className="flex justify-start items-center text-2xl">×</span>
        </div>
        <div
          className="flex justify-between items-center mt-5 pt-4.5 border-t-2 
        border-t-gray-900 text-[10px] tracking-widest light-text"
        >
          TOTAL MONTHLY BILLS
          <span className="font-black text-[18px] tracking-normal bold-text">
            ₵730
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bills;
