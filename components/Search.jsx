"use client";

import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg w-max bg-[#f8f9fa]">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none outline-none"
      />
    </div>
  );
};

export default Search;
