import React from "react";
import './/Navbar.css'

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4">
      <div>
        <h1 className="font-bold text-[28px]">YOUNG CAPITALISTS</h1>
        <div className="flex gap-4 text-[14px] font-extralight">
          <h3 className="logo relative light-text tracking-widest">Build</h3>
          <h3 className="logo relative light-text tracking-widest">Scale</h3>
          <h3 className="logo-A relative light-text tracking-widest">Automate</h3>
        </div>
      </div>
      <div className="flex flex-col  ">
        <h3 className="light-text text-[18px] tracking-[0.2em] font-extralight">2025 Budget Projection</h3>
        <h3 className="light-text text-xs tracking-wide font-extralight text-end">Amounts shown in Ghanaian Cedis (₵)</h3>
      </div>
    </div>
  );
};

export default Navbar;
