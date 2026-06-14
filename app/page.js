"use client";

import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar.";
import Sections from "@/components/Sections";
import React, { useState } from "react";

const page = () => {
  const [tab, setTab] = useState("Budget");

  return (
    <div className="bg-[hsl(0,0%,100%)] min-h-screen text-[#12100E]">
      <Navbar />
      <Dashboard tab={tab} setTab={setTab} />
      <Sections tab={tab} />
      <Footer />
    </div>
  );
};

export default page;
