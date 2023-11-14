import React from 'react'
function About() {
  return (
    <div id='ABOUT' className='w-[100%] h-screen  flex justify-center items-center md:items-start '>

    <div className=' w-[100%] h-[28rem] flex flex-col md:flex-row md:gap-3 md:items-center lg:justify-center'>

        <img src="14.png" alt="" className='ml-auto mr-auto md:ml-0 md:mr-0  md:w-[17rem] md:h-[17rem] lg:w-[20rem] lg:h-[19rem]' />

        <div  className='text-center  lg:w-[22rem]'>
        <h1 className='font-bold lg:text-2xl lg:font-bold'>The Author of this website</h1>
        <p className='mt-3' >
        I am Soukaina Mourabit
        a student in digital development that starts her journey in web from scratch
        and this is the first website that i deployed done by using React & Tailwind.
        </p>
        </div>
      
    </div>
     
    </div>
  )
}
export default About