import React from 'react'
function Contact() {
  return (
    <div className=''>
      <div className='flex justify-center flex-col items-center gap-5 h-[100vh] relative top-[-10rem]'>
        <h1 className=' font-semibold lg:font-semibold lg:text-[30px] lg:absolute lg:top-[15rem] md:text-[28px] md:font-semibold'> We'd Love To Hear From You
        </h1>
        <br className='hidden lg:flex'/>
        <div className='flex flex-row gap-5 md:text-[19px] md:p-[10px] '>
          <button className=' lg:p-[16px] text-[12px] p-[10px] bg-index-color5 md:text-[21px] font-semibold text-white lg:font-bold '> <a href="https://www.instagram.com/soukaina9mourabit/?hl=fr" target="_blank"> Our Instagram </a></button>
          <button className='lg:p-[16px] text-[12px] p-[10px] bg-index-color5 md:text-[21px] font-semibold text-white flg:ont-bold '><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"> Our Email </a></button>
        </div>
      </div>
    </div>
  )
}
export default Contact