import React from "react";

const CountArea = ({ items }) => {
  return (
    <div className="bg-slate-700 text-slate-200 font-bold mx-auto p-3 mb-3 rounded-lg">
      <div className="flex align-center justify-between border-b-2 border-slate-300 pb-3 mb-3">
        <span className="flex align-center pt-1">All items:</span>
        <span className="bg-blue-500 py-1 px-3 rounded-lg">{items.length}</span>
      </div>
      <div className="flex align-center justify-between border-b-2 border-slate-300 pb-3 mb-3">
        <span className="flex align-center pt-1">Checked items:</span>
        <span className="bg-green-600 py-1 px-3 rounded-lg">
          {items.filter((item) => item.checked).length}
        </span>
      </div>
      <div className="flex align-center justify-between">
        <span className="flex align-center pt-1">Unchecked items:</span>
        <span className="bg-red-500 py-1 px-3 rounded-lg">
          {items.filter((item) => !item.checked).length}
        </span>
      </div>
    </div>
  );
};

export default CountArea;
