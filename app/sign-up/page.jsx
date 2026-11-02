"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

const defaultBudget = {
  Jan: 1200,
  Feb: 1200,
  Mar: 1200,
  Apr: 1200,
  May: 1200,
  Jun: 1200,
  Jul: 1200,
  Aug: 1200,
  Sep: 1200,
  Oct: 1200,
  Nov: 1200,
  Dec: 1200
};

const errorMessages = {
  "auth/email-already-in-use": "An account with this email already exists.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/popup-closed-by-user": "Sign-in was cancelled.",
  "auth/network-request-failed": "Network error. Check your connection.",
  "auth/popup-blocked": "Google popup was blocked. Try again",
};

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "budgets", res.user.uid), defaultBudget);
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (err) {
      setError(
        errorMessages[err.code] || "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await signInWithPopup(auth, new GoogleAuthProvider());
      const ref = doc(db, "budgets", res.user.uid);
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        await setDoc(ref, defaultBudget);
      }
      router.push("/");
    } catch (err) {
      setError(
        errorMessages[err.code] || "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignUp}
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
        {error && (
          <p className="text-red-400 text-sm w-full text-center">{error}</p>
        )}
        <input
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
          value={email}
          className="w-full px-4 py-2.5 bg-[hsl(0,0%,20%)] outline-0 shadow-sm"
        />
        <input
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          value={password}
          className="w-full px-4 py-2.5 bg-[hsl(0,0%,20%)] outline-0 shadow-sm"
        />
        <button
          disabled={loading}
          className="w-full flex justify-center items-center py-2 bg-[hsl(180,100%,30%)] 
        cursor-pointer"
        >
          {loading ? "Signing up" : "Submit"}
        </button>
        <h1 className="cursor-default">OR</h1>
        <button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={loading}
          className="flex items-center gap-3.5 py-2.5 px-10 bg-[hsl(0,0%,20%)] cursor-pointer"
        >
          <Image width={28} height={28} src="/social.png" alt="" />
          Continue with google
        </button>
        <p>
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="relative cursor-pointer accent after:w-0 after:h-0.5 after:absolute
          after:bottom-0 after:left-0 after:bg-[hsl(180,100%,39%)] after:transition-all 
          after:duration-100 hover:after:w-full"
          >
            Sign-in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
