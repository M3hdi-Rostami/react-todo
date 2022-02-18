import React, { useRef } from "react";
import { Add } from "iconsax-react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="flex mb-3" onSubmit={(e) => handleSubmit(e)}>
      <input
        autoFocus
        required
        ref={inputRef}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        placeholder="Enter your task"
        className="block w-full p-3 bg-white text-sky-500 border border-slate-300 rounded-lg text-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-red-500 focus:invalid:ring-red-500
    "
      />
      <button
        className="bg-sky-600 hover:bg-sky-700 px-2 rounded-lg ml-2"
        type="submit"
        onClick={() => inputRef.current.focus()}
      >
        <Add size="32" color="white" />
      </button>
    </form>
  );
};

export default AddItem;
