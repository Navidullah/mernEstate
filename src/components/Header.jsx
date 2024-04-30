import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-slate-200">
      <div>
        <span className="text-3xl text-slate-400 font-bold">Digital</span>
        <span className="text-3xl text-slate-500 font-bold">World</span>
      </div>
      <form className="flex items-center justify-between bg-slate-100 p-3 rounded-md w-24 sm:w-64">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none"
        ></input>
        <FaSearch />
      </form>
      <nav className="flex gap-3 text-[18px]">
        <span>Home</span>
        <span>About</span>
        <span>Sign in</span>
      </nav>
    </header>
  );
};

export default Header;
