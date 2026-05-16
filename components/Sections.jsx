import React from "react";
import "./Sections.css";
import Budget from "./Sections/Budget";
import Bills from "./Sections/Bills";
import Savings from "./Sections/Savings";
import Goal from "./Sections/Goal";

const Sections = () => {
  return (
    <div className="container">
      <Budget />
      <Bills />
      <Savings />
      <Goal />
    </div>
  );
};

export default Sections;
