import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-around items-center py-6 bg-slate-200">
      <div>
        <Link to="/" className="flex flex-wrap">
          <span className="text-[20px] sm:text-3xl text-slate-400 font-bold">
            Digital
          </span>
          <span className="text-[20px] sm:text-3xl text-slate-500 font-bold">
            World
          </span>
        </Link>
      </div>
      <form className="flex items-center justify-between bg-slate-100 p-1 rounded-md w-[220px] sm:w-[400px] sm:p-3">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none"
        ></input>
        <FaSearch />
      </form>
      <nav className="flex gap-5 text-[16px] sm:text-[18px]">
        <Link to="/">
          <span className="font-bold hidden sm:inline text-slate-700 hover:underline cursor-pointer">
            Home
          </span>
        </Link>
        <Link to="about">
          {" "}
          <span className="font-bold hidden sm:inline text-slate-700 hover:underline cursor-pointer">
            About
          </span>
        </Link>
        <Link to="/signin">
          <span className="text-center text-slate-700 hover:underline cursor-pointer">
            Sign in
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
