import React from 'react'
import Cards from './Cards'

import Slider from './Slider/Slider'

import About from './About'
import Exp from './Exp'

function HomePage(props) {
  
  return (
    <>
 
    <Slider/>
     <Exp/>

    <About/>
    {/* <Cards setloader={props.setloader} /> */}
  
    
   
    
    
    </>
  )
}

export default HomePage