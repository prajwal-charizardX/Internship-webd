import React from "react";
import Cards from "./Cards";
<<<<<<< HEAD
import Slider from './Slider/Slider'
import About from './About'
import Exp from './Exp'
import Leading from './leading-cons/Leading'
import Special from './Special'

=======

import Slider from "./Slider/Slider";
>>>>>>> 8421eeae877b1c7dee49674b5951f5cd048e153b

import About from "./About";
import Exp from "./Exp";
import Leading from "./leading-cons/Leading";
import Special from "./Special";

function HomePage(props) {
  return (
    <>
      <Slider />
      <Exp />
      <Leading />
      <About />
      <Cards setloader={props.setloader} />
<<<<<<< HEAD

     
  
     <Special/>
     
   
 
   
   


    {/* <Cards setloader={props.setloader} /> */}
  
    
   
    
    
=======
      <Special />
>>>>>>> 8421eeae877b1c7dee49674b5951f5cd048e153b
    </>
  );
}

export default HomePage;
