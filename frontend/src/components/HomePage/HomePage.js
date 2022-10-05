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
import { Scrollbars } from "react-custom-scrollbars-2";
import About from "./About";
import Exp from "./Exp";
import Leading from "./leading-cons/Leading";
>>>>>>> 9a54d08dd9ef6108e37c9ee4eb630a9537d94640
function HomePage(props) {
  return (
    <>
      <Slider />
      <Leading />

      <Exp />

      <About />
      <Cards setloader={props.setloader} />

     
<<<<<<< HEAD
  
     <Exp/>

     <About/>
     <Cards setloader={props.setloader} />
     <Special/>
     
   
 
   
   


    {/* <Cards setloader={props.setloader} /> */}
  
    
   
    
    
=======
>>>>>>> 9a54d08dd9ef6108e37c9ee4eb630a9537d94640
    </>
  );
}

export default HomePage;
