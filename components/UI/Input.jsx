import React from "react";

const Input = () => {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xs light-text">₵</span>
      <input
        type="number"
        defaultValue={0}
        min={0}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-0 bold-text text-sm"
      />
    </div>
  );
};

export default Input;
