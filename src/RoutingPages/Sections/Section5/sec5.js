import React from 'react'
import Paragraphe from '../../../Paragraphes&Images/Paragraphes/Paragraphes'
function sec5() {
  return (
    <div className=' 
    w-[100%]
    flex gap-[1.5rem] flex-col
 lg:h-[70rem]
main:h-[60rem]
    '>
      <div className=''>
        <Paragraphe title={"The Road of Morroco's National Team to The semi-final "}
          Text={"Earlier in the tournament, Morocco made history following their shock 1-0 defeat of European giants Portugal to become the first African nation to reach the semi-final of the World Cup.The Atlas Lions reached the quarter-finals after claiming the scalp of Spain on Tuesday (6 December) in a dramatic penalty shootout during the round of 16.Spanish-born Achraf Hakimi sealed the historic 3-0 win on penalties, after Spain missed all three of its penalties, following a 0-0 tie over 120 intense minutes.Their road to a surprising, first-ever World Cup semi-final appearance started on 23 November with a 0-0 draw against Croatia in Group F. They followed it up with two-straight wins to advance as the group winner.Against Belgium on 27 November, Romain Saïss and Zakaria Aboukhlal gave the Atlas Lions a convincing 2-0 wins. Four days later, they bested Canada 2-1."} />
      </div>

      <div className='lg:w-[100%] 
      grid place-items-center lg:h-[21rem]  
     
    '>
        <div className=" grid grid-rows-1 lg:grid-cols-3 main:grid-cols-3  bg-slate-600 place-items-center
       lg:w-[75%] gap-y-[1rem] gap-x-[0.5rem] md:grid-cols-2

       ">

          <img src="croatia.png" alt="" className='w-[15rem] h-[18rem] lg:w-[16em] lg:h-[20em] hover:opacity-90' />
          <img src="belgium.png" alt="" className='w-[15rem] h-[18rem] lg:w-[16em] lg:h-[20em] hover:opacity-90' />

          <img src="canada.png" alt="" className='w-[15rem] h-[18rem] lg:w-[16em] lg:h-[20em] hover:opacity-90' />
          <img src="spain.png" alt="" className='w-[15rem] h-[18rem] lg:w-[16em] lg:h-[20em] hover:opacity-90' />

          <img src="portgail.png" alt="" className='w-[15rem] h-[18rem] lg:w-[16em] lg:h-[20em] hover:opacity-90' />
          <img src="france.png" alt="" className='w-[15rem] h-[18rem] lg:w-[16em] lg:h-[20em] hover:opacity-90' />
        </div>

      </div>
    </div>
  )
}

export default sec5
// top-[7rem] lg:top-[100rem]  main:mt-[3rem] md:relative md:top-[-7rem]
// para relative lg:top-[8rem]
//  mt-[3rem]