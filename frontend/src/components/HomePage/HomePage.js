import React from "react";
import Cards from "./Cards";

import Slider from './Slider/Slider'

import About from './About'
import Exp from './Exp'
import Leading from './leading-cons/Leading'
import Special from './Special'



function HomePage(props) {
  return (
    <>
      <Slider />
      <Leading />

      <Exp />

      <About />
      <Cards setloader={props.setloader} />

     
  
     <Exp/>

     <About/>
     <Cards setloader={props.setloader} />
     <Special/>
     
   
 
   
   


    {/* <Cards setloader={props.setloader} /> */}
  
    
   
    
    
    </>
  );
}

export default HomePage;
