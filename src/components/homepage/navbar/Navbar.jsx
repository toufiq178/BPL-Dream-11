import React from "react";
import cricketLogo from "../../../assets/logo.png";
import dollarImg from "../../../assets/dollar_1.png"

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 shadow-sm px-10">
      <div class="navbar-start">
        <img className="w-12 h-12" src={cricketLogo} alt="" />
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal px-1 flex gap-4">
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
        <div class="">
          <div class="btn flex justify-between items-center gap-2 text-xl font-bold"> 0 Coin <img src={dollarImg} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
