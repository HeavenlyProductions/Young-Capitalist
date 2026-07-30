import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-center"
    >
      <div className="flex flex-col items-center gap-4 p-8 bg-[hsl(0,0%,12%)] text-white rounded-lg">
        <h1>YOUNG CAPITALIST</h1>
        <input
          type="email"
          placeholder="Email"
          className="p-2 bg-[hsl(0,0%,20%)] outline-0 shadow-sm"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 bg-[hsl(0,0%,20%)] outline-0 shadow-sm"
        />
        <h1>OR</h1>
        <p className="flex items-center gap-3.5 py-1.5 px-6 bg-[hsl(0,0%,20%)]">
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
