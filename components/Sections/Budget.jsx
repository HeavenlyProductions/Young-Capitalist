import React, { useEffect, useRef, useState } from "react";
import "./Bugdet.css";
import Input from "../UI/Input";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const buildBudget = (value) =>
  Object.fromEntries(MONTHS.map((m) => [m, value]));

const Budget = () => {
  const [income, setIncome] = useState("1200");
  const [loaded, setLoaded] = useState(false);
  const saveTimer = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setLoaded(false);
        return;
      }
      try {
        const snap = await getDoc(doc(db, "budgets", user.uid));
        if (snap.exists()) {
          setIncome(String(snap.data().Dec ?? 1200));
        }
      } catch (err) {
        console.error("Failed to load budget:", err);
      }
      setLoaded(true);
    });

    return () => {
      unsubscribe();
      clearTimeout(saveTimer.current);
    };
  }, []);

  const saveBudget = async (raw) => {
    if (raw === lastSaved.current) return;
    const user = auth.currentUser;
    if (!user) return;
    try {
      await setDoc(doc(db, "budgets", user.uid), buildBudget(Number(raw) || 0));
      lastSaved.current = raw;
    } catch (err) {
      console.error("Failed to save budget:", err);
    }
  };

  const handleBudgetChange = (e) => {
    const raw = e.target.value;
    setIncome(raw);
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => saveBudget(raw), 500);
  };

  const handleBlur = () => {
    clearTimeout(saveTimer.current);
    saveBudget(income);
  };

  return (
    <div className="mx-auto px-auto max-w-245 p-6">
      <div className="p-8 border border-gray-200 rounded-xl">
        <div className="mb-3.5 rounded-xl text-[8px] light-text tracking-[3px]">
          ADJUST YOUR MONTHLY BUDGET
        </div>
        <div className="flex justify-between mb-10 pb-8 border-b border-b-gray-300 max-sm:flex-col max-sm:gap-6">
          <div>
            <label
              className="text-[8px] text-[#00c7c7] tracking-[3px]"
              htmlFor="1"
            >
              💰 MONTHLY TAKE-HOME INCOME
            </label>
            <div>
              <span className="text-sm light-text">₵</span>
              <input
                onChange={handleBudgetChange}
                onBlur={handleBlur}
                id="1"
                className="ml-2 p-2 w-40 border-2 border-[#00c7c7] rounded-md font-medium text-xl 
              text-[#00c7c7] outline-0"
                type="number"
                value={income}
                disabled={!loaded}
                min={0}
                step={1}
              />
            </div>
          </div>
          <div className="h-fit max-w-60 flex px-5 py-3 gap-2 border border-gray-300 rounded-md">
            <div className="relative w-9 h-5 p-1 bg-gray-300 rounded-[10px] cursor-pointer toggle"></div>
            <div className="text-[10px] font-black tracking-[1px] light-text cursor-default">
              IRREGULAR INCOME
              <div className="text-[9px] font-extralight tracking-[1px] light-text cursor-default">
                Set different income per month
              </div>
            </div>
          </div>
        </div>
        <div className="grid-two">
          <div className="flex flex-col gap-1">
            <label className="flex gap-2 text-[9px] py-1 text-gray-800">
              <span>🍲</span> FOOD & GROCERIES
            </label>
            <Input />
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex gap-2 text-[9px] py-1 text-gray-800">
              <span>🏡</span> RENT & HOUSING
            </label>
            <Input />
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex gap-2 text-[9px] py-1 text-gray-800">
              <span>🚘</span> TRANSPORT
            </label>
            <Input />
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex gap-2 text-[9px] py-1 text-gray-800">
              <span>💡</span> UTILITIES
            </label>
            <Input />
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex gap-2 text-[9px] py-1 text-gray-800">
              <span>🩹</span> HEALTHCARE
            </label>
            <Input />
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex gap-2 text-[9px] py-1 text-gray-800">
              <span>🎮</span> ENTERTAINMENT
            </label>
            <Input />
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex gap-2 text-[9px] py-1 text-gray-800">
              <span>🧥</span> CLOTHING
            </label>
            <Input />
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex gap-2 text-[9px] py-1 text-gray-800">
              <span>💸</span> SAVINGS & INVESTMENTS
            </label>
            <Input />
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex gap-2 text-[9px] py-1 text-gray-800">
              <span>🧾</span> OTHER EXPENSES
            </label>
            <Input />
          </div>
        </div>
        <div
          className="flex justify-between items-center mt-8 px-5 py-4.5 border border-[hsl(180,100%,39%)]
        rounded-lg text-[9px] bg-[hsl(180,100%,97%)] light-text tracking-widest"
        >
          MONTHLY BALANCE
          <span className="text-2xl font-extrabold accent">+₵0</span>
        </div>
      </div>
    </div>
  );
};
export default Budget;
