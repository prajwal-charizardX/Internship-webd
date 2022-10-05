import React from 'react'
import Cards from './Cards'

import Slider from './Slider/Slider'

import About from './About'
import Exp from './Exp'
import Leading from './leading-cons/Leading'
function HomePage(props) {
  
  return (
    <>
     <Slider/>
     <Leading/>
     
  
     <Exp/>

     <About/>
     <Cards setloader={props.setloader} />
     
   
 
   
   


    {/* <Cards setloader={props.setloader} /> */}
  
    
   
    
    
    </>
  )
}

export default HomePage