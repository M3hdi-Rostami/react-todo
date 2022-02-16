import React from "react";
import { SearchNormal1 } from "iconsax-react";

const Search = ({ search, setSearch }) => {
  return (
    <form className="flex relative mb-3">
      <input
        autoFocus
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        className="block w-full p-3 text-sky-500 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    "
      />
      <span className="absolute right-3 top-2">
        <SearchNormal1 size="25" color="#CBD5E1" />
      </span>
    </form>
  );
};

export default Search;
