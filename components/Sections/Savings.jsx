import React from "react";
import "./Savings.css";
import AreaChartComponent from "../UI/AreaChart";

const Savings = () => {
  return (
    <div className="mx-auto px-auto max-w-245 p-6">
      <div className="border border-gray-300 rounded-md p-7 mb-6">
        <div className="mb-5 font-extralight text-[10px] tracking-widest light-text">
          CUMULATIVE SAVINGS GROWTH
        </div>
        <div className="m-auto p-auto w-210 h-70">
          <AreaChartComponent />
        </div>
      </div>
      <div className="mx-auto px-auto max-w-245 p-6 border border-gray-300 rounded-md">
        <div className="mb-5 font-extralight text-[10px] tracking-widest light-text">
          MONTH-BY-MONTH BREAKDOWN
        </div>
        <div
          className="grid-four px-3 py-1.5 font-extralight text-[10px] tracking-widest 
          border-b-2 border-b-gray-950 light-text"
        >
          <p>MONTH</p>
          <p>INCOME</p>
          <p>EXPENSES</p>
          <p>SAVED</p>
          <p>CUMULATIVE</p>
        </div>
        <div className="grid-four p-3">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            JAN
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3 bg-gray-100 border-y border-y-gray-200">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            FEB
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            MAR
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3 bg-gray-100 border-y border-y-gray-200">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            APR
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            MAY
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3 bg-gray-100 border-y border-y-gray-200">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            JUNE
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            JULY
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3 bg-gray-100 border-y border-y-gray-200">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            AUG
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            SEP
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3 bg-gray-100 border-y border-y-gray-200">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            OCT
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            NOV
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3 bg-gray-100 border-t border-t-gray-200 border-b-2">
          <p className="font-extrabold text-[11px] tracking-widest bold-text">
            DEC
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵1 , 500</p>
          <p className="font-medium text-xs text-gray-800 tracking-wider">
            ₵1 , 300
          </p>
          <p className="font-bold text-xs tracking-wider accent">₵200</p>
          <p className="font-black text-xs tracking-wider">₵200</p>
        </div>
        <div className="grid-four p-3 text-xs tracking-wider">
          <span className="font-extralight text-[10px] tracking-widest light-text">YEAR TOTAL</span>
          <span className="font-bold accent">₵18 , 000</span>
          <span className="font-semibold">₵15 , 600</span>
          <span className="font-black accent">₵2,400 SAVED</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Savings;
