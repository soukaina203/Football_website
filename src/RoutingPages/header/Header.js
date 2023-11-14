
import React, { useState } from "react";
import {  GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import {Link } from 'react-router-dom'
function Header() {
  
 
  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow ">
      <div className="container flex items-center justify-between m-auto text-white bg-header-hero">

        <img src="0.png" alt="" className="flex gap-2  w-[90px]  h-[90px]  z-40 text-xl font-bold cursor-pointer md:ml-0 flew-r"/>
        <ul className="items-center hidden pr-10 text-base font-normal cursor-pointer lg:flex">
          <li className="px-6 py-4 duration-500 hover:text-header-red hover:pointer-auto" > <Link to="/" smooth={true} offset={200}>  Home </Link> </li>
          <li className="px-6 py-4 duration-500 hover:text-header-red" > <Link to="/about" smooth={true} offset={200} duration={500}>  About </Link> </li>
          <li className="px-6 py-4 duration-500 hover:text-header-red" > <Link to="/contact" >  Contact </Link> </li>
        </ul>
        <button className="hidden px-6 py-4 pr-10 text-base font-normal duration-500 cursor-pointer lg:block hover:text-header-red">
          Welcome
        </button>

        {/* phone & tablet */}
        <button className=" lg:hidden group">
          <GiHamburgerMenu className="mr-5 text-2xl" />



          <div className="absolute top-0 w-8/12 h-screen ml-auto mr-auto text-white transition-all duration-500 opacity-0 bg-home-cl1 bg-header-hero md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
            <ul className="flex flex-col items-center justify-center pr-10 mt-12 text-base font-semibold cursor-pointer ">
              <li className="w-full px-6 py-4 duration-500 ">
                <Link to="/" smooth={true} offset={200} duration={500}>
                  Home
                </Link>
              </li>
              <li className="w-full px-6 py-4 ml-auto mr-auto duration-500">
                <Link to="/about" smooth={true} offset={200} duration={500}>
                  About
                </Link>
              </li>
              <li className="w-full px-6 py-4 duration-500">
                <Link to="/contact" smooth={true} offset={200} duration={500}>
                  Contact
                </Link>
              </li>
             
            </ul>
          </div>
         

        </button>

      </div>
    </nav>

  );
}

export default Header;
