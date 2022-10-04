import React from 'react'
import Cards from './Cards'

import Slider from './Slider/Slider'
import Header from './Header'
import About from './About'
import Exp from './Exp'

function HomePage(props) {
  
  return (
    <>
  
    {/* <Cards setloader={props.setloader} /> */}
     <Exp></Exp>

     <About/>
 
    <Slider/>
   


    {/* <Cards setloader={props.setloader} /> */}
  
    
   
    
    
    </>
  )
}

export default HomePage