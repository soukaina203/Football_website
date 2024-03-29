import React from 'react';
import Paragraphe from '../../../Paragraphes&Images/Paragraphes/Paragraphes'
export default function Section4() {
  return (
    <div className=' lg:h-[103rem] 
    main:h-[82rem] 
    md:h-[128rem]
    '>
      <div className=''>
        <Paragraphe title={"The great players in the Moroccan National Team"} />
      </div>
      <div className='lg:w-[100%] 
      grid place-items-center lg:h-[21rem]  
    
      mt-[2rem]
      '>

      <div className='
      grid grid-cols-1 lg:grid-cols-5 main:grid-cols-5  place-items-center
       lg:w-[81%] gap-[0.5rem]
       md:grid-cols-2
      '>
       
        <img src="saiss.jpeg" alt="" className='w-[15rem] h-[18rem]  lg:w-[20rem] lg:h-[20rem] hover:opacity-90'/>
        <img src="hakimi.jpeg" alt="" className='w-[15rem] h-[18rem]  lg:w-[20rem] lg:h-[20rem] hover:opacity-90'/>
        <img src="bono.jpeg" alt="" className='w-[15rem] h-[18rem]  lg:w-[20rem] lg:h-[20rem] hover:opacity-90'/>
        <img src="ziach.jpeg" alt="" className='w-[15rem] h-[18rem] lg:w-[20rem] lg:h-[20rem] hover:opacity-90'/>
        <img src="nsiri.jpeg" alt="" className='w-[15rem] h-[18rem] lg:w-[20rem] lg:h-[20rem] hover:opacity-90'/>
      </div>
      
      <div className='mt-[1rem] mb-4 '>
        <Paragraphe   title={"Romain Saïss"} Text={"Romain Saïss is a professional footballer born to a French-Moroccan father and a French mother. He currently plays for the English club, Wolverhampton Wanderers, as well as for Morocco’s national team as a defender. He played for three French teams before moving to the UK, and made his international debut for Morocco alongside Medhi Benatia; the two are considered the strongest players."} />
        <br />
        <Paragraphe title={"Achraf Hakimi"} Text={"Achraf Hakimi has made headlines for playing in the match that won the Champions League for Real Madrid. Born in Madrid in 1998 to Moroccan parents, Achraf entered the Real Madrid youth setup in 2006, where he was quickly noticed for being strong, fast and skilled. It was only last Fall that he made his first team debut in the main squad, playing La Liga. Achraf chose to play for the Moroccan national team because he feels Moroccan at heart."} />
        <br />

        <Paragraphe title={"Yassine Bounou"} Text={"Yassine Bounou, also known as Bono, is a professional Moroccan football player who was born in Canada. Having moved back to Morocco at an early age, he joined Wydad Casablanca in 2011. In 2012, he moved to Spain, where he played for Atlético de Madrid’s Segunda División and later joined the Girona FC for a two-year deal, where he currently plays. Bounou had the choice to represent either Canada or Morocco on an international level, but he chose Morocco because that’s where he considers he is really from."} />
        <br />

     <Paragraphe title={"Hakim Ziyech"} Text={"Hakim Ziyech is a 29-year-old Dutch-Moroccan football player who has been playing for the Ajax Amsterdam team since 2016. Ziyech had a tough start in life, with eight brothers and sisters supported by only their mother, who was unemployed. Although he has been through a rough path, he kept fighting for his dream of one day becoming a professional football player. Ziyech had the choice between playing for the Dutch or the Moroccan team at the 2018 World Cup, but chose the latter due to his origins."} />
        <br />

        <Paragraphe title={"Youssef En-Nesyri "} Text={"Youssef En-Nesyri born 1 June 1997 is a Moroccan professional footballer who plays as a striker for Spanish La Liga club Sevilla and the Morocco national team.En-Nesyri has spent his entire professional footballing career in Spain, representing Málaga, Leganés and Sevilla. He has made over 150 La Liga appearances and scored over 40 goals.He made his international debut in 2016 aged 18, after previously being capped by the nation’s youth teams at under-20 and under-23 levels."} />
      </div>
    </div>
    </div>
  )
}