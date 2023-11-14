import React from 'react'
function Contact() {
  return (
    <div  className='w-[100%] h-screen  flex justify-center items-center md:items-start md:mt-[5rem] '>
    <div className=' w-[100%] h-[15rem] flex flex-col md:items-center md:justify-center lg:justify-center'>
        <h1 className='text-xl font-semibold text-center lg:text-4xl'> We'd Love To Hear From You
        </h1>
        <br className='hidden lg:flex '/>
        <div className='flex flex-row gap-5 md:text-[19px] ml-auto mr-auto mt-[1rem] lg:mt-[1.5rem]'>
          <button className=' lg:p-[16px] text-[17px] p-[15px] bg-index-color5 md:text-[21px] font-semibold text-white lg:font-bold '> <a  rel="noreferrer" href="https://www.instagram.com/soukaina9mourabit/?hl=fr" target="_blank"> Our Instagram </a></button>
          <button className='lg:p-[16px] text-[17px] p-[15px] bg-index-color5 md:text-[21px] font-semibold text-white flg:ont-bold '><a  rel="noreferrer" href="https://mail.google.com/mail/u/0/#inbox" target="_blank"> Our Email </a></button>
        </div>
        </div>
           </div>
  )
}
export default Contact