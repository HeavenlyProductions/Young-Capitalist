import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar.";
import React from "react";

const page = () => {
  return (
    <div className="bg-white min-h-screen text-[#12100E]">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default page;
