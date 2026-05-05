import React from "react";
import "./Sections.css";
import Budget from "./Sections/Budget";
import Bills from "./Sections/Bills";
import Savings from "./Sections/Savings";

const Sections = () => {
  return (
    <div className="container">
      <Budget />
      <Bills />
      <Savings />
    </div>
  );
};

export default Sections;
