import React from "react";
import "./Sections.css";
import Budget from "./Sections/Budget";
import Bills from "./Sections/Bills";
import Savings from "./Sections/Savings";
import Goal from "./Sections/Goal";
import Overview from "./Sections/Overview";
import Net_Worth from "./Sections/Net_Worth";

const Sections = ({ tab }) => {
  const renderSerction = (tab) => {
    switch (tab) {
      case "Budget":
        return <Budget />;

      case "Bills":
        return <Bills />;

      case "Savings":
        return <Savings />;

      case "Goal":
        return <Goal />;

      case "Overview":
        return <Overview />;

      case "Net_Worth":
        return <Net_Worth />;

      default:
        return <Budget />;
    }
  };

  return <div className="container fade">{renderSerction(tab)}</div>;
};

export default Sections;
