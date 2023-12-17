import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
    console.log(query);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="searching..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-2 rounded-[5px]"
        className="w-28 rounded-full py-3 px-4 placeholder:text-stone-800 bg-yellow-200  focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 focus:w-72 "
      />
    </form>
  );
}

export default SearchOrder;
