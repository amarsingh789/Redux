import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-10 bg-(--c2)">
      <h2 className="text-2xl font-semibold">Media Search</h2>
      <div className="flex gap-5 text-xl font-medium items-center">
        <Link
          className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) px-4 py-2 rounded-lg"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) px-4 py-2 rounded-lg"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
