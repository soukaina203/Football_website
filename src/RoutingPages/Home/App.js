import React, { Component } from 'react';
import Section1 from '../Sections/Section1/Section1'
import Section2 from '../Sections/Section2/Section2'
import Section3 from '../Sections/Section3/Section3'
import Section4 from '../Sections/Section4/sec4'
import Section5 from '../Sections/Section5/sec5';
import Section6 from '../Sections/section6/section6';
class Home extends Component {
  render() {
    return (

    <div id='HOME' className="  flex flex-col md:gap-5  lg:gap-[15px] mt-[4.5rem]
       lg:h-[320rem] main:h-[270rem] bg-gradient-to-br from-bg-home-cl1 via-bg-home-cl3  via-bg-home-cl4 via-bg-home-cl5 to-bg-home-cl6  
       ">
        <Section1 />
        <div className='lg:ml-[6rem]  lg:mr-[6rem]'>

        <Section2 />
        <Section3 />  
        <Section4 />  
        <Section5 />
        <Section6 />
        </div>

      </div>
    );
  }
};
export default Home;
