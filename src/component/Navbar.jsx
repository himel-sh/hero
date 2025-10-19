import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-6 mx-4 md:mx-0">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent px-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-3 ">
        <img src={user} alt="" />
        <button className="btn btn-primary md:px-7 rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
