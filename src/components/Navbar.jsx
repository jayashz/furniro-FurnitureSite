import React from "react";
import Navlogo from "../assets/Ecommerce Interior Landing.png";
import { MdAccountBox } from "react-icons/md";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[5rem] bg-slate-20 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm">
        <img src={Navlogo} alt="Brand logo" />
        <div className="flex gap-8">
          <NavLink
            className={({ isActive }) =>
              isActive ? " text-[#B88E2F]" : "text-black"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? " text-[#B88E2F]" : "text-black"
            }
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? " text-[#B88E2F]" : "text-black"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? " text-[#B88E2F]" : "text-black"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="flex gap-7 text-2xl">
          <MdAccountBox />
          <IoSearchCircleSharp />
          <FaRegHeart />
          <NavLink  className={({ isActive }) =>
              isActive ? " text-[#B88E2F]" : "text-black"
            }
            to="/cart">
          <FaCartShopping />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
