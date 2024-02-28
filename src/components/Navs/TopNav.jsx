import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <section className="bg-[#3c3c3c] top-0 h-[54px]">
      <nav className="flex justify-between" style={{ direction: "rtl" }}>
        <ul className="flex flex-row-reverse gap-6 p-2 mr-3">
          <li className="text-white hover:border-orange-500 hover:text-orange-500 transition duration-500 ease-linear rounded-md border p-1">
            <NavLink to="/archieve" activeStyle={{ color: "lime" }}>
              <span> Courses </span>
            </NavLink>
          </li>
          <li className="text-white hover:border-orange-500 hover:text-orange-500 transition duration-500 ease-linear rounded-md border p-1">
            <a href="#">
              <span> About </span>
            </a>
          </li>
          <li className="text-white hover:border-orange-500 hover:text-orange-500 transition duration-500 ease-linear rounded-md border p-1">
            <NavLink to="/" activeStyle={{ color: "lime" }} exact>
              <span> Home </span>
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-1 p-2 ml-3">
          <span className="bg-orange-500 hover:text-white transition duration-500 ease-linear rounded-md p-1">
            <NavLink to="/login" activeStyle={{ color: "lime" }}>
              Login
            </NavLink>
          </span>
          <span className="bg-orange-500 hover:text-white transition duration-500 ease-linear rounded-md p-1">
            <NavLink to="/register" activeStyle={{ color: "lime" }}>
              Sign up
            </NavLink>
          </span>
        </div>
      </nav>
    </section>
  );
};

export default TopNav;
