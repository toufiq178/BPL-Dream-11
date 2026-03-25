import React from "react";
import cricketLogo from "../../../assets/logo.png";
import dollarImg from "../../../assets/dollar_1.png"

const Navbar = ({coins}) => {
  return (
    <div className="navbar bg-base-100   container mx-auto">
      <div className="navbar-start">
        <img className="w-12 h-12" src={cricketLogo} alt="" />
      </div>
      <div className="navbar-end flex">
        <ul className="menu menu-horizontal px-1 hidden lg:flex  gap-4">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
        <div className="">
          <div className="btn flex justify-between items-center gap-2 text-xl font-bold"> {coins} Coins <img src={dollarImg} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
