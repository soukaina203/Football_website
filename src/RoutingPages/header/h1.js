import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
export default function Header() {
  const [isClicked, setClicked] = useState({ menu: true, exit: false })
  let handleClick = () => {
    if (isClicked.menu) {
      setClicked({ menu: false, exit: true })
    }
    else {
      setClicked({ menu: true, exit: false })
    }
  }
  return (
    <div className='grid grid-cols-2 h-[83px]  z-40 

    '>
      <img src="0.png" alt="" className='w-[114px]  h-[100px] z-40' />

      <button className=' text-2xl absolute right-4 top-5 md:right-5 lg:hidden md:top-5 z-40' onClick={() => {
        handleClick()
      }}>
        {isClicked.menu ? <GiHamburgerMenu className='lg:hidden ' /> : <MdOutlineClose className='lg:hidden ' />}
      </button>
      {isClicked.menu ? " " : <div className='flex flex-col bg-home-cl2 mt-[-1rem] h-[35rem]  text-xl 
      w-screen 
       md:w-screen
       lg:hidden
       z-30 
        '>
        <ul className=' flex flex-col  gap-4 font-medium bg-home-cl2   ml-[50px] duration-500 text-[20px] text-white opacity-1
          p-10 w-[70%] relative top-[4.25rem] 
         md:mt-[1rem] md:duration-500 
        lg:w-[100%] lg:flex lg:justify-center lg:items-center


        '>
          <Link to="/" className='hover:text-bg-darkRed duration-500 ml-[-31px]'>HOME </Link>
          <Link to="/about" className='hover:text-bg-darkRed duration-500 ml-[-31px]'>ABOUT</Link>
          <Link to="/contact" className='hover:text-white duration-500 ml-[-31px]'>CONTACT</Link>
        </ul>

      </div>
      }
      <div> 
        <ul className='hidden text-[17px] w-[35rem] bg-red-600 md:hidden lg:flex  gap-[10rem] text-2xl font-semibold relative top-5 left-[33rem] text-white
        lg:left-[-14rem]
        main:ml-[-18rem]
        '>
          <Link to="/" className='hover:text-bg-darkRed duration-500'>HOME </Link>
          <Link to="/about" className='hover:text-bg-darkRed duration-500'>ABOUT</Link>
          <Link to="/contact" className='hover:text-black duration-500'>CONTACT</Link>
        </ul>
      </div>


    </div>

  )
}