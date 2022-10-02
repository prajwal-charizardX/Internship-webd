import React from 'react'
import Cards from './Cards'
import Header from './Header'

function HomePage(props) {
  return (
    <>
    <Header/>
    <Cards setloader={props.setloader} />
    </>
  )
}

export default HomePage