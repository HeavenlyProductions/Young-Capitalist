import React from "react";
import BarChartComponent from "../UI/Charts/BarChart";

const Overview = () => {
  return (
    <div className="mx-auto px-auto max-w-245 p-6 hidden">
      <div className="mb-6 p-7 border border-gray-300 rounded-md">
        <div className="mb-5 font-extralight text-[10px] tracking-widest light-text">
          INCOME VS EXPENSES - MONTHLY
        </div>
        <div className="m-auto p-auto w-210 h-70">
          <BarChartComponent />
        </div>
      </div>

      <div className="mb-6 p-7 border border-gray-300 rounded-md">
        <div className="mb-5 font-extralight text-[10px] tracking-widest light-text">
          MONTHLY EXPENSE BREAKDOWN
        </div>

        <div className="flex flex-col gap-2.5">
          <div>
            <div className="flex justify-between items-center py-1.5 font-extralight text-xs gap-1">
              <div className="tracking-wider light-text">
                <span className="text-xs">🍲</span> Food & Groceries
              </div>
              <div className="font-extrabold text-sm">
                ₵350{" "}
                <span className="font-extralight text-[8px] tracking-widest light-text">
                  (23%)
                </span>
              </div>
            </div>
            <div className="h-1 bg-black rounded-sm"></div>
          </div>

          <div>
            <div className="flex justify-between items-center py-1.5 font-extralight text-xs gap-1">
              <div className="tracking-wider light-text">
                <span className="text-xs">🏡</span> Rent & Housing
              </div>
              <div className="font-extrabold text-sm">
                ₵500{" "}
                <span className="font-extralight text-[8px] tracking-widest light-text">
                  (33%)
                </span>
              </div>
            </div>
            <div className="h-1 bg-black rounded-sm"></div>
          </div>

          <div>
            <div className="flex justify-between items-center py-1.5 font-extralight text-xs gap-1">
              <div className="tracking-wider light-text">
                <span className="text-xs">🚘</span> Transport
              </div>
              <div className="font-extrabold text-sm">
                ₵120{" "}
                <span className="font-extralight text-[8px] tracking-widest light-text">
                  (8%)
                </span>
              </div>
            </div>
            <div className="h-1 bg-black rounded-sm"></div>
          </div>

          <div>
            <div className="flex justify-between items-center py-1.5 font-extralight text-xs gap-1">
              <div className="tracking-wider light-text">
                <span className="text-xs">💡</span> Utilities
              </div>
              <div className="font-extrabold text-sm">
                ₵80{" "}
                <span className="font-extralight text-[8px] tracking-widest light-text">
                  (5%)
                </span>
              </div>
            </div>
            <div className="h-1 bg-black rounded-sm"></div>
          </div>

          <div>
            <div className="flex justify-between items-center py-1.5 font-extralight text-xs gap-1">
              <div className="tracking-wider light-text">
                <span className="text-xs">🩹</span> Healthcare
              </div>
              <div className="font-extrabold text-sm">
                ₵50{" "}
                <span className="font-extralight text-[8px] tracking-widest light-text">
                  (3%)
                </span>
              </div>
            </div>
            <div className="h-1 bg-black rounded-sm"></div>
          </div>

          <div>
            <div className="flex justify-between items-center py-1.5 font-extralight text-xs gap-1">
              <div className="tracking-wider light-text">
                <span className="text-xs">🎮</span> Entertainment
              </div>
              <div className="font-extrabold text-sm">
                ₵80{" "}
                <span className="font-extralight text-[8px] tracking-widest light-text">
                  (5%)
                </span>
              </div>
            </div>
            <div className="h-1 bg-black rounded-sm"></div>
          </div>

          <div>
            <div className="flex justify-between items-center py-1.5 font-extralight text-xs gap-1">
              <div className="tracking-wider light-text">
                <span className="text-xs">🧥</span> Clothing
              </div>
              <div className="font-extrabold text-sm">
                ₵60{" "}
                <span className="font-extralight text-[8px] tracking-widest light-text">
                  (4%)
                </span>
              </div>
            </div>
            <div className="h-1 bg-black rounded-sm"></div>
          </div>

          <div>
            <div className="flex justify-between items-center py-1.5 font-extralight text-xs gap-1">
              <div className="tracking-wider light-text">
                <span className="text-xs">💸</span> Savings & Investments
              </div>
              <div className="font-extrabold text-sm">
                ₵200{" "}
                <span className="font-extralight text-[8px] tracking-widest light-text">
                  (13%)
                </span>
              </div>
            </div>
            <div className="h-1 bg-cyan-400 rounded-sm"></div>
          </div>

          <div>
            <div className="flex justify-between items-center py-1.5 font-extralight text-xs gap-1">
              <div className="tracking-wider light-text">
                <span className="text-xs">🧾</span> Other Expenses
              </div>
              <div className="font-extrabold text-sm">
                ₵60{" "}
                <span className="font-extralight text-[8px] tracking-widest light-text">
                  (4%)
                </span>
              </div>
            </div>
            <div className="h-1 bg-black rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
