"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Page = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignUp = async (email, password) => {
    try {
      await useCreateUserWithEmailAndPassword(email, password);
      console.log("user created");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="flex flex-col items-center gap-4 px-10 py-8 bg-[hsl(0,0%,12%)] text-white rounded-lg
       z-10"
      >
        <div className="w-full flex gap-7 items-center">
          <Image
            width={72}
            height={72}
            className="invert"
            src="/logo.png"
            alt=""
          />
          <h1 className="flex items-center text-lg">Sign-up</h1>
        </div>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
          type="email"
          placeholder="Email"
          value={email}
          className="w-full px-4 py-2.5 bg-[hsl(0,0%,20%)] outline-0 shadow-sm"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
          type="password"
          placeholder="Password"
          value={password}
          className="w-full px-4 py-2.5 bg-[hsl(0,0%,20%)] outline-0 shadow-sm"
        />
        <button
          onClick={() => {
            handleSignUp(email, password);
          }}
          className="w-full flex justify-center items-center py-2 bg-[hsl(180,100%,30%)] 
        cursor-pointer"
        >
          Submit
        </button>
        <h1>OR</h1>
        <p className="flex items-center gap-3.5 py-2.5 px-10 bg-[hsl(0,0%,20%)] cursor-pointer">
          <Image width={28} height={28} src="/social.png" alt="" />
          Continue with google
        </p>
        <p>
          Already have an account? <span className="accent">Sign-in</span>
        </p>
      </div>
    </div>
  );
};

export default Page;
