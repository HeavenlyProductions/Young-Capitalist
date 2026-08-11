"use client";

import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar.";
import Sections from "@/components/Sections";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const page = () => {
  const [tab, setTab] = useState("Budget");
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/sign-up");
    }
  }, [user, loading, router]);

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
