import React from 'react'
function About() {
  return (
    <div className='
    lg:w-[100%] 
      grid place-items-center 
      mt-[2rem] 
     h-[100vh]
    '>

    <div className=' grid   grid-cols-1 lg:grid-cols-2  
 flex-wrap relative  w-[92%]
 lg:h-[50vh] h-[100vh] md:place-items-center md:mt-[-20rem] 
    '>
        <img src="14.png" alt="" className='hidden lg:flex' />
        <div  className=' w-[83%] h-[19rem] flex flex-col mt-1 ml-[8%]
      lg:font-normal md:w-[53%] lg:w-[60%] md:text-[28px] lg:ml-[-49%]'>
        <h1 className='mt-8 font-bold 
        lg:text-2xl lg:font-bold  lg:mt-[12%] '>The Author of this website</h1>
        <p>
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