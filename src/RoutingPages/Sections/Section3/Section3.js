import React from 'react'
import Paragraphe from '../../../Paragraphes&Images/Paragraphes/Paragraphes'
function Section3() {
  return (
    <div className='
    h-[48rem]
    lg:h-[30rem] relative  
    main:h-[26rem]
    md:h-[30rem]
    '>
      <Paragraphe title={"Who is the coach of the moroccan national team ?"} />
      <div className='lg:w-[100%] grid place-items-center h-[21rem]  relative lg:top-[-2rem]'>

        <div className=' grid grid-rows-1 lg:grid-cols-2 main:grid-cols-2  place-items-center
      main:w-[73%]
      lg:w-[70%]
      '>
          <img src="15.png" alt="" className='m-[1em]
       md:relative 
        w-[15rem] h-[15rem] 
       lg:mt-[3.9rem] main:h-[22rem] main:w-[21rem]  lg:w-[15rem] lg:h-[23rem]' />
          <div className='lg:w-[30rem] lg:mt-[3rem]  main:relative main:right-9 main:w-[30rem] '>
            <Paragraphe Text={"WALID REGRAGUI born 23 September 1975) is a Moroccan football manager and a retired professional footballer who played as a defender. He is the head coach of the Morocco national football team.Born in France. Clubs he played for include Toulouse, AC Ajaccio, Grenoble and Racing Santander."} />
            <Paragraphe Text={"He has been widely praised for his leadership of the Morocco team following their 2022 FIFA World Cup quarterfinal win against Portugal, in which Morocco became the first African team to reach a World Cup semi-final."} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
// top-[-9rem] mt-16 md:mt-[-11rem] lg:top-[23rem] 