import React from "react";
import ".//Navbar.css";

const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center px-10 py-4.5 mb-10 
    border-b border-b-gray-300"
    >
      <div>
        <h1 className="font-extrabold text-[26px] tracking-[-0.5px] leading-7.5">
          YOUNG CAPITALIST
        </h1>
        <div className="flex gap-4 text-[10px] tracking-widest font-extralight">
          <h3 className="logo relative light-text tracking-widest">Build</h3>
          <h3 className="logo relative light-text tracking-widest">Scale</h3>
          <h3 className="logo-A relative light-text tracking-widest">
            Automate
          </h3>
        </div>
      </div>
      <div className="flex flex-col  ">
        <h3 className="light-text text-[10px] tracking-[4px] font-extralight">
          2025 Budget Projection
        </h3>
        <h3 className="light-text text-[10px] tracking-tight font-extralight text-end">
          Amounts shown in Ghanaian Cedis (₵)
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
