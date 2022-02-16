import React from "react";

const CountArea = ({ items }) => {
  return (
    <div className="bg-slate-700 text-slate-200 font-bold w-2/3 mx-auto p-5 mb-3 rounded-lg">
      <div className="flex align-center justify-between border-b-2 border-slate-300 pb-2 mb-2">
        <span className="flex align-center">All items:</span>
        <span className="bg-blue-500 py-1 px-3 rounded-full">
          {items.length}
        </span>
      </div>
      <div className="flex align-center justify-between border-b-2 border-slate-300 pb-2 mb-2">
        <span className="flex align-center">Checked items:</span>
        <span className="bg-green-600 py-1 px-3 rounded-full">
          {items.filter((item) => item.checked).length}
        </span>
      </div>
      <div className="flex align-center justify-between">
        <span className="flex align-center">Unchecked items:</span>
        <span className="bg-red-500 py-1 px-3 rounded-full">
          {items.filter((item) => !item.checked).length}
        </span>
      </div>
    </div>
  );
};

export default CountArea;
