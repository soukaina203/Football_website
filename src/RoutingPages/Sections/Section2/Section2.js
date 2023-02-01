import React from 'react'
import Paragraphe from '../../../Paragraphes&Images/Paragraphes/Paragraphes'
function Section2() {
  return (
    <div className='flex flex-col relative w-[100%] h-[62rem] text-white
    md:h-[39rem]
    main:h-[40rem]
    lg:h-[46rem]
    '>
      <div className='lg:mt-[3rem] main:mt-[0rem] '>
        <Paragraphe title={"The Participations of the Moroccan national team in the world cups"}
         Text={"Morroco has qualified for the final stages of the FIFA World Cup on six occasions, which were in 1970,1986,1994,1998,2018 and 2022. Their best performances were in 1986 and 2022, where they reached the round of 16."} />
        <br />
        <Paragraphe title={"Morocco in Qatar world cup 2022"} Text={""} />
      </div>
      <br className='hidden lg:flex' />

      <div className='lg:w-[100%] 
      grid place-items-center h-[21rem]
      
      '>
        <br  className='md:hidden'/>
      <div className=' 
      grid grid-rows-1 lg:grid-cols-2 main:grid-cols-2  place-items-center 
      main:w-[55%]
      lg:w-[75%]
       md:grid-cols-2
     '>
        <img src="4.png" alt="" className='w-3/4 lg:w-[17rem] lg:h-[20rem] md:h-[20rem] main:w-[20rem] md:w-[16rem] ' />
        <br className='md:hidden'/>
        <img src="1.png" alt="" className='w-3/4  lg:w-[17rem] lg:h-[20rem]  md:h-[20rem] main:w-[20rem]   md:w-[16rem] ' />
      </div>


      <div className=' mt-[1rem] lg:mt-[2rem] '>
        <Paragraphe Text={"the Moroccan national team  did a really incredible performance in qatar world cup he progressed into the FIFA World Cup Round of 16 after its 2-1 win against Canada in a Group F fixture on Thursday at the AL Thumama stadium. This is the first time that Morocco has qualified to the knockouts since the 1986 World Cup, where it lost to West Germany in the Round of 16."} />
      </div>
    </div>
    </div>
  )
}

export default Section2
// md:mt-[-4rem]
// lg:top-[16rem]
// main:mt-[8rem]
// mt-[-8rem]