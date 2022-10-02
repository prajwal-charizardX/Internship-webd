import React from 'react'
import Cards from './Cards'
import Header from './Header'
import Footer from './Footer'

function HomePage(props) {
  return (
    <>
    <Header/>
    <Cards setloader={props.setloader} />
  
    <Footer/>
    </>
  )
}

export default HomePage