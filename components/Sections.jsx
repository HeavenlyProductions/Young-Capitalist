import React from "react";
import "./Sections.css";
import Budget from "./Sections/Budget";
import Bills from "./Sections/Bills";

const Sections = () => {
  return (
    <div className="container">
      <Budget />
      <Bills />
    </div>
  );
};

export default Sections;
