import React from 'react'
import Navlogo from '../assets/Ecommerce Interior Landing.png';
import { MdAccountBox } from "react-icons/md";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
        <>
            <div className='w-full h-[5rem] bg-slate-20 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm'>
                  <img src={Navlogo} alt="Brand logo" />  
                  <div className='flex gap-8'>
                        <a href="#">Home</a>
                        <a href="#">Shop</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>

                  </div>
                  <div className='flex gap-7 text-2xl'>
                    <MdAccountBox />
                    <IoSearchCircleSharp />
                    <FaRegHeart />
                    <FaCartShopping />
                  </div>
            </div>
        </>
  )
}

export default Navbar