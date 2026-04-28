import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-foot">
      <div
        className="flex justify-between items-center py-5 border-t border-t-gray-300 
      text-sm font-extrabold"
      >
        YOUNG CAPITALIST
        <span className="text-[8px] font-extralight tracking-[3px] light-text">
          PROJECTIONS ARE ESTIMATES · ADJUST MONTHLY_
        </span>
      </div>
    </div>
  );
};

export default Footer;
