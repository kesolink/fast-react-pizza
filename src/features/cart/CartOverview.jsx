import React from "react";
import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-950  py-4 px-4 text-stone-200 sm:px-6 md:text-base ">
      <p className="text-stone-300 space-x-4 font-semibold ">
        <span>23 pizzas</span>
        <span>$23.45</span>   
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
