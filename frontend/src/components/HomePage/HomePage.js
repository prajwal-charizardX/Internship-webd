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
<<<<<<< HEAD
    <Cards setloader={props.setloader} />
     <Exp></Exp>
    <About></About>
    <Footer></Footer>
=======
    <Slider/>
   
    <About/>
    {/* <Cards setloader={props.setloader} /> */}
    <Footer/>
>>>>>>> c3bc1b3107de18de657173033002c2cacde762f6
    </>
  )
}

export default HomePage