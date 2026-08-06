"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, authError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        setEmail("");
        setPassword("");
        router.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const res = await signInWithGoogle();
      if (res) {
        router.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignIn}
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
          <h1 className="flex items-center text-lg">Sign-in</h1>
        </div>
        {(authError || googleError) && (
          <p className="text-red-400 text-sm w-full text-center">
            {authError?.message
              ?.replace(/^Firebase:\s*/i, "")
              .replace(/^Error\s*/i, "Error: ")
              .replace(/[\(\)]/g, "")
              .replace(/auth\//g, "") + " Please try again." ||
              googleError?.message
                ?.replace(/^Firebase\s*/i, "")
                .replace(/^Error\s*/i, "Error:")
                .replace(/[\(\)]/g, "")
                .replace(/auth\//g, "") + " Please try again."}
          </p>
        )}
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
          value={email}
          className="w-full px-4 py-2.5 bg-[hsl(0,0%,20%)] outline-0 shadow-sm"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          value={password}
          className="w-full px-4 py-2.5 bg-[hsl(0,0%,20%)] outline-0 shadow-sm"
        />
        <button
          onClick={handleSignIn}
          disabled={loading}
          className="w-full flex justify-center items-center py-2 bg-[hsl(180,100%,30%)]
           cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Submit"}
        </button>
        <h1 className="cursor-default">OR</h1>
        <p
          onClick={handleGoogleSignUp}
          className="flex items-center gap-3.5 py-2.5 px-10 bg-[hsl(0,0%,20%)] cursor-pointer"
        >
          <Image width={28} height={28} src="/social.png" alt="" />
          Continue with google
        </p>
        <p>
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="relative cursor-pointer accent after:w-0 after:h-0.5 after:absolute
          after:bottom-0 after:left-0 after:bg-[hsl(180,100%,39%)] after:transition-all 
          after:duration-100 hover:after:w-full"
          >
            Sign-up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Page;
