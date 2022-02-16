import React from "react";
import { Add } from "iconsax-react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="flex" onSubmit={(e) => handleSubmit(e)}>
      <input
        autoFocus
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        placeholder="Enter your task"
        className="block w-full p-3 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500
    "
      />
      <button
        className="bg-sky-600 hover:bg-sky-700 px-2 rounded-lg ml-2"
        type="submit"
      >
        <Add size="32" color="white" />
      </button>
    </form>
  );
};

export default AddItem;
