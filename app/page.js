import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar.";
import Sections from "@/components/Sections";
import React from "react";

const page = () => {
  return (
    <div className="bg-[hsl(0,0%,100%)] min-h-screen text-[#12100E]">
      <Navbar />
      <Dashboard />
      <Sections />
      <Footer />
    </div>
  );
};

export default page;
