import React from 'react'
import Cards from './Cards'
import Header from './Header'
import Slider from './Slider/Slider'

function HomePage(props) {
  return (
    <>
    <Header/>
    <Slider/>
    <Cards setloader={props.setloader} />
    </>
  )
}

export default HomePage