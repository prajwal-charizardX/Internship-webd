import React from 'react'
import Cards from './Cards'
import Header from './Header'
import Slider from './Slider/Slider'
import Footer from './Footer'
import About from './About'

function HomePage(props) {
  return (
    <>
    <Header/>
    <Slider/>
   
    <About/>
    {/* <Cards setloader={props.setloader} /> */}
    <Footer/>
    </>
  )
}

export default HomePage