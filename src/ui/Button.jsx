import React from "react";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
    const base =
    "bg-yellow-400 rounded-full  font-semibold uppercase tracking-wide inline-block hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus-within:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
   const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    small: base + " px-4 px-2 sm:px-5 sm:py-2.5 text-xs",
    secondary: "bg-transparent border-2 border-stone-300 rounded-full font-semibold hover:text-stone-800 text-stone-400 uppercase tracking-wide inline-block hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus-within:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 sm:px-6 sm:py-3.4 "
   } 
 if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
