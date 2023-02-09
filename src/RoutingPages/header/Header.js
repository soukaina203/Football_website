
import React, { useState } from "react";
import {  GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import {Link } from 'react-router-dom'
function Header() {
  
  const [isClicked, setClicked] = useState({ menu: true, exit: false });
  let handleClick = () => {
    if (isClicked.menu) {
      setClicked({ menu: false, exit: true });
    } else {
      setClicked({ menu: true, exit: false });
    }
  };
  return (
    <div
      className="h-20 z-50 bg-header-hero
        lg:w-[100%]  lg:h-16  text-white  
        "
    >
      <div>
      <img src="0.png" alt="" className='w-[114px]  h-[100px] z-40' />
     
      
        <button
          className="text-2xl absolute right-5 top-6 z-40"
          onClick={() => {
            handleClick();
          }}
        >
          {isClicked.menu ? (
            <GiHamburgerMenu className="lg:hidden" />
          ) : (
            <MdOutlineClose className="lg:hidden " />
          )}
        </button>
        {isClicked.menu ? (
          " "
        ) : (
          <div className="lg:hidden flex flex-col justify-center w-[100%]
           h-[100vh]  duration-150 md:w-[45%] bg-header-hero z-30 absolute right-0 bg-black top-0  ">
        
            <ul className="flex flex-col lg:gap-16 ml-6 gap-8 bg-header-hero w-[90%]  h-[25rem] mt-[0rem] font-semibold   ">
            <Link to="/" className='hover:text-bg-darkRed duration-500'>HOME </Link>
          <Link to="/about" className='hover:text-bg-darkRed duration-500'>ABOUT</Link>
          <Link to="/contact" className='hover:text-bg-darkRed  duration-500'>CONTACT</Link>
            </ul>

          </div>
        )}

<div className="hidden md:hidden  lg:flex relative top-[-5rem] justify-center w-[100%] h-28
         items-center font-semibold lg:ml-[9rem] lg:text-[17px]"> 
          <ul className="flex flex-row gap-[7rem]  mt-[-3rem] lg:mr-[18rem] ">

     <li><Link to="/">HOME</Link> </li>     
     <li><Link to="/about">ABOUT</Link> </li>     
     <li><Link to="/contact">CONTACT</Link> </li>     


          
          </ul>
        
     
        </div>

      </div>
    </div>
  );
}

export default Header;
