import React from 'react'
import Cards from './Cards'
import Header from './Header'
import Slider from './Slider/Slider'
import Footer from './Footer'
import About from './About'
import Exp from './Exp'

function HomePage(props) {
  return (
    <>
    <Header/>
    {/* <Cards setloader={props.setloader} /> */}
     <Exp></Exp>
    <About></About>
  
    <Slider/>
   
    
    {/* <Cards setloader={props.setloader} /> */}
    <Footer/>
    </>
  )
}

export default HomePage